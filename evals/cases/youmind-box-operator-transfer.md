# YouMind Box-Operator Transfer / YouMind 小盒小工迁移

This adapter eval tests whether one closed box-like worker can explain an
abstract article judgment, workflow, or risk across unrelated topics. It must
preserve one physical action, one low-tech evidence object or path, a pure white
field, and the parent's bounded annotation colors without copying a source
character or its wording.

本用例测试一个始终合盖的盒状小工能否在不同主题中解释抽象判断、流程或风险。必须保留一个物理动作、一个低科技证据物件或路径、纯白底和父范式的批注色彩边界，不复制来源角色或文案。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover` body illustration
- Runtime: `image-generation`
- Pattern: `whiteboard-operator-sketch`
- Adapter: `adapters/youmind-box-operator-sketch.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [小盒｜文章认知插画](https://youmind.com/~skills/019fd6ae-93c3-7a67-827b-a814a4b0847f)

## Fixed Topic Pairs / 固定主题对

| Topic | Worker action | Evidence object or path | Judgment made visible |
| --- | --- | --- | --- |
| context handoff | pass one note through a narrow slot | a folder and one connecting line | a handoff needs the decision context, not only the file |
| risk triage | filter one flagged card from a small tray | a tray with one red-marked card | a visible warning needs a concrete next action |

Keep the same 16:9 ratio, audience, white field, and label policy for all
candidates within a topic. The topics are intentionally unrelated to any source
character, brand, or platform.

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Main judgment or risk:
Closed worker:
Worker action:
Evidence object:
Before state:
After state:
First read:
Annotation color budget:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must name the one state change performed by the worker. “A cute box
explains the idea” is not a valid visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Single Handoff`: the worker moves one object from input to output.
2. `Before/After Repair`: the same worker changes one blocked or damaged state.
3. `Local Filter`: the worker selects one item from a small pile or opening.

If a candidate needs a second worker, a full system diagram, or a decorative
scene, record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- The closed worker's silhouette, orientation, and serious working posture stay
  stable and recognizable.
- One physical action visibly changes, moves, or reveals the evidence object.
- The abstract judgment is recoverable before reading the labels.
- Pure white space, thin black line, and orange/red/blue annotation boundaries
  remain controlled with at least 35% blank space.
- The same one-worker method works for both topics and all three modes.
- No source character name, copied wording, brand mark, or fake UI appears.

## Failure Signals / 失败信号

- The box worker poses without changing the object or path.
- Multiple props or workers are needed to explain the judgment.
- The image becomes a dashboard, formal architecture diagram, or sticker scene.
- Paper texture, gradients, glossy 3D, or a large decorative background replaces
  the pure white field.
- The candidates differ only by color or camera rather than action structure.

Store prompts and generated candidates in the consuming project's `_work/`
directory, not in this repository. Feed only operator-reviewed learning back
into the adapter or its anti-patterns.
