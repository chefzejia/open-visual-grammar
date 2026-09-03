# Source-Grounded Place Poster

```yaml
id: source-grounded-place-poster
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Art-directed editorial posters built from real architecture, streets, cultural places, shops, objects, food, or travel photographs whose identity must survive transformation.
avoid_when: Routine retouching, invented places, generic advertising, exact documentary proof, equal-weight photo grids, or a style that can work without a source subject.
load_next:
  image-generation: adapters/guizang-yingzao.md
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
- Keep generated copy short. Exact text, glyph roles, and long metadata belong to deterministic layout or a verified guide; the image model must not be the source of truth for wording.

- 在检查材质或文字前，先保留三到五个来源身份锚点，如剪影、屋脊、檐口、匾额、不对称、材质边界或食物/器物结构。
- 在检索参考前冻结四个可见决定：主体处理、主动背景、文字行为，以及一个非默认互动或版式动作。
- 只选择一张能同时示范主体处理、背景参与和图文关系的主导参考，不能只选配色或氛围。
- 先诊断来源构图，并且只选一个主修复动作：保留、确定性扶正/裁切或语义重构。不能抹掉有意的透视、不对称和低机位力量。
- 让主体、背景和文字通过遮挡、共边、负形、尺度关系或连续重建场域进入同一空间。照片加孤立标题的两座孤岛不成立。
- 配色来自来源主体或已核实的地点证据。使用一种主材质，最多一种辅助材质；语义母题必须稀疏并承担真实构图任务。
- 多张同址照片需要提取主体，在共同透视、光向、接触面和边缘语言中重建一个场景。只有用户明确要求对照时才保留照片矩形。
- 地点名、年代、文保状态和文化事实只能来自已核实、照片观察或用户确认的信息。不能发明建筑、历史、字形或地标。
- 生成文字保持短小。准确文案、字形角色和长资料交给确定性排版或已验证的垫图，不能让图像模型成为文字真源。

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
- short Chinese display titles with a deterministic text handoff.

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

## Runtime Slots / 运行时槽位

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
FORBIDDEN
```

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
- Text is short and exact where required, with no pseudo-Chinese, invented facts, or detached title island.
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

When these failures recur across unrelated places, delete this Pattern. Do not
keep a weaker intermediate version.
