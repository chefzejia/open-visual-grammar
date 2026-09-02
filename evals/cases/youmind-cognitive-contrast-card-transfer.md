# YouMind Cognitive Contrast Card Transfer / YouMind 认知反差卡迁移

This adapter eval tests whether a five-card comparison sequence can transfer
across unrelated life topics. It must keep one recurring anchor and one card
frame while making the change from an early intuitive judgment to a fuller later
judgment visible in paired scenes.

本用例测试五张对比卡能否迁移到不同人生主题。必须保持一个重复锚点和统一卡框，并在成对场景中显出从早期直觉到后来完整判断的变化。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover` sequence
- Runtime: `image-generation`
- Pattern: `narrative-journal-infographic`
- Adapter: `adapters/youmind-cognitive-contrast-card.md`
- Source study: `docs/youmind-style-atlas.md`
- Public source: [小红书爆款人生认知反差卡生成器](https://youmind.com/~skills/019fef33-504e-71cb-9201-0461bbe8a1cb)

## Fixed Topic Pairs / 固定主题对

| Topic | Recurring anchor | Early intuitive judgment | Fuller later judgment |
| --- | --- | --- | --- |
| inbox zero | one neutral folder icon carried by the same desk worker | empty inbox means the work is finished | empty inbox can hide unresolved decisions |
| weekend rest | one folded blanket carried by the same household member | free hours mean recovery happened | recovery depends on protected attention, not only time |

Use the same square or portrait card ratio, audience, and text policy for all
candidates within a topic. The pair is intentionally unrelated to any source
character or platform identity.

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Core topic:
Recurring anchor:
Card count:
Early intuition:
Fuller judgment:
Contrast rule:
First read:
Paired scene evidence:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must name what missing context changes the judgment. “Before and after”
without a changed claim is not a valid comparison.

## Three-Candidate Requirement / 三候选要求

Generate exactly three five-card sequences for each topic:

1. `Intuition to Judgment`: the early state leads, then the fuller context lands.
2. `Expectation to Consequence`: the expected benefit is paired with its hidden
   cost or constraint.
3. `Label to Lived Case`: a short claim is paired with two ordinary moments,
   keeping the anchor and card frame unchanged.

Keep the same score and topic contract across all three. Do not change the
recurring anchor merely to create variety.

## Pass Signals / 通过信号

- One stable anchor, card frame, and restrained palette recur across all five
  cards.
- Every card has two concrete states, and their difference changes the judgment.
- The fuller context is visible in the paired scene rather than carried only by
  an explanatory caption.
- Headings and recall cues remain short and legible on a phone.
- Both unrelated topics use the same comparison method and all three sequence
  families.
- No platform badges, source character, copied slogan, or fake engagement cue
  appears.

## Failure Signals / 失败信号

- Cards are unrelated illustrations or a list of tips without paired states.
- The anchor changes identity, scale, role, or direction between cards.
- The later judgment is only a longer caption; the scene does not change.
- Equal-weight decoration, dashboard panels, or sticker clutter hides the
  comparison.
- The candidates are only color, crop, or typography swaps.

Store prompts and generated candidates in the consuming project's `_work/`
directory, not in this repository. Feed only operator-reviewed learning back
into the adapter or its anti-patterns.
