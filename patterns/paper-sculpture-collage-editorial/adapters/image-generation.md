# Image-Generation Meta-Prompt / 图像生成元提示词

This adapter compiles the `paper-sculpture-collage-editorial` Pattern for image
generation. It is calibrated by public YouMind descriptions for paper-cut,
torn-paper archive, and hand-drawn paper concept work, not by copying their
prompts, subjects, or preview images.

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Paper Sculpture Collage Editorial visual grammar. Preserve the supplied
subject, action, and evidence. First reduce {{MAIN_SUBJECT}} to one recognizable
silhouette, gesture, structure, or relation. Build a small stack of cut-paper
planes so the layers support, block, bridge, or reveal the supplied action.
Choose Layered Stage, Memory Diptych, or Cut-Plane Relation only when that route
fits the visual argument; do not invent a second narrative.

Build a clean editorial page with active near-white or quiet neutral space.
Keep two to five ordered planes with clear front, middle, and back relationships.
Use {{LAYER_TARGETS}} for meaningful occlusion or access. Make cut edges, paper
fibers, and shallow matte contact shadows explain depth. Keep the source-derived
contour identifiable before and after the paper treatment.

Derive a restrained color family from the supplied subject or evidence. Pastel
is allowed only when it emerges from that source; do not apply a fixed candy
palette. Keep the surface flat or gently modulated, tactile, warm, observant,
and editorial. Use short checked type or reserve a clean, structurally
integrated region for deterministic typesetting.

Avoid glossy plastic, chrome, thick extrusion, toy 3D, glassmorphism, cinematic
lighting, photorealistic cutouts, uniform craft-supply decoration, sticker
sheets, random props, dense diagrams, long generated text, pseudo-Chinese,
logos, signatures, and watermarks. Do not copy any reference composition,
subject, slogan, or exact coordinates. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `LAYER_TARGETS`: name one to three semantic parts that should support, block,
  bridge, or reveal the source action. Describe relationships, not a material
  shopping list.
- `TEXT_HANDLING`: use `short checked type`, `blank region for deterministic
  typesetting`, or a mixed strategy.
- `FORBIDDEN`: add only topic-specific mistakes. The Pattern's material and
  density prohibitions already apply.

- `LAYER_TARGETS`：写出一到三个需要承托、遮挡、连接或显露上游动作的语义部位，描述关系，不要写
  成手工材料清单；
- `TEXT_HANDLING`：选择“短且经过核对的文字”“为确定性排版留空”或混合策略；
- `FORBIDDEN`：只补充主题特有错误，Pattern 已有的材质和密度禁区不必重复。
