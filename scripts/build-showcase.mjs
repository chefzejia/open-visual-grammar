#!/usr/bin/env node

import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const patternsRoot = path.join(repoRoot, 'patterns');
const outputPath = path.join(repoRoot, 'showcase-data.js');
const checkOnly = process.argv.includes('--check');

const statusOrder = new Map([
  ['canonical', 0],
  ['candidate', 1],
  ['seed', 2],
]);

function cleanScalar(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function readScalar(block, key) {
  const match = block.match(new RegExp('^' + key + ':\\s*(.+)$', 'm'));
  return match ? cleanScalar(match[1]) : '';
}

function readList(block, key) {
  const lines = block.split('\n');
  const start = lines.findIndex((line) => line === key + ':');
  if (start === -1) return [];

  const values = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    const match = lines[index].match(/^\s{2}-\s+(.+)$/);
    if (!match) break;
    values.push(cleanScalar(match[1]));
  }
  return values;
}

function readName(markdown, label) {
  const match = markdown.match(new RegExp('^' + label + '[：:]\\s*(.+)$', 'm'));
  return match ? match[1].trim() : '';
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function humanizeSlug(value) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function collectWebpFiles(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await collectWebpFiles(absolutePath)));
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.webp')) {
        files.push(absolutePath);
      }
    }

    return files;
  } catch (error) {
    if (error && error.code === 'ENOENT') return [];
    throw error;
  }
}

function readWebpSize(buffer, filePath) {
  if (
    buffer.length < 20 ||
    buffer.toString('ascii', 0, 4) !== 'RIFF' ||
    buffer.toString('ascii', 8, 12) !== 'WEBP'
  ) {
    throw new Error('Invalid WebP: ' + filePath);
  }

  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const type = buffer.toString('ascii', offset, offset + 4);
    const length = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;

    if (type === 'VP8X' && dataOffset + 10 <= buffer.length) {
      return {
        width:
          1 +
          buffer[dataOffset + 4] +
          (buffer[dataOffset + 5] << 8) +
          (buffer[dataOffset + 6] << 16),
        height:
          1 +
          buffer[dataOffset + 7] +
          (buffer[dataOffset + 8] << 8) +
          (buffer[dataOffset + 9] << 16),
      };
    }

    if (
      type === 'VP8L' &&
      dataOffset + 5 <= buffer.length &&
      buffer[dataOffset] === 0x2f
    ) {
      const bits = buffer.readUInt32LE(dataOffset + 1);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
      };
    }

    if (type === 'VP8 ' && dataOffset + length <= buffer.length) {
      for (let index = dataOffset; index + 7 < dataOffset + length; index += 1) {
        if (
          buffer[index] === 0x9d &&
          buffer[index + 1] === 0x01 &&
          buffer[index + 2] === 0x2a
        ) {
          return {
            width: buffer.readUInt16LE(index + 3) & 0x3fff,
            height: buffer.readUInt16LE(index + 5) & 0x3fff,
          };
        }
      }
    }

    offset = dataOffset + length + (length % 2);
  }

  throw new Error('Unsupported WebP encoding: ' + filePath);
}

function classifyImage(relativePath) {
  const normalized = '/' + toPosix(relativePath).toLowerCase();
  const basename = path.basename(relativePath, '.webp').toLowerCase();

  if (basename.startsWith('rejected-') || basename === 'rejected') {
    return 'rejected';
  }
  if (basename.startsWith('accepted-') || basename === 'accepted') {
    return 'accepted';
  }
  if (normalized.includes('/refs/')) {
    return 'reference';
  }
  return 'example';
}

function imageLabel(relativePath, kind) {
  const basename = path.basename(relativePath, '.webp');
  if (kind === 'accepted' || kind === 'rejected') {
    return humanizeSlug(path.basename(path.dirname(relativePath)));
  }
  return humanizeSlug(basename);
}

