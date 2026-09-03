# Image Generation Adapter / 生图 Adapter

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
