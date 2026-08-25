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
- Composition family: {{COMPOSITION_FAMILY}}
- Composition instance: {{COMPOSITION_INSTANCE}}
- Information density: {{DENSITY}}
- Text handling: {{TEXT_HANDLING}}
- Reference handling: {{REFERENCE_HANDLING}}

Use the Retro Pixel Halftone Tech Editorial visual grammar.

Preserve the supplied claim, action, subject, and evidence. Do not derive a new
narrative from the article topic or replace the supplied relation with a familiar
AI mascot, generic control room, or unrelated workflow.

Build a deliberately published editorial plate using {{COMPOSITION_FAMILY}}:
{{COMPOSITION_INSTANCE}}. Make {{MAIN_SUBJECT}} perform or receive
{{VISUAL_ACTION}}. Use {{CONCRETE_EVIDENCE}} as subordinate proof. Adapt scale and
spacing to {{ASPECT_RATIO}} while keeping the first read and action legible at feed
size. Supporting modules may annotate or prove the same claim; they must not
introduce another claim.

Preserve the style signature: one visible editorial frame or rule system; a large
block headline integrated with the scene; one dominant technical mechanism or
human-system relation; and a small number of evidence modules organized by sharp
scale changes. Do not reduce the result to a spot illustration beside an empty
title field.

Follow {{REFERENCE_HANDLING}}. When an authorized reference image is attached,
use it to calibrate frame, scale rhythm, information density, and material. Do
not reproduce its words, subjects, or exact coordinates.

Use a near-binary palette of deep black, paper white, and halftone grey, plus exactly one signal color: {{SIGNAL_COLOR}}. Apply it only to {{ACCENT_TARGETS}}. Accent budget: {{ACCENT_BUDGET}}. The signal color should reveal priority or causality, not decorate the page.

Material language: hard pixel contours, low-resolution stair-step edges, 1-bit dithering, Ben-Day or newspaper halftone dots, crosshatching, flat shadow blocks, slight registration drift, photocopy grain, and old-print ink spread. Keep objects flat, symbolic, and physicalized. Use paper white as active negative space. Use no smooth gradient or soft shadow.

Typography language: one very heavy condensed, block, or pixel display face for the primary claim; compact sans, mono, or bitmap lettering for annotations; clearly separated large, medium, and small scales. Follow {{TEXT_HANDLING}}. When exact Chinese text matters, render only short checked text or reserve structurally integrated regions for deterministic typesetting. Deterministic type must preserve the pattern's block hierarchy; never overlay a generic modern title on unrelated blank space. Never invent pseudo-Chinese.

Emotional temperature: {{TEMPERATURE}}. Keep it engineered, direct, tactile,
and print-driven. The result may recall a 1990s computer editorial, early digital
field manual, newspaper comic plate, or contemporary independent technology
zine without copying any one reference composition.

Forbidden: {{FORBIDDEN}}, generic AI brains, neural networks, robots as decoration, chips, code rain, neon cyberpunk, glossy 3D, clay rendering, smooth vector art, SaaS dashboards, realistic photography, cute stickers, anime characters, multi-color competition, random text, logos, signatures, QR codes, and watermarks.
```

## Slot Guidance / 槽位说明

- `FIRST_READ`: copy the approved first-read phrase or describe the approved text-free claim; do not rewrite it in the adapter.
- `VISUAL_ACTION`: copy the physical verb or relationship approved upstream.
- `MAIN_SUBJECT`: name only the subject already chosen to perform or receive the action.
- `CONCRETE_EVIDENCE`: copy only evidence already supported by the source or approved visual argument.
- `COMPOSITION_FAMILY`: choose `systems broadsheet`, `split transformation`, or `single mechanism plate` after selecting this pattern.
- `COMPOSITION_INSTANCE`: adapt the chosen family to the approved action, subject, evidence, and aspect ratio.
- `DENSITY`: normally use medium-high or high. Choose another pattern when the task requires sparse composition.
- `TEXT_HANDLING`: choose `short checked title only`, `blank regions for deterministic typesetting`, or a mixed strategy upstream.
- `REFERENCE_HANDLING`: state whether the run is text-only or includes an attached, public-safe reference for structural calibration.
- `ACCENT_TARGETS`: name one to three semantic anchors.
- `ACCENT_BUDGET`: default to roughly 5-12% of the surface unless the content or channel requires a different budget.
- `FORBIDDEN`: add topic-specific mistakes; do not repeat the whole pattern.

- `FIRST_READ`：复制上游已确认的第一眼短句，或描述已确认的无字主张；adapter 不再改写。
- `VISUAL_ACTION`：复制上游已经确认的物理动作或关系。
- `MAIN_SUBJECT`：只写已经选定、负责执行或承受动作的主体。
- `CONCRETE_EVIDENCE`：只复制正文或已确认视觉论证能够支持的证据。
- `COMPOSITION_FAMILY`：选择本 Pattern 后，再从“系统工程大报”“前后转化图版”“单机制图版”中选择。
- `COMPOSITION_INSTANCE`：根据动作、主体、证据和画幅适配所选家族。
- `DENSITY`：通常使用中高或高密度；任务必须稀疏时改选其他 Pattern。
- `TEXT_HANDLING`：在上游选择“只生成经核对的短标题”“为确定性排版留空”或混合策略。
- `REFERENCE_HANDLING`：说明本次只使用文字校准，还是附带了可公开使用的参考图进行结构校准。
- `ACCENT_TARGETS`：明确一到三个有语义的强调对象。
- `ACCENT_BUDGET`：默认约占画面 5%-12%，内容或渠道确有需要时再调整。
- `FORBIDDEN`：补充当前主题特有的错误，不重复整份 pattern。
