# Restrained Editorial Slide System

```yaml
id: restrained-editorial-slide-system
status: seed
artifact_kinds:
  - deterministic-layout
runtimes:
  - deterministic-layout
when_to_use: Slide-like pages that need magazine hierarchy, calm authority, exact text, bounded photography or line art, and a small reusable family of evidence layouts.
avoid_when: Decorative keynote spectacle, playful illustration decks, dense spreadsheet reporting, cinematic full-bleed storytelling, or content without a stable hierarchy.
load_next:
  deterministic-layout: adapters/deterministic-layout.md
  style-calibration-multiscript: adapters/source-multiscript-type-system.md
```

中文名：克制编辑式幻灯片系统
English name: Restrained Editorial Slide System

Status: seed

## Definition / 定义

EN: Restrained Editorial Slide System turns research, marketing, cultural, or
brand content into a small family of magazine-like pages. A strict grid,
display/body contrast, cream or near-white paper, bounded imagery, and restrained
ink roles create authority without corporate template noise.

CN：克制编辑式幻灯片系统把研究、营销、文化或品牌内容组织成一小组杂志式页面。严格网格、展示与正文
字体反差、暖白纸面、受控图像裁切和克制墨色角色，共同建立可信度，避免企业模板噪声。

This seed is calibrated from the public YouMind skills
[`意大利复古美学`](https://youmind.com/~skills/019f23b6-b4d8-7feb-befd-45293733e840)
and [`研究/营销简洁风格`](https://youmind.com/~skills/3c173d07-76b5-4164-ba81-e3813d5e66fc).
Their sample decks, brands, data, and photography remain external evidence.

本 seed 参考公开 YouMind 技能“意大利复古美学”和“研究/营销简洁风格”。来源 deck、品牌、数据和摄影
只作外部证据，不进入 OVG 的内容层。

## Invariants / 不变量

- Every page has one dominant reading task: orient, explain, compare, prove, or pause.
- A master grid controls margins, columns, image crops, rules, and text baselines across the deck.
- Display, body, accent, and numeric roles are defined before font families.
- A serif/sans contrast or another approved display/body contrast creates editorial identity without sacrificing body readability.
- The paper field is cream, white, or near-white; dark navy, charcoal, or black carries structure; one muted accent is optional.
- Photography, screenshots, line art, and charts enter bounded modules with clear editorial purpose.
- Whitespace separates reading tasks. It is not filled with decorative shapes.
- Exact text, numbers, citations, and sources are deterministic and verified.

- 每页只有一个主阅读任务：定位、解释、比较、证明或停顿；
- 主网格统一控制边距、分栏、图片裁切、分隔线和文字基线；
- 先定义展示、正文、强调和数字角色，再选择字体；
- 衬线与无衬线或其他批准的展示/正文反差建立编辑身份，但不牺牲正文可读性；
- 纸面为奶油白、白或近白，深海军蓝、炭黑或黑色负责结构，可选一个低调强调色；
- 摄影、截图、线稿和图表进入边界明确且有编辑目的的模块；
- 留白用于分隔阅读任务，不拿装饰形状填满；
- 文字、数字、引用和来源必须确定性渲染并核对。

## Style Signature / 风格签名

1. one clear reading task per page;
2. a visible but quiet editorial grid;
3. strong display/body contrast with exact typography;
4. bounded evidence imagery and a restrained ink budget.

1. 每页一个清晰阅读任务；
2. 可感知但安静的编辑网格；
3. 展示与正文反差明确且排版准确；
4. 受控证据图像与严格墨色预算。

## Ownership Contract / 权责契约

The upstream brief owns the argument, page sequence, evidence, data, citations,
and exact copy. This Pattern owns page families, grid behavior, type roles,
image-to-text balance, density, and color roles. The runtime owns dimensions,
font packaging, text flow, chart implementation, and export QA.

上游简报负责论点、页面顺序、证据、数据、引用和准确文案。本 Pattern 负责页面家族、网格行为、字体角色、
图文平衡、密度和色彩角色。Runtime 负责尺寸、字体打包、文本流、图表实现和导出 QA。

## Page Families / 页面家族

### Editorial Cover / 编辑封面

One short title, one identifying line, and either one bounded image or a large
paper field. The cover establishes hierarchy, not the entire content summary.

一个短标题、一条身份信息，以及一张受控图片或一块大纸面。封面负责建立层级，不承担整份内容摘要。

### Evidence Grid / 证据网格

One claim plus two to four comparable facts, metrics, quotes, or screenshots.
All modules share a baseline and one evidence type dominates.

一个主张加两到四条可比较事实、指标、引语或截图。所有模块共享基线，并由一种证据类型主导。

### Image-Led Spread / 图像主导跨页

One bounded photograph or illustration takes roughly half to two-thirds of the
page while a compact text block provides context and source.

一张受控摄影或插图占页面约二分之一到三分之二，紧凑文字块提供上下文和来源。

### Quote Or Section Pause / 引语或章节停顿页

One verified quote, transition, or conclusion receives a large paper field and
minimal metadata. It must not become decorative filler.

一条已核验引语、转场或结论获得大面积纸面和最少元数据，不能退化成装饰性填充页。

## Variables / 可变槽位

- content domain and page sequence;
- display/body type contrast and script fallback;
- photography, screenshot, line-art, or chart evidence;
- cream, white, or near-white paper role;
- dark structural ink and one optional muted accent;
- 16:9, 4:3, portrait, or print-like page ratio;
- low, medium, or evidence-dense page family.

## Fit And Weak Fit / 适用与弱适用

Good fit:

- research synthesis, customer insight, strategy, cultural storytelling, and brand collaboration decks;
- exact data or quotes that need calm editorial authority;
- decks whose pages can be routed into a small reusable family.

Weak fit:

- spreadsheets pasted across every page;
- theatrical stage presentations relying on animation spectacle;
- children's story decks or expressive art portfolios;
- pages requiring unrestricted brand colors or full-bleed video frames.

## Density And Temperature / 密度与温度

Density varies by page family but never becomes uniform across the deck. Covers
and pauses are sparse; evidence grids are medium to high; image-led pages stay
moderate. Temperature is calm, literate, human, and publication-ready.

密度随页面家族变化，不能整套平均铺满。封面和停顿页稀疏，证据网格中高密，图像主导页保持中等。
情绪安静、有阅读感、以人为本并达到出版标准。

## Fidelity Gate / 保真门

- Each page can be named as one supported reading task and page family.
- Text hierarchy remains intact after CJK/Latin font fallback.
- Evidence modules align and preserve source labels.
- The palette stays quiet and role-based across all pages.
- The deck still feels editorial after decorative imagery is removed.
- Two unrelated topics can use the same page families without sharing sample copy or photography.

## Failure Modes / 失败模式

- **Template monotony:** every page repeats one layout. Recover by routing content through the four page families.
- **Magazine cosplay:** decorative serif and cream color replace hierarchy. Recover the reading task, grid, and evidence roles first.
- **Photo wallpaper:** imagery becomes atmospheric background. Recover bounded crops and source labels.
- **Data drift:** numbers lose alignment or citation. Recover deterministic numeric roles and evidence modules.
- **Color creep:** each section invents an accent. Recover named color roles and one deck-wide budget.
