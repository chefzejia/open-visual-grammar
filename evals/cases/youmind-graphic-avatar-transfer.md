# YouMind Graphic Fashion Avatar Transfer / YouMind 时尚稚拙头像迁移

This promotion-candidate eval tests whether the public YouMind `稚拙涂鸦头像`
method transfers across unrelated avatar briefs. It must preserve identity
anchors in a flat, expressive fashion avatar while keeping the rough edge,
restrained color, and clean warm-white field. It must not copy a source face,
creator style label, or one-off outfit.

本用例用于晋级前测试，判断公开 YouMind `稚拙涂鸦头像` 方法能否迁移到不同头像简报。必须在扁平、富有表现力的时尚头像中保留身份锚点，同时保持粗粝边缘、克制配色与干净暖白背景，不复制来源脸部、创作者风格名或特定服装。

## Artifact Kind / 交付类型

- Artifact kind: undecided (`app-icon` versus future `profile-avatar`)
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern or adapter yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [稚拙涂鸦头像](https://youmind.com/~skills/01a013a7-0b73-7d62-acba-eaa7efcb789b)

## Fixed Input Contract / 固定输入契约

Keep the same square ratio, audience, identity policy, and material budget across
all candidates. The brief supplies the face, expression, hair, and accessory
anchors. Do not add a mascot, scene, logo, or costume to make the avatar more
interesting.

| Topic | Identity anchors | Expression or action | One optional cue |
| --- | --- | --- | --- |
| Field ecologist | cropped curls, oval glasses, long face, raised eyebrow | checking a sample with focused calm | one leaf-shaped hair clip |
| Night-shift baker | short undercut, round cheeks, small ear hoop, broad nose | tired but amused half-smile | one flour-marked cap edge |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Artifact-kind decision:
Aspect ratio:
Identity anchors:
Expression:
Optional cue:
First read:
Graphic silhouette:
Edge treatment:
Color budget:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain how the viewer recognizes the person before noticing the
stylization. “Cute avatar” is not a sufficient visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Silhouette First`: hair and face contour carry recognition with minimal
   interior marks.
2. `Expression Edge`: keep the same silhouette and push one expression cue with
   a rough marker or dry-brush edge.
3. `Accessory Mark`: use one supplied accessory as the only secondary cue and
   test whether the avatar remains identifiable without text.

If a candidate needs a detailed outfit, background scene, or extra prop to read,
record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- Hair silhouette, face shape, and expression remain identifiable before texture.
- At most one accessory cue is visible and it supports identity rather than
  becoming a logo.
- Flat shapes, rough marker or dry-brush edges, and restrained watercolor color
  feel intentional at full size and remain legible at 64 x 64 and 32 x 32.
- The warm-white field is clean and active; no scene or sticker clutter is needed.
- The same reduction method works for both topics and all three candidate
  families.
- No source-specific face, creator label, brand mark, or copied outfit is used.

## Fail Signals / 失败信号

- The output becomes a generic cartoon face after hair and expression are removed.
- Multiple accessories, props, or costume details replace the identity anchors.
- Glossy 3D, photoreal skin, heavy shadows, or a busy background dominates.
- Roughness reads as random damage rather than a controlled graphic edge.
- The two topics require different art directions, or the candidates are only
  hue and crop changes.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