async function readPattern(directoryName) {
  const patternRoot = path.join(patternsRoot, directoryName);
  const patternPath = path.join(patternRoot, 'PATTERN.md');
  const markdown = await readFile(patternPath, 'utf8');
  const fence = String.fromCharCode(96).repeat(3);
  const yamlStart = markdown.indexOf(fence + 'yaml\n');
  const yamlEnd = yamlStart === -1
    ? -1
    : markdown.indexOf('\n' + fence, yamlStart + fence.length + 5);

  if (yamlStart === -1 || yamlEnd === -1) {
    throw new Error('Missing YAML metadata block: ' + patternPath);
  }

  const metadata = markdown.slice(yamlStart + fence.length + 5, yamlEnd);
  const id = readScalar(metadata, 'id');
  if (!id || id !== directoryName) {
    throw new Error(
      'Pattern id must match its directory: ' + patternPath + ' (' + id + ')',
    );
  }

  const webpFiles = [
    ...(await collectWebpFiles(path.join(patternRoot, 'refs'))),
    ...(await collectWebpFiles(path.join(patternRoot, 'examples'))),
  ];

  const images = [];
  for (const absolutePath of webpFiles) {
    const relativePath = toPosix(path.relative(repoRoot, absolutePath));
    const kind = classifyImage(relativePath);
    const buffer = await readFile(absolutePath);
    const dimensions = readWebpSize(buffer, relativePath);
    const fileStat = await stat(absolutePath);

    images.push({
      path: relativePath,
      kind,
      label: imageLabel(relativePath, kind),
      width: dimensions.width,
      height: dimensions.height,
      bytes: fileStat.size,
    });
  }

  const imageOrder = new Map([
    ['accepted', 0],
    ['reference', 1],
    ['example', 2],
    ['rejected', 3],
  ]);
  images.sort((a, b) => {
    const kindDelta = imageOrder.get(a.kind) - imageOrder.get(b.kind);
    return kindDelta || a.path.localeCompare(b.path);
  });

  return {
    id,
    slug: directoryName,
    zhName: readName(markdown, '中文名') || id,
    enName: readName(markdown, 'English name') || humanizeSlug(id),
    status: readScalar(metadata, 'status') || 'unknown',
    artifactKinds: readList(metadata, 'artifact_kinds'),
    runtimes: readList(metadata, 'runtimes'),
    whenToUse: readScalar(metadata, 'when_to_use'),
    avoidWhen: readScalar(metadata, 'avoid_when'),
    patternPath: toPosix(path.relative(repoRoot, patternPath)),
    images,
  };
}

async function buildShowcaseData() {
  const entries = await readdir(patternsRoot, { withFileTypes: true });
  const patterns = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    try {
      await stat(path.join(patternsRoot, entry.name, 'PATTERN.md'));
    } catch (error) {
      if (error && error.code === 'ENOENT') continue;
      throw error;
    }
    patterns.push(await readPattern(entry.name));
  }

  patterns.sort((a, b) => {
    const statusDelta =
      (statusOrder.get(a.status) ?? 99) - (statusOrder.get(b.status) ?? 99);
    return statusDelta || a.id.localeCompare(b.id);
  });

  return {
    schemaVersion: 1,
    source: 'patterns/*/PATTERN.md + patterns/*/{refs,examples}/**/*.webp',
    patterns,
  };
}

const data = await buildShowcaseData();
const imageCount = data.patterns.reduce(
  (sum, pattern) => sum + pattern.images.length,
  0,
);
const output =
  'window.OVG_SHOWCASE = ' + JSON.stringify(data, null, 2) + ';\n';

let current = '';
try {
  current = await readFile(outputPath, 'utf8');
} catch (error) {
  if (!error || error.code !== 'ENOENT') throw error;
}

if (checkOnly) {
  if (current !== output) {
    console.error(
      'showcase-data.js is stale. Run: node scripts/build-showcase.mjs',
    );
    process.exit(1);
  }
  console.log(
    'Showcase data is current: ' +
      data.patterns.length +
      ' patterns, ' +
      imageCount +
      ' images.',
  );
} else if (current === output) {
  console.log('showcase-data.js is already current.');
} else {
  await writeFile(outputPath, output, 'utf8');
  console.log(
    'Generated showcase-data.js: ' +
      data.patterns.length +
      ' patterns, ' +
      imageCount +
      ' images.',
  );
}
