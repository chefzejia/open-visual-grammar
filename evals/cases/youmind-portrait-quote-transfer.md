# YouMind Portrait-Quote Transfer / YouMind 人像台词海报迁移

This promotion-candidate eval tests the public YouMind portrait-quote method
without copying a source person's identity, scene, wording, or coordinates. The
candidate route must preserve a portrait-led first read, a short quote in a
protected lower zone, and one scene cue that supports the quote's emotion.

本用例用于晋级前测试，判断公开 YouMind 人像台词海报方法能否迁移，同时不复制原始人物身份、场景、文案或坐标。
候选路线必须保留人像主导的第一眼、受到保护的下方短台词区，以及一个服务台词情绪的场景线索。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [电影台词人像海报](https://youmind.com/~skills/01a03c98-f494-7140-b99b-373bc2a7655c)

## Fixed Input Contract / 固定输入契约

Use a synthetic or operator-approved public-safe portrait in the consuming
project; do not place private photos or source previews in this repository. Keep
the same `3:4` aspect ratio, audience, short-quote policy, face-safe lower text
zone, and portrait-quote route across all candidates.

| Topic | Portrait subject | Short quote intent | One scene cue |
| --- | --- | --- | --- |
| Archivist returns a lost letter to its family | fictional archivist, steady gaze | recognition after recovery | archive table and opened envelope |
| Night-shift nurse reopens a neighborhood clinic | fictional nurse, tired but resolved | care continues after interruption | lit clinic doorway and empty street |

The subject identity and quote intent are semantic inputs. The route owns portrait
scale, lower quote zone, scene restraint, type hierarchy, lighting temperature,
and cinematic editorial density.

## Required Visual Argument / 必填视觉论证

Record before compiling the runtime prompt:

```text
Visual job:
Audience:
Aspect ratio:
Portrait subject:
Identity anchors:
Quote:
Quote intent:
Scene cue:
First read:
Visual action:
Portrait-to-text relation:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

Quotes must be short, verified, and placed by deterministic typesetting when
exact spelling matters. The portrait should still communicate the supplied action
when the quote is hidden.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates per topic while keeping the score fixed:

1. `Portrait Close-Up`: a close portrait owns the upper field; the lower quote
   band is quiet and aligned.
2. `Scene Mid-Shot`: a mid-shot introduces the one supplied scene cue while the
   face and quote remain separate.
3. `Negative-Space Portrait`: the subject shifts off-center and uses a larger
   lower paper or shadow field for the quote without losing identity.

These are layout routes within one portrait-quote system. Do not change the
subject into an anonymous model, add a second narrative, or use a different
cinematic genre to rescue a weak candidate.

## Pass Signals / 通过信号

- Portrait identity, pose, and supplied action remain readable before the quote
  and surface treatment are inspected.
- The short quote occupies a protected lower zone, stays legible, and does not
  cross the face or become a second headline.
- One scene cue supports the quote intent without becoming a full narrative set.
- All three candidates retain the same portrait-to-text relation across both
  unrelated topics.
- The output reads as a composed vertical editorial poster, not a movie still,
  generic quote card, or cinematic wallpaper.

## Fail Signals / 失败信号

- The quote is the only readable content, or the portrait could be replaced by
  any stock face without changing the image.
- Text overlaps the face, becomes long pseudo-Chinese, or is distorted by the
  image model when deterministic layout was required.
- Scene atmosphere overwhelms the portrait and quote relation.
- Candidates differ only by color grade, camera crop, or a new film genre.
- A source person's likeness, slogan, costume, or exact composition is copied.

## Run Record / 运行记录

Store public-safe portrait inputs, prompts, generated candidates, and operator
decisions in the consuming project's `_work/` directory. Only reviewed,
method-level learning may return to OVG.
