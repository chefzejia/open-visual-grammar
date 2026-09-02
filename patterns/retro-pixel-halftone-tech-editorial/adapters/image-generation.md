# Image-Generation Meta-Prompt

This is a reusable meta-prompt. Fill the slots from the current visual score, then compile the result into the consuming project's temporary runtime prompt. Do not save the compiled prompt in Open Visual Grammar.

这是一份可复用元提示词。先用当前任务的视觉评分填写槽位，再把编译结果保存到消费项目的临时运行目录。不要把编译后的单次 prompt 写回 Open Visual Grammar。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Retro Pixel Halftone Tech Editorial visual grammar.

Preserve the supplied claim, action, subject, and evidence. Do not derive a new
narrative from the article topic or replace the supplied relation with a familiar
AI mascot, generic control room, or unrelated workflow.

Build the Pattern's systems-broadsheet skeleton: dominant warm paper white, one
strong outer frame, an integrated block headline, one explanatory relation,
subordinate proof modules, and a narrow functional rule or conclusion band.
Route a real before/after action through the transformation route; route a loop,
gate, burden, bridge, or human-system relation through the mechanism route. The
route changes placement, not art direction. Make {{MAIN_SUBJECT}} perform or
receive {{VISUAL_ACTION}} and use {{CONCRETE_EVIDENCE}} as subordinate proof.

Preserve the style signature: one visible editorial frame or rule system; a large
block headline integrated with the scene; one dominant technical mechanism or
human-system relation; and a small number of evidence modules organized by sharp
scale changes. Do not reduce the result to a spot illustration beside an empty
title field.

When the Pattern's reviewed calibration image is attached, use it only to
calibrate the paper-dominant editorial architecture, scale rhythm, density,
flat object language, and print material. Do not reproduce its words, subjects,
or exact coordinates. The Pattern remains authoritative when no image input is
available.

Use a near-binary palette of deep black, warm paper white, and halftone grey,
plus safety orange #F06424 as the only signal color. Keep paper white visibly
dominant. Apply orange only to {{ACCENT_TARGETS}}, roughly 5-12% of the surface.
Black may form rules, labels, flat shadows, and a narrow band; do not create a
giant inverse masthead or a mostly black interface surface.

Material and object language: hard pixel contours, low-resolution stair-step
edges, 1-bit dithering, Ben-Day or newspaper halftone dots, crosshatching, flat
shadow blocks, slight registration drift, photocopy grain, and old-print ink
spread. Keep every object flat, front-facing or orthographic, symbolic, and
diagrammatic. Do not turn abstract concepts into an unrelated volumetric or
futuristic object language unless those objects are concrete source evidence.
Use no smooth gradient, soft shadow, cinematic depth, or realistic lighting.

Typography language: one very heavy condensed, block, or pixel display face for the primary claim; compact sans, mono, or bitmap lettering for annotations; clearly separated large, medium, and small scales. Follow {{TEXT_HANDLING}}. When exact Chinese text matters, render only short checked text or reserve structurally integrated regions for deterministic typesetting. Deterministic type must preserve the pattern's block hierarchy; never overlay a generic modern title on unrelated blank space. Never invent pseudo-Chinese.

Emotional temperature is fixed: engineered, direct, tactile, opinionated,
slightly rebellious, and print-driven. The result should read as an independent
technology broadsheet before it reads as retro decoration.

Forbidden: {{FORBIDDEN}}, generic AI brains, neural networks, robots as decoration, chips, code rain, neon cyberpunk, glossy 3D, clay rendering, smooth vector art, SaaS dashboards, realistic photography, cute stickers, anime characters, multi-color competition, random text, logos, signatures, QR codes, and watermarks.
```

## Slot Guidance / 槽位说明

- `FIRST_READ`: copy the approved first-read phrase or describe the approved text-free claim; do not rewrite it in the adapter.
- `VISUAL_ACTION`: copy the physical verb or relationship approved upstream.
- `MAIN_SUBJECT`: name only the subject already chosen to perform or receive the action.
- `CONCRETE_EVIDENCE`: copy only evidence already supported by the source or approved visual argument.
- `TEXT_HANDLING`: choose `short checked title only`, `blank regions for deterministic typesetting`, or a mixed strategy upstream.
- `ACCENT_TARGETS`: name one to three semantic anchors.
- `FORBIDDEN`: add topic-specific mistakes; do not repeat the whole pattern.

- `FIRST_READ`：复制上游已确认的第一眼短句，或描述已确认的无字主张；adapter 不再改写。
- `VISUAL_ACTION`：复制上游已经确认的物理动作或关系。
- `MAIN_SUBJECT`：只写已经选定、负责执行或承受动作的主体。
- `CONCRETE_EVIDENCE`：只复制正文或已确认视觉论证能够支持的证据。
- `TEXT_HANDLING`：在上游选择“只生成经核对的短标题”“为确定性排版留空”或混合策略。
- `ACCENT_TARGETS`：明确一到三个有语义的强调对象。
- `FORBIDDEN`：补充当前主题特有的错误，不重复整份 pattern。
