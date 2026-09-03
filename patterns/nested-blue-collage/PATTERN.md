# Nested Blue Collage

```yaml
id: nested-blue-collage
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Square or near-square covers where a three-layer paper/blue/paper field makes one subject and short line feel physically embedded.
avoid_when: Full-bleed scenes, glossy 3D collage, dense scrapbook pages, or topics needing exact UI proof.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：中蓝嵌合拼贴
English name: Nested Blue Collage

## Definition / 定义

A wrinkled outer paper border holds a centered blue field. Clipped inner paper
pieces, one halftone subject silhouette, a sparse handwritten orbit, and one
utility cue form a fixed nested construction.

皱纸外框包住居中的蓝色场域。贴边的内层纸片、一个半调主体剪影、稀疏手写环绕和一个功能线索共同构成固定的嵌合结构。

## Invariants / 不变量

- Outer paper, blue field, and inner torn-paper layer remain visibly distinct.
- One supplied subject silhouette owns the first read before halftone or text.
- Torn pieces clip against the blue boundary with intentional edges.
- Handwritten orbit and one barcode/date-like cue remain sparse and checked.
- The exact source blue, phrase, portrait, logo, or decorative coordinate is not copied.

## Composition Families / 构图家族

- **Nested field:** all three layers visible, subject dominant.
- **Edge clip:** boundary and clipped pieces carry the composition.
- **Utility cue:** one small checked identifier tests functional annotation.

## Variables / 可变槽位

`SUBJECT_SILHOUETTE`, `SHORT_CHECKED_LINE`, `UTILITY_CUE`, `ASPECT_RATIO`,
`BLUE_FIELD_ROLE`, `HALFTONE_LEVEL`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for a worn wrench on a repair bench or a folded seed packet in a seed
exchange. Keep the mood tactile, graphic, and lightly utilitarian, not street-
sticker spectacle.

## Transfer Boundaries / 迁移边界

Both unrelated topics must retain the three-layer construction with no second
scene, extra stickers, or new color system. The subject must remain legible when
the orbit and utility cue are removed.

## Fidelity Gate / 保真门

- All three layers are named from the image.
- The subject silhouette survives without handwritten marks.
- Clipped edges are intentional, not random scraps or soft masking.
- Removing color and texture leaves the nested field and subject relation.

## Failure Modes / 失败方式

Generic blue poster, flat single rectangle, sticker sheet, glossy stack, text-led
recognition, and decoration-heavy scraps fail. Delete the Pattern when the
nested contract cannot survive a new subject.
