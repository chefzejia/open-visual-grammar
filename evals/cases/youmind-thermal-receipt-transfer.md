# YouMind Thermal Receipt Transfer / YouMind 热敏小票迁移

This eval tests whether the thermal receipt record grammar extracted from the
public YouMind gallery transfers to unrelated daily records without inventing
measurements, copying source copy, or turning into a generic vintage poster.

本用例测试从 YouMind 公开技能库提取的热敏小票记录语法，能否迁移到无关的日常记录，同时不编造测量值、
复制来源文案，或退化成泛化复古海报。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `thermal-receipt-poster`
- Source study: `docs/youmind-style-atlas.md`

## Fixed Input Contract / 固定输入契约

Each topic must keep the same aspect ratio, audience, language, field order,
and text policy across all three candidates. Use only facts supplied in the
topic record. If a field is absent, omit it; do not create a plausible value.

| Topic | Audience | Record intent | Required anchor |
| --- | --- | --- | --- |
| Missed last train | tired city commuters | turn one failed trip into a dry, verifiable record | date + station |
| First week in a new city | people keeping a private adjustment log | record a small adaptation without motivational copy | date + place |
| Quiet office outage | small teams documenting operational friction | preserve the observed interruption and one consequence | date + room or system |

These topics are unrelated to the source skill's examples. The output remains a
receipt-like record, not a scene illustration or a dashboard.

## Required Record Argument / 必填记录论证

Before compiling a runtime prompt, record:

```text
Visual job:
Record subject:
Audience:
Language:
Record anchor:
Verified facts:
Mood or state:
Quote:
Footer:
Pattern route:
Pattern fidelity anchors:
Pattern density:
Text handling:
Topic-specific forbidden:
```

The record argument must distinguish a verified fact from a mood, inference, or
quote. A broad topic label is not enough.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the record and
input contract fixed:

1. `Record Strip`: one compact single-column receipt with a short quote pause;
2. `Long Receipt`: the same field order with several verified detail lines;
3. `Quiet Stub`: a sparse record with one anchor and one closing sentence.

If a topic cannot support one of the routes without inventing content, record a
transfer failure instead of padding the receipt or changing the pattern.

## Pass Signals / 通过信号

- One continuous receipt silhouette and field order are legible at feed size.
- Every date, number, name, and place can be traced to the fixed input record.
- One short quote adds a human pause without becoming an advertising headline.
- Thermal paper variation stays restrained and subordinate to content.
- The same method survives all three topics and all three routes.
- No fake totals, barcodes, stamps, decorative cards, or source-specific copy appear.

## Fail Signals / 失败信号

- The output is a generic vintage poster, dashboard, or card stack.
- The model invents measurements, timestamps, prices, or receipt totals.
- The quote replaces the record fields or becomes long motivational copy.
- Texture carries the style while the field order and receipt silhouette disappear.
- The candidate needs a new scene composition unsupported by the Pattern.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed learning returns here as a Pattern
change, anti-pattern, accepted example, or promotion decision.
