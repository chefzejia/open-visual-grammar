# YouMind Pastoral Pixel Character Transfer / YouMind 田园像素角色迁移

This adapter eval tests the public YouMind pixel-character method without
copying a game, named character, map, costume, or sprite sheet. The route must
establish identity from a front-facing source, preserve it across a small action
set when requested, and keep one bounded background mode.

本用例测试公开 YouMind 像素角色方法能否迁移，同时不复制游戏、命名角色、地图、服装或精灵图。候选
路线必须从正面来源建立身份，需要动作组时保持身份连续，并且只使用一种受控背景模式。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `pixel-retro`
- Optional adapter: `adapters/youmind-pastoral-pixel-character.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [星露谷风格图像生成](https://youmind.com/~skills/01a05ea5-cb0c-7c69-94fd-85452b342243)

## Fixed Input Contract / 固定输入契约

Use synthetic or operator-approved public-safe references in the consuming
project. Keep a fixed grid, palette budget, target tile size, and text-free
policy across candidates. No game-specific references are allowed in the run.

| Topic | Subject | Identity anchors | Action set | Background mode |
| --- | --- | --- | --- | --- |
| Night-shift baker preparing the first tray | fictional baker | red knit cap, square glasses, rolled sleeves | load tray, check timer, lift oven door | solid |
| Community garden volunteer after a storm | fictional volunteer | yellow raincoat, braided hair, green boot patch | clear branch, tie stem, raise recovered plant | sparse pastoral |

The topics are unrelated; the second row checks that a pastoral field stays
subordinate to the character action rather than becoming a game map.

## Required Visual Argument / 必填视觉论证

Record before compiling the runtime prompt:

```text
Visual job:
Audience:
Main subject:
Identity anchors:
First read:
Action set:
Target grid and tile size:
Palette budget:
Background mode:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The source identity and action own the semantics. Pixel nostalgia, pastoral
warmth, and any panel border are Pattern decisions, not replacements for the
visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates per topic while keeping the input contract:

1. `Front Character Plate`: one readable front-facing pose on a quiet field.
2. `Action Strip`: three distinct actions on the same grid, scale, and palette.
3. `Scene Panel`: one action enters the selected background mode with at most two
   environmental cues.

These are composition families within one adapter. Do not change the character,
grid, or palette to make a weak candidate appear more detailed.

## Pass Signals / 通过信号

- Identity anchors, silhouette, and clothing blocks remain recognizable before
  the background is inspected.
- Action-strip poses share one character identity and each action is readable.
- Hard pixel edges, intentional tile scale, and a bounded source-aware palette
  remain stable across all three candidates.
- Solid or pastoral background stays subordinate and never becomes a dense map,
  HUD, or second narrative.
- No copied game asset, named character, exact scene, logo, or pseudo-text appears.

## Fail Signals / 失败信号

- The output is a generic 8-bit avatar, random sprite sheet, or decorative game
  interface with no source-supported identity.
- Hair, clothing, body proportion, or palette drifts between action poses.
- Full-frame noise, smooth gradients, glossy 3D, or detailed map decoration
  replaces the controlled grid.
- The action cannot be named without reading an invented caption.
- Candidates differ only by hue, scale, or background swap rather than a real
  composition test.

## Run Record / 运行记录

Store public-safe references, prompts, generated candidates, and operator
decisions in the consuming project's `_work/` directory. Only reviewed,
method-level learning may return to OVG.
