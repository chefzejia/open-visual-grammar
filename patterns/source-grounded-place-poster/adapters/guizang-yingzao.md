# Yingzao Calibration / 营造校准

This adapter distills the public [guizang-yingzao-skill](https://github.com/op7418/guizang-yingzao-skill)
into the source-grounded place route. The source skill's recipes, reference
plates, scripts, and exact prompts remain external. This adapter keeps the
decision order and the visible design actions that can transfer to unrelated
places.

这份 adapter 将公开的
[guizang-yingzao-skill](https://github.com/op7418/guizang-yingzao-skill) 提炼为来源锚定的在地路线。
来源 Skill 的 Recipe、参考图、脚本和完整 prompt 仍在外部；这里保留可迁移的决策顺序和可见设计动作。

## Style Signature / 风格签名

- Treat the real source photo as `Image 1` and protect its identity anchors.
- Write four decisions before selecting a reference: subject treatment, active background, typography behavior, and one non-default interaction.
- Use one `Image 2` primary reference for a complete visual mechanism, and a neutral sparse `Image 3` guide for text range, shared axes, reading order, and planned overlap.
- Make the model perform semantic extraction, scale or position change, background reconstruction, local material, and subject-type interaction in one coherent world.
- Keep exact place facts and long text outside generated pixels; use short checked titles or deterministic text zones.
- For same-place multi-photo fusion, remove source rectangles and rebuild a common perspective, light direction, contact surface, and edge language.

- 把真实来源照片作为 `Image 1`，保护其身份锚点。
- 选参考前先写四个决定：主体处理、主动背景、文字行为和一个非默认互动。
- 用一张 `Image 2` 主导参考提供完整视觉机制，再用中性稀疏的 `Image 3` 垫图锁定文字范围、共同轴、阅读顺序和计划遮挡。
- 让模型在同一世界中完成语义抠取、尺度或位置变化、背景重建、局部材质和主体与文字的互动。
- 准确地点事实和长文案不进入生成像素；使用已核实的短标题或确定性文字区。
- 同址多图融合时去掉来源矩形，在共同透视、光向、接触面和边缘语言中重建场景。

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

Image 1 is the real source photograph and the only authority for identity.
Preserve these identity anchors: {{IDENTITY_ANCHORS}}.

The upstream place argument is authoritative:
- First read: {{FIRST_READ}}
- Subject treatment: {{SUBJECT_TREATMENT}}
- Active background: {{ACTIVE_BACKGROUND}}
- Typography behavior: {{TYPOGRAPHY_MODE}}
- Interaction action: {{INTERACTION_ACTION}}
- Composition diagnosis and one repair: {{COMPOSITION_DIAGNOSIS}} / {{COMPOSITION_REPAIR}}
- Verified short text: {{DISPLAY_TITLE}}

Use the Source-Grounded Place Poster Pattern with this Yingzao calibration.
Image 2 supplies only these visible mechanisms: {{PRIMARY_REFERENCE_MECHANISMS}}.
Image 3 is a neutral sparse layout guide; keep its exact text, shared axes,
reading order, and planned overlap, but remove all guide marks and scaffold
from the final image. Rebuild the source subject, active field, and type
relation as one editorial world. Use {{MATERIAL_BRANCH}} with a source-derived
palette and controlled texture. If multiple same-place sources are supplied,
extract their named subjects into one common perspective and light direction;
do not make a photo grid.

Keep the source geometry, facts, and place identity accurate. Do not invent
architecture, history, lettering, landmarks, brands, or symbols. Keep exact
long copy deterministic and leave only short checked text in generated pixels.

Avoid filter-only retouch, photo-plus-title islands, tourism collage, equal
photo rectangles, generic gradients, glossy plastic, long generated text,
pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: list three to five visible geometry or material features; do not use a city name as an anchor.
- `COMPOSITION_DIAGNOSIS`: choose preserve, deterministic rectify/crop, or semantic recompose and name the one observed issue.
- `COMPOSITION_REPAIR`: one action with a visible result and only low-risk continuous fill if needed.
- `PRIMARY_REFERENCE_MECHANISMS`: name two to four visible mechanisms covering subject, background, and type-image relation; never list a reference title or artist as a style instruction.
- `MATERIAL_BRANCH`: choose one main material and at most one support; derive colors from the source or verified place evidence.
- `DISPLAY_TITLE`: use only verified, observed, or user-confirmed short text. Move long metadata to deterministic layout.

## Fidelity Gate / 保真门

- Image 1 remains recognizable before texture is inspected.
- Subject, active background, typography, and interaction are visible at thumbnail size.
- Image 2 contributes a complete mechanism rather than a palette-only resemblance.
- The source photograph and title occupy one coherent spatial world.
- Multi-photo output, when requested, is a shared scene rather than a grid.
- Removing source-specific names and symbols leaves the same transferable poster method.
