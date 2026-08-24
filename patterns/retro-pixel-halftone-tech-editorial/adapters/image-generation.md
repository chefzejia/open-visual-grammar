# Image-Generation Meta-Prompt

This is a reusable meta-prompt. Fill the slots from the current visual score, then compile the result into the consuming project's temporary runtime prompt. Do not save the compiled prompt in Open Visual Grammar.

这是一份可复用元提示词。先用当前任务的视觉评分填写槽位，再把编译结果保存到消费项目的临时运行目录。不要把编译后的单次 prompt 写回 Open Visual Grammar。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Composition: {{COMPOSITION}}
- Information density: {{DENSITY}}
- Text handling: {{TEXT_HANDLING}}

Use the Retro Pixel Halftone Tech Editorial visual grammar.

Preserve those six decisions. Do not derive a new narrative from the article topic,
expand the scene into a list of sub-tasks, or replace the supplied subject and
action with a familiar machine, pipeline, control room, robot, or workflow.

Make {{MAIN_SUBJECT}} perform or receive {{VISUAL_ACTION}} in the supplied
{{COMPOSITION}}. Adapt scale and spacing to {{ASPECT_RATIO}} while keeping the
first read dominant and the action legible at feed size. Added detail may support
that action, but it must not introduce another claim.

Use a near-binary palette of deep black, paper white, and halftone grey, plus exactly one signal color: {{SIGNAL_COLOR}}. Apply it only to {{ACCENT_TARGETS}}. Accent budget: {{ACCENT_BUDGET}}. The signal color should reveal priority or causality, not decorate the page.

Material language: hard pixel contours, low-resolution stair-step edges, 1-bit dithering, Ben-Day or newspaper halftone dots, crosshatching, flat shadow blocks, slight registration drift, photocopy grain, and old-print ink spread. Keep objects flat, symbolic, and physicalized. Use paper white as active negative space. Use no smooth gradient or soft shadow.

Typography language: one very heavy condensed or block display face for the primary claim; compact sans, mono, or bitmap lettering for annotations; clearly separated large, medium, and small scales. Follow {{TEXT_HANDLING}}. When exact Chinese text matters, render only short checked text or reserve clean areas for deterministic typesetting. Never invent pseudo-Chinese.

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
- `COMPOSITION`: describe the approved spatial relationship, not a preferred pattern template.
- `DENSITY`: use the upstream density decision; do not increase it to explain the whole article.
- `TEXT_HANDLING`: choose `short checked title only`, `blank regions for deterministic typesetting`, or a mixed strategy upstream.
- `ACCENT_TARGETS`: name one to three semantic anchors.
- `ACCENT_BUDGET`: default to roughly 5-12% of the surface unless the content or channel requires a different budget.
- `FORBIDDEN`: add topic-specific mistakes; do not repeat the whole pattern.

- `FIRST_READ`：复制上游已确认的第一眼短句，或描述已确认的无字主张；adapter 不再改写。
- `VISUAL_ACTION`：复制上游已经确认的物理动作或关系。
- `MAIN_SUBJECT`：只写已经选定、负责执行或承受动作的主体。
- `COMPOSITION`：描述已经确认的空间关系，不套用 pattern 偏好的模板。
- `DENSITY`：沿用上游密度决定，不为了讲完整篇文章擅自加密。
- `TEXT_HANDLING`：在上游选择“只生成经核对的短标题”“为确定性排版留空”或混合策略。
- `ACCENT_TARGETS`：明确一到三个有语义的强调对象。
- `ACCENT_BUDGET`：默认约占画面 5%-12%，内容或渠道确有需要时再调整。
- `FORBIDDEN`：补充当前主题特有的错误，不重复整份 pattern。
