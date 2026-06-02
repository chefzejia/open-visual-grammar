# Typography: Print Menu Layout

Status: pattern typography brief

This document is the typography brief for the `print-menu-layout` pattern. It
defines font roles and typography failure modes. It does not approve or package
specific production font families for any consuming project.

字体是 `print-menu-layout` 的视觉语法，不是渲染器的随机 fallback。这里定义字体的视觉角色、开源边界和运行时约束；具体项目再把字体文件打包进自己的渲染环境。

Architecture note: this file is pattern-local because print menus have specific
typography pressure: restaurant-name identity, price scanning, dense menu
readability, and print-scale hierarchy. Generic typography roles and packaging
rules live in `../../grammar/typography.md` and
`../../runtimes/font-packaging.md`.

## Architecture Rule

Use explicit font roles for primary print menu output. Do not let the renderer's
host fallback decide the visual identity.

Reasons:

- local macOS fonts and Linux production fonts differ;
- commercial/system faces such as Didot, Hoefler Text, Avenir Next, Cooper
  Black, and Bodoni 72 cannot be assumed in every runtime;
- deterministic output should match across local QA, CI, and production;
- typography is a visible part of the deliverable's taste.

Open-source does not mean visually generic. A consuming project should choose
faces that carry the named style direction after rendered-output review.

## Role Directions

These are role directions, not a font registry. The consuming project owns exact
font choices, licenses, files, and renderer wiring.

| Direction | Display role | Body / menu role | Voice |
| --- | --- | --- | --- |
| Warm Cafe | warm, tactile display serif or softened display face | clean hospitality reading face | approachable, handmade, not childish |
| Clean Modern | restrained editorial display face | precise sans or quiet editorial body face | calm, high-trust, easy scanning |
| Retro American | heavy vernacular display face | sturdy sans with strong numerals | energetic diner print without novelty clutter |
| Elegant Classic | high-contrast ceremonial display face | formal serif or quiet classic body face | refined, spacious, not wedding-template ornate |

## Role Rules

Display fonts are for the restaurant name and, where appropriate, one accent
line. They must not be reused everywhere just because they are distinctive.

Body fonts carry section labels, item names, prices, descriptions, and contact
information. They must stay readable at print scale and at scaled preview size.

Prices must use tabular numerals or an equivalent deterministic price-alignment
strategy. If a selected body face cannot produce stable numeric alignment in
the target renderer, the consuming project must change the face or compile a
numeric sub-role into the score.

Variants inside one direction share the same font role mapping. Variants may
change spacing, type scale, emphasis, and decoration density; they must not
change typeface.

## Runtime Packaging

Runtime packaging is intentionally not pattern-local. Use
`../../runtimes/font-packaging.md` when a consuming project needs deterministic
font files, license metadata, renderer paths, or local/CI/production parity.

## Visual QA

Inspect each style direction at short and dense menu lengths. Pass criteria:

- the restaurant name keeps the intended voice and does not look like a system
  fallback;
- long restaurant names do not clip or force accidental line breaks;
- prices align cleanly and remain paired with item names;
- section labels remain subordinate to the restaurant name;
- descriptions stay readable but visually quiet;
- the same input produces materially identical line breaks across local and
  production output;
- exported PDFs embed or otherwise preserve the intended font appearance.

## Deferred

These are not solved by this pattern typography brief:

- non-Latin scripts and CJK menus;
- right-to-left scripts;
- brand-specific custom fonts;
- generated-image text inside illustrations;
- editable document formats.

If any of these become product requirements, create a separate visual score or
runtime adapter addition before changing the typography brief.
