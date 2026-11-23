# Open Visual Grammar

Open Visual Grammar is a compact monorepo for reusable visual-generation
methods. It stores visual judgment where it is useful: in formal Pattern Packs
that an agent can load directly and apply to a new subject.

OVG is not a prompt dump and it is not a pipeline of intermediate states. A
prompt is compiled for one request and then discarded unless it is part of an
operator-approved Pattern example. A Pattern either works as a reusable method,
or it is rewritten or removed.

## Structure

```text
open-visual-grammar/
├── skills/
│   ├── ovg-create/SKILL.md
│   ├── ovg-style-reverse/SKILL.md
│   └── ovg-review/SKILL.md
├── patterns/
│   └── <slug>/
│       ├── PATTERN.md
│       ├── refs/          optional public-safe WebP references
│       └── examples/      optional approved WebP examples
├── patterns-index.json    generated Pattern metadata index
├── index.html             static human-facing showcase
├── showcase-data.js       generated showcase data
├── CATALOG.md
└── AGENTS.md
```

The former registry, grammar, runtime, docs, decisions, candidate, and eval
layers are intentionally gone. Shared behavior belongs in a Skill only when it
is a workflow rule. Visual behavior belongs in the Pattern that owns it.

## Use OVG

1. Read `AGENTS.md` and `CATALOG.md`.
2. Filter `patterns-index.json` and choose one Pattern.
3. Read that Pattern's `PATTERN.md`.
4. Compile a task-specific prompt from the Pattern's direct route.
5. Generate one image, inspect it, and keep only a result an operator approves.

For exact text or complex layouts, follow the Pattern's own text handling. A
structure guide can guide the image model, but the final bitmap still comes
from one generation pass when the Pattern is an image route.

## Showcase

Open [`index.html`](index.html) directly in a browser. No service is required.
Rebuild after Pattern or WebP changes:

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
node --check showcase-data.js
git diff --check
```

## Formal Pattern rule

Every directory under `patterns/` is formal from its first commit. There is no
candidate, eval, seed, promotion, or maturity state. Stable learning is edited
into `PATTERN.md`; a failed method is deleted or rewritten. One-off prompts and
rejected images remain outside OVG.
