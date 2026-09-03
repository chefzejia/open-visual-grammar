# Style Discovery Batch 2026-09 / 2026-09 风格发现采样批次

Status: `intake record`

This is the first bounded implementation of
[`docs/style-discovery-sources.md`](style-discovery-sources.md). It samples one
small cluster from each high-signal lane, records what the public page can
actually prove, and stops before collecting a gallery-sized inspiration dump.

这是一轮对
[`docs/style-discovery-sources.md`](style-discovery-sources.md) 的小批量落地。每个高信号来源层只取一组有限样本，
记录公开页面真正能证明的内容，并在变成整站灵感堆之前停止。

## Scope And Stop Conditions / 范围与停止条件

- Capture date: 2026-09-02.
- Four source lanes were sampled: applied typography, picture-book selection,
  open collection, and regional type/design award.
- No third-party preview images were vendored. Public links and method-level
  notes are the only durable source evidence.
- The batch stops after two concrete OVG routes and three external dispositions.
  A Pattern is created directly when its method is clear; otherwise the source
  remains outside OVG or is rejected.
- No image-generation request was made and no paid or uncertain external action
  was triggered.

## Evidence Matrix / 证据矩阵

| Source lane | Public evidence sampled | What it can prove | OVG decision |
| --- | --- | --- | --- |
| Applied typography | [Fonts In Use](https://www.fontsinuse.com/) homepage and Graphic Design topic index | typography should be compared in real artifact contexts; the archive is indexed by typeface, format, and topic and reports 34,431 uses | keep as a discovery and type-role verification source; feed type roles into deterministic routes, not a standalone style |
| Picture-book selection | [dPICTUS](https://dpictus.com/) selected-title page, [The Original Art](https://societyillustrators.org/awards/the-original-art/), and [Bologna Children's Book Fair](https://www.bolognachildrensbookfair.com/) homepage | the unit of evidence is the book or spread sequence, with recurring anchors, page turns, and audience/age context; dPICTUS exposes selected titles and two-spread previews, while The Original Art requires the whole book in spread view | create the formal `picture-book-sequence` Pattern for the sequence contract; keep children's surface material variable and do not create a generic children's-style Pattern |
| Open collection | [Met Open Access API search](https://collectionapi.metmuseum.org/public/collection/v1/search?q=woodcut&hasImages=true) and three object records: [Hypnerotomachia Poliphili](https://www.metmuseum.org/art/collection/search/365313), [Hercules chasing Avarice](https://www.metmuseum.org/art/collection/search/337700), [Embroidery Pattern](https://www.metmuseum.org/art/collection/search/388376) | block-based print, contour-first reduction, repeatable ornament, and public-domain item-level rights can be checked in metadata; all three sampled records are marked public domain | calibrate existing `limited-color-print-editorial`; no new Pattern or image asset in this batch |
| Regional type/design award | [Tokyo TDC 2026 Grand Prize](https://tokyotypedirectorsclub.org/en/award/2026_grandprize/) | a type family can be treated as a system across scripts, weights, obliques, optical sizes, and deployment contexts; the page identifies Futura 100 Multiscript and six weights with matching obliques and optical-size variations | add a `multiscript-type-system` adapter under `restrained-editorial-slide-system`; keep the family name and award imagery as source metadata |

## Intake Packets / 入库包

### A. Picture-Book Sequence / 儿童绘本跨页序列

```text
Source URLs:
- https://dpictus.com/
- https://societyillustrators.org/awards/the-original-art/
- https://www.bolognachildrensbookfair.com/
Creators / studios:
- dPICTUS selected publishers and picturebook makers listed on the public page
- The Original Art jurors, artists, art directors, editors, and publishers
Artifact kinds:
- picturebook covers, spreads, selected projects, exhibition/catalog records
Rights status:
- public selection metadata; preview spreads and catalog images remain external
Reference count:
- dPICTUS exposes more than 30 selected titles and selected unpublished projects;
  The Original Art describes more than 200 accepted works and a 230-title 2025 catalog
Stable first read:
- a child-safe action or relationship is understood before decorative material
Stable composition behavior:
- page turns carry progression, comparison, or a reveal; one recurring anchor
  stays legible across the sequence; each spread has a readable quiet-to-busy rhythm
Stable material and line behavior:
- deliberately left open for the supplied book; selection criteria do not prove
  one universal line or surface style
Stable color roles:
- source-derived and age-aware; do not import a fixed palette from one title
Stable type-image relation:
- short text, sound, labels, or page-level cues enter the scene; exact copy is
  reviewed separately and should be typeset deterministically when needed
Variables:
- page count, sequence logic, recurring anchor, age temperature, spread ratio,
  material branch, text amount, and one supplied action per page
What appears accidental:
- cats, costumes, named characters, publisher marks, creator surfaces, and any
  single title's color or lettering
Two unrelated transfer topics:
- an emergency-kit replenishment sequence; a team handoff that preserves one note
Existing Pattern fit:
- no existing Pattern owns page-turn narrative as its primary contract;
  `narrative-journal-infographic` remains the neighboring explanation route
Pattern decision:
- create the formal `picture-book-sequence` Pattern directly;
  keep the surface branch variable and do not create a generic children's-style Pattern
```

The pages prove that sequence and audience are the useful extraction units, not
that every selected book shares a single drawing style. The formal Pattern
therefore owns the child-safe sequence contract while leaving material choice to
the upstream brief; it does not claim a universal children's surface.

公开页面能证明的是“序列”和“受众”是有效的提取单位，并不能证明所有入选绘本共享同一种画法。因此正式 Pattern 只负责儿童安全的序列契约，材质仍由上游简报决定，不把“儿童画风”泛化成单独 Pattern。

### B. Archive Print Reduction / 馆藏版画减法

```text
Source URLs:
- https://collectionapi.metmuseum.org/public/collection/v1/search?q=woodcut&hasImages=true
- https://www.metmuseum.org/art/collection/search/365313
- https://www.metmuseum.org/art/collection/search/337700
- https://www.metmuseum.org/art/collection/search/388376
Creators / studios:
- Francesco Colonna; Ugo da Carpi; Albrecht Dürer
Artifact kinds:
- printed book with woodcut illustrations; chiaroscuro woodcut from two blocks;
  woodcut pattern sheet
Rights status:
- all three sampled Met API records report `isPublicDomain: true`; verify the
  item-level marker again before any downstream image reuse
Reference count:
- three metadata-checked objects, with a fourth non-public-domain woodcut record
  retained only as a boundary reminder
Stable first read:
- silhouette and contour/block structure precede surface detail
Stable composition behavior:
- one bounded field carries the subject; repeated marks or an ornamental module
  can support the field without becoming unrelated decoration
Stable material and line behavior:
- block separation, local pressure, carved contour, and paper/ink contrast;
  metadata supports the process claim, while visual calibration remains source-linked
Stable color roles:
- paper plus one dark ink, or paper plus a small second block color
Stable type-image relation:
- book/page context is part of the artifact; exact captions are not extracted as style
Variables:
- subject silhouette, number of blocks, ink temperature, repeat module, crop, and
  whether the output is a cover or a fixed page
What appears accidental:
- classical figures, named scenes, artist identity, and historical iconography
Two unrelated transfer topics:
- a museum catalog cover; a research slide explaining a dependency chain
Existing Pattern fit:
- `limited-color-print-editorial`
Pattern decision:
- calibrate the existing Pattern's woodcut branch; no new adapter or vendored image
```

### C. Multiscript Type System / 多文字系统

```text
Source URLs:
- https://tokyotypedirectorsclub.org/en/award/2026_grandprize/
- https://www.fontsinuse.com/
Creators / studios:
- Veronika Burian, José Scaglione, and the listed script designers on the TDC page
Artifact kinds:
- type family, specimen spreads, identity/editorial deployments, and archive records
Rights status:
- public project metadata; award and archive images remain external
Reference count:
- six visible type-family variants/weights are described on the TDC page; Fonts In
  Use provides a larger context archive rather than a single copied family
Stable first read:
- typography establishes identity and reading hierarchy before ornament
Stable composition behavior:
- the same grid and role system can hold multiple scripts, weights, and optical sizes
Stable material and line behavior:
- primarily typographic; no texture is required by the source evidence
Stable color roles:
- role-based paper, text, rule, and one optional accent; values may change by brief
Stable type-image relation:
- display, body, accent, and numeric roles are named before the family is selected;
  image or evidence is bounded by the same grid
Variables:
- script set, display/body contrast, weight, optical size, fallback, evidence crop,
  and page family
What appears accidental:
- the Futura name, award year, exact specimen copy, and designer-specific glyph forms
Two unrelated transfer topics:
- a bilingual research deck; a museum exhibit guide with CJK/Latin labels
Existing Pattern fit:
- `restrained-editorial-slide-system`
Pattern decision:
- add a multiscript type-system adapter; keep exact type choice and copy in the
  consuming deterministic layout
```

## Routing Matrix / 路由矩阵

| Source cluster | Evidence | Transfer test | Decision |
| --- | --- | --- | --- |
| Child-safe picture-book sequence | dPICTUS selected titles, The Original Art whole-book spread requirement, Bologna illustration and awards program | emergency-kit progression; team-handoff comparison | formal `picture-book-sequence` Pattern created; no generic children's surface Pattern |
| Woodcut block reduction | three public-domain Met records with woodcut/block metadata | museum catalog; dependency-chain research plate | absorbed by `limited-color-print-editorial`; no new files |
| Multiscript type system | Tokyo TDC family description plus Fonts In Use contextual archive | bilingual research deck; museum guide | adapter added under `restrained-editorial-slide-system`; exact typography stays deterministic |
| Generic “children's illustration” surface | heterogeneous selected books and unknown material branches | fails because material and composition are not stable across titles | rejected |
| Named Futura or award style | one type family and one award page | fails because the label is not a transferable visual invariant | rejected |

## Review Result / 审查结果

The map now has an executable first pass: source lanes, bounded evidence, rights
handling, transfer probes, one formal Pattern, and one deterministic-layout
adapter. Continue by iterating those routes in production. Evidence that does
not earn a formal Pattern remains outside OVG or is rejected; it is not kept as
a Pattern lifecycle state.

这张地图现在已经能执行第一轮：有来源分层、有限证据、权利处理、迁移测试、一个正式 Pattern 和一个确定性排版 adapter。后续直接在消费项目中迭代这些路由；如果来源仍不足以形成清晰方法，就留在 OVG 之外或直接拒绝，不在 OVG 保留 Pattern 生命周期中间态。
