# Minimal Handdrawn Linework

```yaml
id: minimal-handdrawn-linework
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Quiet concept illustrations where clean linework and one clear object or relation can carry the idea.
avoid_when: Strong public conflict, high-density explainers, realistic proof, or scenes needing heavy emotional force.
```

中文名：简约手绘线稿
English name: Minimal Handdrawn Linework


## Definition / 定义

EN: Minimal Handdrawn Linework is a restrained concept-illustration pattern that
uses clean lines, large whitespace, and one clear object or relationship to carry
the idea.

CN: 简约手绘线稿是一种克制的概念插图范式，用干净线条、大留白和一个清晰物件或关系来承载观点。

## Invariants / 不变量

EN:

- clean linework;
- large whitespace;
- controlled contrast;
- low saturation;
- clear composition;
- restrained premium tone.

CN:

- 干净线稿；
- 大面积留白；
- 受控反差；
- 低饱和；
- 构图清楚；
- 克制、高级、不过度表现。

## Recommended Cases / 推荐场景

EN:

- concept illustrations;
- docs body visuals;
- quiet covers;
- product education where one object can carry the idea.

CN:

- 概念插图；
- 文档正文配图；
- 安静封面；
- 一个物件就能讲清楚的产品教育内容。

## Weak Fit / 不适合

EN:

- strong emotional conflict;
- high-density explainers;
- public debate covers;
- scenes that need realistic proof.

CN:

- 强情绪冲突；
- 高密度解释图；
- 公共争论型封面；
- 需要真实截图或证据的场景。

## Avoid / 避免

EN:

- decorative clutter;
- high-saturation clash colors;
- glossy AI plastic;
- random text, logos, signatures, or watermarks.

CN:

- 装饰性杂乱；
- 高饱和撞色；
- 光滑塑料感 AI 图；
- 随机文字、logo、签名或水印。

## Direct Compilation Route: Colored Pencil Sketch / 直接生成路线：Colored Pencil Sketch

# Colored Pencil Sketch Calibration / 彩铅速写校准

This optional compilation route captures the selective pencil behavior visible in the
The documented `手绘` method bans people and text, but those are source-task
constraints rather than universal style invariants. OVG keeps the reusable
graphite skeleton, selective colored-pencil emphasis, and open paper field.

这份可选 compilation route 提炼“手绘”技能的选择性铅笔方法。来源工作流禁止人物和文字，但这属于
单次任务约束，不是普遍风格不变量。OVG 保留可迁移的石墨骨架、局部彩铅强调和开放纸面。

## Style Signature / 风格签名

- Establish proportion, axis, and silhouette with graphite before color.
- Color only the focal plane, action, or material cue that must be understood first.
- Let pencil pressure and stroke direction describe volume; do not airbrush shading.
- Keep background evidence to a few directional traces on warm-white paper.
- Preserve source identity without over-rendering every contour.

- 先用石墨确定比例、轴线和剪影，再加入颜色；
- 只给第一眼必须理解的焦点平面、动作或材质线索上色；
- 用铅笔压力和排线方向塑造体积，不做喷枪式阴影；
- 暖白纸面上只保留少量方向性背景痕迹；
- 在不过度描满所有轮廓的前提下保留来源身份。

## Composition Families / 构图家族

1. **Open study:** one subject and a few directional traces on a broad paper field.
2. **Selective color plate:** a graphite subject with one colored focal plane.
3. **Object relation sketch:** two supplied objects or states connected by one clear action line.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the colored-pencil-sketch
calibration. Build {{MAIN_SUBJECT}} from a light graphite axis, a readable
silhouette, and selective pressure changes. Choose an open study, selective
color plate, or object relation sketch only when the supplied action supports
it. Apply colored pencil to one focal plane or cue that clarifies
{{VISUAL_ACTION}}; keep the remaining surface graphite and warm paper.

