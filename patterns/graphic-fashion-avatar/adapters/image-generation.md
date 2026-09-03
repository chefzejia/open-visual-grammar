# Image Generation Adapter / 生图 Adapter

Use this adapter for a square identity mark. The supplied subject must be
authorized; the source image is calibration, not a public likeness to copy.

这份 adapter 用于方形身份标记。上游主体必须获得授权；来源图只用于校准，
不能复制公共人物或来源肖像。

```text
Create an app-icon or square identity mark for {{AUDIENCE}} at 1:1.

The identity brief is authoritative:
- Identity anchors: {{IDENTITY_ANCHORS}}
- Expression: {{EXPRESSION}}
- Optional cue: {{OPTIONAL_CUE}}
- Platform frame: {{PLATFORM_FRAME}}
- Text handling: {{TEXT_HANDLING}}

Use the Graphic Fashion Avatar Pattern. Reduce the authorized subject to one
silhouette-first flat graphic. Preserve hair silhouette, face shape,
expression, and at most one or two supplied details before adding rough marker
or dry-brush edges. Keep the warm-white field clean and the color budget
restrained. The mark must remain recognizable at 64x64 and 32x32.

Choose Silhouette First, Expression Edge, or Accessory Mark. Keep the accessory
subordinate and never let clothing, props, or a label rescue weak identity.
Use flat shapes and controlled roughness; no scene, mascot costume, glossy
render, photoreal retouch, gradient, random text, logo, signature, or watermark.
{{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: hair, face, expression, and one supplied detail.
- `OPTIONAL_CUE`: omit it when silhouette already carries the function.
- `PLATFORM_FRAME`: framing only; do not introduce a second art direction.
- `TEXT_HANDLING`: normally no text.

## Fidelity Gate / 保真门

- Hair, face, and expression survive at small size before texture is noticed.
- At most one accessory cue supports identity.
- The same silhouette survives platform framing and color removal.
- No source person's likeness is copied beyond the authorized input.
