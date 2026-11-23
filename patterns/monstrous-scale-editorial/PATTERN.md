# Monstrous-Scale Editorial

```yaml
id: monstrous-scale-editorial
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Covers where one world-building silhouette must exceed the frame and a tiny witness makes the scale and action legible.
avoid_when: Complete miniature scenes, ordinary portraits, multiple landmarks, or scale that depends only on cinematic effects.
```

中文名：巨物尺度编辑插画
English name: Monstrous-Scale Editorial

## Definition / 定义

One supplied world silhouette escapes at least one frame edge. A tiny witness
performs one concrete action that measures, repairs, or observes the world. The
scale relation is the argument; atmosphere stays print-like and subordinate.

一个上游世界主体轮廓至少从一条画面边缘越出。一个微小见证者通过测量、修理或观察执行具体动作。尺度关系本身就是论点，氛围只保持版画式克制。

## Invariants / 不变量

- One world silhouette controls the first read and exceeds the frame.
- One tiny witness has a visible action and anchors relative size.
- One path, cable, current, or repair trace may link witness and world.
- Crop creates scale, not accidental incompleteness; glow and fog cannot do the work.
- No palace, obelisk, alien monument, source lore, or copied coordinates are required.

## Composition Families / 构图家族

- **Edge cut:** the silhouette visibly exits the frame while the witness anchors it.
- **Witness trail:** one trace connects the witness to the larger world.
- **Print monument:** a flatter reduced plate tests scale with fewer marks.

## Variables / 可变槽位

`WORLD_SILHOUETTE`, `TINY_WITNESS`, `WITNESS_ACTION`, `SCALE_CONTRAST`,
`FRAME_ESCAPE`, `ASPECT_RATIO`, `PRINT_ATMOSPHERE`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for a wind farm repaired by one technician or a coral shelf measured by one
diver. Keep the emotional temperature monumental, quiet, and observant rather
than fantasy spectacle.

## Transfer Boundaries / 迁移边界

The same frame-escape and witness logic must work for two non-fantasy worlds.
The witness cannot become a hero, and the world cannot become a complete map.

## Fidelity Gate / 保真门

- World, witness, action, and scale are named from the image without adjectives.
- Frame escape and relative size remain legible at thumbnail size.
- Reduced print treatment keeps the scale relation.
- Three outputs differ by crop or relation, not weather or palette alone.

## Failure Modes / 失败方式

Epic glow, a normal-sized hero, decorative witness, multiple competing worlds,
complete miniature scenes, and fantasy lore without a supplied action fail.
Delete the Pattern if scale cannot be carried structurally.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 生图 Compilation Route

Compile a scale argument, not a fantasy scene. The world silhouette, witness,
and action are supplied by the upstream visual brief.

将尺度论证编译成图像，不要把它扩写成幻想场景。世界轮廓、见证者和动作由
上游视觉评分提供。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- World silhouette: {{WORLD_SILHOUETTE}}
- Tiny witness: {{TINY_WITNESS}}
- Witness action: {{WITNESS_ACTION}}
- Scale contrast: {{SCALE_CONTRAST}}
- Text handling: {{TEXT_HANDLING}}

Use the Monstrous-Scale Editorial Pattern. Let one supplied world silhouette
escape at least one frame edge. Place one tiny witness inside the frame with a
visible action that measures, repairs, or observes the world. The crop must
create scale; glow, fog, and cinematic depth cannot carry the argument. One
path, cable, current, or repair trace may connect witness and world when it has
a real structural role.

Choose Edge Cut, Witness Trail, or Print Monument. Keep the atmosphere
print-like and subordinate. Show {{WORLD_SILHOUETTE}} and {{WITNESS_ACTION}}
before adding texture or title. Reserve exact text for deterministic layout.

Avoid a normal-sized hero, complete miniature scene, multiple competing worlds,
fantasy lore, palace or obelisk substitution, epic glow, random text, logos,
signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `WORLD_SILHOUETTE`: one non-fantasy or fantasy-neutral world-form supplied by the score.
- `TINY_WITNESS`: one person or small observer, never a second protagonist.
- `WITNESS_ACTION`: a visible verb that measures, repairs, or observes.
- `FRAME_ESCAPE`: choose the edge that creates scale; do not crop by accident.

## Fidelity Gate / 保真门

- Frame escape and relative size are legible at thumbnail size.
- The witness action is visible without title or atmosphere.
- The same scale relation transfers to two unrelated worlds.
- Removing glow and texture leaves world, witness, and action intact.
