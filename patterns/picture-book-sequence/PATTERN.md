# Picture-Book Sequence

```yaml
id: picture-book-sequence
artifact_kinds:
  - image-cover
  - deterministic-layout
surfaces:
  - image-generation
  - deterministic-layout
when_to_use: Child-safe multi-page picture-book sequences and visual stories where page turns carry one clear change at a time.
avoid_when: Single hero illustrations, dashboards, sticker sheets, dense tutorials, or stories that need unsafe or frightening imagery.
```

中文名：绘本跨页叙事
English name: Picture-Book Sequence

## Definition / 定义

EN: Picture-Book Sequence is a multi-page visual storytelling pattern. One
child-safe action or relation advances per page, while a recurring anchor keeps
the reader oriented through progression, reveal, comparison, or return.

CN：绘本跨页叙事是一种多页视觉叙事范式。每页只推进一个适合儿童的动作或关系，用重复锚点维持方向感，
通过递进、揭示、对照或回环让翻页本身承载理解。

This Pattern formalizes the sequence method extracted from dPICTUS, The Original
Art, Bologna Children's Book Fair, and the related multi-page explainer.
Those sources support a narrative contract, not one universal children's
illustration surface. Material is therefore selected per brief and must remain
consistent within one sequence.

本 Pattern 将 dPICTUS、《The Original Art》、Bologna Children's Book Fair 以及相关 多页解释路线中稳定的
序列方法正式化。来源支持的是叙事契约，而不是一种统一的“儿童画风”。因此材质由简报选择，且同一序列内必须保持一致。

## Invariants / 不变量

- The first read is one safe action, relationship, or change, never a style label.
- Every page or spread advances exactly one beat; decorative-only pages are not allowed.
- One recurring actor, object, or witness keeps its role, silhouette, direction, and one small color cue.
- One sequence family governs the whole artifact: progression, quiet-to-busy reveal, anchor comparison, or path/return.
- Quiet and busy fields alternate only when the argument needs a pause or reveal; do not default to equal-weight panels.
- Short scene text may attach to the action; exact long copy belongs to deterministic typesetting.
- The material branch is chosen once per sequence: clean hand line, watercolor, crayon, matte collage, or flat print.

- 第一眼是一个安全的动作、关系或变化，不是风格标签。
- 每页或跨页只推进一个节拍，不允许只展示装饰的页面。
- 一个重复的演员、物件或见证者保持角色、剪影、方向和一小组配色线索稳定。
- 全部页面使用同一序列家族：递进、安静到繁忙揭示、锚点对照或路径/回环。
- 只有论证需要停顿或揭示时才交替安静与繁忙，不默认做等权重的格子。
- 短文字可以贴着动作进入场景，准确长文案交给确定性排版。
- 每个序列只选择一种材质分支：干净手绘线、水彩、蜡笔、哑光拼贴或平面印刷。

## Composition Families / 构图家族

1. **Progression spread / 递进跨页:** establish a state, show one physical or emotional change, and land the supplied conclusion.
2. **Quiet-to-busy reveal / 安静到繁忙揭示:** start sparse, introduce one new relation, and reserve density for the reveal.
3. **Anchor comparison / 锚点对照:** keep the same anchor and viewpoint while two states change the reader's judgment.
4. **Path or return / 路径或回环:** let one simple direction cross the pages and return only when the source has a real loop or journey.

Choose one family for a sequence. Do not turn every page into a different poster,
or force a short argument into a fixed page count.

## Fit / 适用范围

- picture-book spreads and child-safe learning stories;
- bedtime, classroom, or family-facing visual sequences;
- product or process stories that benefit from a friendly recurring witness;
- four-to-eight-page mobile sequences when the argument genuinely needs turns.

适合绘本跨页、儿童安全的学习故事、睡前或家庭阅读场景，以及需要重复见证者来解释的产品/流程故事。
如果论证确实需要翻页，通常使用四到八页的移动端序列。

## Weak Fit / 不适合

- a single mood illustration with no change;
- exact charts, UI proof, or dashboard reporting;
- dense instructional content better served by an infographic;
- mature horror, unsafe behavior, or a story that depends on threat for attention.

不适合纯情绪单图、精确图表或 UI 证明、信息密度过高的教程，以及依赖恐吓或危险行为吸引注意的故事。

## Material, Density, And Temperature / 材质、密度与温度

