# Graphic Fashion Avatar

```yaml
id: graphic-fashion-avatar
artifact_kinds:
  - app-icon
runtimes:
  - image-generation
when_to_use: Square profile or identity marks where hair, face shape, expression, and one accessory must survive graphic reduction.
avoid_when: Anonymous stock portraits, detailed character scenes, long text, or app icons whose function is carried by a non-human symbol.
load_next:
  image-generation: adapters/image-generation.md
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
