# YouMind Retro-Future Print Transfer / YouMind 复古未来印刷迁移

This promotion-candidate eval tests whether the public YouMind `Starfall Epic`
method transfers beyond science-fiction machinery. It must preserve a
high-density etched contour system, visible print grain, hard-edged warm/cool
blocks, and one structural subject without importing spaceships, alien lore, or
cinematic glow.

本用例用于晋级前测试，判断公开 YouMind `Starfall Epic` 方法能否迁移到科幻
机械之外。必须保留高密度蚀刻轮廓、可见印刷颗粒、硬边冷暖色块和一个结构性主体，
同时不带入飞船、外星叙事或电影化发光。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern or adapter yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [Starfall Epic｜复古未来主义科幻插画](https://youmind.com/~skills/019ff9e3-7a25-757f-93d6-8065b4dfda25)

## Fixed Input Contract / 固定输入契约

Keep aspect ratio, audience, visual job, short-text policy, and material budget
constant across all candidates. The topic supplies one recognizable structural
subject and one concrete relation; the style supplies the print plate, contour
density, and color-block logic.

| Topic | Structural subject | Concrete relation |
| --- | --- | --- |
| Terrace irrigation | a wooden water gate above stepped fields | a narrow water path makes the gate's control function legible |
| Night library return | a metal book-return slot and its sorting tray | one book path makes the handoff from reader to archive legible |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Structural subject:
Concrete relation:
First read:
Contour density:
Warm/cool block relation:
Print grain:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain what the structural subject does. “Retro-futurist” is a
surface hint, not a visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Etched Field`: a dark navy field with warm amber blocks and dense etched
   contours, testing the closest transfer to the public calibration.
2. `Split Plate`: hard-edged warm/cool planes divide the subject and its relation
   without a gradient or cinematic light source.
3. `Paper Reversal`: a warm paper field with dark contours and a bounded cool
   accent, testing whether the print grammar survives without a dark background.

If a candidate needs a spaceship, alien monument, neon glow, or extra story
objects to feel complete, record a transfer failure instead of changing the
route.

## Pass Signals / 通过信号

- The structural subject and its concrete relation are recognizable before grain
  inspection.
- Hard-edged warm/cool blocks organize the read; they do not become gradients,
  chrome, or a full-frame color filter.
- Dense etched contours and print grain create material depth while one subject
  remains dominant.
- The same contour, block, and density logic survives both non-science-fiction
  topics and all three candidate families.
- No spaceship, alien world, cockpit, neon cyberpunk, or source-specific layout is
  copied.

## Fail Signals / 失败信号

- The result is a generic cinematic sci-fi scene with no supplied subject
  relation.
- Grain and linework are decorative noise or disappear under smooth 3D shading.
- Warm/cool blocks are replaced by a gradient, glow, or uncontrolled multicolor
  palette.
- Several objects compete, so the structural subject no longer controls the
  first read.
- The three candidates are only hue or camera changes rather than structural
  solutions.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
