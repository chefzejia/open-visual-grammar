# YouMind Single-Accent Editorial Ink Transfer / YouMind 单强调色编辑墨线迁移

This adapter eval tests the public YouMind editorial-ink method without copying
a brand's characters, source composition, or exact wording. The route must keep
heavy black handdrawn contours, local halftone, a near-white paper field, one
semantic accent, and a safe text-zone policy across unrelated topics.

本用例测试公开 YouMind 编辑墨线方法能否迁移，同时不复制品牌角色、来源构图或原文案。候选路线必须
在无关主题之间保持粗黑手绘轮廓、局部半调点、近白纸面、一种语义强调色和安全文字区策略。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `minimal-handdrawn-linework`
- Optional adapter: `adapters/youmind-single-accent-ink.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [类 Notion 插画工坊](https://youmind.com/~skills/01a022c6-be4a-7f9f-bb57-61ab82b5afd9)

## Fixed Input Contract / 固定输入契约

Use synthetic or operator-approved public-safe source material in the consuming
project. Keep the same near-white paper, one-accent budget, local-halftone rule,
and text policy across candidates. Do not reference a brand or its artwork.

| Topic | Visual action | Main subject | Concrete evidence | Accent target |
| --- | --- | --- | --- | --- |
| A library return slot receives a book after hours | a hand places one book through the slot | return slot and book | timestamp card and slot opening | blue on the book spine |
| A repair team hands off one missing cable | one worker passes the cable to another | two hands and cable | labeled connector and open tool case | red on the connector |

The topics are unrelated. The second row checks that one accent can mark a
functional relationship without turning into a multi-color diagram.

## Required Visual Argument / 必填视觉论证

Record before compiling the runtime prompt:

```text
Visual job:
Audience:
Visual action:
Main subject:
Concrete evidence:
First read:
Accent target:
Pattern route:
Pattern fidelity anchors:
Pattern density:
Text handling:
Topic-specific forbidden:
```

The action and evidence own meaning. Ink, halftone, whitespace, and the single
accent are style decisions; they may not substitute for the relation.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates per topic while keeping the score fixed:

1. `Single Editorial Vignette`: one action in a generous near-white paper field.
2. `Two-State Editorial Pair`: a before/after or handoff pair only when the
   supplied action genuinely needs comparison.
3. `Text-Zone Plate`: the visual relation owns one region and a short checked
   statement occupies a clean deterministic text zone.

These are composition families within the adapter. Do not add brand characters,
smooth vector decoration, or a second accent to rescue a weak candidate.

## Pass Signals / 通过信号

- Heavy black handdrawn contours carry the subject and action before texture or
  text is inspected.
- Fine halftone is local to the subject, shadow, or evidence plane and never
  becomes full-frame noise.
- Exactly one source- or brief-derived accent color explains the intended cue.
- Near-white paper and active whitespace remain visible across all candidates.
- Short exact text is checked or reserved for deterministic post-layout; the
  action remains readable when the text zone is hidden.
- The same adapter transfers without a copied brand character, slogan, or layout.

## Fail Signals / 失败信号

- The image becomes a generic flat-vector illustration or corporate stock graphic.
- Multiple accents compete, or halftone spreads across the entire page as noise.
- Whitespace is removed to fit decorative objects or a dense sticker sheet.
- The action and evidence require the caption to be understood.
- Long pseudo-Chinese, brand artwork, logos, signatures, or source coordinates
  appear.
- Candidates differ only by color grade or paper texture rather than structure.

## Run Record / 运行记录

Store public-safe references, prompts, generated candidates, and operator
decisions in the consuming project's `_work/` directory. Only reviewed,
method-level learning may return to OVG.
