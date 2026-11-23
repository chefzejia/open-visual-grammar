# Graphic Fashion Avatar

```yaml
id: graphic-fashion-avatar
artifact_kinds:
  - app-icon
surfaces:
  - image-generation
when_to_use: Square profile or identity marks where hair, face shape, expression, and one accessory must survive graphic reduction.
avoid_when: Anonymous stock portraits, detailed character scenes, long text, or app icons whose function is carried by a non-human symbol.
```

中文名：时尚稚拙头像
English name: Graphic Fashion Avatar

## Definition / 定义

Graphic Fashion Avatar reduces an authorized portrait to a flat, expressive
identity mark. Rough marker or dry-brush edges and restrained watercolor color
add attitude only after the face and hair anchors are secure.

时尚稚拙头像把经过授权的人像压缩成扁平而有表情的身份标记。先保证脸和头发锚点，再用粗粝马克笔或干刷边缘和克制水彩色增加气质。

## Invariants / 不变量

- Hair silhouette, face shape, expression, and one or two supplied details identify the subject without a label.
- At most one accessory cue supports identity; it never becomes a logo or costume shortcut.
- Warm-white field stays clean and active; the avatar has no required scene or prop.
- Flat graphic shapes, controlled rough edge, and restrained watercolor remain legible at `64x64` and `32x32`.
- The subject is authorized and source-specific likeness is not copied from a public example.

## Composition Families / 构图家族

- **Silhouette first:** hair and face contour carry recognition with minimal interior marks.
- **Expression edge:** one expression cue receives controlled roughness.
- **Accessory mark:** one supplied accessory is the only secondary cue.

## Variables / 可变槽位

`IDENTITY_ANCHORS`, `EXPRESSION`, `OPTIONAL_CUE`, `ASPECT_RATIO`, `EDGE_TREATMENT`,
`COLOR_BUDGET`, `PLATFORM_FRAME`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for square profile avatars, creator marks, and lightweight identity tiles.
Keep the mood graphic, observant, and fashion-aware, not glossy, photoreal, or
mascot-driven.

## Transfer Boundaries / 迁移边界

The silhouette-first reduction must transfer from a field ecologist to a
night-shift baker, or another unrelated pair, without changing the art
direction. Background, outfit detail, and text cannot rescue weak identity.

## Fidelity Gate / 保真门

- Hair, face, and expression remain recognizable at small size.
- One accessory stays subordinate and source-grounded.
- Removing roughness and color leaves the same identity silhouette.
- Platform framing preserves the same mark.

## Failure Modes / 失败方式

Generic cartoon faces, extra props, busy scenes, glossy 3D, photoreal retouch,
random damage, and hue-only variants fail. Delete the Pattern if identity cannot
survive reduction.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 生图 Compilation Route

Use this compilation route for a square identity mark. The supplied subject must be
authorized; the source image is calibration, not a public likeness to copy.

这份 compilation route 用于方形身份标记。上游主体必须获得授权；来源图只用于校准，
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