Material is tactile but subordinate to reading order. Keep paper, line, fill,
or print behavior stable across all pages. Warmth comes from clear action,
recognizable anchors, and humane pacing, not from random cute props or saturated
decoration. Density moves with the beat: open fields establish and pause; a
denser field is reserved for a supplied reveal or consequence.

材质有触感，但必须服从阅读顺序。全套页面保持纸面、线条、色面或印刷行为一致。温度来自清楚的动作、可识别的
锚点和有体谅的节奏，不来自随机可爱道具或高饱和装饰。密度跟随节拍变化：建立和停顿使用开放场域，繁忙场域只用于简报中的揭示或后果。

## Transfer Boundaries / 迁移边界

- The pattern transfers page grammar, not a source book's characters, costumes, lettering, palette, publisher marks, or named world.
- A supplied neutral object or actor must carry recognition; a borrowed animal or mascot cannot be the reason the style appears stable.
- `narrative-journal-infographic` owns handdrawn explanation, comparison, and system-map pages. Use this Pattern when page turns and child-safe story beats are the primary artifact contract.
- If a topic needs a new sequence family, a second narrative, or paragraph-length captions to be understood, delete or revise this Pattern rather than weakening its boundary.

## Fidelity Gate / 保真门

- Page order and state changes are understandable before texture or charm is inspected.
- The recurring anchor remains recognizable, role-stable, and directionally coherent.
- The selected material branch stays consistent, and quiet space does real pacing work.
- The same sequence family works for two unrelated topics without source-specific identity.
- Removing all style words leaves the same page beats, anchor, and reading direction.

## Failure Modes / 失败方式

- **Decorative spread:** rewrite page beats as verbs and remove unsupported objects.
- **Anchor drift:** simplify the anchor silhouette and palette before adding texture.
- **Panel grid:** restore one large page field and one dominant beat per page.
- **Caption dependence:** replace paragraphs with a visible action and keep only a short cue.
- **Material switching:** choose one branch for the whole sequence; pacing must come from scale, space, and action.
- **Unsafe or frightening beat:** replace it with a neutral repair, discovery, cooperation, or return action while preserving the supplied argument.

When these failures recur across unrelated topics, remove this Pattern. Do not
keep a weaker route.

## Direct Compilation Route: Deterministic Layout / 直接生成路线：Deterministic Layout

# Deterministic Layout Compilation Route / 确定性版式 Compilation Route

Compile `picture-book-sequence` into fixed-format HTML/CSS, Typst, PDF, or
print-ready pages. Use this route when page dimensions, exact copy, and page
order must survive export; image generation may supply visual studies, but it
must not own final text or pagination.

将 `picture-book-sequence` 编译为固定格式的 HTML/CSS、Typst、PDF 或可打印页面。当页面尺寸、准确文案和页序必须在导出后保持不变时使用此路由；图像生成可以提供视觉草图，但不能负责最终文字或分页。

## Direct Input Slots / 直接输入槽位

```text
Output format:
Output dimensions:
Page count:
Audience and safety boundary:
Sequence family:
Recurring anchor:
Page beat per page:
Short scene cue:
Deterministic body copy:
Material branch:
Whitespace and density rhythm:
Font roles and fallback:
QA checks:
Forbidden:
```

## Compile Rules / 编译规则

1. Choose one sequence family—progression, quiet-to-busy reveal, anchor comparison, or path/return—and keep it across the whole artifact.
2. Give every page one dominant action or relation. Keep the recurring anchor's role, silhouette, direction, and color cue stable.
3. Reserve exact headings, labels, dialogue, and long copy for deterministic text zones. Never rasterize required copy into generated art.
4. Define page dimensions and safe margins before placing scenes. Use one large page field rather than an equal-weight panel grid.
5. Keep the selected material branch consistent across pages. Let density change only when the supplied beat needs a pause or reveal.
6. Verify export dimensions, page count, text overflow, font loading, contrast, reading order, and child-safe content at the smallest delivery size.

1. 先选择一种序列家族——递进、安静到繁忙揭示、锚点对照或路径/回环——并贯穿整套页面。
2. 每页只保留一个主动作或关系。重复锚点的角色、剪影、方向和配色线索必须稳定。
3. 准确标题、标签、对白和长文案放入确定性文字区，不能把必需文案交给图像生成后再猜测。
4. 先定义页面尺寸和安全边距，再放置场景。使用一个主页面场域，不默认拆成等权重格子。
5. 全页保持同一材质分支。只有上游节拍需要停顿或揭示时才改变密度。
6. 检查导出尺寸、页数、文字溢出、字体加载、对比度、阅读顺序，以及最小交付尺寸下的儿童安全内容。

