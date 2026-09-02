# Image-Generation Meta-Prompt / 图像生成元提示词

This adapter compiles the `frosted-silhouette-editorial` Pattern for image
generation. It is calibrated by public YouMind descriptions for `P072` and the
frosted-silhouette poster skill, not by copying their prompts or preview images.

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Frosted Silhouette Editorial visual grammar. Preserve the supplied
subject, action, and evidence. First reduce {{MAIN_SUBJECT}} to one recognizable
contour, posture, structure, or relation. Choose Reveal Ladder, Geometric Window,
or Silhouette Field according to the visual argument; do not invent a second art
direction.

Build a clean geometric page with stable margins and near-white or neutral space.
Use two or three regional reveal levels—clear, softened, and translucent—only on
{{REVEAL_TARGETS}}. Each window must explain hierarchy, distance, obstruction,
or access. Keep the silhouette recognizable before and after the reveal treatment.

Use matte paper or neutral surfaces, crisp flat edges, fine lines, subtle grain,
and at most one restrained accent color. Keep density low to medium. Treat short
text as integrated editorial type or leave a clean region for deterministic
typesetting. The emotional temperature is quiet, precise, clean, contemplative,
and slightly distant.

Avoid uniform blur, dark glass panels, chrome, liquid glass, glossy highlights,
cinematic bloom, gradients, dashboards, buttons, product UI, dense diagrams,
unrelated objects, long generated text, pseudo-Chinese, logos, signatures, and
watermarks. Do not copy any reference composition, subject, slogan, or exact
coordinates. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `REVEAL_TARGETS`: name one to three semantic parts that should be clear,
  softened, or translucent. Do not turn it into a color or blur budget.
- `TEXT_HANDLING`: use `short checked type`, `blank region for deterministic
  typesetting`, or a mixed strategy.
- `FORBIDDEN`: add only topic-specific mistakes; the Pattern's material and UI
  prohibitions already apply.

- `REVEAL_TARGETS`：写出一到三个需要清晰、柔焦或透叠的语义部位，不要把它写成颜色或模糊预算；
- `TEXT_HANDLING`：选择“短且经过核对的文字”“为确定性排版留空”或混合策略；
- `FORBIDDEN`：只补充主题特有错误，Pattern 已有的材质和 UI 禁止项不必重复。