Use a few directional background traces only when they preserve source evidence.
Reserve exact text for deterministic layout. Avoid even-detail rendering,
airbrushed shading, decorative rainbow color, full scenes, glossy 3D, random
text, logos, signatures, watermarks, and {{FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- Graphite alone preserves subject, proportion, and action.
- Color has one semantic job and remains local.
- Pencil pressure reads as structure rather than noise.
- Paper stays open and no background is invented to fill space.
- Removing texture leaves a coherent line-based composition.

## Direct Compilation Route: Documentary Split / 直接生成路线：Documentary Split

# Documentary Split Calibration / 纪实分屏校准

This optional compilation route encodes the documented P062 description into a
controlled before/after page. The upper half retains a lightly adjusted source
record; the lower half reduces the same subject or action to sparse black
linework with one memory accent. It does not copy the source image, text, or
coordinates.

这份可选 compilation route 将 P062 的描述提炼成受控的上下分屏页面。上半保留轻度处理后的来源记录，
下半把同一主体或动作减成稀疏黑色线稿，并留下一个记忆色点。不复制来源图片、文字或坐标。

## Style Signature / 风格签名

- A clear upper/lower split creates a documentary-to-memory transformation within one page.
- The upper plate keeps source atmosphere without becoming a second story; the lower plate deletes background and retains the key subject, relation, or action.
- Lower linework is sparse, pen-like, slightly hesitant, and intentionally not CAD-perfect.
- One tiny source-derived accent color may recur in the lower plate; the rest stays pale paper and black line.
- One or two short handwritten notes may bridge the split, following the supplied action or observed humor.
- The page feels like an independent publication insert: quiet, tactile, and lightly odd rather than nostalgic or decorative.

- 清晰的上下分屏在同一页面内制造“纪实到记忆”的转化；
- 上半保留来源氛围但不引入第二个故事，下半删去背景，只保留关键主体、关系或动作；
- 下半线稿稀疏、像钢笔手绘、略带犹豫，不做 CAD 般完美；
- 下半最多重复一个源自主体的小面积强调色，其余保持浅纸和黑线；
- 一到两句短手写字可以顺着动作或观察幽默连接上下两半；
- 页面像独立刊物内页，安静、有触感、略有古怪，不做怀旧装饰。

## Composition Families / 构图家族

1. **Documentary-to-memory split:** upper source atmosphere, lower line reduction, and one shared action.
2. **Evidence-to-gesture split:** upper concrete evidence, lower simplified gesture or relation, with no invented object.
3. **Quiet split note:** a short handwritten bridge crosses the whitespace without becoming a headline.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the documentary-split
calibration. Divide one page into a clear upper and lower plate. Keep the upper
plate as a lightly adjusted source atmosphere or concrete evidence; do not add a
second story. In the lower plate, delete background complexity and preserve only
the key subject, relation, and {{VISUAL_ACTION}} as sparse black pen linework.

Keep the lower lines hesitant, open, and hand-corrected rather than CAD-perfect.
Extract at most one tiny accent color from {{MAIN_SUBJECT}} or
{{CONCRETE_EVIDENCE}} and use it as a memory flash in the lower plate; keep the
rest pale paper and black line. Let one or two short handwritten notes bridge the
split only when they clarify {{VISUAL_ACTION}} and obey {{TEXT_HANDLING}}.

Preserve large active whitespace and an independent-publication rhythm. Avoid
full-color illustration, equal-detail halves, decorative frames, generic titles,
nostalgic grime, random text, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The upper/lower transformation is immediately visible and carries the same action.
- The lower plate remains recognizable without the upper image.
- Only one small accent color is used, and it is traceable to the supplied subject or evidence.
- The split is a meaningful relation, not two unrelated images stacked together.
- Removing color and paper texture still leaves a documentary-to-memory structure.

## Direct Compilation Route: Editorial Reduction / 直接生成路线：Editorial Reduction

# Editorial Reduction Calibration / 编辑减法校准

This optional compilation route captures repeated structural behavior from documented methods such as `P084`, `P075`,
`拓印粗粝`, `P068`,
and the restrained linework variants of `P070`. It keeps the method-level
rule—selective memory plus geometric clarity—without importing any creator's
composition or copy.

这份可选 compilation route 提炼技能中反复出现的结构行为，例如 `P084`、
`P075`、`P068` 和 `P070` 的克制线稿变体。它只保留“选择性记忆 + 几何清晰”的
方法规则，不带入任何创作者的版式或文案。

## Style Signature / 风格签名

- Preserve the subject's key proportion, direction, structure, and relation.
- Build a black or dark geometric skeleton from contours and perspective guides.
- Use stippling, dotted texture, or restrained risograph grain for atmosphere.
- Let woodcut, broken-ink, or dry-brush marks add human pressure variation only
  after the silhouette, negative space, and cut-plane relation are clear.
- Keep one or two source-derived spot colors and a quiet focal point.
- Use small editorial labels only when they clarify the supplied relation.
- Delete background complexity before adding texture.

- 保留主体的关键比例、方向、结构和关系；
- 用深色几何线、轮廓和透视引导线搭建骨架；
- 用点描、网点或克制的孔版颗粒处理空气感；
- 只保留一到两种源自主体的强调色和一个安静焦点；
- 只有在能说明关系时才加入小型编辑标注；
- 先删除背景复杂度，再添加材质。

## Composition Families / 构图家族

1. **Linework plate:** one clear subject, a few structural guides, and a small
   spot-color anchor.
2. **Memory crop:** a controlled crop or offset that keeps a key relation while
   allowing the rest of the source to fall away.
3. **Quiet editorial label:** a restrained caption or type block integrated with
   the line skeleton, never a decorative title beside it.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the editorial-reduction
calibration. First decide what proportion, direction, structure, and relation
must survive; remove background complexity before adding texture. Route the
argument through a linework plate, memory crop, or quiet editorial label.

Construct a dark geometric contour skeleton with a few perspective or directional
guides. Use stippling, dotted texture, or restrained risograph grain only where it
describes air, depth, or emphasis. Keep one or two source-derived spot colors and
large controlled whitespace. Let {{MAIN_SUBJECT}} perform or receive
{{VISUAL_ACTION}}; labels may clarify that action but may not introduce another
claim. Keep the tone quiet, precise, and editorial.

Avoid exact diagrams, decorative line-art objects, dense dashboards, full-color
competition, glossy plastic, cinematic realism, random text, copied slogans,
logos, signatures, and watermarks.
```

## Fidelity Gate / 保真门

- The relation remains readable from the contour and placement alone.
- The line density is selective; detail does not become an even wallpaper.
- Spot color is semantic and limited, not a palette showcase.
- The crop or offset preserves the source identity instead of turning it into a
  generic object.
- Removing stippling and color still leaves a coherent structural composition.

## Direct Compilation Route: Screenprint Reduction / 直接生成路线：Screenprint Reduction

# Screenprint Reduction Calibration / 丝网版画减法校准

This optional branch adapts the documented `P086`
description for image generation. It keeps a single focal direction and a
small set of decisive visual information, then uses bounded source-derived spot
colors and hand-applied ink variation. It does not change the base Pattern's
near-white, low-saturation default; choose this branch only when the visual
argument explicitly calls for a screenprint plate.

这份可选分支将`P086` 的描述编译为图像生成方法。它先保留单一视觉方向和少量决定画面成立的信息，再用受控的源自主题专色与手工油墨变化建立版画感。它不改变基础 Pattern 的近白、低饱和默认值；只有视觉论证明确需要丝网版画图版时才选择此分支。

## Style Signature / 风格签名

- Keep only three to five decisive visual facts from the supplied subject or relation.
- Preserve one focal point and one dominant direction before adding ink texture.
- Use two to four source-derived spot colors on a neutral paper field; colors stay bounded and purposeful.
- Let dry-brush, brayer texture, dragged ink, broken ink, and uneven coverage show pressure variation without fake aging.
- Use whitespace as an active compositional field, not as unused margin.
- Keep text short and subordinate, or reserve an aligned region for deterministic typesetting.

- 只保留主体或关系中三到五个决定画面成立的视觉事实；
- 先保留一个明确焦点和一个主要方向，再加入油墨材质；
- 在中性纸基上使用两到四种源自主题的专色，颜色必须受控且有功能；
- 让干刷、滚墨、拖墨、断墨和不均匀覆盖呈现压力变化，但不要伪造做旧；
- 把留白当作主动构图场，而不是未使用的边缘；
- 文字保持短且退后，或为确定性排版预留对齐区域。

## Composition Families / 构图家族

1. **Focal plate:** one reduced silhouette or geometric subject with a single directional cue.
2. **Directional pair:** two related states share one paper field and one ink vocabulary only when the source relation is genuinely comparative.
3. **Quiet crop:** a restrained crop or offset leaves more paper visible while retaining the same focal direction.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework Pattern with the Screenprint
Reduction calibration. Reduce {{MAIN_SUBJECT}} to three to five decisive visual
facts, preserving its key proportion, direction, structure, or relation. Choose
Focal Plate, Directional Pair, or Quiet Crop according to the supplied argument;
do not invent another art direction.

Build a clean neutral-paper field with one clear focal point and one dominant
direction. Use two to four source-derived spot colors from {{SPOT_COLOR_TARGETS}}.
Keep every color functional and bounded. Add dry-brush, brayer texture, dragged
ink, broken ink, and uneven coverage as restrained screenprint evidence. Let
paper and whitespace remain visible and active. Keep text short and subordinate,
or reserve an aligned blank region for deterministic typesetting.

The result should feel like a considered screenprint plate: geometric reduction,
human pressure variation, and quiet editorial order. Do not copy any reference
subject, slogan, composition, or coordinates.

Avoid full-frame mosaic, one-bit game UI, glossy 3D, photographic realism,
uniform vintage grime, decorative sticker clutter, dense dashboards, long
generated text, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `SPOT_COLOR_TARGETS`: name two to four meaningful color relationships from the supplied source; never ask for random palette rotation.
- `TEXT_HANDLING`: choose `short checked type` or `aligned blank region for deterministic typesetting`.
- `FORBIDDEN`: add topic-specific failures only; the base Pattern's boundaries still apply.

## Fidelity Gate / 保真门

- Three to five decisive visual facts remain identifiable before texture inspection.
- One focal point and one dominant direction control the page.
- Two to four spot colors are source-derived, bounded, and subordinate to structure.
- Ink variation feels physical and purposeful rather than generic vintage noise.
- Removing the ink adjectives still leaves the same reduced subject and whitespace relation.

- 材质检查前仍能辨认三到五个决定性视觉事实；
- 一个焦点和一个主要方向控制页面；
- 两到四种专色来自主体或关系，数量受控且服从结构；
- 油墨变化具有物理感和功能，不退化成泛化复古噪声；
- 去掉油墨形容词后，减法主体和留白关系仍然成立。

## Direct Compilation Route: Travel Poster / 直接生成路线：Travel Poster

# Place-Poster Screenprint Calibration / 城市旅行海报丝网校准

This optional branch adapts the documented 城市旅行海报
description for place-led image covers. It extends Minimal Handdrawn Linework
only when a supplied place identity, landmark, and short name should become one
published poster. It is not a generic travel filter and does not add scrapbook
clutter to the base Pattern.

这份可选分支将城市旅行海报
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

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework Pattern with the Place-Poster
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
technical proof back to the base Pattern or another calibrated compilation route.

## Direct Compilation Route: Two Color Overprint / 直接生成路线：Two Color Overprint

# Two-Color Overprint Calibration / 双色套印校准

This optional compilation route encodes the documented P065 description into a
transferable print method. It keeps the black contour skeleton, two extracted
color lines, slight registration drift, and large paper field without copying a
source subject, slogan, or exact composition.

这份可选 compilation route 将 P065 的描述提炼成可迁移的印刷方法。它只保留黑色轮廓骨架、两种提取色线条、
轻微套印偏移和大面积纸面，不复制来源主体、口号或精确构图。

## Style Signature / 风格签名

- Black or near-black pen lines carry the subject's contour and structure.
- Exactly two source-derived colors form parallel, overlapping, or slightly misregistered contour lines; do not add a third accent.
- The page uses a pale paper field with very large active whitespace; background complexity is removed before texture is added.
- Lines may run past a contour or remain partially open, but the subject's identity, direction, and relation stay readable.
- A narrow, slightly loose typewriter or letterpress label is allowed only when it clarifies the supplied action.
- The temperature is clever, quiet, and lightly dry rather than nostalgic, childish, or decorative.

- 黑色或近黑色钢笔线承载主体轮廓与结构；
- 恰好两种源自主体的颜色形成并行、叠压或轻微错位的彩色轮廓线，不再增加第三种强调色；
- 页面使用浅色纸面和巨大的主动留白，先删去背景复杂度，再添加材质；
- 线条可以越过轮廓或保持不完全闭合，但主体身份、方向和关系必须可读；
- 只有在能说明上游动作时，才允许使用细窄、略松的打字机或铅印小字；
- 情绪聪明、安静、略带冷幽默，不做怀旧、幼稚或装饰化。

## Composition Families / 构图家族

1. **Overprint contour plate:** one small or medium subject floats in paper space while the black skeleton and two color contours create the only visual tension.
2. **Offset memory crop:** an off-center crop preserves one supplied relation and lets the rest of the source fall away.
3. **Quiet imprint label:** a short label or note enters the paper field as a printing artifact, not as a boxed headline.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the two-color-overprint
calibration. Preserve the supplied subject's identity, direction, structure, and
{{VISUAL_ACTION}}. Remove background complexity before adding any material.

Build an overprint contour plate, offset memory crop, or quiet imprint label only
when the visual argument supports that family. Draw a black or near-black pen
skeleton first. Extract exactly two colors from {{MAIN_SUBJECT}} or
{{CONCRETE_EVIDENCE}} and use them as parallel, overlapping, or slightly
misregistered contour lines. Do not add a third accent or large color fill. Keep
the subject small or medium in a pale paper field with very large active
whitespace. Allow a few open, hesitant, or overrun lines while keeping the
relation legible.

Use a narrow, slightly loose typewriter or letterpress note only when it clarifies
{{VISUAL_ACTION}}. The note must be short and follow {{TEXT_HANDLING}}. Keep the
temperature clever, quiet, and lightly dry. Avoid vector-perfect contours,
full-color illustration, decorative backgrounds, generic titles, nostalgic grime,
random text, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The black skeleton and the two color contours remain distinct at thumbnail size.
- No third accent, palette showcase, or full-frame fill appears.
- The supplied subject and action remain readable before the printing artifact is noticed.
- Registration drift feels intentional and restrained, not like a broken render.
- Removing color and paper texture still leaves the same small-subject, large-whitespace structure.

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

These notes absorb the former city-observation, gold-foil split, isometric
cutaway, place-poster, and single-accent ink checks.

这份笔记吸收已删除的城市观察、金箔分割、等距剖切、地点海报和单强调色墨线检查。

## Stable Checks / 稳定检查

- A supplied subject, object, or place cue remains recognizable through clean
  contour, one ordinary action, and a controlled `3:4` or `4:3` frame.
- Structural line reduction deletes detail selectively while preserving the
  contour skeleton and the relation that carries the argument.
- Use a near-white field, low-saturation or source-aware spot colors, and local
  screenprint/halftone pressure. A single semantic accent is preferred when the
  compilation route calls for it.
- For documentary split, keep the real record or portrait plane bounded and
  derive one flat foil or ink plane from it. For isometric cutaway, coherent
  axes and section planes must explain a dependency, not decorate architecture.
- For place posters, a short checked place marker, one landmark, and one daily
  cue make a visual diary, not a tourism postcard.

- 上游主体、物件或地点线索通过干净轮廓、一个日常动作和受控的 `3:4` 或 `4:3` 画面保持可辨。
- 结构减线只选择性删除细节，同时保留轮廓骨架和承载论点的关系。
- 使用近白底、低饱和或来源有据的专色，以及局部孔版/网点印压。compilation route 要求时优先只保留一个语义强调色。
- 纪录分割保留有边界的真实记录或肖像平面，再从中派生一个扁平箔金或墨色平面。等距剖切用一致轴线和剖面说明依赖关系，不装饰建筑。
- 地点海报用短且核对过的地点标记、一个地标和一个日常线索组成视觉日记，不做旅游明信片。

## Transfer Set / 迁移主题组

Keep the method across a coastal commuter city and an inland night market,
access through a turning key, a non-architectural cutaway, two unrelated
documentary splits, and two unrelated ink-vignette topics. The action and
evidence change; contour, whitespace, and ink discipline do not.

## Failure Recovery / 失败恢复

- If the output becomes a postcard, sticker sheet, generic vector icon, or
  architectural model, restore the supplied action and one evidence relation.
- Gold, halftone, or multiple bright colors must stay local and semantic; they
  cannot become a global filter.
- If the relation cannot survive after texture and title are hidden, delete the
  route or Pattern instead of adding decoration.
