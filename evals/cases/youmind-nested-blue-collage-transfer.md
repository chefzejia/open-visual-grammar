# YouMind Nested Blue Collage Transfer / YouMind 中蓝嵌合拼贴迁移

This promotion-candidate eval tests whether the public `中蓝嵌合拼贴海报 v0.5`
method transfers beyond its sample portraits and phrases. It must preserve the
three-layer paper/blue/paper relation, clipped torn edges, halftone silhouette,
handwritten orbit, and one small utility cue without becoming a fixed subject or
copied slogan.

本用例用于晋级前测试，判断公开 `中蓝嵌合拼贴海报 v0.5` 方法能否迁移到示例人物与文案之外。必须保留纸张/蓝区/纸片三层关系、贴边手撕形、半调剪影、手写环绕和一个小型功能线索，同时不固定主体或复制示例口号。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern or adapter yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [中蓝嵌合拼贴海报 v0.5](https://youmind.com/~skills/019fdccd-b2a8-7256-84ea-2d24d6b5fac7)

## Fixed Input Contract / 固定输入契约

Keep the same square or near-square ratio, audience, copy policy, and material
budget across all candidates. The topics supply the subject silhouette and the
short checked line. Do not add a scene, logo, or extra decorative sticker.

| Topic | Supplied subject | Short checked line | Utility cue |
| --- | --- | --- | --- |
| Repair bench | one adjustable wrench with a visibly worn jaw | `FIX THE SMALL THING` | one barcode-like repair ID |
| Seed exchange | one folded seed packet with a sprout silhouette | `SAVE WHAT GROWS` | one tiny date stamp |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Subject silhouette:
Short checked line:
Utility cue:
First read:
Outer paper layer:
Blue field:
Inner torn-paper layer:
Halftone treatment:
Text orbit:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain how the nested field makes the subject and line feel like
one poster. “Blue collage” is not a sufficient visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Nested Field`: all three layers are visible and the subject silhouette owns
   the first read.
2. `Edge Clip`: clipped torn pieces and the blue boundary carry the composition;
   the subject remains a single halftone mass.
3. `Utility Cue`: the same nested field is tested with one barcode or date cue;
   no extra copy is allowed.

If a candidate needs additional stickers, a second scene, or a new color system,
record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- The wrinkled paper border, blue field, and inner torn-paper pieces read as
  three intentional layers.
- One supplied subject silhouette remains legible before halftone texture or
  handwritten copy is inspected.
- The torn pieces meet the blue boundary with clipped corners and controlled
  edges; they do not become random scraps.
- Handwritten orbit and one barcode/date cue support the poster without replacing
  the subject or introducing pseudo-text.
- The same contract works for both unrelated topics and all three candidate
  families.
- No source portrait, sample phrase, logo, or exact decorative coordinate is
  copied.

## Fail Signals / 失败信号

- The result is a generic blue poster, sticker board, or magazine collage.
- The three layers collapse into one flat rectangle or glossy 3D stack.
- Halftone and handwritten text dominate so the subject silhouette disappears.
- Extra props, slogans, or decorative scraps are needed to make the topic read.
- The two topics require different layouts, or the candidates are only hue and
  crop changes.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
