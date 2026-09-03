# Single-Accent Ink Editorial

```yaml
id: single-accent-ink-editorial
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Editorial covers where heavy black contour and local halftone make one action legible with exactly one semantic accent.
avoid_when: Multi-color decoration, full-frame noise, soft watercolor mood, or exact photographic proof.
load_next:
  image-generation: adapters/youmind-single-accent-ink.md
```

中文名：单强调色编辑墨线
English name: Single-Accent Ink Editorial

## Definition / 定义

A near-white field and heavy black contour carry the subject and action. Local
halftone adds pressure inside evidence or shadow planes, while one semantic
accent marks the hinge of the argument.

近白纸面与厚重黑色轮廓承载主体和动作。局部网点只在证据或阴影平面内部增加印压，一种语义强调色标出论点的关键转折。

## Invariants / 不变量

- Subject, action, and evidence read from contour before texture or text.
- Halftone is local and subordinate; paper remains open.
- Exactly one accent color is traceable to the visual argument.
- One supported vignette, pair, or text-zone structure remains stable across topics.
- Short exact text is checked or deterministic; no copied brand material.

## Composition Families / 构图家族

- **Contour vignette:** one action and evidence object in a clear field.
- **Two-state pair:** same contour system contrasts one before/after relation.
- **Reserved text zone:** short checked line joins the drawing without carrying it.

## Variables / 可变槽位

`MAIN_SUBJECT`, `VISUAL_ACTION`, `CONCRETE_EVIDENCE`, `ACCENT_COLOR`,
`HALFTONE_REGION`, `ASPECT_RATIO`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for editorial actions that need a hand-pressed black contour and one clear
signal. The temperature is direct, tactile, and composed, not playful noise.

## Transfer Boundaries / 迁移边界

The same contour/action/accent contract must transfer to unrelated topics. If the
accent or halftone becomes the style subject, the Pattern has lost ownership.

## Fidelity Gate / 保真门

- Action and evidence remain legible with text and halftone hidden.
- One accent is semantic and stable.
- Local pressure leaves active whitespace.
- Three outputs vary relation or vignette structure, not color or paper texture.

## Failure Modes / 失败方式

Generic vector art, multiple accents, full-frame noise, unreadable action,
decorative text, and global texture filters fail. Delete the Pattern if contour
cannot carry the visual argument.
