# Pattern Iteration Index / Pattern 迭代索引

This index records where the stable learning from the retired `evals/` inventory
now lives. The old directory is intentionally absent. These are direct
iteration notes, not a candidate, promotion, or evaluation lifecycle.

这份索引记录已删除 `evals/` 存量中的稳定方法现在归档在哪里。旧目录有意保持删除。
这里是直接迭代笔记，不是 candidate、晋级或评测生命周期。

## Formal Pattern Routes / 正式 Pattern 路由

| Historical case | Formal Pattern | Durable home |
| --- | --- | --- |
| `big-character-poster-reproduction` | `big-character-poster` | `patterns/big-character-poster/iteration.md` and `anti-patterns.md` |
| `retro-pixel-style-ownership` | `retro-pixel-halftone-tech-editorial` | `patterns/retro-pixel-halftone-tech-editorial/iteration.md` |
| `source-picture-book-sequence-transfer` | `narrative-journal-infographic` | `patterns/narrative-journal-infographic/adapters/source-picture-book-sequence.md` and `iteration.md` |
| `youmind-animal-mascot-transfer`, `youmind-icon-transfer` | `soft-2-5d-icon` | `patterns/soft-2-5d-icon/adapters/youmind-animal-mascot.md`, `youmind-eastern-handdrawn-icon.md`, and `iteration.md` |
| `youmind-box-operator-transfer` | `whiteboard-operator-sketch` | `patterns/whiteboard-operator-sketch/adapters/youmind-box-operator-sketch.md` and `iteration.md` |
| `youmind-city-observation-poster-transfer` | `city-observation-poster` | `patterns/city-observation-poster/` |
| `youmind-gold-foil-split-transfer` | `documentary-gold-split-editorial` | `patterns/documentary-gold-split-editorial/` |
| `youmind-isometric-cutaway-transfer` | `isometric-cutaway-explainer` | `patterns/isometric-cutaway-explainer/` |
| `youmind-place-poster-transfer` | `minimal-handdrawn-linework` | `patterns/minimal-handdrawn-linework/adapters/youmind-travel-poster.md` |
| `youmind-single-accent-ink-transfer` | `single-accent-ink-editorial` | `patterns/single-accent-ink-editorial/` |
| `youmind-crayon-portrait-transfer` | `crayon-portrait-editorial` | `patterns/crayon-portrait-editorial/` |
| `youmind-emotional-metaphor-transfer`, `youmind-mist-blue-metaphor-transfer`, `youmind-spatial-word-poster-transfer` | `semantic-concept-poster` | the named adapters under `patterns/semantic-concept-poster/` and `iteration.md` |
| `youmind-cognitive-contrast-card-transfer`, `youmind-multi-page-handdrawn-transfer` | `narrative-journal-infographic` | the named adapters under `patterns/narrative-journal-infographic/` and `iteration.md` |
| `youmind-pastoral-pixel-character-transfer` | `pixel-retro` | `patterns/pixel-retro/adapters/youmind-pastoral-pixel-character.md` and `iteration.md` |
| `youmind-thermal-receipt-transfer` | `thermal-receipt-poster` | `patterns/thermal-receipt-poster/iteration.md` |
| `youmind-style-transfer` | several existing Patterns | `docs/youmind-style-atlas.md` for intake routing, plus the Pattern-local iteration notes for adopted clusters |

The broad style-transfer case contributes method-level checks to
`whimsical-journal-sketch`, `minimal-handdrawn-linework`, `pixel-retro`,
`retro-pixel-halftone-tech-editorial`, `eastern-texture-handdrawn`,
`frosted-silhouette-editorial`, and `paper-sculpture-collage-editorial`.

## Shared Rubric Routes / 共享 rubric 路由

The retired generic rubrics were normalized into:

- `grammar/visual-argument.md` for source scope, reader pain, correction,
  evidence, and action;
- `grammar/score.md` for the compact pre-runtime score;
- `grammar/review.md` for visual argument, first read, Pattern ownership,
  transfer, source safety, and keep/edit/delete decisions.

已删除的通用 rubric 已归并到：

- `grammar/visual-argument.md`：来源范围、读者痛点、修正、证据和动作；
- `grammar/score.md`：runtime 之前的精简 score；
- `grammar/review.md`：视觉论证、第一眼、Pattern 归属、迁移、来源安全以及保留/修改/删除判断。

## Direct Pattern Routes / 直接 Pattern 路由

The remaining YouMind transfer probes are now formal Patterns. Their stable
learning lives in the Pattern capsule and its image-generation adapter from the
first commit; there is no intake, candidate, promotion, or evaluation stage
between source evidence and a Pattern.

其余 YouMind 迁移探针现在都已是正式 Pattern。从第一次提交起，稳定学习直接
写入 Pattern 胶囊和 image-generation adapter；来源证据与 Pattern 之间不再有
intake、candidate、promotion 或 evaluation 中间阶段。

| Historical case | Formal Pattern | Durable home |
| --- | --- | --- |
| `youmind-dual-focal-swirl-transfer` | `dual-focal-swirl-linework` | `patterns/dual-focal-swirl-linework/` |
| `youmind-fixed-era-editorial-transfer` | `fixed-era-editorial-print` | `patterns/fixed-era-editorial-print/` |
| `youmind-graphic-fashion-avatar-transfer` | `graphic-fashion-avatar` | `patterns/graphic-fashion-avatar/` |
| `youmind-monstrous-scale-transfer` | `monstrous-scale-editorial` | `patterns/monstrous-scale-editorial/` |
| `youmind-nested-blue-collage-transfer` | `nested-blue-collage` | `patterns/nested-blue-collage/` |
| `youmind-portrait-quote-transfer` | `portrait-quote-editorial` | `patterns/portrait-quote-editorial/` |
| `youmind-adaptive-rembrandt-transfer` | `adaptive-rembrandt-portrait` | `patterns/adaptive-rembrandt-portrait/` |
| `youmind-retro-future-print-transfer` | `retro-future-print-editorial` | `patterns/retro-future-print-editorial/` |

## Working Rule / 工作规则

Use a Pattern-local `iteration.md` only for stable, reviewed learning. A run
may still produce multiple outputs in a consuming project, but OVG stores no
run queue, score matrix, candidate label, or maturity status. A failed method is
removed from `patterns/` when it no longer earns its intended use.

Pattern 内的 `iteration.md` 只记录稳定且经过复盘的方法学习。一次运行仍可在消费项目中产生多个输出，
但 OVG 不存运行队列、评分矩阵、candidate 标签或成熟度状态。当方法不再配得上预期用途时，从 `patterns/` 删除它。
