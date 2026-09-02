# YouMind Multi-Page Handdrawn Explainer Transfer / YouMind 多页手绘解释迁移

This case tests the optional multi-page handdrawn-explainer adapter distilled
from the public YouMind gallery. It checks whether a page sequence, recurring
anchor, and mobile-first paper grammar transfer without copying the source
skill's animals, costumes, props, or copy.

本用例测试从 YouMind 公开技能提炼的多页手绘解释 adapter，检查页面序列、重复锚点和移动端纸面语法能否迁移，
同时不复制来源技能的动物、服装、道具或文案。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover` sequence
- Runtime: `image-generation`
- Pattern: `narrative-journal-infographic`
- Adapter: `adapters/youmind-multi-page-handdrawn-explainer.md`
- Source study: `docs/youmind-style-atlas.md`

## Fixed Topic Pairs / 固定主题对

| Topic | Core argument | Sequence logic | Recurring anchor |
| --- | --- | --- | --- |
| replenishing an emergency kit | a small inventory check prevents a larger interruption | progression | one labeled kit box and its checklist card |
| losing context between team handoffs | one visible handoff note preserves the decision chain | comparison | one neutral folder or note card passed between two desks |

Use the same audience and `9:16` aspect ratio for all candidates within one
topic. The pair is intentionally unrelated to the source skill's pet-story
framing.

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

For the adapter slots also record `PAGE_COUNT`, `SEQUENCE_LOGIC`,
`RECURRING_ANCHOR`, and one short `PAGE_BEATS` sentence per page.

## Three-Candidate Requirement / 三候选要求

Generate exactly three sequences for each topic:

1. primary route: the clearest page progression or comparison;
2. alternate route: another supported sequence family with the same argument;
3. boundary probe: fewer decorations and a simpler anchor, while keeping page order and text zones intact.

Keep the same score and topic contract across all three. Do not change the
recurring anchor merely to create variety.

## Pass Signals / 通过信号

- Each page advances one claim, and the reading order is clear without a long caption.
- The recurring anchor stays recognizable, role-stable, and directionally coherent across the sequence.
- Warm near-white paper, low-saturation handdrawn marks, and sparse collage accents form one controlled material system.
- Headings, scenes, and takeaways remain readable at mobile size; exact copy can be typeset deterministically.
- Removing any pet-specific or costume-specific language leaves the same sequence grammar.
- No dashboard, sticker sheet, mascot brand, copied source wording, or private reference appears.

## Failure Signals / 失败信号

- Pages are unrelated illustrations with no progression, comparison, steps, or timeline.
- The recurring anchor changes identity, scale, role, or direction between pages.
- Every page has equal-weight decoration, dense labels, or scrapbook clutter.
- Generated text is long, pseudo-Chinese, or carries the argument by itself.
- The adapter survives only when cats, costumes, or source-specific props are copied.
- A page needs a new composition family not supported by `narrative-journal-infographic`.

Store prompts and generated candidates in the consuming project's `_work/`
directory, not in this repository. Feed only operator-reviewed learning back
into the adapter or its anti-patterns.
