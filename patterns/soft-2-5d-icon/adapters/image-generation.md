# Image-Generation Meta-Prompt / 图像生成元提示词

This adapter compiles the `soft-2-5d-icon` Pattern for image generation. It is
calibrated by public YouMind descriptions for matte 2.5D sculpture, soft-material
app icons, rounded 3D icons, and minimal character marks, not by copying their
prompts, brands, or preview images.

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream icon score is authoritative:
- Platform: {{PLATFORM}}
- Icon function: {{ICON_FUNCTION}}
- First read: {{FIRST_READ}}
- Silhouette: {{SILHOUETTE}}
- Key feature: {{KEY_FEATURE}}
- Depth relation: {{DEPTH_RELATION}}
- Color identity: {{COLOR_IDENTITY}}
- Text handling: {{TEXT_HANDLING}}

Use the Soft 2.5D Icon visual grammar. Compress the supplied function into one
recognizable square mark. Preserve {{SILHOUETTE}} as the dominant first read and
use {{KEY_FEATURE}} as the one functional cue. Choose Primary Emblem, Nested
Function Relation, or Character Mark only when the score supports that route.

If the score selects an animal or mascot, preserve its species silhouette and
natural color identity. Let posture, negative space, or one body feature encode
the product function; never attach a logo, badge, or decorative prop.

Keep a stable square boundary and safe inset. Build two or three shallow planes,
overlaps, or relief levels so {{DEPTH_RELATION}} explains the function. Keep the
mark identifiable at 32 x 32 and 64 x 64. Use one soft, consistent light direction
and matte or satin surfaces with clean edge transitions.

Use a restrained color family based on {{COLOR_IDENTITY}} with broad color areas
and few tonal steps. Platform framing for {{PLATFORM}} may change the outer crop
or corner treatment, but must not change the mark's identity. Do not add a second
story, wordmark, UI, or decorative props.

Avoid wet gloss, chrome, inflated plastic, thick bevels, heavy extrusion,
photoreal reflections, cinematic backgrounds, miniature dashboards, badge sheets,
random complementary colors, generated paragraphs, pseudo-symbols, logos,
signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `PLATFORM`: specify `iOS`, `macOS`, or both. Keep the same mark across variants;
  platform-specific framing belongs to the runtime.
- `DEPTH_RELATION`: name one physical relation such as nested, opening, resting,
  wrapping, or floating. Do not turn it into a list of lighting effects.
- `COLOR_IDENTITY`: state the subject or function-derived color family, not a
  generic palette trend.
- `TEXT_HANDLING`: normally use `no text`; use a single verified glyph only when
  the icon contract explicitly requires it.
- `FORBIDDEN`: add only topic-specific mistakes. The Pattern's small-size,
  material, and density prohibitions already apply.

- `PLATFORM`：填写 `iOS`、`macOS` 或两者。平台变体保持同一个标记，平台框架由 Runtime 处理；
- `DEPTH_RELATION`：写出一个实体关系，例如嵌套、开口、承托、包裹或悬浮，不要写成光效清单；
- `COLOR_IDENTITY`：写主体或功能导出的色系，不要写泛化的流行配色；
- `TEXT_HANDLING`：通常选择“无文字”，只有图标契约明确要求时才使用一个经过核对的字形；
- `FORBIDDEN`：只补充主题特有错误，Pattern 已有的小尺寸、材质和密度禁区不必重复。
