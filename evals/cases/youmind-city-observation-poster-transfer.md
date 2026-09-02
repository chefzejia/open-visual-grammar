# YouMind City-Observation Poster Transfer / YouMind 城市观察海报迁移

This adapter eval tests whether a supplied character and one ordinary city cue
can form a consistent vertical visual diary across unrelated places. It must
preserve identity, a giant short title, blue/cyan linework, limited screenprint
texture, and one daily-life action without falling back to a landmark postcard.

本用例测试上游角色与一个日常城市线索能否在不同地点形成统一的竖版视觉日记。必须保留身份、巨型短标题、蓝青线稿、限色孔版肌理和一个日常动作，不退化成地标明信片。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `minimal-handdrawn-linework`
- Adapter: `adapters/youmind-city-observation-poster.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [城市观察海报](https://youmind.com/~skills/019f7303-74b9-7c4a-a026-d6f1daef5caf)

## Fixed Topic Pairs / 固定主题对

| Place cue | Character identity anchor | Everyday action | Title policy |
| --- | --- | --- | --- |
| coastal commuter city | same person with a long braid and yellow rain shell | waits under an elevated rail with a reusable cup | short checked city marker |
| inland night market city | same person with the same braid and rain shell | carries a folded stool past a closing food stall | short checked city marker |

Keep the same `3:4` ratio, audience, linework, palette budget, and text policy
for all candidates within a place. The pair avoids fixed landmarks so the
observation method, not tourism content, is tested.

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
City marker:
Character identity anchors:
Everyday action:
Emotional cue:
First read:
Giant title region:
Blue/cyan linework:
Screenprint treatment:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain what the character is observing and why the city cue is
visible through ordinary action. “Travel poster” is not a valid argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each place while keeping the score fixed:

1. `Character and Title`: the subject anchors one side and the giant marker
   creates the counterweight.
2. `Daily Scene Plate`: one simplified everyday action owns the field while the
   character remains the identity witness.
3. `Quiet City Index`: the marker, one repeated line rhythm, and one local object
   form a compact diary entry.

If a candidate needs a skyline, landmark collage, map, or second protagonist,
record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- The same character remains identifiable by silhouette, braid, shell, and pose.
- One ordinary action conveys a city mood without a tourism checklist.
- The giant title or marker, character, and daily cue share one clear `3:4`
  hierarchy.
- Blue/cyan linework, limited color, and restrained screenprint texture remain
  stable across both places and all three candidates.
- Exact title text is checked or reserved for deterministic post-layout.
- No source character, copied landmark, slogan, or brand framing appears.

## Failure Signals / 失败信号

- The character becomes a generic mascot or changes identity between places.
- A skyline, landmark list, or souvenir symbol carries the first read.
- The title dominates while the daily action is decorative or absent.
- The output becomes a photographic postcard, glossy 3D render, or dense map.
- The candidates are only color, font, or crop changes.

Store prompts and generated candidates in the consuming project's `_work/`
directory, not in this repository. Feed only operator-reviewed learning back
into the adapter or its anti-patterns.
