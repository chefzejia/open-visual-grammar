import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const atlasPath = path.join(repoRoot, "docs", "youmind-style-atlas.md");
const atlas = fs.readFileSync(atlasPath, "utf8");

const detailLinks = [...atlas.matchAll(/\[detail\]\((https:\/\/youmind\.com\/~skills\/[^)]+)\)/g)].map(
  ([, url]) => url,
);
const expectedDetails = 99;
const duplicateDetails = detailLinks.filter((url, index) => detailLinks.indexOf(url) !== index);
const linkedAdapters = [
  "patterns/whimsical-journal-sketch/adapters/youmind-handdrawn-memory.md",
  "patterns/crayon-portrait-editorial/adapters/youmind-crayon-portrait.md",
  "patterns/minimal-handdrawn-linework/adapters/youmind-editorial-reduction.md",
  "patterns/minimal-handdrawn-linework/adapters/youmind-screenprint-reduction.md",
  "patterns/minimal-handdrawn-linework/adapters/youmind-travel-poster.md",
  "patterns/city-observation-poster/adapters/youmind-city-observation-poster.md",
  "patterns/minimal-handdrawn-linework/adapters/youmind-two-color-overprint.md",
  "patterns/minimal-handdrawn-linework/adapters/youmind-documentary-split.md",
  "patterns/single-accent-ink-editorial/adapters/youmind-single-accent-ink.md",
  "patterns/documentary-gold-split-editorial/adapters/youmind-gold-foil-split.md",
  "patterns/isometric-cutaway-explainer/adapters/youmind-isometric-cutaway.md",
  "patterns/semantic-concept-poster/adapters/youmind-mist-blue-metaphor.md",
  "patterns/semantic-concept-poster/adapters/youmind-emotional-metaphor-editorial.md",
  "patterns/semantic-concept-poster/adapters/youmind-spatial-word-poster.md",
  "patterns/pixel-retro/adapters/youmind-pixel-mask.md",
  "patterns/pixel-retro/adapters/youmind-pastoral-pixel-character.md",
  "patterns/eastern-texture-handdrawn/adapters/youmind-eastern-restraint.md",
  "patterns/frosted-silhouette-editorial/adapters/image-generation.md",
  "patterns/paper-sculpture-collage-editorial/adapters/image-generation.md",
  "patterns/whimsical-journal-sketch/adapters/youmind-naive-doodle.md",
  "patterns/soft-2-5d-icon/adapters/image-generation.md",
  "patterns/soft-2-5d-icon/adapters/youmind-eastern-handdrawn-icon.md",
  "patterns/soft-2-5d-icon/adapters/youmind-animal-mascot.md",
  "patterns/thermal-receipt-poster/adapters/image-generation.md",
  "patterns/narrative-journal-infographic/adapters/youmind-comic-memory-card.md",
  "patterns/narrative-journal-infographic/adapters/youmind-multi-page-handdrawn-explainer.md",
  "patterns/narrative-journal-infographic/adapters/youmind-cognitive-contrast-card.md",
  "patterns/whiteboard-operator-sketch/adapters/youmind-box-operator-sketch.md",
  "patterns/big-character-poster/adapters/youmind-torn-paper-thumbnail.md",
  "patterns/eastern-texture-handdrawn/adapters/youmind-colorful-ink-outline.md",
  "patterns/minimal-handdrawn-linework/adapters/youmind-colored-pencil-sketch.md",
  "patterns/limited-color-print-editorial/adapters/image-generation.md",
  "patterns/limited-color-print-editorial/adapters/deterministic-layout.md",
  "patterns/interwoven-portrait-type-cover/adapters/image-generation.md",
  "patterns/restrained-editorial-slide-system/adapters/deterministic-layout.md",
  "patterns/dual-focal-swirl-linework/adapters/image-generation.md",
  "patterns/fixed-era-editorial-print/adapters/image-generation.md",
  "patterns/graphic-fashion-avatar/adapters/image-generation.md",
  "patterns/monstrous-scale-editorial/adapters/image-generation.md",
  "patterns/nested-blue-collage/adapters/image-generation.md",
  "patterns/portrait-quote-editorial/adapters/image-generation.md",
  "patterns/adaptive-rembrandt-portrait/adapters/image-generation.md",
  "patterns/retro-future-print-editorial/adapters/image-generation.md",
];

const missingAdapters = linkedAdapters.filter((relativePath) =>
  !fs.existsSync(path.join(repoRoot, relativePath)),
);
const containsPreviewCdn = /https:\/\/cdn\.(youmindassets|gooo)\.ai\//.test(atlas);
const requiredSections = [
  "## Intake Note / 入库说明",
  "## Evidence Set / 证据组",
  "## Cluster Map / 聚类路由",
  "## Two-Topic Transfer Probe / 双主题迁移探针",
  "## Fidelity Gate / 保真门",
  "## Routing Disposition Matrix / 路由处置矩阵",
];
const missingSections = requiredSections.filter((section) => !atlas.includes(section));

const failures = [];
if (detailLinks.length < expectedDetails) {
  failures.push(`expected at least ${expectedDetails} YouMind detail links, found ${detailLinks.length}`);
}
if (duplicateDetails.length) {
  failures.push(`duplicate YouMind detail links: ${[...new Set(duplicateDetails)].join(", ")}`);
}
if (missingAdapters.length) {
  failures.push(`missing linked adapters: ${missingAdapters.join(", ")}`);
}
if (containsPreviewCdn) {
  failures.push("atlas contains a CDN preview URL; keep third-party preview assets external");
}
if (missingSections.length) {
  failures.push(`missing required sections: ${missingSections.join(", ")}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`YouMind atlas OK: ${detailLinks.length} detail links, ${linkedAdapters.length} adapters, no preview CDN URLs.`);
}
