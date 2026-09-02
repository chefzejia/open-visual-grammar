# YouMind Mist-Blue Metaphor Transfer / YouMind 雾蓝单隐喻迁移

This adapter eval tests the public YouMind `隐喻标题插画` method without copying
its source title, composition, or one-off metaphor. The route must keep short
text as the first read, use one visual relation to expose the hidden tension,
and preserve a restrained 16:9 editorial system.

本用例测试公开 YouMind “隐喻标题插画”方法能否迁移，同时不复制来源标题、构图或一次性隐喻。候选
路线必须让短文字成为第一眼信息，用一个视觉关系揭示隐藏张力，并保持克制的 16:9 编辑系统。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `semantic-concept-poster`
- Optional adapter: `adapters/youmind-mist-blue-metaphor.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [隐喻标题插画](https://youmind.com/~skills/019fd4e1-3ad5-7825-8747-2fca4673fb07)

## Fixed Input Contract / 固定输入契约

Use short, checked titles and synthetic or operator-approved public-safe visual
inputs in the consuming project. Keep `16:9`, mist blue/off-white, one warm
accent, local spray grain, and text-first hierarchy fixed across candidates.

| Topic | Core text | Hidden tension | Visual relation | Warm accent |
| --- | --- | --- | --- | --- |
| A queue that grows while the service window stays open | 等待也在消耗 | time passes without progress | a thin pressure line compresses the text field | amber at the closing edge |
| A saved idea disappears when no one revisits it | 收藏不是记住 | storage without recall | a small reveal window exposes a fading duplicate | ochre on the exposed fragment |

The topics are unrelated. The title, relation, and accent must be re-derived for
each row; do not reuse one metaphor object as a template.

## Required Visual Argument / 必填视觉论证

Record before compiling the runtime prompt:

```text
Visual job:
Audience:
Core text:
Literal meaning:
Hidden tension:
Best visual relation:
Main subject or evidence:
First read:
Palette:
Text handling:
Pattern route:
Pattern fidelity anchors:
Topic-specific forbidden:
```

The core text must remain short and exact. The visual relation owns the
metaphor; palette and grain only calibrate the material surface.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates per topic while keeping the score fixed:

1. `Text Under Pressure`: the relation changes the text field without obscuring
   the checked title.
2. `Text and Small Reveal`: one small object or opening exposes the hidden
   tension behind the title.
3. `Text in Distance`: two related forms or a measured gap make the title's
   tension visible while the text remains dominant.

These are composition families within one adapter, not three unrelated
illustration styles. If a candidate needs a second metaphor or a new palette,
record a transfer failure.

## Pass Signals / 通过信号

- The short title is legible and owns the first read at feed size.
- One relation changes, exposes, compresses, or distances the title's meaning;
  the image is not a decorative background with pasted text.
- Mist blue and off-white remain dominant, with at most one semantic warm accent.
- Spray or print grain is local and subordinate; 16:9 whitespace remains active.
- Exact wording is checked or handed to deterministic post-layout; hiding text
  still leaves a meaningful relation.
- Both topics use the same system without copied source title, object, or layout.

## Fail Signals / 失败信号

- The image is generic fog, a robot/circuit metaphor, or a banner of unrelated
  objects beside the title.
- The relation is generic or stacked with several metaphors, so the title's
  hidden tension is not recoverable.
- The warm accent becomes a palette showcase, or grain covers the entire frame.
- Text is distorted, long, pseudo-Chinese, or carries the visual argument alone.
- Candidates differ only by hue, crop, or texture rather than composition.
- A copied source title, slogan, brand mark, or exact coordinate appears.

## Run Record / 运行记录

Store public-safe titles, prompts, generated candidates, and operator decisions
in the consuming project's `_work/` directory. Only reviewed, method-level
learning may return to OVG.