## Token Skeleton / Token 骨架

```text
color.paper
color.ink
color.accent
space.page
space.safe
space.scene
type.heading
type.scene-cue
type.body
type.fallback
texture.material-branch
```

## Fidelity Gate / 保真门

- Page order and state changes remain understandable without reading the body copy.
- Every page advances one supplied beat; no decorative-only page or filler spread exists.
- The recurring anchor is recognizable and directionally coherent at delivery size.
- Exact text is selectable, deterministic, and free of overflow or pseudo-text.
- The material branch, whitespace rhythm, and child-safe temperature remain consistent across the sequence.

- 不读正文也能从页序和状态变化理解故事推进。
- 每页都推进一个上游节拍，不存在纯装饰页或凑数跨页。
- 在交付尺寸下仍能识别重复锚点，方向关系前后一致。
- 准确文字可选择、可复现，没有溢出或伪文字。
- 材质分支、留白节奏和儿童安全温度在整套序列中保持一致。

## Direct Compilation Route: Multi Page Handdrawn Explainer / 直接生成路线：Multi Page Handdrawn Explainer

# Multi-Page Handdrawn Explainer Calibration / 多页手绘解释器校准

This compilation route encodes the documented `治愈系萌宠手账绘本信息图`
description into a brand-neutral sequence grammar. It keeps the useful method
claims—mobile-first vertical pages, one argument per page, a recurring anchor,
and a paper-and-ink handdrawn surface—while removing the upstream method's cats,
clothes, props, and wording.

这份 compilation route 将“治愈系萌宠手账绘本信息图”的方法抽象成品牌中立的连续页面语法。
它保留移动端竖屏、每页一个论点、跨页重复锚点和纸墨手绘表面，去掉来源技能的猫咪、服装、道具与原文措辞。

## Style Signature / 风格签名

- Deliver a sequence of four to eight `9:16` pages by default; choose the count from the argument, not from a fixed template.
- Give each page one readable claim, scene, or transition. Use progression, comparison, steps, or timeline only when the source argument supports it.
- Keep one recurring anchor—an actor, object, or simple witness—stable in role, silhouette, direction, and a small palette across the sequence.
- Use warm off-white paper, low-saturation color, watercolor or colored-pencil fills, fine handdrawn ink, and sparse collage marks. Texture must stay subordinate to reading order.
- Keep a clear page hierarchy: short heading, concrete scene, and one takeaway or cue. Reserve exact copy for deterministic text zones when the runtime supports them.
- Preserve generous breathing room and mobile-size legibility. Paper tape, notes, arrows, or clips are optional evidence marks, never a decorative scrapbook layer.

- 默认输出四到八页 `9:16` 竖屏序列，页数由论证决定，不套固定模板。
- 每页只承载一个可读论点、场景或转折；只有来源论证确实需要时才使用递进、对比、步骤或时间线。
- 保留一个跨页重复锚点，可以是角色、物件或简单见证者；它的角色、剪影、方向和少量配色必须稳定。
- 使用暖近白纸面、低饱和配色、水彩或彩铅色块、细手绘墨线和稀疏拼贴痕迹，纹理始终退后于阅读顺序。
- 保持清楚的页面层级：短标题、具体情境和一条结论或召回线。运行时支持时，精确文案交给确定性文字区。
- 保留呼吸感与手机尺寸可读性。纸胶带、便签、箭头或回形针只是可选证据标记，不能堆成装饰手账。

## Sequence Families / 序列家族

1. **Progression:** establish a state, show a change, and land the supplied conclusion.
2. **Comparison:** keep the same anchor and frame logic while contrasting two states on separate pages.
3. **Steps:** use only when each page advances one real operation; do not split a single idea into filler pages.
4. **Timeline:** use a stable axis and a small number of dated moments; exact dates belong in deterministic text.

## Model Prompt / 模型生成提示词

