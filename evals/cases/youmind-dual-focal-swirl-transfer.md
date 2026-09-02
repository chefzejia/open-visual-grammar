# YouMind Dual-Focal Swirl Transfer / YouMind 双焦点漩涡线描迁移

This promotion-candidate eval tests whether the dual-focal swirl-linework method
from the public YouMind gallery transfers beyond urban-night illustration. It
must preserve a readable relation between two anchors without copying the source
story, buildings, lone figure, or exact color placement.

本用例用于晋级前测试，判断公开 YouMind 技能中的双焦点漩涡线描方法能否迁移到都市夜景之外，同时不复制原始故事、建筑、孤影人物或固定配色位置。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [漩涡线描都市童话插画](https://youmind.com/~skills/019fca9f-cdc9-7fb3-b010-d35b9e1e1d0f)

## Fixed Input Contract / 固定输入契约

Keep the same aspect ratio, audience, visual job, and short text policy across
all candidates. The two anchors must be supplied by the topic, not invented by
the style. Avoid urban buildings, night streets, and a single human witness in
both topics so the transfer is meaningful.

| Topic | Anchor A | Anchor B | Relation |
| --- | --- | --- | --- |
| Archive recovery | a torn map fragment | a hand returning the missing edge | two incomplete records become legible together |
| Water sharing | a dry garden bed | a distant rain barrel | a small flow reconnects the two points |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Anchor A:
Anchor B:
Shared relation:
First read:
Line rhythm:
Density contrast:
Flat color blocks:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must identify what the viewer understands from the relation between
the anchors. A generic “whimsical illustration” is not sufficient.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Anchor Orbit`: circular line rhythm visibly guides the eye between both anchors.
2. `Flat Relation`: the same relation is carried by two flat complementary color blocks with less line density.
3. `Breath Test`: a restrained version with more open gouache field and fewer marks, testing whether the two-anchor story survives.

If a candidate needs an extra focal character, decorative city, or new palette
logic to read, record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- Both anchors are identifiable before texture inspection.
- Circular line rhythm connects the anchors rather than filling the whole frame.
- Dense and open regions create visible breathing space.
- Flat complementary blocks support the relation and do not become gradients or 3D shading.
- The same method survives both non-urban topics and all three candidate families.
- No source-specific building, lone witness, slogan, or fixed coordinate is copied.

## Fail Signals / 失败信号

- One anchor dominates and the second becomes decoration.
- Swirl lines are random background texture with no eye path.
- The result falls back to a generic watercolor scene, poster, or cityscape.
- Complementary color blocks overpower the relation or turn into a full-frame filter.
- The three candidates are camera or hue changes rather than structural solutions.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
