# Source Picture-Book Sequence Transfer / 来源绘本跨页序列迁移

This case tests the source-discovery adapter extracted from dPICTUS, The
Original Art, and Bologna's picture-book selection programs. It checks whether
the sequence method transfers without copying a selected book's characters,
surface, lettering, or publisher identity.

本用例测试从 dPICTUS、《The Original Art》和 Bologna 绘本评选入口提炼的来源发现 adapter，检查跨页序列方法能否迁移，同时不复制入选绘本的角色、表面、字形或出版社身份。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover` sequence
- Runtime: `image-generation`
- Pattern: `narrative-journal-infographic`
- Adapter: `adapters/source-picture-book-sequence.md`
- Source study: `docs/style-discovery-batch-2026-09.md`

## Fixed Topic Pairs / 固定主题对

| Topic | Core argument | Sequence logic | Recurring anchor |
| --- | --- | --- | --- |
| replenishing an emergency kit | a small inventory check prevents a larger interruption | progression | one neutral kit box and one checklist card |
| preserving a decision through team handoff | one visible note keeps the decision chain intact | anchor comparison | one neutral folder or note passed between desks |

Use the same audience, page count range (`4-8`), and `9:16` aspect ratio for all
candidates within one topic. The pair is intentionally unrelated to children's
book subject matter.

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

Also record `PAGE_COUNT`, `SEQUENCE_LOGIC`, `RECURRING_ANCHOR`, and one verb-led
`PAGE_BEATS` sentence per page.

## Three-Candidate Requirement / 三候选要求

Generate exactly three sequences for each topic while keeping the argument and
input contract fixed:

1. `Progression spread`: state, change, consequence, and supplied conclusion.
2. `Quiet-to-busy reveal`: sparse opening, one relation entering, and a bounded reveal.
3. `Anchor comparison`: same anchor and direction, two states, no extra story prop.

These are structural tests, not palette or crop swaps. If one family does not
fit the argument, record the boundary failure instead of inventing a fourth
family.

## Pass Signals / 通过信号

- Page order and scene changes explain the argument before texture or charm.
- Every page advances one supplied action or relation; there are no motif-only pages.
- The recurring anchor keeps its role, silhouette, direction, and small color cue.
- The material branch is consistent and subordinate to pacing; no source-specific IP appears.
- Short scene text is readable at mobile size, with exact long copy reserved for deterministic layout.
- Both unrelated topics use the same sequence grammar without becoming a dashboard or sticker sheet.

## Failure Signals / 失败信号

- Pages are attractive but unrelated, or the argument depends on a paragraph caption.
- The anchor changes identity, direction, scale, or function between pages.
- Every page becomes a uniform panel grid, decorative collage, or different material experiment.
- Cats, costumes, named characters, copied lettering, publisher marks, or source slogans carry recognition.
- A topic needs a new composition family that the adapter does not define.

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed reusable learning should return to
the adapter or Pattern.
