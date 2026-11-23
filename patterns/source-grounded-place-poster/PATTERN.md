# Source-Grounded Place Poster

```yaml
id: source-grounded-place-poster
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Art-directed editorial posters built from real architecture, streets, cultural places, shops, objects, food, or travel photographs whose identity must survive transformation.
avoid_when: Routine retouching, invented places, generic advertising, exact documentary proof, equal-weight photo grids, or a style that can work without a source subject.
```

中文名：来源锚定在地编辑海报
English name: Source-Grounded Place Poster

## Definition / 定义

EN: Source-Grounded Place Poster turns a real place-based photograph into one
art-directed editorial world. The source photograph remains the only authority
for identity; the Pattern organizes subject treatment, active background,
typography, and their spatial interaction before a primary visual reference is
chosen. The result is a poster, not a filter, a photo with a detached caption,
or a tourism collage.

CN：来源锚定在地编辑海报把真实的建筑、街巷、文化空间、店铺、器物、食物或旅行照片转译成一个经过艺术指导的编辑世界。
照片是身份的唯一权威；先组织主体、主动背景、文字和空间互动四个域，再选择一张主导视觉参考。
结果必须是一张海报，不是滤镜、照片加孤立标题或旅游拼贴。

This Pattern formalizes the public method described by the
[Yingzao skill](https://github.com/op7418/guizang-yingzao-skill). It adopts the
method-level contract only; the source repository's recipes, reference images,
Chinese titles, and implementation scripts remain external.

本 Pattern 正式化
[Yingzao skill](https://github.com/op7418/guizang-yingzao-skill) 公开描述的方法层契约。
只吸收可迁移的方法，不复制来源仓库的 Recipe、参考图、中文标题或实现脚本。

## Invariants / 不变量

- Preserve three to five source identity anchors—silhouette, roofline, eave, sign, asymmetry, material boundary, or food/object structure—before texture or typography is inspected.
- Freeze four visible decisions before reference search: subject treatment, active background, typography behavior, and one non-default interaction or layout action.
- Select one primary reference that demonstrates a complete mechanism—subject treatment, background participation, and type-image relation—not a palette or mood alone.
- Diagnose the source composition and choose exactly one main repair: preserve, deterministic rectify/crop, or semantic recompose. Do not erase intentional perspective, asymmetry, or low-angle force.
- Make subject, background, and type occupy one shared spatial world through occlusion, shared edge, negative shape, scale relation, or a continuous rebuilt field. Detached photo-plus-title islands fail.
- Derive the palette from the source subject or verified place evidence. Use one main material and at most one supporting material; semantic motifs are sparse and must do real compositional work.
- For multiple same-place photos, extract their subjects into one shared perspective, light direction, contact surface, and edge language. Keep photo rectangles only for an explicitly requested comparison.
- Exact place names, dates, heritage status, and cultural claims come from verified, observed, or user-confirmed facts. Never invent architecture, history, lettering, or landmarks.
- Keep generated copy short. A verified display title may be rendered by the image model when a glyph brief, sparse layout guide, and post-generation readback are supplied; exact long copy, metadata, and editable fact blocks remain deterministic.

- 在检查材质或文字前，先保留三到五个来源身份锚点，如剪影、屋脊、檐口、匾额、不对称、材质边界或食物/器物结构。
- 在检索参考前冻结四个可见决定：主体处理、主动背景、文字行为，以及一个非默认互动或版式动作。
- 只选择一张能同时示范主体处理、背景参与和图文关系的主导参考，不能只选配色或氛围。
- 先诊断来源构图，并且只选一个主修复动作：保留、确定性扶正/裁切或语义重构。不能抹掉有意的透视、不对称和低机位力量。
- 让主体、背景和文字通过遮挡、共边、负形、尺度关系或连续重建场域进入同一空间。照片加孤立标题的两座孤岛不成立。
- 配色来自来源主体或已核实的地点证据。使用一种主材质，最多一种辅助材质；语义母题必须稀疏并承担真实构图任务。
- 多张同址照片需要提取主体，在共同透视、光向、接触面和边缘语言中重建一个场景。只有用户明确要求对照时才保留照片矩形。
- 地点名、年代、文保状态和文化事实只能来自已核实、照片观察或用户确认的信息。不能发明建筑、历史、字形或地标。
- 生成文字保持短小。经过核实的展示标题可以在提供字形简报、稀疏排版垫图和生成后逐字读回时由模型原生生成；准确长文案、资料字段和需要编辑的事实块仍交给确定性排版。

## Composition Families / 构图家族

1. **Identity plate / 身份图版:** one source photograph becomes the dominant
   subject plane; the title or color field enters its contour through one clear
   overlap, shared edge, or controlled breakout.
2. **Structure and glyph / 构件与字形:** a meaningful architectural or object
   detail is enlarged or cropped while a short title follows its geometry or
   cuts across one protected boundary.
3. **Integrated place montage / 一体化在地蒙太奇:** subjects from several
   same-place photos are rebuilt into one continuous environment with one clear
   primary anchor and a shared light direction.
4. **Field-note editorial / 在地观察札记:** a real place record, one active
   material field, and a short verified marker form a quiet poster without
   becoming a postcard or map.

Choose one family per poster. The source photograph controls identity and
geometry; the Pattern controls the relation between subject, field, type, and
material. Do not turn each family into a fixed template.

每张海报只选择一个构图家族。来源照片控制身份和几何，Pattern 控制主体、场域、文字与材质之间的关系，不把家族变成固定模板。

## Fit / 适用范围

- historical buildings, vernacular streets, gardens, cultural interiors, and local shops;
- travel covers or place essays where the real source must remain recognizable;
- one-object or one-food cultural studies with a clear material boundary;
- same-place multi-photo scenes that need integration rather than a grid;
- short Chinese display titles, using a typeset-guide-integrated route first; model-native text is a constrained fallback only.

适合历史建筑、地方街巷、园林、文化室内与店铺；必须保留真实来源的旅行封面或地点随笔；有清楚材质边界的器物或地方食物研究；需要整合而非拼图的同址多图场景；以及需要确定性文字交接的短中文展示标题。

## Weak Fit / 不适合

- routine exposure, sharpening, skin retouch, or sky replacement;
- fictional architecture or place claims without a verified source;
- exact photographic evidence where any semantic redraw would reduce trust;
- generic product advertising, celebrity posters, or styles whose identity does not depend on the supplied source;
- dense maps, dashboards, fixed photo collages, or long generated copy.

## Material, Density, And Temperature / 材质、密度与温度

Material is selected from the source and the primary reference, then kept
hierarchical: one main behavior such as ink, paper, wash, print, or flat color,
with one local support at most. Background texture stays low-frequency so the
source contour and reading order remain clear. The temperature is observant,
place-aware, and editorial; warmth comes from preserved identity and humane
scale, not souvenir symbols or random decoration.

材质从来源和主导参考中选择，并保持层级：最多一种主行为，如墨、纸、水洗、印刷或平面色面，再加一种局部辅助。
背景纹理保持低频，让来源轮廓和阅读顺序清楚。情绪是观察性的、在地的、编辑化的；温度来自身份保留和体谅的尺度，不来自纪念品符号或随机装饰。

## Direct Input Slots / 直接输入槽位

```text
ARTIFACT_KIND
ASPECT_RATIO
AUDIENCE
SOURCE_PHOTO_ROLE
IDENTITY_ANCHORS
COMPOSITION_DIAGNOSIS
COMPOSITION_REPAIR
FIRST_READ
SUBJECT_TREATMENT
ACTIVE_BACKGROUND
DISPLAY_TITLE
TYPOGRAPHY_MODE
INTERACTION_ACTION
PRIMARY_REFERENCE_MECHANISMS
MATERIAL_BRANCH
VERIFIED_FACTS
TEXT_MODE
GLYPH_BRIEF
TEXT_GUIDE
TYPESET_REGIONS
RECIPE_ID
EFFECT_MODE
TOKEN_BINDINGS
PREFLIGHT_GATES
FORBIDDEN
```

## Typography Modes / 文字路由

Choose one route before generation:

1. **Typeset-guide-integrated / 排版垫图整合:** the formal route. Build a neutral Image 3 guide with the exact verified title, per-character geometry, shared axes, planned occlusion, and named regions. The model must absorb the guide into the rebuilt scene, while all guide marks and scaffold disappear from the final image. Exact title readback and guide alignment remain mandatory.
2. **Model-native minimal text / 模型原生极短字:** a constrained exploration or fallback route for one very short verified cue. Supply a glyph brief and sparse guide, but do not treat one successful readback as proof of full typography fidelity.
3. **Deterministic overlay / 确定性叠字:** leave a protected title or metadata zone in the generated image and add exact copy with HTML/SVG, Typst, or another deterministic layout runtime. Use this for long descriptions, dates, source notes, or any text that must remain editable.

正式的 Yingzao 路线优先使用排版垫图整合：Image 3 里必须出现准确文字、逐字几何、共同轴线、计划遮挡和命名区域；最终图中不能残留垫图标记。
模型原生极短字只作为探索或备用路线，不能因为一次读回成功就代表完整的文字控制已经成立。长介绍、日期、来源说明和需要反复编辑的文字必须走确定性排版。

## Effect Families / 效果家族

Choose one primary effect and at most two supporting effects. The effect must
change the subject-type relation or the reconstructed field, not act as a
decorative adjective.

1. **Local giant / 局部巨物:** enlarge one verified architectural or object
   fragment while keeping the source anchor legible.
2. **Scale transition / 尺度转场:** move from an observed detail to the full
   place through a continuous contour or material bridge.
3. **Double layer / 双层构件:** pair a real extracted subject with a restrained
   flat or ink layer that carries type or a verified marker.
4. **Contour repetition / 轮廓重复:** repeat one source contour as a rhythm,
   divider, or text boundary without inventing a new landmark.
5. **Zone-limited color / 分区上色:** constrain color to a source-derived
   material zone so the accent carries hierarchy rather than decoration.
6. **Line carving / 线刻真实场景:** use a line-drawn reconstruction to clarify
   architecture, water, or object structure while preserving its identity.
7. **Negative-shape bite / 负形咬合:** let the subject cut into the type field,
   or let the type field cut into the subject, with one explicit occlusion rule.
8. **Color window or edge bleed / 色块窗口或边缘出血:** create a bounded
   field or a controlled continuation past the source frame.

效果必须声明为 `EFFECT_MODE`，并在 `TYPESET_REGIONS` 与 `TOKEN_BINDINGS` 中
同时出现；没有进入垫图和最终 prompt 的效果词不算已投递。

## Transfer Boundaries / 迁移边界

- Transfer source identity protection, four-domain planning, reference selection, spatial integration, and fact boundaries—not a source building, location, creator, recipe name, font specimen, or cultural symbol.
- A photo may be re-composed, but identity-bearing geometry cannot be silently normalized. If the source has no safe anchor, reject the route.
- `city-observation-poster` owns character-led daily city notes with blue/cyan screenprint behavior. Use this Pattern for source-photo identity and art-directed place reconstruction, even when the place is a landmark or cultural interior.
- `limited-color-print-editorial` owns a material-led print reduction that can work without a real photograph. Use this Pattern when the photograph is the identity authority and the model must integrate it with the design world.
- If the result only works because of one named building, one recipe, or one artist's surface, delete or revise this Pattern rather than broadening the label.

- 迁移的是来源身份保护、四域规划、主导参考选择、空间整合和事实边界，不迁移来源建筑、地点、创作者、Recipe 名称、字体样张或文化符号。
- 可以重构照片构图，但不能静默拉平承载身份的几何。如果来源没有安全锚点，应拒绝这条路线。
- `city-observation-poster` 负责角色主导、蓝青孔版的日常城市札记；当身份权威来自真实地点照片，并且需要艺术指导重建时，使用本 Pattern。
- `limited-color-print-editorial` 负责即使没有真实照片也能成立的材质主导版画减法；当照片是身份权威且模型必须把它融入设计世界时，使用本 Pattern。
- 如果结果只能依赖某一栋建筑、某一道菜或某位艺术家的表面才成立，就删除或修改本 Pattern，不扩大名称范围。

## Fidelity Gate / 保真门

- The source identity anchors remain recognizable before material and type are inspected.
- The four-domain decision is visible at thumbnail size: subject, active field, type behavior, and one spatial interaction.
- One primary reference mechanism is legible; the output is not just a color or texture transfer.
- The chosen composition repair is singular and preserves intentional source geometry.
- Text is short and exact where required, with no pseudo-Chinese, invented facts, or detached title island. The formal route must pass guide alignment, glyph coverage, collision/occlusion, and character-by-character readback. When `TEXT_MODE=model-native-minimal-text`, the requested characters must still be legible, but the result remains a fallback probe rather than a typography calibration.
- The chosen effect is visible, source-grounded, and delivered in both the guide and the final prompt; decorative effect words without a visible action fail.
- A second unrelated place or cultural object can use the same contract without importing the first source's identity.

## Failure Modes / 失败方式

- **Filter-only retouch:** the photo is unchanged except for grading. Recover with a declared subject, background, and interaction action, or reject the image-model route.
- **Two islands:** source photo and title sit separately. Recover with one real contour overlap, shared edge, negative shape, or scale relation.
- **Reference cosplay:** a source poster's building, lettering, or symbol is copied. Remove source identity and keep only the visible mechanism.
- **Geometry erasure:** intentional perspective or asymmetry is normalized. Restore the source axis and choose preserve unless one concrete repair is necessary.
- **Tourism collage:** landmarks or cultural motifs fill the page without a source action. Reduce to one anchor, one verified marker, and one spatial relation.
- **Grid montage:** multiple photos remain as equal rectangles. Use the integrated montage only when subjects can share perspective, light, and contact surfaces; otherwise keep one hero source.
- **Fact drift:** invented dates, names, or architectural details enter the poster. Remove them or mark the route rejected.
- **Long generated copy:** text becomes unstable or unreadable. Move exact text to deterministic layout and keep only a checked short cue in the image.
- **Native title drift:** a short title is misspelled, substituted, or detached from the subject. Re-run with a typeset guide or switch to deterministic overlay; never accept one lucky readable title as a style result.
- **Undelivered effect:** a Recipe or effect is named in prose but absent from the guide, prompt, or visible output. Recompile the Token bindings or reject the route.

When these failures recur across unrelated places, delete this Pattern. Do not
keep a weaker route.

## Direct Compilation Route: Guizang Yingzao / 直接生成路线：Guizang Yingzao

# Yingzao Calibration / 营造校准

This compilation route distills the public [guizang-yingzao-skill](https://github.com/op7418/guizang-yingzao-skill)
into the source-grounded place route. The source skill's recipes, reference
plates, scripts, and exact prompts remain external. This compilation route keeps the
decision order and the visible design actions that can transfer to unrelated
places.

这份 compilation route 将公开的
[guizang-yingzao-skill](https://github.com/op7418/guizang-yingzao-skill) 提炼为来源锚定的在地路线。
来源 Skill 的 Recipe、参考图、脚本和完整 prompt 仍在外部；这里保留可迁移的决策顺序和可见设计动作。

## Style Signature / 风格签名

- Treat the real source photo as `Image 1` and protect its identity anchors.
- Write four decisions before selecting a reference: subject treatment, active background, typography behavior, and one non-default interaction.
- Use one `Image 2` primary reference for a complete visual mechanism, and a neutral sparse `Image 3` guide for exact text, per-character geometry, shared axes, named regions, reading order, and planned overlap.
- Make the model perform semantic extraction, scale or position change, background reconstruction, local material, and subject-type interaction in one coherent world.
- Keep exact place facts and long text outside generated pixels. The formal short-title route is `typeset-guide-integrated`; `model-native-minimal-text` is a constrained fallback, and long or editable text uses deterministic layout.
- For same-place multi-photo fusion, remove source rectangles and rebuild a common perspective, light direction, contact surface, and edge language.

- 把真实来源照片作为 `Image 1`，保护其身份锚点。
- 选参考前先写四个决定：主体处理、主动背景、文字行为和一个非默认互动。
- 用一张 `Image 2` 主导参考提供完整视觉机制，再用中性稀疏的 `Image 3` 垫图锁定准确文字、逐字几何、命名区域、共同轴、阅读顺序和计划遮挡。
- 让模型在同一世界中完成语义抠取、尺度或位置变化、背景重建、局部材质和主体与文字的互动。
- 准确地点事实和长文案不进入生成像素。正式的短标题路线使用 `typeset-guide-integrated`；`model-native-minimal-text` 只作为受限探针，长文案和可编辑事实块使用确定性文字区。
- 同址多图融合时去掉来源矩形，在共同透视、光向、接触面和边缘语言中重建场景。

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

Image 1 is the real source photograph and the only authority for identity.
Preserve these identity anchors: {{IDENTITY_ANCHORS}}.

The upstream place argument is authoritative:
- First read: {{FIRST_READ}}
- Subject treatment: {{SUBJECT_TREATMENT}}
- Active background: {{ACTIVE_BACKGROUND}}
- Typography behavior: {{TYPOGRAPHY_MODE}}
- Interaction action: {{INTERACTION_ACTION}}
- Composition diagnosis and one repair: {{COMPOSITION_DIAGNOSIS}} / {{COMPOSITION_REPAIR}}
- Verified short text: {{DISPLAY_TITLE}}
- Text mode: {{TEXT_MODE}}
- Glyph brief: {{GLYPH_BRIEF}}
- Sparse text guide: {{TEXT_GUIDE}}
- Typeset regions: {{TYPESET_REGIONS}}
- Recipe: {{RECIPE_ID}}
- Effect mode: {{EFFECT_MODE}}
- Token bindings: {{TOKEN_BINDINGS}}
- Preflight gates: {{PREFLIGHT_GATES}}

Use the Source-Grounded Place Poster Pattern with this Yingzao calibration.
Image 2 supplies only these visible mechanisms: {{PRIMARY_REFERENCE_MECHANISMS}}.
Image 3 is a neutral sparse layout guide; keep its exact text, shared axes,
reading order, named regions, and planned overlap, but remove all guide marks
and scaffold from the final image. Every effect token must be represented in
both the guide and this prompt. Rebuild the source subject, active field, and
type relation as one editorial world. Use {{MATERIAL_BRANCH}} with a source-derived
palette and controlled texture. If multiple same-place sources are supplied,
extract their named subjects into one common perspective and light direction;
do not make a photo grid.

Keep the source geometry, facts, and place identity accurate. Do not invent
architecture, history, lettering, landmarks, brands, or symbols. If
{{TEXT_MODE}} is `typeset-guide-integrated`, use Image 3 as the authoritative
text and region scaffold, absorb it into the scene, remove the scaffold, and
perform a character-by-character readback. If {{TEXT_MODE}} is
`model-native-minimal-text`, render only the verified {{DISPLAY_TITLE}}
according to {{GLYPH_BRIEF}} and {{TEXT_GUIDE}}, then label the result as an
exploratory fallback. If {{TEXT_MODE}} is
`deterministic-overlay`, leave the protected text zone empty for the layout
runtime. Keep exact long copy deterministic in either mode.

Avoid filter-only retouch, photo-plus-title islands, tourism collage, equal
photo rectangles, generic gradients, glossy plastic, long generated text,
pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: list three to five visible geometry or material features; do not use a city name as an anchor.
- `COMPOSITION_DIAGNOSIS`: choose preserve, deterministic rectify/crop, or semantic recompose and name the one observed issue.
- `COMPOSITION_REPAIR`: one action with a visible result and only low-risk continuous fill if needed.
- `PRIMARY_REFERENCE_MECHANISMS`: name two to four visible mechanisms covering subject, background, and type-image relation; never list a reference title or artist as a style instruction.
- `MATERIAL_BRANCH`: choose one main material and at most one support; derive colors from the source or verified place evidence.
- `DISPLAY_TITLE`: use only verified, observed, or user-confirmed short text. Move long metadata to deterministic layout.
- `TEXT_MODE`: default to `typeset-guide-integrated`; use `model-native-minimal-text` only for a constrained probe; use `deterministic-overlay` for long, editable, or fact-heavy text.
- `GLYPH_BRIEF`: specify per-character width, center of gravity, stroke contrast, optical spacing, terminals, counters, and material behavior without naming a source font as a style shortcut.
- `TEXT_GUIDE`: specify exact text, title range, shared axis, reading order, planned overlap, and named region IDs; keep the guide sparse and remove its marks from the final image.
- `TYPESET_REGIONS`: list the protected title field, subject overlap field, continuation/bleed field, and any effect-specific mask or window.
- `RECIPE_ID`: name the selected effect recipe in OVG terms, not a source-specific title or artist.
- `EFFECT_MODE`: choose one primary visible action from the Pattern's effect families and at most two supporting effects.
- `TOKEN_BINDINGS`: map every effect and text decision to both a prompt clause and a guide region or mark; unbound tokens are rejected.
- `PREFLIGHT_GATES`: require glyph coverage, exact text readback, guide alignment, collision/occlusion review, source-anchor review, and effect delivery review.

## Fidelity Gate / 保真门

- Image 1 remains recognizable before texture is inspected.
- Subject, active background, typography, and interaction are visible at thumbnail size.
- Image 2 contributes a complete mechanism rather than a palette-only resemblance.
- The source photograph and title occupy one coherent spatial world.
- The formal typeset-guide route passes glyph coverage, exact title readback, guide alignment, collision/occlusion review, and source-contour integration. If any gate fails, reject the route or switch to deterministic overlay.
- When using the model-native fallback, the requested title is legible character by character and remains integrated with the source contour, but the result is labeled exploratory rather than a typography calibration.
- The selected effect is visible, source-grounded, and represented in both the prompt and the guide.
- Multi-photo output, when requested, is a shared scene rather than a grid.
- Removing source-specific names and symbols leaves the same transferable poster method.
