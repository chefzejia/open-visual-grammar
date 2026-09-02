# YouMind Colorful Ink Outline Calibration / YouMind 矿彩水墨描边校准

This optional adapter captures the brighter mineral-color branch visible in the
public YouMind [`国风`](https://youmind.com/~skills/9dabe83e-bef9-413e-b401-e75ddf5b8d95)
skill. It keeps paper, scattered perspective, dry-wet brush contrast, and
calligraphic outline while allowing a few joyful source-derived colors. It does
not turn decorative cultural symbols into mandatory content.

这份可选 adapter 提炼公开 YouMind“国风”技能中更明快的矿彩分支。它保留宣纸、散点透视、干湿笔触反差
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

## Runtime Meta-Prompt / 运行时元提示词

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
