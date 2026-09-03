# Contributing

This repository accepts visual grammar and validated patterns, not random
prompts.

## Add a pattern

Create:

```text
patterns/<slug>/
├── PATTERN.md
├── refs/              optional after operator-approved output
├── adapters/          optional when a runtime needs special guidance
├── examples/          optional for reviewed learning
└── anti-patterns.md   optional; use it only to explain repeated failures
```

Before opening a pull request, make sure the pattern answers:

- What visual problem does it solve?
- What is stable across examples?
- What references prove the pattern?
- What does it refuse to do?
- Which runtimes can execute it?

Do not add structure just to satisfy a template. A formal Pattern can start
with only `PATTERN.md` when its invariants and transfer boundaries are clear.

## Add an example

Examples should live inside the pattern they belong to:

```text
patterns/<slug>/examples/<example-slug>/
├── score.md
├── critique.md
└── accepted.webp
```

Include:

- the source problem;
- the selected pattern;
- the score;
- the runtime;
- the result;
- critique and follow-up.

Do not add raw prompt attempts without analysis.

## Update the showcase

Every directory with a valid `patterns/<slug>/PATTERN.md` is registered in the
root showcase. Lossless WebP files under `refs/` and `examples/` are discovered
automatically; filenames beginning with `accepted` and `rejected` receive those
labels in the UI.

After adding or changing pattern metadata or WebP files, run:

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
```

Commit the regenerated `showcase-data.js`, but never edit it directly.

## Add a formal Pattern from external evidence

Before importing method-level learning from X, a bookmark folder, a website, or
any private intake workflow, follow:

```text
docs/reference-intake-protocol.md
```

Do not commit raw collections. Import only public-safe learning that directly
defines or improves a Pattern, example, anti-pattern, grammar file, runtime
contract, or decision record. If it is not strong enough for that, keep it in
the external intake workspace.

For the current YouMind style study, run the read-only atlas check after editing:

```bash
node scripts/check-youmind-style-atlas.mjs
```

## Public-safety rules

Do not commit:

- private screenshots;
- provider keys or tokens;
- account cookies;
- customer data;
- unreleased business metrics;
- generated caches or local runtime folders.