```text
Create a sequence of {{PAGE_COUNT}} {{ARTIFACT_KIND}} pages for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream narrative argument is authoritative:
- Core argument: {{CORE_ARGUMENT}}
- Sequence logic: {{SEQUENCE_LOGIC}}
- Recurring anchor: {{RECURRING_ANCHOR}}
- Page beats: {{PAGE_BEATS}}
- Text handling: {{TEXT_HANDLING}}

Use the Picture-Book Sequence grammar with the multi-page
handdrawn-explainer calibration. Build a mobile-first vertical sequence. Give
each page one concrete claim or transition, and make the reading order obvious
from page one to the last page. Keep {{RECURRING_ANCHOR}} stable in role,
silhouette, direction, and a restrained palette; do not import any source
character, costume, prop, or named world.

Use warm off-white paper, low-saturation colors, watercolor or colored-pencil
fills, fine handdrawn ink, and sparse collage marks. Keep texture and decoration
subordinate to the scene and page hierarchy. Each page should have a short
heading, a concrete situation, and one takeaway or recall cue. Preserve generous
whitespace and legibility at phone-card size. Follow {{TEXT_HANDLING}} and leave
exact long copy for deterministic typesetting.

Avoid dashboards, equal-weight panels, decorative scrapbook clutter, generic
mascot branding, changing character identity, unrelated props, long generated
paragraphs, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `PAGE_COUNT`: choose four to eight pages from the actual argument; do not pad a short idea.
- `SEQUENCE_LOGIC`: choose progression, comparison, steps, or timeline and state why it serves the supplied relation.
- `RECURRING_ANCHOR`: name only the supplied actor, object, or witness; never copy a source character.
- `PAGE_BEATS`: one short sentence per page, each advancing the same argument.
- `TEXT_HANDLING`: use `short checked headings + deterministic body copy` when exact wording matters.
- `FORBIDDEN`: add topic-specific omissions; do not replace the Pattern's material or hierarchy rules.

## Fidelity Gate / 保真门

- The sequence can be understood from page order and scene changes before decoration is inspected.
- Every page advances one supplied claim; no filler page exists only to display a motif.
- The recurring anchor remains recognizable and functionally consistent across pages.
- Warm paper, low-saturation handdrawn marks, and collage accents remain a controlled material budget.
- The output remains readable at mobile size and does not turn into a dashboard or sticker sheet.
- Removing the upstream method's animal, costume, and wording leaves the same multi-page method.

## Direct Compilation Route: Source Picture Book Sequence / 直接生成路线：Source Picture Book Sequence

# Source Picture-Book Sequence Calibration / 来源绘本跨页序列校准

This compilation route defines the source-safe sequence route exposed by the public
[dPICTUS](https://dpictus.com/), [The Original Art](https://societyillustrators.org/awards/the-original-art/),
and [Bologna Children's Book Fair](https://www.bolognachildrensbookfair.com/)
selection programs. Those sources prove that a whole book or spread sequence is
the useful evidence unit; they do not prove one universal picture-book surface.

这份 compilation route 提炼公开 dPICTUS、《The Original Art》和 Bologna Children's Book Fair 评选入口中可见的序列证据。
这些来源能证明整本书或跨页序列才是有效证据单位，但不能证明所有儿童绘本共享一种表面画法。

The quiet-to-busy rhythm and recurring-anchor rules below are the transferable
sequence contract. They describe what the selection sources make comparable,
not a claim that every selected title uses the same pacing or character treatment.

下面的“安静到繁忙”节奏和重复锚点规则是可迁移的序列契约，说明评选来源可以比较什么，并不宣称所有入选绘本使用同样的节奏或角色处理。

Do not copy a selected book's characters, lettering, palette, publisher marks,
or creator-specific material. Choose the material branch from the upstream brief
and keep it subordinate to page order and the supplied narrative action.

不要复制入选作品的角色、字形、配色、出版社标记或创作者特定材质。材质分支由上游简报选择，并且必须服从页面顺序和上游叙事动作。

## Style Signature / 风格签名

- The first read is one child-safe action, relation, or change, not a decorative style label.
- A recurring anchor keeps identity, role, direction, and a small color cue across pages.
- Each page or spread advances exactly one beat; the sequence may progress, compare, reveal, or loop back only when the source argument supports it.
- Quiet and busy spreads alternate intentionally so a child can find the next action without a caption-heavy explanation.
- Text enters as a short title, sound cue, label, or dialogue attached to the scene; exact long copy stays deterministic.
- Material is a variable branch: line, watercolor, crayon, collage, or flat print may change, but the reading order and anchor contract do not.

- 第一眼读到的是一个适合儿童的动作、关系或变化，不是某个装饰性的风格标签；
- 一个重复锚点跨页保持身份、角色、方向和一小组配色线索；
- 每页或每个跨页只推进一个节拍，递进、对比、揭示或回环必须由上游论证决定；
- 安静与繁忙的跨页有意交替，让儿童无需依赖大段说明就能找到下一个动作；
- 文字以短标题、拟声、标签或对白进入场景，准确长文案交给确定性排版；
- 材质只是可变分支：线稿、水彩、蜡笔、拼贴或平面印刷都可以切换，但阅读顺序和锚点契约不能变。

## Composition Families / 构图家族

1. **Progression spread / 递进跨页:** establish a state, show one physical or emotional change, and land the supplied conclusion.
2. **Quiet-to-busy reveal / 安静到繁忙的揭示:** begin with a sparse field and let one new relation enter; use the busy spread only for the reveal, not for decoration.
3. **Anchor comparison / 锚点对照:** keep the same anchor and viewpoint while two pages contrast an early assumption with a fuller state.
4. **Path or return / 路径或回环:** a simple directional path crosses the pages and returns to the anchor; use only when the source has a real loop or journey.

Choose one family for a short sequence. Do not turn every page into a different
poster or a uniform grid of panels.

## Model Prompt / 模型生成提示词

```text
Create a sequence of {{PAGE_COUNT}} {{ARTIFACT_KIND}} pages for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream narrative argument is authoritative:
- First read: {{FIRST_READ}}
- Core action: {{VISUAL_ACTION}}
- Recurring anchor: {{RECURRING_ANCHOR}}
- Sequence logic: {{SEQUENCE_LOGIC}}
- Page beats: {{PAGE_BEATS}}
- Text handling: {{TEXT_HANDLING}}

