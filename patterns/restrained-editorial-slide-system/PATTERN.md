# Restrained Editorial Slide System

```yaml
id: restrained-editorial-slide-system
artifact_kinds:
  - deterministic-layout
surfaces:
  - deterministic-layout
when_to_use: Slide-like pages that need magazine hierarchy, calm authority, exact text, bounded photography or line art, and a small reusable family of evidence layouts.
avoid_when: Decorative keynote spectacle, playful illustration decks, dense spreadsheet reporting, cinematic full-bleed storytelling, or content without a stable hierarchy.
```

中文名：克制编辑式幻灯片系统
English name: Restrained Editorial Slide System


## Definition / 定义

EN: Restrained Editorial Slide System turns research, marketing, cultural, or
brand content into a small family of magazine-like pages. A strict grid,
display/body contrast, cream or near-white paper, bounded imagery, and restrained
ink roles create authority without corporate template noise.

CN：克制编辑式幻灯片系统把研究、营销、文化或品牌内容组织成一小组杂志式页面。严格网格、展示与正文
字体反差、暖白纸面、受控图像裁切和克制墨色角色，共同建立可信度，避免企业模板噪声。

This Pattern is calibrated from the public skills
`意大利复古美学`
and `研究/营销简洁风格`.
Their sample decks, brands, data, and photography remain external evidence.

本 Pattern 参考“意大利复古美学”和“研究/营销简洁风格”描述。来源 deck、品牌、数据和摄影
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

## Direct Compilation Route: Deterministic Layout / 直接生成路线：Deterministic Layout

# Deterministic Layout Compilation Route / 确定性版式 Compilation Route

Compile `restrained-editorial-slide-system` into HTML/CSS, Typst, PDF, or another
fixed slide renderer. Do not use image generation for exact text, charts, page
sequence, or citation placement.

把 `restrained-editorial-slide-system` 编译到 HTML/CSS、Typst、PDF 或其他固定幻灯片渲染器。
准确文字、图表、页面顺序和引用位置不得交给图像模型。

## Direct Input Slots / 直接输入槽位

```text
Output format:
Output dimensions:
Audience:
Deck job:
Page sequence:
Reading task per page:
Page family per page:
Display role:
Body role:
Accent role:
Numeric role:
Script fallback:
Evidence sources:
Image crop rules:
Color roles:
Density by page:
QA checks:
Forbidden:
```

## Token Contract / Token 契约

```text
color.paper
color.text
color.muted
color.accent
color.rule
space.page-x
space.page-y
space.column
space.module
type.display
type.body
type.accent
type.numeric
type.fallback
line.rule
radius.media
```

## Compile Rules / 编译规则

1. Define the reading task and page family before layout values.
2. Use one deck-wide grid; page families may span or subdivide it but may not invent unrelated margins.
3. Keep display scarce and body readable at delivery size.
4. Use tabular numerals or equivalent alignment for metrics.
5. Crop images intentionally and retain source/caption metadata where required.
6. Verify overflow, contrast, source labels, page count, and font loading in the final export.

1. 先确定阅读任务和页面家族，再写布局数值；
2. 整套使用一个主网格，页面家族可以跨列或细分，但不能发明无关边距；
3. 展示字体稀缺使用，正文在交付尺寸下可读；
4. 指标使用等宽数字或等价对齐方案；
5. 图片有意裁切，并按要求保留来源与说明；
6. 在最终导出中检查溢出、对比度、来源标注、页数和字体加载。

## Fidelity Gate / 保真门

- Every page has exactly one dominant reading task.
- All pages share grid, spacing, and color tokens.
- The four type roles remain distinct after export.
- Evidence is bounded, sourced, and aligned.
- No page relies on decorative filler to feel complete.

## Direct Compilation Route: Source Multiscript Type System / 直接生成路线：Source Multiscript Type System

# Source Multiscript Type-System Calibration / 来源多文字系统校准

