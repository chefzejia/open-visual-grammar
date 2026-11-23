# Print Menu Layout

```yaml
id: print-menu-layout
artifact_kinds:
  - deterministic-layout
surfaces:
  - html-css
  - typst
  - pdf
when_to_use: Single-page restaurant menus that must become print-ready fixed-format output.
avoid_when: Multi-page brochures, digital-only screen menus, unpriced posters, or editable customer templates.
```

中文名：印刷菜单版式
English name: Print Menu Layout


## Definition / 定义

Print Menu Layout is a fixed-format typesetting pattern for single-page food
and beverage menus delivered as print-ready PNG or PDF.

It turns a structured list of items into a readable, printable artifact. The
restaurant name is not a label at the top of a table. The restaurant name is
the anchor of the composition. Everything else — sections, items, prices,
contact — descends from it in a clear hierarchy.

印刷菜单版式是一种固定格式排版范式，用来把单页餐饮菜单交付成可打印的 PNG 或 PDF。

它把结构化菜单条目变成可读、可打印的成品。餐厅名不是表格顶部的一个标签，而是整个构图的锚点。章节、菜品、价格和联系方式都从这个锚点向下形成清晰层级。

## Recommended Cases / 推荐场景

- The output is a single-page US Letter or A4 portrait document.
- The content is a structured list: sections, item names, descriptions, prices.
- The deliverable must be printable or postable without editing.
- The buyer has no design skill and needs a finished artifact, not a template.
- The style direction has a named visual tradition (warm paper, print ceremony,
  diner energy, editorial restraint).

- 输出是单页 US Letter 或 A4 竖版文档；
- 内容是结构化列表：章节、名称、描述、价格；
- 交付物需要直接打印或发布，不再编辑；
- 购买者没有设计能力，需要成品而不是模板；
- 风格方向有明确视觉传统，例如暖纸、印刷仪式感、美式 diner 能量、编辑克制感。

## Weak Fit / 不适合

- The menu spans more than one page (multi-page brochure is a different pattern).
- The output is a digital-only screen menu (different density and interaction
  model).
- The content has no price structure (poster or flyer pattern is more
  appropriate).
- The buyer needs to edit the output after delivery (editable template is a
  different product).

- 多页菜单或宣传册；
- 纯数字屏幕菜单；
- 没有价格结构的内容；
- 交付后还需要用户自行编辑的模板型产品。

## Visual Problem / 视觉问题

The viewer should be able to read the menu and make a decision without effort.

The layout must solve three problems simultaneously:

1. **Identity**: the restaurant name and style direction must be recognizable
   within one second.
2. **Scanning**: a customer must be able to find any item and its price without
   searching.
3. **Printability**: the composition must hold at 300 DPI on physical paper,
   not just on screen.

观看者应该能不费力地阅读菜单并做出选择。

版式必须同时解决三个问题：

1. **Identity / 识别**：餐厅名和风格方向必须在一秒内被识别。
2. **Scanning / 扫读**：顾客不用搜索就能找到菜品和价格。
3. **Printability / 可打印性**：构图必须在 300 DPI 实体纸张上成立，而不只是屏幕预览好看。

## Invariants / 不变量

- One dominant restaurant name. It defines the top of the hierarchy.
- Section labels are clearly subordinate to the name but clearly superordinate
  to items.
- Item names and prices are visually paired; the eye must move between them
  without ambiguity.
- Descriptions are subordinate to item names; they add texture, not structure.
- Contact information is present when provided and legible, but does not compete
  with the menu content.
- The composition holds at both final delivery size and scaled preview size.
- No producer, platform, or consuming-project branding appears in the
  deliverable unless the buyer explicitly asked for it.
- No decorative elements that are not part of the named style direction.

- 一个支配性的餐厅名，定义最高层级；
- 章节标签低于餐厅名，但高于菜品；
- 菜品名和价格必须形成清楚视觉配对；
- 描述文字低于菜品名，只增加质感，不承担结构；
- 有联系方式时必须清楚可读，但不能抢菜单内容；
- 构图在最终交付尺寸和缩略预览中都成立；
- 除非购买者明确要求，交付物不能出现生产方、平台方或消费项目的品牌；
- 不加入命名风格方向之外的装饰元素。

## Composition Models

Use one of these models per style direction. Do not mix.

- **Column**: items and prices in two columns with a clear gutter. Use for
  dense menus and editorial directions.
- **Rule**: horizontal rules separate sections. The rule style (weight, color,
  ornament) carries the style signature.
- **Field**: the background material (color, texture, paper) is the primary
  style signal. Typography is set against it without additional decoration.
- **Frame**: a border or outer rule defines the page boundary. The interior
  is clean. Use for formal and ceremonial directions.

## Avoid / 避免

- Mixing multiple composition models in one menu;
- making the restaurant name behave like a table label;
- price alignment that forces the eye to search;
- decoration that does not belong to the named style direction;
- layouts that only work on screen and fail at print size.

