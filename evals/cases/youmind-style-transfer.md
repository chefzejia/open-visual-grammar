# YouMind Style Transfer / YouMind 风格迁移

This eval tests whether the style clusters extracted from the public YouMind
skill gallery transfer to unrelated topics without copying a creator's subject,
copy, or coordinates.

本用例测试从 YouMind 公开技能库提取的风格聚类，能否迁移到无关主题，同时不复制
创作者的主体、文案或坐标。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern candidates: `whimsical-journal-sketch`,
  `minimal-handdrawn-linework` (including the place-poster screenprint adapter),
  `pixel-retro`,
  `retro-pixel-halftone-tech-editorial`, `eastern-texture-handdrawn`,
  `frosted-silhouette-editorial`, `paper-sculpture-collage-editorial`
- Source study: `docs/youmind-style-atlas.md`

## Fixed Input Contract / 固定输入契约

Each run must use one of the topic pairs below. The pair stays fixed across all
three candidates for that topic. Do not attach a YouMind preview image unless it
has an operator-approved public-safe status; text-only calibration is valid.

| Cluster | Topic A | Topic B |
| --- | --- | --- |
| Handdrawn memory page | a commuter missing the last train | a plant recovering after drought |
| Structural line reduction | a library's quiet wayfinding | a kitchen workflow with one bottleneck |
| Pixel silhouette mask | a laptop's battery drain | a museum visitor moving through rooms |
| Constrained editorial print | an AI cost tradeoff | a public-service queue |
| Contemporary eastern restraint | an old neighborhood losing shade | a researcher revisiting an abandoned hypothesis |
| Swiss glass silhouette | an archive reveal in a museum | a public notice partially obscured by construction |
| Paper sculpture collage | a community garden shared tool shelf | a repair manual revealing one hidden dependency |

For each topic, record the same audience, aspect ratio, primary source contract,
and content intent in all three candidates. Only the evidence object, title
relationship, or material emphasis may vary within the chosen Pattern route.

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Primary source:
Reader pain:
False belief:
Correction:
Stakes:
First read:
Concrete evidence:
Visual action:
Why it bites:
Main subject:
Pattern layout route:
Layout instance:
Pattern:
Pattern fidelity anchors:
Pattern density:
Text handling:
Topic-specific forbidden:
```

The visual argument must stay constant across the three candidates. A broad
topic label without a physical action and evidence object is not a valid run.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic. All candidates must preserve the
same score and input contract while taking different structural solutions within
the selected cluster:

1. primary route: the cluster's strongest composition family;
2. alternate route: another supported family with the same visual action;
3. boundary probe: a deliberately restrained version that tests whether the
   pattern survives reduced material or color.

The candidates must not become three unrelated styles. If the boundary probe
requires a different pattern, record that as a transfer failure rather than
quietly changing the route.

## Pass Signals / 通过信号

- A reviewer can name the cluster from space, hierarchy, and relation before
  inspecting texture.
- The new topic is legible at thumbnail size and the first read is recoverable.
- The supplied subject, action, and evidence remain intact across all candidates.
- Removing color and material words still leaves the same structural method.
- The candidate obeys the cluster's density and accent budgets.
- No source slogan, creator name, private detail, or reference coordinate appears.
- Another agent could recompile the score using only the Pattern and adapter.

## Fail Signals / 失败信号

- The output falls back to a generic AI mascot, game UI, dashboard, or decorative
  watercolor/retro filter.
- Style survives only because the original subject, slogan, or exact composition
  was copied.
- The visual action changes between candidates or cannot be recovered without
  reading the prompt.
- Texture or color is present, but the cluster's spatial organization is gone.
- Generated text is long, unverified, pseudo-Chinese, or unrelated to the score.
- A topic needs a new composition that is not supported by the selected Pattern.

## Run Record / 运行记录

Store the run record and generated candidates in the consuming project's
`_work/` directory, not here. After operator judgment, feed only stable learning
back into the pattern as an accepted example, anti-pattern, adapter change, or
promotion decision.
