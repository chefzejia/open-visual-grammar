# Portrait-Quote Editorial

```yaml
id: portrait-quote-editorial
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Vertical editorial covers where an authorized portrait, one short verified quote, and one restrained scene cue share a clear reading order.
avoid_when: Anonymous stock portraits, long copy, quote cards without identity, or cinematic wallpaper.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：人像台词编辑海报
English name: Portrait-Quote Editorial

## Definition / 定义

The portrait owns the first read. A short quote occupies a protected lower zone,
and one scene cue supports its intent without becoming a second narrative. The
portrait-to-text relation is the method, not a film imitation.

人像承担第一眼信息。短引语进入受保护的下方区域，一个场景线索支持其意图但不生成第二个故事。方法是人像与文字的关系，不是电影临摹。

## Invariants / 不变量

- Authorized identity anchors, pose, and physical action remain readable with the quote hidden.
- The quote is short, checked, and deterministic when exact spelling matters.
- Lower quote zone never crosses the face or competes as a second headline.
- One scene cue supports the quote intent and stays subordinate.
- Vertical framing and portrait density remain stable across subjects.

## Composition Families / 构图家族

- **Close-up:** portrait fills the upper field, quiet lower quote band.
- **Scene mid-shot:** one supplied scene cue enters without crowding face or quote.
- **Negative-space portrait:** off-center portrait opens a larger lower text field.

## Variables / 可变槽位

`PORTRAIT`, `IDENTITY_ANCHORS`, `QUOTE`, `QUOTE_INTENT`, `SCENE_CUE`,
`ASPECT_RATIO`, `LOWER_TEXT_ZONE`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for an archivist returning a lost letter or a nurse reopening a clinic.
Keep restrained vertical editorial density and human warmth; avoid movie-poster
drama, stock grading, and generic quote-card typography.

## Transfer Boundaries / 迁移边界

The portrait-to-quote relation must transfer across two unrelated human stories.
The quote cannot be the only readable content, and scene atmosphere cannot rescue
weak identity.

## Fidelity Gate / 保真门

- Identity and action survive with quote hidden.
- Lower zone is protected and legible at feed size.
- One scene cue supports, rather than replaces, portrait and quote.
- Three outputs vary framing route, not color grade or film genre.

## Failure Modes / 失败方式

Stock face, quote-only design, face collision, long pseudo-text, full film set,
copied likeness, and cinematic wallpaper fail. Delete the Pattern if the
portrait-to-text relation cannot transfer safely.
