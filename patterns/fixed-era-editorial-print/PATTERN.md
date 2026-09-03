# Fixed-Era Editorial Print

```yaml
id: fixed-era-editorial-print
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Editorial covers where one declared historical branch must control typography, geometry, palette, print pressure, and whitespace.
avoid_when: Generic nostalgia, historical reconstruction, unrestricted brand color, or exact photographic proof.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：固定年代编辑印刷
English name: Fixed-Era Editorial Print

## Definition / 定义

This Pattern treats a selected era as a complete visual system, not a paper tint.
The semantic topic remains contemporary; the chosen branch controls type,
limited-color planes, geometry, print marks, and active whitespace.

本 Pattern 把选定年代当作完整视觉系统，而不是泛黄滤镜。主题语义仍可当代，年代分支同时控制字体、限色平面、几何、印刷痕迹和主动留白。

## Invariants / 不变量

- One era branch remains fixed for the whole output set; the default calibration is 1940s limited-color woodcut editorial.
- Palette, display type, block/asymmetric geometry, woodcut pressure, paper, and whitespace reinforce one another.
- One physical action and one evidence object carry the topic before texture is inspected.
- The result is a newly authored plate, never a reconstruction of a known poster.
- Historical slogans, celebrities, uniforms, flags, creator names, and source coordinates are forbidden.

## Composition Families / 构图家族

- **Woodcut action:** asymmetrical plate with one limited-color plane and a visible verb.
- **Quiet cover:** active paper and whitespace with a legible evidence object.
- **Type-geometry plate:** short checked title participates in the frame while the action remains visible without it.

## Variables / 可变槽位

`TARGET_ERA_BRANCH`, `ERA_RATIONALE`, `PHYSICAL_ACTION`, `CONCRETE_EVIDENCE`,
`ASPECT_RATIO`, `PALETTE_BUDGET`, `TYPE_TREATMENT`, `WHITESPACE_PLAN`,
`TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use when the era changes the whole reading system: a repair cooperative seating
a lamp part, or a library redirecting summer light. Keep tactile, intellectual,
and composed woodcut pressure; avoid propaganda cosplay and generic vintage mood.

## Transfer Boundaries / 迁移边界

The same era must survive two unrelated contemporary topics. Removing paper tint
and grain must leave type, geometry, palette, and whitespace recognizable.

## Fidelity Gate / 保真门

- Era choices read as a coordinated system, not one distress filter.
- Subject, action, and evidence remain legible with the title hidden.
- Three outputs are structural routes inside the same branch.
- No copied historical identity or composition is required.

## Failure Modes / 失败方式

Yellowed paper without era geometry, propaganda imitation, copied slogans,
modern UI with token woodcut, unreadable text, and palette-only variants fail.
Delete the Pattern if the fixed-era system cannot transfer.
