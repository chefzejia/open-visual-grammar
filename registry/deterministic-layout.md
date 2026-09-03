# Registry: Deterministic Layout

Use this route for HTML/CSS, Typst, PDF, print-ready PNG, slide-like pages, and
other fixed-format customer deliverables where text, dimensions, fonts, and
layout must be repeatable.

## Load Order

1. Read this registry.
2. Read the selected pattern's `PATTERN.md`.
3. Read the selected pattern's adapter for the target runtime.
4. Read `grammar/typography.md` when font roles affect visual identity.
5. Read `runtimes/font-packaging.md` when the deliverable must be stable across
   local, CI, and production.
6. Read the concrete runtime contract such as `runtimes/deterministic-layout.md`
   only when compiling the final implementation spec.

Do not start from colors, CSS, or renderer defaults. Start from hierarchy,
content structure, output contract, and font roles.

## Patterns

| Pattern | Best fit | Required adapter |
| --- | --- | --- |
| `print-menu-layout` | single-page restaurant menu delivered as print-ready PNG/PDF or deterministic HTML/Typst | `patterns/print-menu-layout/adapters/deterministic-layout.md` |
| `limited-color-print-editorial` | fixed editorial pages or slides using warm paper, one dominant ink, one large print plane, and local woodcut or charcoal pressure | `patterns/limited-color-print-editorial/adapters/deterministic-layout.md` |
| `restrained-editorial-slide-system` | research, marketing, cultural, or brand slides with one reading task per page, exact typography, bounded evidence, and a shared editorial grid | `patterns/restrained-editorial-slide-system/adapters/deterministic-layout.md` |
| `picture-book-sequence` | fixed-format child-safe picture-book spreads or mobile page sequences where page order carries the narrative | `patterns/picture-book-sequence/adapters/deterministic-layout.md` |

## Required Output

Before writing HTML, CSS, Typst, or PDF code, produce a deterministic layout
score with:

```text
Artifact kind: deterministic-layout
Runtime:
Pattern:
Output format:
Output dimensions:
Content structure:
Hierarchy:
Typography roles:
Font package assumptions:
Composition model:
Density:
QA checks:
Forbidden:
```

## Font Rule

For paid or customer-facing deterministic deliverables, host system fonts are
not a design target. Use packaged fonts or explicitly record why a fallback is
acceptable.
