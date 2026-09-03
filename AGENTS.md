# AGENTS.md

Scope: the entire `open-visual-grammar` repository.

## Role

You are working on a public visual-generation method, not an image prompt dump.
Your job is to preserve reusable visual judgment and keep execution details
progressively disclosed.

## Entry point

Start with:

```text
CATALOG.md
```

Then open exactly one registry route. Do not read every pattern by default.

`index.html` is the human-facing showcase. It is not an agent routing source.

## Operating principles

- Visual taste is subjective, but generation needs constraints.
- Name the visual pattern before compiling a prompt.
- A prompt is a compiled artifact, not the source of truth.
- A pattern is defined by reusable visual invariants and transfer boundaries.
- A pattern can recommend use cases, but it is not locked to one channel or scene.
- Registry files own routing. Patterns own visual method. Runtimes own execution
  contracts. Grammar owns shared vocabulary.
- One-off production prompts stay outside the public grammar.
- Keep examples public-safe. Do not include credentials, private screenshots, user data, or internal account details.

## Progressive disclosure

1. Read `CATALOG.md`.
2. Choose one artifact kind and open one `registry/*.md`.
3. Read only the routed `patterns/*/PATTERN.md`, unless the registry explicitly
   allows a no-pattern route for that artifact kind.
4. Read that pattern's named adapter, refs, typography, examples, or
   anti-patterns only when the route or task needs them.
5. Read `grammar/*` only when a selected pattern or route names a specific
   grammar dependency.
6. Read `runtimes/*` only when compiling to that execution surface.
7. Avoid loading reference-heavy folders unless the task requires visual comparison.

## Pattern requirements

Pattern slugs, directory names, and machine-facing IDs use English kebab-case.

Pattern documents are bilingual by default. Keep Chinese and English in the same
`PATTERN.md` so agents load one source of truth and the two languages do not
drift.

Every public pattern must include:

- `PATTERN.md`

Every pattern should include public-safe refs once it has operator-approved
production output. `anti-patterns.md` is optional and belongs only when it
explains a repeated failure mode. Do not create files just to satisfy structure.

Every pattern should define:

- Chinese name and English name;
- metadata block for agent routing;
- invariants;
- transfer boundaries;
- recommended use cases;
- weak-fit cases;
- composition behavior;
- material and texture;
- information density;
- emotional temperature;
- runtime adapter slots;
- failure modes.

Chinese is not an appendix. Treat it as an equal operating language for taste,
audience, and production judgment. English keeps the project accessible to
external tools and contributors; Chinese preserves the visual vocabulary used in
GanFan / SorryCode production.

Examples should live inside the pattern they belong to.

## Pattern lifecycle

Every directory under `patterns/` is a formal Pattern from its first commit.
Iterate it in place when new evidence improves the method; delete the directory
when the method fails. There is no candidate, seed, canonical, promotion, or
evaluation gate in this repository.

## Storage rules

Do not store one-off prompts here.

Pattern-local reference and reviewed-example images use lossless WebP by
default. Preserve their original pixel dimensions. This is a repository
calibration format, not a delivery requirement for consuming projects.

Do not create empty `refs/` or `examples/` folders, and do not generate filler
images to make every pattern look complete. A pattern receives an image only
after an operator has approved a public-safe result and can explain what it
teaches.

Store a generated prompt only when it is part of a reviewed pattern-local
example that explains why it worked or failed. Otherwise, temporary prompts
belong in the consuming project's work folder.

## Showcase

`PATTERN.md` metadata and pattern-local WebP files self-register into the root
showcase. After changing either source, run:

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
```

`showcase-data.js` is a compiled artifact. Do not edit it by hand or add a
parallel showcase manifest.

The canonical delivery surface is the static `index.html` file opened directly
in a browser. OVG does not require a local HTTP server at runtime. A temporary
static server is allowed only when a browser automation surface blocks `file://`
URLs; never make its localhost URL a project dependency or public entry point.
