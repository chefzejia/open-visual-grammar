# YouMind Emotional Metaphor Editorial Calibration / YouMind 情绪隐喻编辑校准

This optional adapter distills the public YouMind `词影 · 海报引擎Pro`
description into a source-safe editorial method. It keeps the shared operation
of turning a short, verified line into one precise emotional metaphor, with a
restrained palette and one semantic color hinge. It does not copy the source
skill's lyric, film, poem, style menu, or preview composition.

这份可选 adapter 将公开 YouMind“词影 · 海报引擎Pro”的共同方法抽象成来源安全的编辑海报语法。
它保留把短句转化为一个准确情绪隐喻、用克制配色和一个语义色彩铰链完成画面的操作，不复制来源技能的歌词、电影、诗歌、风格菜单或预览构图。

## Style Signature / 风格签名

- Use the `semantic-concept-poster` horizontal cover contract: the short checked line remains the first read and the visual metaphor is the second read.
- Reduce the supplied emotional source to one Aha relation—pressure, distance, echo, exposure, collapse, or another single verb—rather than illustrating every literal noun.
- Build from a low-saturation paper or neutral field and one small high-purity semantic anchor. The anchor marks the emotional hinge; it is not a decorative palette sample.
- Keep one or two necessary forms, generous breathing room, and a flat editorial or print-like surface. The image is intentionally non-photorealistic and should not resemble an IP scene.
- When source context matters, keep a tiny publication-style attribution line separate from the core text. Exact lyrics, quotations, and credits must be checked and typeset deterministically when needed.
- Offer a coherent poster, not a text template with an unrelated background. The metaphor owns the composition and the text remains legible within it.

- 使用 `semantic-concept-poster` 的横向封面契约：短且经核对的文字是第一眼，视觉隐喻是第二眼。
- 将来源情绪压缩成一个 Aha 关系，如压力、距离、回声、暴露或坍塌；不要把所有字面名词都画出来。
- 以低饱和纸面或中性场为底，只设置一个小而高纯度的语义锚点。锚点标记情绪转折，不是展示调色板。
- 只保留一到两个必要形体、充足呼吸空间和扁平编辑或印刷表面。画面有意反写实，不应变成 IP 场景。
- 来源背景确有必要时，用细小出版信息行承载署名，与核心文字分开。歌词、引语和署名必须核对，必要时交给确定性排版。
- 交付一张完整海报，不做“文字模板 + 无关背景”；隐喻负责构图，文字在其中保持可读。

## Composition Families / 构图家族

1. **Emotional pressure:** a single force compresses, bends, or interrupts the text without hiding it.
2. **Measured distance:** two related forms and their gap make the supplied feeling visible while the text stays dominant.
3. **Small reveal:** one opening, object, or color hinge exposes the hidden meaning behind the line.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at 16:9 horizontal format.

The upstream emotional argument is authoritative:
- Emotional source: {{EMOTIONAL_SOURCE}}
- Core text: {{CORE_TEXT}}
- Hidden tension: {{HIDDEN_TENSION}}
- Visual relation: {{VISUAL_RELATION}}
- Main subject or evidence: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Semantic Concept Poster Pattern with the YouMind emotional-metaphor
calibration. Keep {{CORE_TEXT}} short, exact, and dominant. Reduce the source to
one Aha relation and choose Emotional Pressure, Measured Distance, or Small
Reveal according to {{VISUAL_RELATION}}. Do not literalize every noun or add a
second metaphor.

Build a low-saturation editorial field from paper white or a neutral base. Add
one small high-purity color anchor tied to {{HIDDEN_TENSION}} and keep all other
colors quiet. Use one or two necessary forms, generous whitespace, flat
illustration or print-like marks, and a restrained publication feel. The viewer
must read the text first and understand the emotional relation second.

If source context needs attribution, reserve a tiny deterministic publication
line below or beside the core text. Follow {{TEXT_HANDLING}} for exact text; do
not let generated pseudo-lettering carry meaning.

Avoid literal lyric scenes, celebrity or artist imitation, named IP, photorealism,
decorative symbol piles, generic AI fog, robots, neural networks, glossy 3D,
banner layouts, long generated text, pseudo-Chinese, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `EMOTIONAL_SOURCE`: summarize the supplied source context in one sentence; do not paste a long copyrighted passage.
- `CORE_TEXT`: use a short checked line, normally one or two deliberate lines; reserve longer copy for deterministic layout.
- `VISUAL_RELATION`: select exactly one pressure, distance, reveal, echo, exposure, or collapse relation.
- `MAIN_SUBJECT`: name only the subject or evidence already approved upstream.
- `TEXT_HANDLING`: choose `short checked text + tiny attribution` or `deterministic text region`.
- `FORBIDDEN`: add literal shortcuts or topic-specific clichés without changing the Pattern's palette or hierarchy.

## Fidelity Gate / 保真门

- The core text is the first read and remains crisp at feed size.
- One emotional relation makes the hidden tension visible; no second story competes with it.
- Low-saturation field and one high-purity anchor form a bounded palette decision.
- The metaphor owns the composition, with active whitespace and no generic template background.
- Removing the source genre, title, and attribution leaves the same short-text-to-metaphor method.
- Exact source wording is checked or typeset outside the image model when fidelity matters.