Use the Picture-Book Sequence grammar with this source sequence calibration.
Choose one supported family: progression spread,
quiet-to-busy reveal, anchor comparison, or path/return. Give every page exactly
one child-safe beat and make the reading direction obvious. Keep
{{RECURRING_ANCHOR}} stable in role, silhouette, direction, and one small color
cue. Do not import a source character, costume, named world, publisher mark, or
copied lettering.

Choose one material branch from the brief: clean hand line, watercolor,
crayon, matte collage, or flat print. Keep the branch consistent across the
sequence, with warm or near-white paper only when it supports the brief. Let
quiet space, scale, and one concrete action carry the page turn. Attach only
short checked titles, sound cues, labels, or dialogue to the scene; leave exact
long copy to deterministic typesetting.

Avoid sticker-sheet clutter, equal-weight panels, changing anchor identity,
generic mascot branding, decorative props, unsafe humor, long generated text,
pseudo-Chinese, logos, signatures, watermarks, and source-specific IP. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `PAGE_COUNT`: choose four to eight pages from the real argument; never pad a short idea.
- `RECURRING_ANCHOR`: use one supplied actor, object, or witness. A source animal is not a default anchor.
- `SEQUENCE_LOGIC`: state why progression, reveal, comparison, or return matches the argument.
- `PAGE_BEATS`: write one short action per page; each beat must change state or understanding.
- `TEXT_HANDLING`: prefer short checked scene text plus deterministic body copy.
- `FORBIDDEN`: add topic-specific safety and content limits without weakening the sequence contract.

## Fidelity Gate / 保真门

- The sequence is understandable from page order and scene changes before material detail is inspected.
- Every page advances one supplied action or relation; no page exists only to show a motif.
- The recurring anchor remains recognizable, role-stable, and directionally coherent.
- Quiet and busy fields are intentional, and the output remains legible at mobile or child-sized viewing distance.
- One material branch stays consistent; changing the branch does not change the page grammar.
- Removing source characters, costumes, publisher marks, and copied text leaves the same transferable sequence method.

## Failure Recovery / 失败恢复

- **Decorative spread:** if pages look attractive but do not advance, rewrite the page beats as verbs and remove any unsupported object.
- **Anchor drift:** if the recurring actor changes role or direction, simplify its silhouette and palette before adding texture.
- **Panel grid:** if the sequence becomes a comic or dashboard by default, restore one large page field and one dominant beat.
- **Caption dependence:** if a page needs a paragraph to explain itself, convert the paragraph into a visible action and keep only a short cue.
- **Material switching:** if each page uses a different surface, select one branch and let pacing come from scale, whitespace, and action instead.
