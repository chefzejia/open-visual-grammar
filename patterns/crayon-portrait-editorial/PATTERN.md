# Crayon Portrait Editorial

```yaml
id: crayon-portrait-editorial
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Identity-first `3:4` portrait studies on open white drawing paper with visible dry crayon pressure and a restrained structural accent.
avoid_when: Generic crayon filters, anonymous fashion portraits, busy scenes, or photorealistic proof.
load_next:
  image-generation: adapters/youmind-crayon-portrait.md
```

中文名：蜡笔肖像编辑图
English name: Crayon Portrait Editorial

## Definition / 定义

An authorized portrait is reduced through face shape, hair pattern, expression,
and one or two supplied details. Dry rubbing, broken pressure, paper fiber, and
open edges create a live study without turning identity into caricature.

经过授权的人像通过脸型、发型、表情和一到两个上游细节完成减法。干擦、断续压力、纸纤维和开放边缘构成现场感，但不把身份变成漫画夸张。

## Invariants / 不变量

- Identity anchors remain clear before crayon material is inspected.
- White drawing paper dominates; edges stay open around head and shoulders.
- Warm hair range and a few coral, brick, blue, or peacock cues remain restrained and structural.
- One side wash may support shoulders but stops at the contour.
- `3:4` portrait balance survives unrelated subjects and small preview size.

## Composition Families / 构图家族

- **Identity study:** head and shoulders with generous paper field.
- **Side-wash portrait:** one color wash supports but does not surround the subject.
- **Detail crop:** one supplied detail receives pressure while face and hair remain primary.

## Variables / 可变槽位

`PORTRAIT`, `IDENTITY_ANCHORS`, `EXPRESSION`, `ASPECT_RATIO`, `PAPER_FIELD`,
`CRAYON_PRESSURE`, `ACCENT_PALETTE`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for observational portraits and human stories that need warmth without a
scene. The temperature is intimate, handmade, and attentive rather than cute or
fashion-commercial.

## Transfer Boundaries / 迁移边界

The same identity-first reduction must work for two unrelated people. Clothing,
props, and text cannot substitute for face, hair, and expression.

## Fidelity Gate / 保真门

- Face, hair, and expression remain recognizable without labels.
- Paper field stays open and the accent palette is structural.
- Three outputs vary portrait route, not color or accessory only.
- Removing crayon texture leaves the same identity composition.

## Failure Modes / 失败方式

Yellowed-paper filter, generic face, caricature, extra outfit or props, closed
background, and full-size-only legibility fail. Delete the Pattern if identity
cannot survive the material reduction.