- 一个菜单里混用多个构图模型；
- 把餐厅名做成表格标签；
- 价格对齐含糊，让眼睛到处找；
- 加入不属于命名风格方向的装饰；
- 只在屏幕上成立、打印尺寸失效的版式。

## Typography Role

The restaurant name should behave like a headline, not a label:

- large enough to anchor the composition;
- set with negative tracking at display sizes;
- placed with enough margin that it breathes;
- in the style direction's intended display role, not an accidental host
  fallback.

Section labels are structural markers. They should be visually distinct from
item names but not compete with the restaurant name.

Item names and prices must be typeset with tabular numerals for price alignment.
Descriptions are set smaller and in a muted color.

Typography is part of the visual grammar, not an implementation afterthought.
For the pattern-local typography roles, see `typography.md`. Runtime font
packaging rules live in the consuming runtime. The consuming
project chooses and packages the exact font files for final output.

Recommended print-scale ranges:

| Element | Standard menu | Dense menu |
| --- | --- | --- |
| Restaurant name | 168–182 px | 140–150 px |
| Section labels | 36–42 px | 31–34 px |
| Item names and prices | 46–52 px | 38–42 px |
| Descriptions | 30–34 px | 25–28 px |

## Information Density

Medium for standard menus (up to ~12 items). High for dense menus (13–20
items). Dense menus switch to a two-column layout and smaller type scale.

The density level is determined by item count, not by style direction.

## Emotional Temperature

Determined by the style direction, not by the pattern itself.

| Direction | Temperature |
| --- | --- |
| Warm paper (cafe, brunch) | Warm |
| Editorial restraint (wine bar, tasting menu) | Quiet to neutral |
| Diner energy (burger, BBQ, diner) | Hot |
| Print ceremony (fine dining, hotel) | Quiet to cold |

## Style Directions

Each style direction is a named visual tradition. See
the Pattern-owned style directions for the vocabulary.

A style direction defines:

- background material and surface color
- text and muted text colors
- accent and secondary accent
- rule color and weight
- display, body, and accent font roles
- signature detail (the one element that makes the direction memorable)
- composition model

Reusable hospitality directions:

| Direction | Tradition | Signature detail |
| --- | --- | --- |
| Warm Cafe | Warm paper | Hand-marked or brush divider |
| Clean Modern | Editorial restraint | Thin editorial rule system |
| Retro American | Diner energy | Ticket border and star ornaments |
| Elegant Classic | Print ceremony | Gold hairline and serif hierarchy |

## Runtime Compilation Route Slots

When adapting this pattern into a deterministic renderer, the consuming project
must define:

- output format and dimensions
- style direction and variant (Signature, Compact, Feature, Quiet)
- restaurant name, cuisine type, tagline
- sections and items (name, description, price, featured flag)
- contact information
- layout density (standard or dense, determined by item count)
- composition model for this direction
- signature detail implementation
- display, body, accent, and numeric font roles
- color tokens (background, surface, text, muted, accent, secondary accent, rule)

## Variants

Inside a concrete style direction, four variants are generated:

| Variant | Purpose |
| --- | --- |
| Signature | Balanced version with the direction's strongest visual identity |
| Compact | Tighter spacing for longer menus while keeping price scanning clear |
| Feature | Stronger treatment for featured or hero items |
| Quiet | Reduced decoration for a calmer printable version |

## Good Fit

- Cafe, brunch, and bakery menus.
- Food truck and bar menus.
- Small restaurant menus with up to 20 items.
- Any single-page food or beverage list that needs to look designed.

## Bad Fit

- Multi-page restaurant brochures.
- Digital-only screen menus with interactive elements.
- Menus with more than 20 items (layout breaks down).
- Menus that need photography as the primary visual element.

## Direct Compilation Route: Deterministic Layout / 直接生成路线：Deterministic Layout

# Compilation Route: Deterministic Layout

This compilation route translates a `print-menu-layout` visual brief into the decisions a
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
failure. See the consuming runtime for generic packaging and
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

## Pattern Typography Notes / Pattern 字体规则

# Typography: Print Menu Layout

Status: pattern typography brief

This document is the typography brief for the `print-menu-layout` pattern. It
defines font roles and typography failure modes. It does not approve or package
specific production font families for any consuming project.

字体是 `print-menu-layout` 的视觉语法，不是渲染器的随机 fallback。这里定义字体的视觉角色、开源边界和运行时约束；具体项目再把字体文件打包进自己的渲染环境。

Architecture note: this file is pattern-local because print menus have specific
typography pressure: restaurant-name identity, price scanning, dense menu
readability, and print-scale hierarchy. Generic typography roles and packaging
rules live in the shared visual rules and
the consuming runtime.

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
the consuming runtime when a consuming project needs deterministic
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

If any of these become product requirements, create a separate visual brief or
direct model-input route addition before changing the typography brief.
