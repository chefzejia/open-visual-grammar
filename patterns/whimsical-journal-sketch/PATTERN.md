# Whimsical Journal Sketch

```yaml
id: whimsical-journal-sketch
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Warm, lightly playful journal-collage images using daily-life fragments to make ideas approachable.
avoid_when: Serious financial warnings, strong public arguments, product proof, or strict technical tutorials.
```

中文名：奇思妙想手账画师
English name: Whimsical Journal Sketch


## Definition / 定义

EN: Whimsical Journal Sketch is a warm, lightly playful journal-collage pattern
that explains ideas through watercolor fragments, marker texture, stickers, and
daily-life objects.

CN: 奇思妙想手账画师是一种温暖、轻松、有一点玩心的手账拼贴范式，用水彩碎片、马克笔质感、贴纸和日常物件解释想法。

## Invariants / 不变量

EN:

- watercolor sketch;
- marker texture;
- collage arrangement;
- casual layout;
- daily-life fragments;
- warm and lightly playful tone.

CN:

- 水彩速写；
- 马克笔质感；
- 拼贴式安排；
- 松弛布局；
- 日常生活碎片；
- 温暖、轻轻好玩的语气。

## Recommended Cases / 推荐场景

EN:

- diary-style posts;
- creative inspiration;
- lifestyle notes;
- personal essays with a soft tone.

CN:

- 日记式内容；
- 创意灵感；
- 生活方式笔记；
- 语气柔软的个人文章。

## Weak Fit / 不适合

EN:

- technical tutorials;
- strong public arguments;
- product proof;
- serious financial or operational topics.

CN:

- 严肃技术教程；
- 强公共立场表达；
- 产品证明；
- 严肃财务或运营话题。

## Avoid / 避免

EN:

- rigid corporate grid;
- cold technical diagrams;
- over-commercial illustration;
- random text, logos, signatures, or watermarks.

CN:

- 僵硬企业网格；
- 冷冰冰技术图；
- 过度商业插画感；
- 随机文字、logo、签名或水印。

## Direct Compilation Route: Handdrawn Memory / 直接生成路线：Handdrawn Memory

# Handdrawn Memory Calibration / 手绘记忆校准

This optional compilation route distills the repeated handdrawn-memory behavior visible in
public skills such as `P067`, `P066`, `P070`, `P071`,
`P076`,
`P080`, and the oil-pastel collage study. The skill names and preview images are
evidence only; do not copy their words, subjects, or exact coordinates.

这份可选 compilation route 提炼技能中反复出现的手绘记忆行为，例如 `P067`、
`P066`、`P070`、`P071`、`P076`、`P080` 和油画棒拼贴研究。技能名称和预览图只作证据，
不得复制其中的文字、主体或精确坐标。

## Style Signature / 风格签名

- One focal subject or relation, with the rest treated as selective memory.
- Roughly 40-45% or more breathable near-white paper field.
- Thin, hesitant, broken, or lightly corrected hand lines.
- Three to six low-saturation fills, with at most one small bright color jump.
- Short handwritten notes grow from the action or negative space.
- Watercolor, gouache, crayon, pencil, or marker texture stays matte and tactile.
- A pastel-memory branch may leave wipe, overlap, translucent paper, or pressure
  changes visible; a bold-painted branch may use brighter source-derived blocks,
  but grid, spray dots, glow, and geometric marks stay sparse editorial support.

- 一个视觉重心或关系，其余内容只保留成选择性记忆；
- 约 40%-45% 以上可呼吸的近白纸面；
- 纤细、犹豫、断裂或带轻微修正痕迹的手绘线；
- 三到六种低饱和平涂色，最多保留一个小面积亮色跳点；
- 短手写注记从动作或负空间中生长出来；
- 水彩、水粉、蜡笔、彩铅或马克笔保持哑光和触感。
- 粉彩记忆分支可以保留擦拭、透纸、叠色或笔压变化；厚涂分支可以使用更明亮的源图色块，但网格、喷点、
  光晕和几何标记只能作为稀疏的编辑性陪衬。

## Composition Families / 构图家族

1. **Offset single-focus page:** a small off-center subject, a wide paper field,
   and one caption or arrow that follows its gesture.
2. **Quiet journal spread:** two related plates share paper, color, and a short
   handwritten bridge; use only when the source contains a real contrast.
3. **Memory collage:** a few source-derived fragments float around one readable
   subject; fragments must support the same feeling or relation.
4. **Painted editorial plate:** a small or medium subject enters a warm-white
   field with one vivid painted block and sparse grid or direction marks; use a
   restrained label only when the source argument needs it.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Whimsical Journal Sketch grammar with the handdrawn-memory
calibration. Select one focal subject or relation and let the surrounding paper
field carry air and time. Preserve the supplied action and identity; forget
background detail instead of inventing new story objects.

