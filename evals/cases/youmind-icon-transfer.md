# YouMind Icon Transfer / YouMind 图标迁移

This eval tests whether the soft 2.5D icon grammar extracted from public
YouMind descriptions transfers across unrelated product functions without
copying a creator's object, character, palette, or platform treatment.

本用例测试从 YouMind 公开图标技能描述提取的柔和 2.5D 图标语法，能否迁移到无关产品功能，且不
复制创作者的物件、角色、配色或平台处理。

## Artifact Kind / 交付类型

- Artifact kind: `app-icon`
- Runtime: `image-generation`
- Pattern: `soft-2-5d-icon`
- Optional material adapter: `adapters/youmind-eastern-handdrawn-icon.md`
- Source study: `docs/youmind-style-atlas.md`

## Fixed Input Contract / 固定输入契约

Run each topic with the same platform, audience, aspect ratio, icon function,
and identity constraint across all three candidates. Use text-free output unless
the product brief explicitly requires one verified glyph.

| Topic | Platform | Audience | Function |
| --- | --- | --- | --- |
| Long-essay reading queue | iOS + macOS | people who save essays for focused reading | turn a long article into a short reading queue |
| Household repair finder | iOS + macOS | renters and new homeowners | identify one missing part before a repair begins |
| Quiet office focus timer | iOS + macOS | knowledge workers in noisy shared offices | protect one uninterrupted focus interval |

These topics are deliberately unrelated to the source icon examples. The icon
must express the function through one silhouette and one key feature, not through
the product name or a miniature UI.

## Required Icon Argument / 必填图标论证

Before compiling a runtime prompt, record:

```text
Visual job:
Product function:
Audience:
Platform:
Reader pain:
False belief:
Correction:
First read:
Silhouette:
Key feature:
Depth relation:
Color identity:
Pattern route:
Pattern fidelity anchors:
Pattern density:
Text handling:
Topic-specific forbidden:
```

The argument must name one recognizable mark and one concrete cue. A broad
category such as “productivity app” is not enough.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the input
contract fixed:

1. `Primary Emblem`: one dominant silhouette with no supporting object;
2. `Nested Function Relation`: one subordinate opening, inset, or support plane
   that explains the function;
3. `Character Mark`: a simplified face, posture, or appendage only when the
   product brief supports a character identity.

All candidates must remain legible at 32 x 32 and 64 x 64. If the third route
requires a new story or loses function, record a transfer failure rather than
quietly changing the Pattern.

When the Eastern Handdrawn Icon adapter is selected, keep the same score and
routes while applying its xuan-paper, watercolor, and bounded halftone material
budget. Treat it as a material calibration, not a reason to add cultural stock
symbols or a second object.

## Pass Signals / 通过信号

- Function is recoverable from silhouette and one cue before reading text.
- The mark survives 32 x 32 and 64 x 64 inspection.
- Depth is shallow, soft, and consistent; it does not become a toy render.
- iOS and macOS framing preserve the same identity.
- The color family supports the product identity rather than decorating it.
- No copied creator subject, slogan, character, or exact coordinate appears.

## Fail Signals / 失败信号

- The output is a mini dashboard, badge sheet, wordmark, or generic mascot.
- Several objects compete and the function cannot be named at thumbnail size.
- Gloss, chrome, bevels, or heavy extrusion dominate the silhouette.
- Platform variants look like separate products.
- Three candidates are only palette swaps or minor lighting changes.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning should return to
the Pattern as an adapter change, anti-pattern, or approved example.
