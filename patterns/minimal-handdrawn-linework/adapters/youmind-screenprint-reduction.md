# YouMind Screenprint Reduction Calibration / YouMind 丝网版画减法校准

This optional branch adapts the public YouMind [`P086`](https://youmind.com/~skills/01a05a84-4d05-7de1-a50c-073f30ee39dc)
description for image generation. It keeps a single focal direction and a
small set of decisive visual information, then uses bounded source-derived spot
colors and hand-applied ink variation. It does not change the base Pattern's
near-white, low-saturation default; choose this branch only when the visual
argument explicitly calls for a screenprint plate.

这份可选分支将公开 YouMind [`P086`](https://youmind.com/~skills/01a05a84-4d05-7de1-a50c-073f30ee39dc) 的描述编译为图像生成方法。它先保留单一视觉方向和少量决定画面成立的信息，再用受控的源自主题专色与手工油墨变化建立版画感。它不改变基础 Pattern 的近白、低饱和默认值；只有视觉论证明确需要丝网版画图版时才选择此分支。

## Style Signature / 风格签名

- Keep only three to five decisive visual facts from the supplied subject or relation.
- Preserve one focal point and one dominant direction before adding ink texture.
- Use two to four source-derived spot colors on a neutral paper field; colors stay bounded and purposeful.
- Let dry-brush, brayer texture, dragged ink, broken ink, and uneven coverage show pressure variation without fake aging.
- Use whitespace as an active compositional field, not as unused margin.
- Keep text short and subordinate, or reserve an aligned region for deterministic typesetting.

- 只保留主体或关系中三到五个决定画面成立的视觉事实；
- 先保留一个明确焦点和一个主要方向，再加入油墨材质；
- 在中性纸基上使用两到四种源自主题的专色，颜色必须受控且有功能；
- 让干刷、滚墨、拖墨、断墨和不均匀覆盖呈现压力变化，但不要伪造做旧；
- 把留白当作主动构图场，而不是未使用的边缘；
- 文字保持短且退后，或为确定性排版预留对齐区域。

## Composition Families / 构图家族

1. **Focal plate:** one reduced silhouette or geometric subject with a single directional cue.
2. **Directional pair:** two related states share one paper field and one ink vocabulary only when the source relation is genuinely comparative.
3. **Quiet crop:** a restrained crop or offset leaves more paper visible while retaining the same focal direction.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework Pattern with the YouMind Screenprint
Reduction calibration. Reduce {{MAIN_SUBJECT}} to three to five decisive visual
facts, preserving its key proportion, direction, structure, or relation. Choose
Focal Plate, Directional Pair, or Quiet Crop according to the supplied argument;
do not invent another art direction.

Build a clean neutral-paper field with one clear focal point and one dominant
direction. Use two to four source-derived spot colors from {{SPOT_COLOR_TARGETS}}.
Keep every color functional and bounded. Add dry-brush, brayer texture, dragged
ink, broken ink, and uneven coverage as restrained screenprint evidence. Let
paper and whitespace remain visible and active. Keep text short and subordinate,
or reserve an aligned blank region for deterministic typesetting.

The result should feel like a considered screenprint plate: geometric reduction,
human pressure variation, and quiet editorial order. Do not copy any reference
subject, slogan, composition, or coordinates.

Avoid full-frame mosaic, one-bit game UI, glossy 3D, photographic realism,
uniform vintage grime, decorative sticker clutter, dense dashboards, long
generated text, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `SPOT_COLOR_TARGETS`: name two to four meaningful color relationships from the supplied source; never ask for random palette rotation.
- `TEXT_HANDLING`: choose `short checked type` or `aligned blank region for deterministic typesetting`.
- `FORBIDDEN`: add topic-specific failures only; the base Pattern's boundaries still apply.

## Fidelity Gate / 保真门

- Three to five decisive visual facts remain identifiable before texture inspection.
- One focal point and one dominant direction control the page.
- Two to four spot colors are source-derived, bounded, and subordinate to structure.
- Ink variation feels physical and purposeful rather than generic vintage noise.
- Removing the ink adjectives still leaves the same reduced subject and whitespace relation.

- 材质检查前仍能辨认三到五个决定性视觉事实；
- 一个焦点和一个主要方向控制页面；
- 两到四种专色来自主体或关系，数量受控且服从结构；
- 油墨变化具有物理感和功能，不退化成泛化复古噪声；
- 去掉油墨形容词后，减法主体和留白关系仍然成立。