Build an offset single-focus page, quiet journal spread, memory collage, or
painted editorial plate only when the visual argument supports that family. Keep roughly 40-45% or more
breathable near-white paper. Draw with thin hesitant or broken lines and matte
watercolor, gouache, crayon, pencil, marker, or pastel texture. Use three to six
low-saturation fills derived from the subject, plus no more than one small bright
accent. If the painted editorial plate is selected, allow one brighter
source-derived block and sparse grid, spray, glow, or geometric guide marks; do
not let them become a background pattern. Let a short handwritten note or arrow grow from {{VISUAL_ACTION}} or the
negative space; do not place a generic title in a box.

Keep the emotional temperature warm, lightly playful, and observant. Preserve
large-medium-small hierarchy even when the page feels casual. Avoid childish
clutter, yellowed grime, sticker packs, glossy 3D, generic watercolor wash,
photorealism, copied slogans, random text, logos, signatures, and watermarks.
```

## Fidelity Gate / 保真门

- At thumbnail size, the focal subject and action are still identifiable.
- The paper field is an active compositional region, not an empty export margin.
- The line and fill treatment feels hand-corrected but not dirty or accidental.
- The handwritten note supports the supplied action and contains no unverified
  long text.
- Removing color and texture still leaves the same offset or spread structure.

## Direct Compilation Route: Naive Doodle / 直接生成路线：Naive Doodle

# Naive Doodle Calibration / 稚拙涂鸦校准

This optional compilation route captures the controlled ugly-cute reduction described by
the documented `P083` method and corroborated by the documented `涂鸦` method.
It keeps the subject's identity while allowing one proportion, gesture,
expression, or structural cue to become deliberately awkward. The humor comes
from the supplied image or action, not an invented character or joke.

这份可选 compilation route 提炼`P083` 描述、并由公开“涂鸦”技能补强的可控丑萌减法。它保留主体身份，
同时允许一个比例、动作、表情或结构线索有意变得笨拙。幽默来自上游图片或动作，不凭空发明角色或笑点。

## Style Signature / 风格签名

- Keep one focal subject and no more than one or two necessary environmental
  cues.
- Preserve the subject's identity, direction, and key action before introducing
  distortion.
- Push one chosen feature slightly too far: a proportion, gesture, expression,
  or structural rhythm.
- Use shaky contour, rough crayon or pencil fill, visible stops, and large paper
  space; keep the surface matte and simple.
- Let the awkwardness read as observed character, not random deformation.

- 只保留一个视觉重心和至多一两个必要环境暗示；
- 在引入变形前，先保留主体身份、方向和关键动作；
- 只把一个选定特征轻轻推过头，例如比例、动作、表情或结构节奏；
- 使用发抖轮廓、粗糙蜡笔或铅笔填色、停顿痕迹和大片纸面，保持哑光与简单；
- 让笨拙读成被观察到的性格，而不是随机变形。

## Composition Families / 构图家族

1. **Focal doodle:** one off-center subject, one gesture cue, and a broad empty
   field.
2. **Controlled distortion plate:** one subject with a single exaggerated
   feature and one short note or arrow tied to the action.
3. **Quiet comparison:** two versions of the same subject only when the source
   contains a real contrast; keep the distortion rule consistent across both.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Whimsical Journal Sketch grammar with the naive-doodle
calibration. Keep one focal subject and at most one or two necessary environment
cues. Preserve {{MAIN_SUBJECT}} identity, direction, and {{VISUAL_ACTION}} first;
then choose one proportion, gesture, expression, or structural feature to become
deliberately awkward. Keep that distortion controlled and readable.

Draw with shaky dark crayon or pencil contours, rough matte fills, visible stops,
and a large breathable near-white paper field. Route the argument through a focal
doodle, controlled distortion plate, or quiet comparison only when the source
supports it. Let any short note or arrow grow from the supplied action. Humor
must come from the observed subject; do not invent props, characters, or jokes.

Avoid childish clutter, random deformation, generic cartoon mascots, glossy 3D,
photorealism, decorative sticker packs, long generated text, pseudo-Chinese,
logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The subject remains identifiable before the awkward feature is noticed.
- Only one feature is intentionally pushed; the rest preserves the supplied
  identity and action.
- The paper field and rough marks support the observation instead of becoming
  clutter.
- Removing color and texture still leaves the same focal or comparison structure.
- No humor depends on an invented story, slogan, or unrelated prop.

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

This record absorbs the former crayon-portrait transfer check.

这份记录吸收已删除的蜡笔肖像迁移检查。

## Stable Checks / 稳定检查

- Identity comes from supplied face shape, hair pattern, expression, and one or
  two real details before the material is judged.
- Keep a mostly white `3:4` drawing-paper field, dry rubbing, broken pressure,
  open edges, restrained warm hair range, and only a few structural coral,
  brick, blue, or peacock cues.
- One side wash may support the shoulders but stops at the contour. Extra
  clothing, props, background, and text cannot replace identity.
- A second unrelated portrait must keep the same identity-first reduction and
  material budget; a color, crop, or accessory swap is not a structural test.

## Failure Recovery / 失败恢复

If the portrait is generic, caricatured, or readable only at full size, simplify
the scene and restore face, hair, expression, and paper space. Repeated identity
drift is grounds to delete the Pattern.
