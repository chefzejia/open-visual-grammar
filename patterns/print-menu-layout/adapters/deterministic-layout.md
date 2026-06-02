# Adapter: Deterministic Layout

This adapter translates a `print-menu-layout` visual brief into the decisions a
deterministic layout engine must own. HTML/CSS, Typst, PDF, or another fixed
layout engine can carry the result; none of them is the pattern's source of
truth.

## Output Contract

```text
Format:      Fixed-format deliverable such as PNG, PDF, or both
Dimensions:  Explicit final canvas or page size
Text:        Exact — no model-generated text in the final output
```

The consuming project's engine must enforce its chosen output contract.

## Compile Slots

```text
Output format:
Output dimensions:

Viewer:
Job:
Pattern:           print-menu-layout

First read:        [restaurant name — the dominant element]

Hierarchy:
  Level 1 (restaurant name):   [size, font, weight, tracking]
  Level 2 (section labels):    [size, font, weight]
  Level 3 (item names + prices): [size, font, tabular numerals]
  Level 4 (descriptions + contact): [size, font, muted color]

Content:
  Restaurant name:
  Cuisine type:
  Tagline:
  Sections:        [section title → items → name / description / price]
  Featured items:
  Contact:

Style direction:   [named hospitality direction]
  Background:
  Surface:
  Text:
  Muted:
  Accent:
  Secondary accent:
  Rule color:
  Display role:     [visual voice, size behavior, fallback policy]
  Body role:        [reading behavior, numeric behavior, fallback policy]
  Accent role:      [section or ceremonial behavior, fallback policy]
  Numeric role:     [price alignment behavior]

Typography scale:  [standard | dense — determined by item count]
  Restaurant name:
  Section labels:
  Item names + prices:
  Descriptions:

Composition model: [rule | column | field | frame]
Signature detail:  [one named element — brush divider, editorial rule, ticket border, gold hairline]

Density:           [standard (≤12 items) | dense (13–20 items)]
  Dense behavior:  two-column layout, smaller type scale

Forbidden:
  - producer, platform, or consuming-project branding unless requested
  - decorative elements outside the named style direction
  - web-scale font sizes on a print canvas
  - centered alignment except where the direction requires it
  - host system fonts as the intended primary appearance
  - runtime network font fetching for customer deliverables
```

## Density Switch Rule

Item count determines layout density. The style direction does not change.

| Item count | Layout | Type scale |
| --- | --- | --- |
| ≤ 12 | Single column | Standard |
| 13–20 | Two columns | Dense |

The engine must apply the dense scale automatically. The operator does not
choose density manually.

## Price Alignment Rule

All prices must use tabular numerals and align to a consistent right column
within each section. The gutter between item name and price must be visually
unambiguous — not just a space character.

## Typography Runtime Rule

The visual brief defines type roles. The consuming project chooses the exact
font files and packaging strategy.

For production deterministic deliverables, a missing primary font is a QA
failure. See `../../../runtimes/font-packaging.md` for generic packaging and
parity rules.

## Signature Detail Rule

Each style direction has exactly one signature detail. It must appear in the
output. It must not be multiplied or varied across variants.

| Direction | Signature detail |
| --- | --- |
| Warm Cafe | Brush or hand-marked section divider |
| Clean Modern | Thin editorial rule system (hairline weight) |
| Retro American | Ticket border and star or arrow ornaments |
| Elegant Classic | Gold hairline rules and serif hierarchy |

## Variant Behavior

All four variants of a direction share the same color tokens, font role mapping, and
signature detail. Variants differ only in spacing, type scale, and decoration
density.

| Variant | What changes |
| --- | --- |
| Signature | Baseline — strongest visual identity |
| Compact | Tighter spacing, slightly smaller type |
| Feature | More visual weight on featured items |
| Quiet | Reduced decoration, calmer overall |
