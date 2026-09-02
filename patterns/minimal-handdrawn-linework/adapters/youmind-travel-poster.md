# YouMind Place-Poster Screenprint Calibration / YouMind 城市旅行海报丝网校准

This optional branch adapts the public YouMind [城市旅行海报](https://youmind.com/~skills/019fca5a-1620-7954-8a63-883668d1f4be)
description for place-led image covers. It extends Minimal Handdrawn Linework
only when a supplied place identity, landmark, and short name should become one
published poster. It is not a generic travel filter and does not add scrapbook
clutter to the base Pattern.

这份可选分支将公开 YouMind [城市旅行海报](https://youmind.com/~skills/019fca5a-1620-7954-8a63-883668d1f4be)
的描述编译为地点主导的封面方法。只有当地点身份、地标和短名称需要共同形成一张出版物式海报时，
才在简约手绘线稿上启用本分支。它不是泛化旅行滤镜，也不向基础 Pattern 添加旅行纪念册式杂物。

## Style Signature / 风格签名

- Let one short place name or place marker participate in the composition as the dominant typographic block; reserve exact lettering for deterministic typesetting when it matters.
- Reduce one landmark or landmark cluster to a readable silhouette or a few decisive planes; the place must remain identifiable without the title.
- Use three to five high-saturation but source-aware spot colors on a neutral paper field. Each color must identify a landmark, climate, route, or other supplied place evidence.
- Combine collage planes, shaky handdrawn contour, screenprint overlap, uneven ink coverage, and visible paper without uniform vintage grime.
- Keep a clear poster boundary and active whitespace. The name, landmark, and one directional or geographic cue form one visual argument.
- Treat tourism mood as semantic input only; the Pattern still owns density, hierarchy, material, and temperature.

- 让一个短地点名或地点标记作为主导字块参与构图；需要准确字形时，把文字交给确定性排版。
- 把一个地标或地标组减为可辨认的剪影或少量决定性平面；即使去掉标题，地点也应能被认出。
- 在中性纸面上使用三到五种高饱和但源自地点证据的专色。每种颜色都要对应地标、气候、路线或用户提供的其他地点事实。
- 结合拼贴平面、抖动手绘轮廓、丝网叠印、不均匀着墨和可见纸面，但不使用均匀的泛复古做旧。
- 保持明确海报边界和主动留白。地点名、地标与一个方向或地理提示共同形成一个视觉论证。
- 旅行氛围只能来自语义输入；密度、层级、材质和温度仍由 Pattern 负责。

## Composition Families / 构图家族

1. **Name and landmark anchor:** place name and one reduced landmark share a strong vertical or diagonal axis.
2. **Split place plate:** the name occupies one block while the landmark and geographic cue occupy a counterweighting block; both remain inside one poster frame.
3. **Cropped landmark field:** a landmark crop exceeds one edge while the name and one small route cue preserve place recognition in the remaining paper.

All three families use the same color, contour, collage, screenprint, and
whitespace system. Do not switch to a glossy 3D travel render, photographic
postcard, map dashboard, or sticker sheet.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework Pattern with the YouMind Place-Poster
Screenprint calibration. The supplied place identity is authoritative. Choose
Name and Landmark Anchor, Split Place Plate, or Cropped Landmark Field according
to the argument; do not invent another art direction.

Make one short place name or marker a dominant integrated typographic block, or
reserve its exact region for deterministic typesetting. Reduce {{MAIN_SUBJECT}}
to one recognizable landmark or landmark cluster with a clear silhouette and a
single geographic or directional cue. Use three to five high-saturation,
source-aware spot colors from {{SPOT_COLOR_TARGETS}} on neutral paper. Build
collage planes with shaky handdrawn contours, restrained screenprint overlap, and
uneven ink coverage. Keep the poster boundary, paper, and active whitespace
visible. The landmark and place name must read before texture inspection.

Avoid generic tourism icons, arbitrary skylines, map dashboards, glossy 3D,
photographic postcards, sticker clutter, uniform vintage grime, long generated
text, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `SPOT_COLOR_TARGETS`: name three to five colors tied to supplied place evidence; never rotate a generic travel palette.
- `TEXT_HANDLING`: choose `short checked type` or `deterministic typesetting region`.
- `FORBIDDEN`: add place-specific inaccuracies, invented landmarks, or anachronistic symbols only when the source contract requires them.

## Fidelity Gate / 保真门

- The place remains identifiable from landmark silhouette, color evidence, and one geographic cue after the title is removed.
- The dominant name block, landmark, and cue share one poster frame and one first read.
- Three to five high-saturation spot colors are source-aware, bounded, and subordinate to the composition.
- Screenprint overlap and handdrawn wobble provide physical variation without becoming generic aging.
- Removing travel adjectives still leaves the same landmark, name, collage relation, and active whitespace.

This branch is a narrow exception to the base Pattern's low-saturation default.
Use it only for an explicit place-led poster argument; route quiet concepts or
technical proof back to the base Pattern or another calibrated adapter.
