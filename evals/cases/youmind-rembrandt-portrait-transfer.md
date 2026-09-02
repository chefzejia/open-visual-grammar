# YouMind Adaptive Rembrandt Portrait Transfer / YouMind 自适应伦勃朗肖像迁移

This promotion-candidate eval tests the public YouMind studio-portrait method
without copying a source person's likeness, pet, crop, or lighting coordinates.
The route must choose a plausible key-light relation for the supplied face or
animal structure, preserve identity anchors, keep a clean deep studio field,
and preserve the source ratio before any optional editorial crop.

本用例用于晋级前测试，判断公开 YouMind 棚拍肖像方法能否迁移，同时不复制来源人物、宠物、裁切或
灯光坐标。候选路线必须根据输入的人脸或动物结构选择可信的主光关系，保留身份锚点，维持干净深色
棚拍背景，并在可选编辑裁切之前优先保留原始画幅。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical photographic Pattern yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [伦勃朗光影棚肖像](https://youmind.com/~skills/01a0391e-b2ed-7c90-816f-8e62f4f3450c)

## Fixed Input Contract / 固定输入契约

Use synthetic or operator-approved public-safe references in the consuming
project; do not place private portraits or source previews in this repository.
Keep the same audience, lighting intent, text-free policy, and identity-first
score across all candidates. Preserve each source's ratio by default.

| Topic | Subject | Identity anchors | Source presentation |
| --- | --- | --- | --- |
| Ceramic conservator after documenting a glaze crack | fictional adult conservator | short dark curls, narrow oval glasses, small cheek mark, calm focused gaze | quiet three-quarter portrait, 4:5 |
| Retired rescue greyhound after its first calm walk | fictional greyhound | brindle coat patch, folded left ear, pale muzzle, long narrow snout | side-leaning portrait, 3:2 |

The topics are deliberately unrelated. The second row checks that light follows
animal structure instead of forcing a human facial triangle.

## Required Visual Argument / 必填视觉论证

Record before compiling the runtime prompt:

```text
Visual job:
Audience:
Subject:
Identity anchors:
Source angle and ratio:
First read:
Key-light relation:
Shadow relation:
Studio background:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The first read is the supplied subject and its identity anchors. “Cinematic” is
not a sufficient visual argument. The score must say why the chosen light fits
the face, fur, ears, muzzle, or other visible structure.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates per topic while keeping the score fixed:

1. `Structure-Led Close Portrait`: preserve the source angle and let one soft key
   light shape the face or animal head.
2. `Measured Three-Quarter`: permit only a small shoulder or head adjustment when
   it improves the light relation without changing identity.
3. `Ratio-Preserving Editorial Crop`: retain the original ratio; if a requested
   cover ratio requires more room, extend only the clean studio background.

These are framing and light tests within one photographic method, not three film
genres. Do not add a narrative set, costume swap, prop story, or alternate color
grade to rescue a weak candidate.

## Pass Signals / 通过信号

- Identity anchors, age or breed, expression, and supplied posture remain readable
  before the light treatment is judged.
- The key light and shadow relation is physically plausible for the supplied face
  or animal structure; a Rembrandt triangle is not forced where it would distort
  the subject.
- The background is a smooth deep charcoal-to-black studio field with no grain,
  smoke, glow, banding, or synthetic texture.
- Original ratio and important hair, ears, muzzle, hands, or shoulders are kept;
  any extension adds only clean background.
- The same method transfers from person to pet without importing a source-specific
  likeness, composition, or lighting coordinate.

## Fail Signals / 失败信号

- The output is a generic stock portrait, a waxy beauty retouch, or a cinematic
  wallpaper where identity anchors could be swapped without consequence.
- A triangular nose shadow is forced onto an unsuitable face or animal head, or
  the light direction contradicts the visible form.
- Film grain, sensor noise, paper texture, smoke, glow, color banding, or AI
  texture becomes the main material.
- Cropping removes identity anchors or fills the frame with invented scenery.
- Candidates differ only by color grade, contrast, or a new movie genre.
- Text, logos, signatures, or a copied source person's likeness appears.

## Run Record / 运行记录

Store public-safe references, prompts, generated candidates, and operator
decisions in the consuming project's `_work/` directory. Only reviewed,
method-level learning may return to OVG.