This optional compilation route distills two public evidence sources: the Tokyo TDC
[2026 Grand Prize page](https://tokyotypedirectorsclub.org/en/award/2026_grandprize/),
which describes Futura 100 Multiscript as a family with six weights, matching
obliques, and optical-size variations, and [Fonts In Use](https://www.fontsinuse.com/),
which indexes real typography by typeface, format, and topic. The sources teach
system design and contextual comparison, not a requirement to use Futura or a
particular award look.

这份可选 compilation route 提炼两个公开证据源：Tokyo TDC 2026 Grand Prize 页面描述的多文字字族系统，以及按字体、格式和主题索引真实使用案例的 Fonts In Use。来源教的是系统设计和语境比较，不是要求使用 Futura 或复制某个奖项外观。

## Style Signature / 风格签名

- Define typography by role before choosing a family: display, body, accent, and numeric.
- Treat scripts as one coordinated system. Align x-height or perceived body size, stroke pressure, spacing, and baseline behavior across scripts.
- Use weight, oblique, and optical-size changes to express hierarchy or function; do not switch families merely to create decoration.
- Test the type roles in the actual artifact kind and content density. A type specimen is evidence of range, not proof of a good slide.
- Keep exact copy, citations, and line breaks deterministic. The image or evidence crop shares the same grid and does not become a wallpaper.

- 先定义展示、正文、强调和数字角色，再选择字族；
- 把多种文字当作一个协调系统，跨文字对齐 x-height 或感知正文尺寸、笔压、字距和基线行为；
- 用字重、斜体和光学尺寸表达层级或功能，不为了装饰随意切换字族；
- 在真实交付类型和内容密度中测试字体角色，字族样张只证明范围，不证明页面一定成立；
- 准确文案、引用和换行交给确定性排版，图片或证据裁切与同一网格对齐，不做背景壁纸。

## Layout Route / 版式路由

Use `editorial-cover`, `evidence-grid`, `image-led-spread`, or `quote-pause`
from the base Pattern. Keep the same role tokens and baseline grid when a deck
changes script, page family, or evidence crop.

使用基础 Pattern 的 `editorial-cover`、`evidence-grid`、`image-led-spread` 或 `quote-pause`。当 deck 切换文字系统、页面家族或证据裁切时，继续使用同一组角色 token 和基线网格。

## Deterministic Compile Contract / 确定性编译契约

```text
SCRIPT_SET: {{SCRIPT_SET}}
DISPLAY_ROLE: {{DISPLAY_ROLE}}
BODY_ROLE: {{BODY_ROLE}}
ACCENT_ROLE: {{ACCENT_ROLE}}
NUMERIC_ROLE: {{NUMERIC_ROLE}}
FALLBACK_CHAIN: {{FALLBACK_CHAIN}}
PAGE_FAMILY: {{PAGE_FAMILY}}
EVIDENCE_CROP: {{EVIDENCE_CROP}}
```

1. Choose a family with coverage for every required script, or document the fallback chain before laying out.
2. Compare perceived size and line length, not nominal point size alone.
3. Lock baseline, column, and rule tokens before adjusting individual glyphs.
4. Verify mixed-script overflow, punctuation, numerals, citations, and font loading in the exported artifact.
5. Keep one optional muted accent across the deck; script changes do not authorize a new color system.

1. 选择覆盖所有必需文字的字族，或在排版前写清 fallback 链；
2. 比较感知尺寸和行长，不只看标称字号；
3. 先锁定基线、分栏和分隔线 token，再调单个字形；
4. 在导出物中检查混排溢出、标点、数字、引用和字体加载；
5. 整套 deck 最多使用一个低调强调色，切换文字系统不等于可以换一套配色。

## Fidelity Gate / 保真门

- Display, body, accent, and numeric roles remain distinct in every required script.
- Perceived size, baseline, and spacing feel coordinated without flattening the scripts into identical forms.
- The page still reads as one of the base Pattern's supported families after the type specimen or award identity is removed.
- Exact text and citations survive export with no overflow or fallback surprises.
- Two unrelated decks can reuse the role system without sharing source copy, glyph forms, or award imagery.

## Failure Recovery / 失败恢复

- **Font tourism:** if a display family becomes the subject, restore the page reading task and reduce display usage.
- **Script mismatch:** if one script looks too small or heavy, adjust role-specific size/leading or choose a documented fallback before changing the grid.
- **Fallback surprise:** if missing glyphs change the tone, package the approved fallback and rerun export QA.
- **Specimen wallpaper:** if type samples replace evidence, return the evidence crop and source label to the bounded page module.
- **Color drift:** if each script receives a new accent, restore deck-wide color roles and let weight/spacing carry the distinction.
