# Retro-Future Print Editorial

```yaml
id: retro-future-print-editorial
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Dense print plates where etched contour, hard warm/cool planes, and one structural subject make a non-cinematic future-facing editorial argument.
avoid_when: Generic sci-fi scenes, smooth 3D, multiple competing subjects, or photographic proof.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：复古未来印刷编辑图版
English name: Retro-Future Print Editorial

## Definition / 定义

A high-density etched contour system and visible print grain organize one
structural subject. Hard-edged warm/cool blocks create planes and hierarchy;
future-facing tone comes from the print system, not spaceships or glow.

高密度蚀刻轮廓和可见印刷颗粒组织一个结构性主体。硬边冷暖色块负责平面与层级，复古未来感来自印刷系统，不来自飞船或发光。

## Invariants / 不变量

- One supplied structural subject performs one concrete relation.
- Etched contours, halftone, grain, and small registration irregularity remain visible but subordinate.
- Warm/cool blocks are hard-edged, limited, and semantic; no gradients or chrome.
- One subject controls the first read in a dense but authored plate.
- Spaceships, alien lore, neon cyberpunk, and copied source layouts are forbidden.

## Composition Families / 构图家族

- **Etched field:** dark navy field, warm blocks, dense contour close to calibration.
- **Split plate:** hard-edged warm/cool planes divide subject and relation.
- **Paper reversal:** warm paper field, dark contour, bounded cool accent.

## Variables / 可变槽位

`STRUCTURAL_SUBJECT`, `CONCRETE_RELATION`, `ASPECT_RATIO`, `CONTOUR_DENSITY`,
`WARM_COOL_BLOCKS`, `PRINT_GRAIN`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for a terrace irrigation gate or a night-library return slot. Keep the
temperature engineered, tactile, and speculative without becoming a movie frame.

## Transfer Boundaries / 迁移边界

The contour, block, and density logic must survive two unrelated non-science-
fiction topics. Removing the words “retro-future” must not collapse the method.

## Fidelity Gate / 保真门

- Subject and relation are clear before grain inspection.
- Hard-edged blocks organize meaningful planes.
- Print material stays subordinate to one structural subject.
- Three outputs vary plate structure, not hue, lens, or glow.

## Failure Modes / 失败方式

Generic cinematic sci-fi, decorative machinery, gradients, glow, uncontrolled
multicolor, several equal subjects, and spaceship substitution fail. Delete the
Pattern if the print relation is not transferable.
