# YouMind Two-Color Overprint Calibration / YouMind 双色套印校准

This optional adapter distills the public YouMind P065 description into a
transferable print method. It keeps the black contour skeleton, two extracted
color lines, slight registration drift, and large paper field without copying a
source subject, slogan, or exact composition.

这份可选 adapter 将公开 YouMind P065 的描述提炼成可迁移的印刷方法。它只保留黑色轮廓骨架、两种提取色线条、
轻微套印偏移和大面积纸面，不复制来源主体、口号或精确构图。

## Style Signature / 风格签名

- Black or near-black pen lines carry the subject's contour and structure.
- Exactly two source-derived colors form parallel, overlapping, or slightly misregistered contour lines; do not add a third accent.
- The page uses a pale paper field with very large active whitespace; background complexity is removed before texture is added.
- Lines may run past a contour or remain partially open, but the subject's identity, direction, and relation stay readable.
- A narrow, slightly loose typewriter or letterpress label is allowed only when it clarifies the supplied action.
- The temperature is clever, quiet, and lightly dry rather than nostalgic, childish, or decorative.

- 黑色或近黑色钢笔线承载主体轮廓与结构；
- 恰好两种源自主体的颜色形成并行、叠压或轻微错位的彩色轮廓线，不再增加第三种强调色；
- 页面使用浅色纸面和巨大的主动留白，先删去背景复杂度，再添加材质；
- 线条可以越过轮廓或保持不完全闭合，但主体身份、方向和关系必须可读；
- 只有在能说明上游动作时，才允许使用细窄、略松的打字机或铅印小字；
- 情绪聪明、安静、略带冷幽默，不做怀旧、幼稚或装饰化。

## Composition Families / 构图家族

1. **Overprint contour plate:** one small or medium subject floats in paper space while the black skeleton and two color contours create the only visual tension.
2. **Offset memory crop:** an off-center crop preserves one supplied relation and lets the rest of the source fall away.
3. **Quiet imprint label:** a short label or note enters the paper field as a printing artifact, not as a boxed headline.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the YouMind two-color-overprint
calibration. Preserve the supplied subject's identity, direction, structure, and
{{VISUAL_ACTION}}. Remove background complexity before adding any material.

Build an overprint contour plate, offset memory crop, or quiet imprint label only
when the visual argument supports that family. Draw a black or near-black pen
skeleton first. Extract exactly two colors from {{MAIN_SUBJECT}} or
{{CONCRETE_EVIDENCE}} and use them as parallel, overlapping, or slightly
misregistered contour lines. Do not add a third accent or large color fill. Keep
the subject small or medium in a pale paper field with very large active
whitespace. Allow a few open, hesitant, or overrun lines while keeping the
relation legible.

Use a narrow, slightly loose typewriter or letterpress note only when it clarifies
{{VISUAL_ACTION}}. The note must be short and follow {{TEXT_HANDLING}}. Keep the
temperature clever, quiet, and lightly dry. Avoid vector-perfect contours,
full-color illustration, decorative backgrounds, generic titles, nostalgic grime,
random text, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The black skeleton and the two color contours remain distinct at thumbnail size.
- No third accent, palette showcase, or full-frame fill appears.
- The supplied subject and action remain readable before the printing artifact is noticed.
- Registration drift feels intentional and restrained, not like a broken render.
- Removing color and paper texture still leaves the same small-subject, large-whitespace structure.
