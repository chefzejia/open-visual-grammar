# Image Generation Adapter / 生图 Adapter

Compile a scale argument, not a fantasy scene. The world silhouette, witness,
and action are supplied by the upstream visual score.

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
