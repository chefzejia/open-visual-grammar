# Paper Sculpture Collage Editorial

```yaml
id: paper-sculpture-collage-editorial
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Editorial covers where one recognizable subject or relation can be rebuilt as a small set of layered cut-paper planes with matte depth and a calm page field.
avoid_when: Exact UI proof, dense tutorials, photographic evidence, long copy, playful sticker sheets, or topics that require glossy 3D or realistic material physics.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：纸雕拼贴编辑封面
English name: Paper Sculpture Collage Editorial


## Definition / 定义

EN: Paper Sculpture Collage Editorial turns the supplied subject, action, and
evidence into a restrained arrangement of cut-paper silhouettes and overlapping
planes. Cut edges, shallow contact shadows, and a matte page field create depth;
the collage is an editorial reconstruction, not a photo pasted into a frame or a
plastic 3D render.

CN：纸雕拼贴编辑封面把上游给出的主体、动作和证据，重建成少量剪纸轮廓与前后叠层的平面关系。
切边、浅接触阴影和哑光纸面建立深度；它是编辑性的重新组织，不是把照片贴进画框，也不是塑料
3D 渲染。

This Pattern was calibrated against public YouMind descriptions for paper-cut
collage, torn-paper archive collage, and hand-drawn paper concept illustration.
Those names, prompts, and preview images are external evidence only; this
Pattern keeps the paraphrased visual method and its transfer boundaries.

本 Pattern 参考了 YouMind 公开的纸雕拼贴、撕纸档案拼贴和手绘纸片概念插画描述。
相关名称、prompt 和预览图只作外部证据；本 Pattern 只保留转述后的视觉方法与迁移边界。

## Invariants / 不变量

- One recognizable silhouette, gesture, or relation remains the first read before
  the paper material is inspected.
- The scene is rebuilt from a small number of ordered planes, usually two to
  five, with a clear front, middle, and back relationship.
- Cut edges, overlaps, and shallow matte contact shadows explain depth or
  obstruction; they never become glossy lighting or toy-like volume.
- Background complexity is deliberately deleted. Near-white or quiet neutral
  paper remains an active field around the subject.
- Color is derived from the supplied subject or evidence and compressed into a
  restrained family. Pastel is allowed as a result, not as a fixed candy palette.
- Short editorial type or a handwritten note may join the page only when it
  clarifies the supplied relation; long generated copy is not part of the image.

- 在检查纸张材质之前，一个可辨识的剪影、动作或关系必须先被读出；
- 场景由少量有顺序的平面重建，通常为两到五层，前中后关系清楚；
- 切边、叠层和浅色哑光接触阴影负责解释深度或遮挡，不能变成高光或玩具式体积；
- 主动删除背景复杂度，主体周围保留近白或安静中性色纸面作为构图空间；
- 颜色从主体或证据提炼并压缩成克制色系，粉彩只能是结果，不能是固定糖果色模板；
- 只有能说明上游关系时，短编辑文字或手写注记才可进入画面，不能生成长段文字。

## Style Signature / 风格签名

High-fidelity output preserves four signatures:

1. a source-derived contour or relation as the first read;
2. a small, legible stack of cut planes with meaningful occlusion;
3. tactile paper edges and shallow matte shadows instead of plastic volume;
4. a simplified page field and restrained source-aware color that feels like a
   published object study.

高保真结果必须同时保留四个签名：

1. 源主体提炼出的轮廓或关系作为第一眼信息；
2. 少量、可读且有语义遮挡的剪纸叠层；
3. 有触感的纸边和浅色哑光阴影，而不是塑料体积；
4. 简化的页面空间与源自主体的克制配色，像出版物里的物件研究。

## Ownership Contract / 权责契约

The upstream visual argument owns the first read, action, main subject, and
concrete evidence. This Pattern owns the layer count, occlusion logic, cut-edge
language, palette restraint, type hierarchy, density, and emotional temperature.
The runtime owns aspect ratio, text strategy, and export details.

上游视觉论证负责第一眼信息、动作、主体与具体证据。本 Pattern 负责层数、遮挡逻辑、剪纸边缘、
配色克制、文字层级、密度和情绪温度。Runtime 只负责画幅、文字策略与导出细节。

Do not let the topic adapter add unrelated objects to make the collage feel
rich. Every plane must clarify the supplied action, evidence, or spatial
relationship. Remove the paper language and the source relation must still be
recoverable.

主题 adapter 不得为了让拼贴“丰富”而增加无关物件。每一层都必须说明上游动作、证据或空间关系。
即使去掉纸张语言，也必须还能还原来源关系。

## Internal Layout Routes / 内部版式路由

### Layered Stage / 叠层舞台

Place one recognizable subject on a quiet paper field and use two or three
planes to support, block, bridge, or expose the action. Choose this route for a
single relation with a clear physical direction.

让一个可辨识主体置于安静纸面，用两到三层平面承托、遮挡、连接或显露动作。适用于方向明确的
单一关系。

### Memory Diptych / 记忆双联

Split one subject or state into two related paper plates sharing the same page
and palette. Use only when the source contains a real before/after, contrast, or
distance; the pair must remain one argument rather than two illustrations.

把同一主体或状态拆成共享纸面与配色的两块关联纸板。只有来源包含真实前后、对照或距离时才使用，
两块必须仍然服务同一个论点。

### Cut-Plane Relation / 切面关系

Use an opening, lifted flap, cutaway, or offset plane to reveal the evidence
inside the main silhouette. Choose this route when access, obstruction, hidden
cause, or partial visibility is the visual action.

用开口、翻起的纸片、切面或错位平面，在主体轮廓内部显露证据。适用于进入、遮挡、隐藏原因或部分
可见本身就是视觉动作的主题。

## Fit / 适用范围

Recommended:

- editorial covers about one object, gesture, or spatial relation;
- travel, culture, product-concept, and reflective topics that benefit from
  tactile but flat reconstruction;
- subjects where a cut plane or layer can make distance, support, or access
  visible;
- square, horizontal, or portrait compositions with short checked type.

适合：

- 围绕一个物件、动作或空间关系的编辑封面；
- 适合用平面但有触感的方式重建的旅行、文化、产品概念和反思主题；
- 可以用切面或叠层显露距离、支撑或进入关系的主体；
- 使用短文字的方形、横向或竖向构图。

## Weak Fit / 不适合

- exact product screenshots or UI demonstrations;
- multi-step instructional diagrams or data-dense infographics;
- scenes whose trust depends on photographic evidence or realistic optics;
- subjects that need many independent objects, long text, glossy glass, or
  cinematic depth.

- 精确产品截图或 UI 演示；
- 多步骤教程或数据密集型信息图；
- 可信度依赖摄影证据或真实光学的场景；
- 需要大量独立物件、长文字、光亮玻璃或电影化深度的主题。

## Material, Density, And Temperature / 材质、密度与温度

Material is matte and tactile: paper fibers, clean cut edges, slight tears only
when the argument needs a worn memory, shallow contact shadows, and quiet page
grain. Use flat or gently modulated color surfaces. Avoid plastic bevels, chrome,
thick extrusion, glossy highlights, and physically dramatic lighting.

材质保持哑光和有触感：纸纤维、清晰切边，只有在论证需要旧记忆时才使用轻微撕裂，搭配浅色接触
阴影和安静纸纹。色面保持平面或轻微变化。避免塑料倒角、铬面、厚重挤出、镜面高光和戏剧化光照。

Density is low to medium. Every layer and shadow must clarify the same relation;
do not fill the page with stickers or craft-supply decoration. Emotional
temperature is warm, observant, tactile, and editorial, with quiet optimism
rather than childish excitement.

密度：低到中。每一层和阴影都必须说明同一个关系，不能用贴纸或手工材料装饰填满页面。情绪：
温暖、观察性、有触感、编辑化，偏安静的乐观，不做幼稚兴奋。

## Transfer Boundaries / 迁移边界

- Unlike `whimsical-journal-sketch`, this Pattern is plane-and-occlusion led,
  with deliberate cut edges and shallow depth rather than watercolor fragments
  and loose daily notes.
- Unlike `eastern-texture-handdrawn`, it uses constructed paper planes and
  source-derived color rather than ink suggestion or cultural restraint.
- Unlike `frosted-silhouette-editorial`, its depth comes from physical paper
  overlap, not regional translucency or blur windows.
- Unlike `semantic-concept-poster`, the short type is subordinate; the layered
  relation carries the argument.

- 与 `whimsical-journal-sketch` 不同，本 Pattern 由平面和遮挡驱动，强调剪纸边缘与浅层深度，而不是
  水彩碎片和松弛日常注记；
- 与 `eastern-texture-handdrawn` 不同，本 Pattern 使用构造出的纸片平面和源自主体的配色，不靠淡墨
  暗示或文化克制；
- 与 `frosted-silhouette-editorial` 不同，深度来自真实纸片叠层，不来自区域透叠或磨砂视窗；
- 与 `semantic-concept-poster` 不同，短文字是从属元素，叠层关系才承载论点。

## Runtime Adapter Slots / 运行时槽位

```text
ARTIFACT_KIND
ASPECT_RATIO
AUDIENCE
FIRST_READ
VISUAL_ACTION
MAIN_SUBJECT
CONCRETE_EVIDENCE
TEXT_HANDLING
LAYER_TARGETS
FORBIDDEN
```

## Failure Modes / 失败方式

- The subject becomes an abstract pile of shapes and loses its recognizable
  contour or action.
- Layer count grows until the page reads as a sticker sheet or craft catalog.
- Shadows and bevels become glossy plastic, toy 3D, or cinematic lighting.
- Pastel color is applied as a fixed candy palette instead of being derived from
  the supplied subject or evidence.
- Torn paper, grain, or collage fragments become decoration without explaining
  the relation.
- The topic adapter imports unrelated props or a second narrative.
- Text becomes long, pseudo-Chinese, or a generic headline pasted outside the
  collage.
- The result is a photo-in-frame treatment instead of a reconstructed paper
  composition.

- 主体变成抽象色块堆，失去可辨识轮廓或动作；
- 层数膨胀，画面退化成贴纸表或手工材料目录；
- 阴影和倒角变成光亮塑料、玩具 3D 或电影化光照；
- 粉彩变成固定糖果色模板，而不是从主体或证据提炼；
- 撕纸、颗粒和拼贴碎片成为不说明关系的装饰；
- 主题 adapter 引入无关道具或第二条叙事；
- 文字变成长段、伪中文，或贴在拼贴外部的通用标题；
- 结果只是照片套进画框，而不是纸片关系的重新构建。

## Fidelity Gate / 保真门

1. Can the subject, gesture, or relation be named before the paper material is
   noticed?
2. Do the layer order, overlap, and cut plane each explain a real relation?
3. Does the page remain calm and legible at thumbnail size with active negative
   space?
4. Are edges and shadows matte and tactile rather than glossy or volumetric?
5. If color, paper, and shadow adjectives are removed, does the same layered
   argument remain?

1. 不看纸张材质，是否已经能说出主体、动作或关系？
2. 层级、遮挡和切面是否分别说明真实关系？
3. 缩小后页面是否仍然安静、可读，且留白主动参与构图？
4. 边缘和阴影是否哑光有触感，而不是光亮或体积化？
5. 去掉配色、纸张和阴影形容词后，叠层论证是否仍然存在？
