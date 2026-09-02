# YouMind Naive Doodle Calibration / YouMind 稚拙涂鸦校准

This optional adapter captures the controlled ugly-cute reduction described by
the public YouMind `P083` skill and corroborated by the public
[`涂鸦`](https://youmind.com/~skills/019e23c3-6887-751e-99cb-93ec3bff8e59)
skill. It keeps the subject's identity while allowing one proportion, gesture,
expression, or structural cue to become deliberately awkward. The humor comes
from the supplied image or action, not an invented character or joke.

这份可选 adapter 提炼公开 YouMind `P083` 描述、并由公开“涂鸦”技能补强的可控丑萌减法。它保留主体身份，
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

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Whimsical Journal Sketch grammar with the YouMind naive-doodle
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
