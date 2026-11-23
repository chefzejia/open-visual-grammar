# Portrait-Quote Editorial

```yaml
id: portrait-quote-editorial
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Vertical editorial covers where an authorized portrait, one short verified quote, and one restrained scene cue share a clear reading order.
avoid_when: Anonymous stock portraits, long copy, quote cards without identity, or cinematic wallpaper.
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

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 生图 Compilation Route

Use this compilation route for an authorized portrait and one short, checked quote. Exact
copy belongs to deterministic post-layout when spelling matters.

这份 compilation route 用于授权人像和一句短且已核验的引语。需要准确拼写时，文字交给
确定性后排版。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- Portrait and identity anchors: {{PORTRAIT}} / {{IDENTITY_ANCHORS}}
- Physical action: {{PHYSICAL_ACTION}}
- Quote and intent: {{QUOTE}} / {{QUOTE_INTENT}}
- Scene cue: {{SCENE_CUE}}
- Text handling: {{TEXT_HANDLING}}

Use the Portrait-Quote Editorial Pattern. Let the authorized portrait own the
first read through face, pose, and physical action. Protect a lower quote zone
that never crosses the face or becomes a second headline. Add one subordinate
scene cue that supports the quote intent without creating another story.

Choose Close-Up, Scene Mid-Shot, or Negative-Space Portrait. Keep vertical
editorial density stable and human warmth restrained. Use only short checked
text in the image; reserve long or exact copy for deterministic typesetting.
The portrait and action must remain readable with the quote hidden.

Avoid stock faces, quote-only cards, face collision, long pseudo-text, full film
sets, cinematic wallpaper, copied likeness, random text, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: features supplied and authorized for likeness control.
- `QUOTE_INTENT`: what the quote supports; it does not authorize new narrative.
- `SCENE_CUE`: one concrete cue, not a second scene.
- `LOWER_TEXT_ZONE`: keep clear of eyes, mouth, and key action.

## Fidelity Gate / 保真门

- Identity and action survive with quote and scene cue hidden.
- Lower quote zone is protected and legible at feed size.
- The same portrait-to-quote relation transfers across unrelated human stories.
- Removing film-like grading leaves the editorial structure.
