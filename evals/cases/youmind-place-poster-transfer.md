# YouMind Place-Poster Transfer / YouMind 地点海报迁移

This adapter eval tests the public YouMind city-travel-poster method as a
place-led branch of `minimal-handdrawn-linework`. It checks whether a supplied
place identity, landmark, and geographic cue can share one screenprinted poster
without falling back to a generic travel filter.

本用例测试公开 YouMind 城市旅行海报方法作为 `minimal-handdrawn-linework` 地点分支时能否稳定迁移。
它检查地点身份、地标和地理提示是否能在一张丝网印刷海报中共同成立，而不是退化成泛旅行滤镜。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `minimal-handdrawn-linework`
- Adapter: `adapters/youmind-travel-poster.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [城市旅行海报](https://youmind.com/~skills/019fca5a-1620-7954-8a63-883668d1f4be)

## Fixed Input Contract / 固定输入契约

For both topics provide one verified place name, one recognizable landmark or
landmark cluster, and one geographic cue. Keep the same audience, `2:3` aspect
ratio, short-text policy, and place-poster adapter across all candidates.

| Topic | Place identity | Landmark evidence | Geographic cue |
| --- | --- | --- | --- |
| Harbor route reconnects two neighborhoods after a bridge closure | supplied coastal city | ferry terminal and reopened bridge span | waterline moving left to right |
| Mountain market gains a cooler pedestrian route in summer | supplied hillside city | covered market roof and stepped street | shade path climbing upward |

The place names and landmark facts are semantic inputs. The adapter owns the
poster frame, name hierarchy, reduced contour, collage relation, ink budget,
screenprint material, and active whitespace.

## Required Visual Argument / 必填视觉论证

Record before compiling the runtime prompt:

```text
Visual job:
Audience:
Aspect ratio:
Place name:
Verified landmark:
Geographic cue:
First read:
Visual action:
Spot-color targets:
Pattern route:
Adapter fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The landmark and cue must explain the place action without requiring a paragraph
of tourism copy. Do not invent a city skyline, monument, or slogan when the
source contract does not provide one.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates per topic with the score fixed:

1. `Name and Landmark Anchor`: the short place name and landmark share a strong
   axis inside one poster frame.
2. `Split Place Plate`: name block and landmark block counterweight each other;
   the geographic cue remains visible.
3. `Cropped Landmark Field`: the landmark exceeds one edge while paper, name,
   and cue preserve recognition.

All candidates use the same three-to-five source-aware high-saturation spot-color
budget, shaky contour, collage planes, screenprint overlap, and neutral paper.

## Pass Signals / 通过信号

- Place name, landmark, and geographic cue are legible before texture inspection.
- Removing the title still leaves a recognizable landmark and one place relation.
- The three candidates test layout decisions rather than hue, crop, or filter
  changes alone.
- High-saturation inks remain limited and tied to supplied place evidence.
- The result reads as a composed poster, not a postcard, tourist sticker sheet,
  glossy 3D render, or map dashboard.

## Fail Signals / 失败信号

- The place is represented only by generic travel icons or arbitrary skyline
  fragments.
- The title is the only evidence of location, or the landmark is unreadable
  without labels.
- Color and screenprint grain are convincing but the geographic cue disappears.
- A candidate adds invented landmarks, long pseudo-Chinese text, or modern UI
  furniture to compensate for a weak composition.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Feed only reviewed adapter changes back into OVG.
