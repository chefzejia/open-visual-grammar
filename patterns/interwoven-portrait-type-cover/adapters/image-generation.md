# Image Generation Adapter / 图像生成 Adapter

Use this adapter when an image model creates the portrait scene or an integrated
type concept. Exact lettering, identity masks, and final typography should move
to deterministic compositing when the model cannot guarantee them.

当图像模型负责人物场景或文字交织概念时使用这份 adapter。模型无法保证准确文案、身份蒙版或最终排版时，
这些部分必须转入确定性合成。

## Required Inputs / 必填输入

```text
Platform:
Aspect ratio:
Authorized portrait source:
Identity anchors:
Exact title:
First read:
Scene cue:
Type personality:
Occlusion map:
Face-safe zone:
Platform-safe zone:
Text handling:
Topic-specific forbidden:
```

## Runtime Meta-Prompt / 运行时元提示词

```text
Create a portrait-led social cover for {{PLATFORM}} at {{ASPECT_RATIO}}.

Preserve the authorized portrait using {{IDENTITY_ANCHORS}}. The person must be
recognizable before typography or color treatment. Use only {{SCENE_CUE}} as the
supporting scene evidence.

Use the Interwoven Portrait Type Cover grammar. The exact title is
{{EXACT_TITLE}} and its first read is {{FIRST_READ}}. Route it through
{{TYPE_PERSONALITY}} and the supplied occlusion map: {{OCCLUSION_MAP}}. Let a few
selected strokes pass behind the head, body, or one foreground object, while the
remaining strokes stay in front or follow a real scene plane. Protect
{{FACE_SAFE_ZONE}} and {{PLATFORM_SAFE_ZONE}}. Build depth with overlap, scale,
crop, and perspective only.

If exact glyphs cannot be guaranteed, generate a clean portrait scene and mask
plan with reserved type corridors, then hand off the verified title to
deterministic compositing. Do not invent slogans, change identity, add a second
person, or scatter decorative lettering.

Avoid glossy 3D extrusion, generic drop shadows, illegible pseudo-text, face
collisions, stock-poster poses, unnecessary props, logos, watermarks, and
{{TOPIC_SPECIFIC_FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- Identity anchors survive before type is inspected.
- Title corridors and masks are clear enough for exact post-layout.
- One axis controls the title and one or two overlaps establish depth.
- Face and platform safety areas remain clean.
- The output reads as one portrait-type composition, not a photo plus overlay.
