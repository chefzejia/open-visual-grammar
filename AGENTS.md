# Open Visual Grammar

OVG is a small monorepo of reusable visual methods. The source of truth is
three workflow Skills plus formal Pattern Packs. A generated prompt is a
temporary compilation result; it is never the durable knowledge source.

## Repository contract

```text
AGENTS.md              operating rules
CATALOG.md             direct agent entry point
skills/*/SKILL.md      create, reverse, and review workflows
patterns/<slug>/       one formal Pattern Pack per directory
patterns-index.json    generated routing index
index.html             optional human-facing showcase
scripts/build-showcase.mjs
```

There is no registry layer, shared grammar directory, runtime directory,
candidate state, eval state, promotion gate, or maturity state. Do not recreate
one under another name.

## Direct loading

1. Read `CATALOG.md`.
2. Use `patterns-index.json` to narrow by `artifact_kinds`, `when_to_use`, and
   `avoid_when`.
3. Read the selected `patterns/<slug>/PATTERN.md` in full.
4. Use the Pattern's direct compilation route and local refs/examples only when
   the task needs them.

Pattern Packs are self-contained. If a rule is reusable, write it into the
Pattern. If a method fails, delete or rewrite that Pattern. Do not park it in a
candidate, eval, intake, or promotion folder.

## Pattern requirements

Every formal Pattern has a bilingual `PATTERN.md` with:

- English and Chinese names plus a YAML metadata block;
- visual definition and invariants;
- composition families and transfer boundaries;
- fit and weak-fit cases;
- material, density, temperature, and text behavior;
- direct compilation route with variables and a model-ready meta-prompt;
- failure modes and a compact fidelity gate.

Pattern slugs and IDs use English kebab-case. Examples and refs are optional.
Only operator-approved, public-safe WebP files belong in `examples/`, and only
lossless WebP calibration assets belong in `refs/`. Do not add filler images.
Keep one-off prompts, rejected images, credentials, private screenshots, and
API diagnostics outside the repository.

## Image-generation rule

The final image is one model-generated artifact. Short text may be described
directly in the prompt. Complex layouts may use a structure guide as an input,
but HTML, SVG, Canvas, and post-generation text overlays are not part of a
Pattern unless the user explicitly asks for deterministic layout output.

When testing a Pattern, make one real request at a time, inspect the saved
image and request summary immediately, and copy only an approved WebP into the
Pattern's `examples/` directory. Prompt logs stay in the consuming work
folder.

## Showcase

`index.html` is a static human view and works from `file://`. It is not an agent
router and OVG does not require a local server. After changing Pattern metadata
or WebP files, run:

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
node --check showcase-data.js
git diff --check
```

Never edit `showcase-data.js` or `patterns-index.json` by hand.
