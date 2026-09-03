# Picture-Book Sequence

```yaml
id: picture-book-sequence
artifact_kinds:
  - image-cover
  - deterministic-layout
runtimes:
  - image-generation
  - deterministic-layout
when_to_use: Child-safe multi-page picture-book sequences and visual stories where page turns carry one clear change at a time.
avoid_when: Single hero illustrations, dashboards, sticker sheets, dense tutorials, or stories that need unsafe or frightening imagery.
load_next:
  image-generation: adapters/source-picture-book-sequence.md
  style-calibration: adapters/youmind-multi-page-handdrawn-explainer.md
  deterministic-layout: adapters/deterministic-layout.md
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
Art, Bologna Children's Book Fair, and the related YouMind multi-page explainer.
Those sources support a narrative contract, not one universal children's
illustration surface. Material is therefore selected per brief and must remain
consistent within one sequence.

本 Pattern 将 dPICTUS、《The Original Art》、Bologna Children's Book Fair 以及相关 YouMind 多页解释路线中稳定的
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
keep a weaker intermediate version.
