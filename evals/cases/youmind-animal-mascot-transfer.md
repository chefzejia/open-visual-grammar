# YouMind Animal Mascot Transfer / YouMind 动物吉祥物迁移

This case tests the animal-mascot adapter distilled from the public YouMind
gallery. It checks whether species credibility, one function cue, shallow depth,
and platform continuity transfer across unrelated product functions without
copying a source character, logo, costume, or prop.

本用例测试从 YouMind 公开图标技能提炼的动物吉祥物 adapter，检查物种可信度、一个功能线索、浅层深度和跨平台连续性，
能否迁移到无关产品功能，同时不复制来源角色、Logo、服装或道具。

## Artifact Kind / 交付类型

- Artifact kind: `app-icon`
- Runtime: `image-generation`
- Pattern: `soft-2-5d-icon`
- Adapter: `adapters/youmind-animal-mascot.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [3D Vivid Mascot 动物 IP 图标](https://youmind.com/~skills/01a042f6-0942-78ab-8b7c-6a857f1e565a)

## Fixed Input Contract / 固定输入契约

Use the same `iOS + macOS` platform contract, audience, square master, and text-
free policy across all candidates within one topic. Each topic supplies one
animal and one function cue; do not change the species merely to create variety.

| Topic | Animal species | Product function | One cue |
| --- | --- | --- | --- |
| focused reading queue | fox | keep saved essays visible until a reading session | tail forms a quiet enclosing loop around one page-shaped negative space |
| household repair finder | heron | point to the one missing part before repair | beak and body axis form a precise pointing gap |
| quiet focus timer | tortoise | protect one uninterrupted interval | shell opening creates a sheltered negative-space window |

## Required Icon Argument / 必填图标论证

Before compiling a runtime prompt, record:

```text
Visual job:
Product function:
Audience:
Platform:
Animal species:
Identity anchor:
Functional cue:
Pose or negative-space relation:
Natural color identity:
Pattern route:
Pattern fidelity anchors:
Pattern density:
Text handling:
Topic-specific forbidden:
```

The argument must explain why the body feature or negative space communicates the
function. A generic “cute animal mascot” description is not sufficient.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the input contract
fixed:

1. `Primary Animal Emblem`: one centered species silhouette;
2. `Pose Relation`: the function is shown through posture or one shallow inset;
3. `Body Feature Cue`: one species feature becomes the functional hinge.

All candidates must remain identifiable at 32 x 32 and 64 x 64, and the same mark
must survive iOS and macOS framing. If a route needs a logo, costume, prop, or
second object to explain the function, record a transfer failure.

## Pass Signals / 通过信号

- Species anatomy and natural color identity are credible at thumbnail size.
- One posture, negative-space relation, or body feature communicates the function before any text.
- Shallow matte depth and one soft light direction support, rather than replace, the silhouette.
- Platform framing preserves the same identity anchor.
- Three candidates are structural routes, not palette, gloss, or camera swaps.
- No source character, logo, costume, prop, or generated wordmark is copied.

## Failure Signals / 失败信号

- The animal becomes a generic fantasy creature or a blob with decorative eyes.
- Function is explained only by a badge, tool, wordmark, or unrelated prop.
- Gloss, chrome, heavy extrusion, or photoreal fur dominates the mark.
- iOS and macOS variants look like separate products.
- The three candidates differ only in color or lighting.

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
adapter or Pattern.
