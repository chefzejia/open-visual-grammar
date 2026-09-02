# YouMind Animal Mascot Calibration / YouMind 动物吉祥物校准

This optional adapter distills the public YouMind `3D Vivid Mascot 动物 IP 图标`
description into a brand-neutral icon method. It keeps species credibility,
natural color identity, one functional cue, and platform-safe continuity while
removing any source brand, logo, prop, or character design.

这份可选 adapter 将公开 YouMind“3D Vivid Mascot 动物 IP 图标”的方法抽象成品牌中立的图标语法。
它保留物种可信度、自然色彩身份、一个功能线索和跨平台连续性，去掉来源品牌、Logo、道具和具体角色设计。

## Style Signature / 风格签名

- Start with one recognizable animal silhouette whose anatomy, species cues, and natural color identity remain credible.
- Encode the product function through posture, negative space, one body feature, or one nested opening. Do not attach a logo, badge, costume, or decorative prop.
- Keep the `soft-2-5d-icon` square boundary, safe inset, shallow relief, and single soft-light direction. The mascot must survive 32 x 32 and 64 x 64 inspection.
- Use broad matte or satin color areas and two or three quiet depth planes. Expression may support personality but cannot replace the function cue.
- Keep iOS and macOS variants as the same mark; only platform framing or corner treatment may change.
- Text is absent by default. A verified glyph belongs to the product brief and must remain subordinate to the silhouette.

- 从一个可辨认的动物剪影开始，保留可信的身体结构、物种线索和自然色彩身份。
- 通过姿态、负形、一个身体特征或一个内嵌开口表达产品功能，不能贴 Logo、徽章、服装或装饰道具。
- 保持 `soft-2-5d-icon` 的方形边界、安全内缩、浅浮雕和单一柔光方向，缩小到 32 x 32 和 64 x 64 仍可辨。
- 使用宽色面、哑光或缎面材质与两到三层安静深度。表情可以辅助性格，但不能替代功能线索。
- iOS 与 macOS 变体必须是同一标记，只允许平台框架或圆角处理变化。
- 默认无文字；只有产品契约明确需要时才使用经过核对的字形，且必须服从剪影。

## Composition Families / 构图家族

1. **Primary Animal Emblem:** one centered species silhouette, with the function carried by pose or negative space.
2. **Pose Relation:** a shallow inset, opening, or body orientation shows how the animal performs the supplied function.
3. **Body Feature Cue:** one ear, eye, tail, wing, leaf-like appendage, or other species feature becomes the functional hinge.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} on {{PLATFORM}} at {{ASPECT_RATIO}}.

The upstream icon argument is authoritative:
- Animal species: {{ANIMAL_SPECIES}}
- Icon function: {{ICON_FUNCTION}}
- Identity anchor: {{IDENTITY_ANCHOR}}
- Functional cue: {{FUNCTION_CUE}}
- Pose or negative-space relation: {{POSE_RELATION}}
- Natural color identity: {{NATURAL_PALETTE}}
- Text handling: {{TEXT_HANDLING}}

Use the Soft 2.5D Icon grammar with the YouMind animal-mascot calibration.
Preserve {{ANIMAL_SPECIES}} anatomy, recognizable silhouette, and natural color
identity. Encode {{ICON_FUNCTION}} through {{FUNCTION_CUE}} and
{{POSE_RELATION}}; use only one functional cue and do not invent a second story.
Expression may support the personality but must stay subordinate to recognition.

Keep a stable square boundary and safe inset for {{PLATFORM}}. Build two or
three shallow planes, overlaps, or relief levels with one soft consistent light
direction. Use broad matte or satin color areas and keep the mark identifiable at
32 x 32 and 64 x 64. Platform framing may change the crop or corner treatment,
but the animal mark and identity anchor must remain the same.

Do not attach a logo, badge, costume, tool, hat, sign, or decorative prop. Follow
{{TEXT_HANDLING}} and do not let a wordmark carry the function.

Avoid wet gloss, chrome, inflated plastic, thick bevels, photoreal fur, cinematic
backgrounds, miniature UI, generic fantasy creatures, random color changes,
long generated text, pseudo-symbols, logos, signatures, and watermarks.
{{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `ANIMAL_SPECIES`: use a supplied species or choose one only when the brief authorizes derivation; keep its anatomy credible.
- `IDENTITY_ANCHOR`: name one stable silhouette or species cue, not a character backstory.
- `FUNCTION_CUE`: choose one body feature, opening, or negative-space relation that explains the function.
- `POSE_RELATION`: describe one physical pose such as wrapping, resting, peering, carrying, or sheltering.
- `NATURAL_PALETTE`: state the species-derived palette; do not recolor for fashion.
- `TEXT_HANDLING`: normally use `no text`; use one verified glyph only when the icon contract requires it.
- `FORBIDDEN`: add topic-specific failures only. The base Pattern's small-size and depth rules still apply.

## Fidelity Gate / 保真门

- Species identity and anatomy are recognizable before material is inspected.
- One posture, negative space, or body feature communicates the product function at thumbnail size.
- Matte shallow depth supports the silhouette without glossy toy rendering or photoreal fur.
- iOS and macOS framing preserve the same mark and identity anchor.
- Removing the animal's name, palette, and 2.5D adjectives leaves the same function-bearing icon grammar.
- No logo, badge, costume, prop, copied character, or generated wordmark is required for recognition.
