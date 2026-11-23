# Eastern Texture Handdrawn

```yaml
id: eastern-texture-handdrawn
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Slow editorial images that need paper texture, loose ink line, whitespace, and reflective metaphor.
avoid_when: Step-by-step tutorials, hard technical proof, urgent feed warnings, or dense information diagrams.
```

中文名：东方肌理手绘
English name: Eastern Texture Handdrawn


## Definition / 定义

EN: Eastern Texture Handdrawn is a restrained editorial illustration pattern
that uses Chinese paper texture, loose linework, ink wash, and whitespace to
carry reflective visual ideas.

CN: 东方肌理手绘是一种克制的编辑插图范式，用宣纸肌理、松弛线条、淡墨和留白承载偏深、偏慢、偏有余味的视觉表达。

## Invariants / 不变量

EN:

- Chinese paper texture;
- loose handdrawn line;
- low-saturation palette;
- ink wash or handmade grain;
- whitespace as part of the composition;
- metaphor over literal explanation.

CN:

- 宣纸或手工纸肌理；
- 松弛的手绘线条；
- 低饱和配色；
- 水墨晕染或手工颗粒；
- 留白本身参与构图；
- 更偏隐喻，不做直白说明图。

## Recommended Cases / 推荐场景

EN:

- deep essays;
- cultural or reflective topics;
- slow editorial covers;
- conceptual illustrations that need warmth and restraint.

CN:

- 深度文章；
- 文化、反思、长期主义话题；
- 慢节奏编辑封面；
- 需要温度和克制感的概念插图。

## Weak Fit / 不适合

EN:

- step-by-step tutorials;
- hard technical proof;
- urgent feed warnings;
- dense information diagrams.

CN:

- 步骤型教程；
- 强技术证明；
- 紧急警告型信息流封面；
- 高密度信息图。

## Avoid / 避免

EN:

- glossy AI plastic;
- 3D render;
- photorealism;
- high-saturation clash colors;
- sci-fi glow;
- crowded decoration;
- random text, logos, signatures, or watermarks.

CN:

- 光滑塑料感 AI 图；
- 3D 渲染感；
- 写实摄影感；
- 高饱和撞色；
- 科幻发光；
- 拥挤装饰；
- 随机文字、logo、签名或水印。

## Direct Compilation Route: Colorful Ink Outline / 直接生成路线：Colorful Ink Outline

# Colorful Ink Outline Calibration / 矿彩水墨描边校准

This optional compilation route captures the brighter mineral-color branch visible in the
The documented `国风` method keeps paper, scattered perspective, dry-wet brush contrast, and
calligraphic outline while allowing a few joyful source-derived colors. It does
not turn decorative cultural symbols into mandatory content.

这份可选 compilation route 提炼“国风”技能中更明快的矿彩分支。它保留宣纸、散点透视、干湿笔触反差
和手绘描边，同时允许少量源自主体的欢快颜色。它不把装饰性东方符号变成必选内容。

## Style Signature / 风格签名

- Use warm xuan-like paper, thin wash, and broad breathing space.
- Establish the subject with a loose dark contour and a few dry charcoal or cun strokes.
- Allow two or three mineral-color roles derived from the subject, never a generic red-and-gold costume.
- Use wet wash for distance and dry marks for focal edges.
- Let scattered perspective preserve the supplied relation without forcing photographic depth.

- 使用暖色宣纸感、薄墨晕染和大面积呼吸区；
- 用松弛深色轮廓和少量干炭或皴擦建立主体；
- 允许两到三种源自主体的矿彩角色，不套用通用红金配色；
- 湿墨处理距离，干笔处理焦点边缘；
- 用散点透视保留上游关系，不强迫摄影式景深。

## Composition Families / 构图家族

1. **Scattered landscape relation:** one focal subject and a few distant wash planes share a long paper field.
2. **Outlined object study:** one object is held by loose contour, mineral accents, and a quiet wash shadow.
3. **Cloud-bridge relation:** a supplied connection uses one ribbon, cloud, path, or current as a spatial bridge, never as decorative folklore.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Eastern Texture Handdrawn grammar with the colorful-ink-outline
calibration. Place {{MAIN_SUBJECT}} on warm xuan-like paper using scattered
perspective, thin distant wash, and a loose dark handdrawn contour. Use dry
charcoal, cun, rubbing, or broken strokes on focal edges and wet wash for air and
distance. Derive only two or three mineral-color roles from the supplied subject
or evidence and apply them to clarify {{VISUAL_ACTION}}.

Choose a scattered landscape relation, outlined object study, or cloud-bridge
relation only when the upstream meaning supports it. Avoid decorative stock
mountains, cranes, seals, clouds, red-and-gold palettes, glossy 3D, photorealism,
long generated text, logos, signatures, watermarks, and {{FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- The supplied relation remains readable without cultural decoration.
- Paper, wash, and contour have separate spatial jobs.
- Mineral color remains source-derived and limited.
- Dry and wet marks create focus and distance rather than uniform texture.
- Removing color still leaves a coherent scattered-perspective composition.

## Direct Compilation Route: Eastern Restraint / 直接生成路线：Eastern Restraint

# Eastern Restraint Calibration / 东方克制校准

This optional compilation route captures the contemporary xieyi restraint described by the
documented `P068` method. It treats paper, suggestion, and empty space as an
editorial system; it does not copy traditional symbols, a source photograph, or
the original composition.

这份可选 compilation route 提炼 `P068` 技能描述的当代写意克制。它把纸面、
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

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Eastern Texture Handdrawn grammar with the eastern-restraint
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

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

This record absorbs the contemporary-eastern-restraint branch of the former
cross-cluster style-transfer check.

这份记录吸收已删除的跨聚类风格迁移检查中的当代东方克制分支。

## Stable Checks / 稳定检查

- One quiet relation, pale paper, low-saturation ink, and deliberate omission
  must remain legible before cultural or material associations are noticed.
- Loose handdrawn line and Chinese paper texture support a reflective metaphor;
  stock cultural symbols, glossy AI plastic, sci-fi glow, and crowded decoration
  do not belong.
- A second unrelated reflective topic must retain the same whitespace and
  metaphor discipline without copying source subject, lettering, or palette.

## Failure Recovery / 失败恢复

If the result is only a paper filter or a generic cultural scene, restore the
single relation and remove decorative symbols. Repeated failure to carry a
specific relation is grounds to delete the Pattern.
