# YouMind Monstrous-Scale World Transfer / YouMind 巨物尺度世界迁移

This promotion-candidate eval tests whether the public YouMind giant-world method
transfers beyond palaces, obelisks, and alien megastructures. It must preserve
extreme scale contrast, one tiny human witness, one world-building silhouette,
and print-like atmosphere without copying the source's lore or coordinates.

本用例用于晋级前测试，判断公开 YouMind 巨物世界方法能否迁移到宫殿、方碑和外星巨构之外。必须保留极端尺度对比、一个微小人类见证者、一个构建世界的主体轮廓和版画氛围，同时不复制原始世界观或构图坐标。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [巨物构建式插画](https://youmind.com/~skills/019fcb6f-1371-740f-8547-681b16e36e5d)

## Fixed Input Contract / 固定输入契约

Keep the same aspect ratio, audience, visual job, short text policy, and
material budget across all candidates. The topic supplies the world silhouette
and the witness action. Do not add palace, obelisk, alien monument, or generic
fantasy lore just to make the scale feel large.

| Topic | World silhouette | Tiny witness | Visible action |
| --- | --- | --- | --- |
| Salt-flat repair | a wind farm stretching beyond the frame | one technician beside a broken tower base | repair makes the infrastructure legible |
| Reef recovery | a layered coral shelf filling the frame | one diver at the edge of the reef | the witness measures a living boundary |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
World silhouette:
Tiny witness:
Witness action:
Scale contrast:
Frame escape:
First read:
Print atmosphere:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain why the witness is present and what the world teaches at
first read. “Make it epic” is not a valid visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Edge Cut`: the world silhouette visibly exceeds at least one frame edge while the witness anchors scale.
2. `Witness Trail`: one path, cable, current, or repair trace connects the witness to the larger world.
3. `Print Monument`: a flatter, reduced silhouette plate tests whether scale survives with fewer atmospheric marks.

If a candidate needs extra characters, a second world, or a new lore scene to
read, record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- The world reads as monumental before texture or explanatory text.
- The witness is visibly tiny yet has a concrete action.
- The frame escape creates scale rather than accidental cropping.
- One silhouette or relation carries the world; atmosphere stays print-like and subordinate.
- The same method survives both topics and all three candidate families.
- No source palace, obelisk, alien structure, slogan, or exact coordinate is copied.

## Fail Signals / 失败信号

- “Epic” is expressed only through glow, fog, or a dramatic camera angle.
- The witness becomes a normal-sized hero or a decorative dot with no action.
- The frame contains a complete miniature scene instead of a world exceeding it.
- Several landmarks compete, so no single world silhouette controls the read.
- The three candidates are palette, lens, or weather changes rather than structural solutions.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
