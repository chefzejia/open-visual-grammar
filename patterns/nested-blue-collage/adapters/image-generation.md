# Image Generation Adapter / 生图 Adapter

This adapter compiles the fixed three-layer construction of
`nested-blue-collage`; it does not copy the source blue or phrases.

这份 adapter 编译 `nested-blue-collage` 的三层固定结构，不复制来源蓝色或
原图短语。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- Subject silhouette: {{SUBJECT_SILHOUETTE}}
- Short checked line: {{SHORT_CHECKED_LINE}}
- Utility cue: {{UTILITY_CUE}}
- Text handling: {{TEXT_HANDLING}}

Use the Nested Blue Collage Pattern. Build a visible wrinkled outer paper
border, a centered blue field, and a clipped inner torn-paper layer. Place one
supplied halftone subject silhouette as the first read. Add a sparse handwritten
orbit and one small barcode/date-like utility cue only when they support the
argument. All three layers must remain physically distinct and the torn edges
must clip intentionally against the blue boundary.

Choose Nested Field, Edge Clip, or Utility Cue. Keep the blue field source-aware
but not copied, and keep exact text short, checked, or reserved for deterministic
post-layout. Do not let orbit, cue, stickers, or texture replace the subject.

Avoid a generic blue poster, one flat rectangle, sticker sheet, glossy stack,
text-led recognition, gradients, random scraps, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `SUBJECT_SILHOUETTE`: one supplied object or figure with a readable contour.
- `SHORT_CHECKED_LINE`: omit or reserve it if exact lettering matters.
- `UTILITY_CUE`: one functional annotation, never a decorative sticker set.
- `BLUE_FIELD_ROLE`: state what relation the field carries in the visual score.

## Fidelity Gate / 保真门

- Outer paper, blue field, and inner torn layer are distinct at thumbnail size.
- Subject silhouette survives when orbit and utility cue are removed.
- Clipped edges are intentional and the blue field does not become a generic card.
- Removing color and texture leaves the nested construction.
