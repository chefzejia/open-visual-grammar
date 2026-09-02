# YouMind Spatial-Word Poster Transfer / YouMind 空间大字海报迁移

This adapter eval tests whether a short word can become a physical spatial
skeleton across unrelated editorial topics. It must preserve the text-first
read, one word-space relation, and one necessary interaction without copying the
source skill's sample scenes or treating typography as a decorative background.

本用例测试短词能否在不同编辑主题中成为物理空间骨架。必须保留文字第一眼、一个文字—空间关系和一个必要互动，不复制来源技能的示例场景，也不把文字当成装饰背景。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: adapter probe; no new Pattern
- Source study: `docs/youmind-style-atlas.md`
- Public source: [高级大字海报](https://youmind.com/~skills/019fc826-5a70-76da-b89e-5f00a1572231)

## Fixed Input Contract / 固定输入契约

Keep the same aspect ratio, audience, text policy, and restrained palette across
all candidates. The topic supplies the short checked word and the actor action.
Do not add a second metaphor or explain the word with a paragraph.

| Topic | Core text | Spatial skeleton | Necessary interaction |
| --- | --- | --- | --- |
| Handoff debt | `交接` | a narrow bridge made from the word | one folder is passed across a missing plank |
| Quiet recovery | `留白` | a room outlined by the word with an open wall | one plant grows toward the open side |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Core text:
Literal meaning:
Hidden tension:
Visual relation:
Spatial skeleton:
Necessary interaction:
First read:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain why the word needs a spatial body and how the interaction
changes its meaning. “Make the word visual” is not enough.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Word Barrier`: the word forms a wall or gate that the action opens or
   blocks.
2. `Word Support`: the word becomes a bridge, floor, or scaffold whose load is
   visible through the action.
3. `Word Room`: the word outlines a room or container; the action exposes one
   meaningful absence or pressure.

If a candidate needs a second metaphor, a long caption, or generic architecture,
record a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- The short core text is crisp and remains the first read.
- The physical structure clearly grows from the word's meaning rather than from
  generic architecture.
- One supplied actor or object performs a visible action that changes the
  text-space relation.
- Whitespace, palette, and surface support the relation without becoming a
  banner or a decorative scene.
- The same method works for both topics and all three candidate families.
- Exact copy is checked or moved to deterministic post-layout; no pseudo-text.

## Fail Signals / 失败信号

- The word is pasted over an unrelated illustration.
- The structure is literal architecture but the word could be removed without
  changing the scene.
- Multiple characters, symbols, or metaphors compete with the text-space.
- The actor is decorative and does not change the relation.
- The candidates are only color, camera, or font changes.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
pattern or atlas.
