# YouMind Eastern Restraint Calibration / YouMind 东方克制校准

This optional adapter captures the contemporary xieyi restraint described by the
public YouMind `P068` skill. It treats paper, suggestion, and empty space as an
editorial system; it does not copy traditional symbols, a source photograph, or
the original composition.

这份可选 adapter 提炼公开 YouMind `P068` 技能描述的当代写意克制。它把纸面、
暗示和留白当作编辑系统，不复制传统符号、原始照片或原图构图。

## Style Signature / 风格签名

- Start from the subject's gesture, relationship, or emotional temperature, not
  from a stock list of “Chinese” symbols.
- Use pale handmade paper, low-saturation ink or wash, and a few deliberate
  brush traces.
- Let omission and suggestion carry more weight than literal explanation.
- Keep one quiet focal relation and a large breathing field.
- Use restrained type only when it behaves like a page note or colophon.

- 从主体的动作、关系或情绪温度出发，不从“中国风”符号清单出发；
- 使用浅色手工纸、低饱和淡墨或淡彩，以及少量有意留下的笔触；
- 让省略和暗示比直白解释承担更多重量；
- 保持一个安静的核心关系和大面积呼吸区；
- 只有当文字像页下注或题跋时才使用克制排版。

## Composition Families / 构图家族

1. **Breathing page:** one offset subject, a long empty field, and one small
   relation cue.
2. **Diptych suggestion:** two quiet states share paper and palette when the
   source contains a real before/after or emotional contrast.
3. **Colophon plate:** a compact subject and a small checked note, with the page
   edge and paper texture doing most of the framing work.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Eastern Texture Handdrawn grammar with the YouMind eastern-restraint
calibration. Begin with the supplied gesture, relationship, and emotional
temperature. Choose a breathing page, diptych suggestion, or colophon plate only
when that family fits the visual argument.

Use pale handmade paper, low-saturation ink wash or restrained flat color, and a
few visible brush traces. Let omission, distance, scale, and negative space imply
the relation; do not fill the page with stock cranes, seals, bamboo, mountains,
or other decorative cultural symbols. Keep one quiet focal relation and let any
short checked note behave like a page annotation, not a poster headline.

Keep the emotional temperature slow, reflective, warm, and precise. Avoid glossy
3D, photorealism, souvenir aesthetics, saturated red-and-gold decoration, dense
diagrams, long generated text, logos, signatures, and watermarks.
```

## Fidelity Gate / 保真门

- The intended relation is legible through gesture, distance, scale, or omission.
- Paper and wash support the composition instead of becoming a filter layer.
- Cultural specificity comes from the subject and action, not stock symbols.
- The page remains breathable at thumbnail size and text stays short or
  deterministic.
- Removing color and paper texture still leaves the same quiet relation.
