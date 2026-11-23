# Adaptive Rembrandt Portrait

```yaml
id: adaptive-rembrandt-portrait
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Identity-first studio portraits where one plausible key-light relation follows the supplied face or animal structure.
avoid_when: Stock portrait mood, forced facial triangles, scenic portraiture, or identity-unsafe editing.
```

中文名：自适应伦勃朗棚拍肖像
English name: Adaptive Rembrandt Portrait

## Definition / 定义

This Pattern adapts a Rembrandt-like key-light relation to the structure of the
authorized subject. Identity, source ratio, and a clean charcoal-to-black studio
field come before a named lighting preset.

本 Pattern 根据经过授权的主体结构自适应伦勃朗式主光关系。身份、原始画幅和干净的炭黑棚拍场先于某个固定布光预设。

## Invariants / 不变量

- Hair, face, age, breed, expression, and posture remain identifiable before light style.
- Key direction and shadow edge agree with the actual face, fur, ears, muzzle, or shoulders.
- Deep charcoal-to-black studio field stays smooth, quiet, and free of grain, smoke, glow, or banding.
- Original ratio is preserved; extensions add only clean background.
- No source person's likeness, pet, crop, or lighting coordinate is copied.

## Composition Families / 构图家族

- **Structure-led close portrait:** source angle plus one soft key light.
- **Measured three-quarter:** small adjustment only when it improves the light relation.
- **Ratio-preserving crop:** retain the source ratio and extend only clean field when required.

## Variables / 可变槽位

`SUBJECT`, `IDENTITY_ANCHORS`, `SOURCE_ANGLE`, `SOURCE_RATIO`, `KEY_LIGHT_RELATION`,
`SHADOW_RELATION`, `STUDIO_FIELD`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for a ceramic conservator documenting a glaze crack or a retired greyhound
after a calm walk. The temperature is quiet, tactile, and observant; the field is
photographic but never a cinematic wallpaper.

## Transfer Boundaries / 迁移边界

The same structure-aware light must transfer from a human to an animal. A
Rembrandt triangle is optional; the physical face or head structure is mandatory.

## Fidelity Gate / 保真门

- Identity anchors survive with light hidden.
- Light and shadow follow the supplied structure.
- Studio field remains clean and ratio handling protects identity-bearing parts.
- Three outputs vary framing or light relation, not grade or movie genre.

## Failure Modes / 失败方式

Generic stock identity, forced nose shadow, beauty retouch, film grain, fog,
glow, unsafe crop, and copied likeness fail. Delete the Pattern if adaptive
lighting cannot be kept structure-led.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 生图 Compilation Route

Compile a structure-aware studio portrait. “Rembrandt” names a light relation,
not a requirement to force a facial triangle.

将结构感知的棚拍肖像编译成 prompt。“伦勃朗”只指布光关系，不强行制造固定的
鼻下三角光。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The identity brief is authoritative:
- Subject and identity anchors: {{SUBJECT}} / {{IDENTITY_ANCHORS}}
- Source angle and ratio: {{SOURCE_ANGLE}} / {{SOURCE_RATIO}}
- Key-light relation: {{KEY_LIGHT_RELATION}}
- Shadow relation: {{SHADOW_RELATION}}
- Text handling: {{TEXT_HANDLING}}

Use the Adaptive Rembrandt Portrait Pattern. Preserve hair, face or head
structure, age or breed, expression, posture, and source ratio before applying
light style. Choose one plausible key direction and make the shadow edge agree
with the actual face, fur, ears, muzzle, or shoulders. Keep a smooth charcoal-
to-black studio field with no grain, smoke, glow, banding, or scenic props.

Use Structure-Led Close Portrait, Measured Three-Quarter, or Ratio-Preserving
Crop only when the supplied identity brief supports it. Add no beauty retouch,
new features, unsafe crop, copied likeness, random text, logo, signature, or
watermark. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: structure before light, for both people and animals.
- `KEY_LIGHT_RELATION`: direction and softness stated in relation to the head.
- `SOURCE_RATIO`: preserve it; extend only clean field when necessary.
- `TEXT_HANDLING`: normally no text for this studio route.

## Fidelity Gate / 保真门

- Identity remains clear with the light style hidden.
- Light and shadow follow the supplied physical structure.
- The studio field is clean and ratio handling protects identity-bearing areas.
- The same adaptive logic transfers from a human to an animal.
