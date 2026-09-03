# Soft 2.5D Icon

```yaml
id: soft-2-5d-icon
artifact_kinds:
  - app-icon
runtimes:
  - image-generation
when_to_use: Compact app or product icons where one recognizable silhouette and one functional cue must remain legible at small size through controlled shallow depth.
avoid_when: Long text, multi-object scenes, exact UI screenshots, dense illustration, photographic evidence, or icons that need realistic material physics.
load_next:
  image-generation: adapters/image-generation.md
  style-calibration-eastern-handdrawn: adapters/youmind-eastern-handdrawn-icon.md
  style-calibration-animal-mascot: adapters/youmind-animal-mascot.md
```

中文名：柔和 2.5D 图标
English name: Soft 2.5D Icon


## Definition / 定义

EN: Soft 2.5D Icon compresses an app or product function into one square mark.
Recognition comes from a strong silhouette and one meaningful feature; shallow
overlap, relief, and soft light add material depth without turning the mark into
a toy render or a miniature interface.

CN：柔和 2.5D 图标把应用或产品功能压缩成一个方形标记。识别度来自明确剪影和一个有意义的关键
特征；浅层遮挡、浮雕和柔和光线增加材质深度，但不把图标变成玩具渲染或缩小版界面。

This Pattern was calibrated against public YouMind descriptions for matte 2.5D
sculpture, soft-material app icons, rounded 3D icons, and minimal character IP
marks. Their names and preview images are external evidence only; this Pattern
keeps the method-level icon contract and does not copy a brand or character.

本 Pattern 参考了 YouMind 公开的哑光 2.5D 雕塑、软拟物 App 图标、圆润 3D 图标和极简角色 IP 描述。
相关名称与预览图只作外部证据；本 Pattern 只保留方法级图标契约，不复制品牌或角色。

## Invariants / 不变量

- The icon has a stable square boundary and safe inset; the mark must remain
  identifiable at 32 x 32 and 64 x 64 previews.
- One silhouette or emblem is the first read. A second object may appear only as
  a structural support for the same function.
- One key feature carries the product identity: an opening, handle, lens, path,
  face, leaf, or other supplied cue. Do not accumulate badges or props.
- Two or three shallow planes, overlaps, or relief levels explain depth and
  hierarchy. The light direction stays soft and consistent.
- Color is a restrained family derived from the supplied function or subject.
  Broad fields beat gradients and random complementary accents.
- For animal or mascot marks, preserve the species silhouette and natural color
  identity; encode the product function through posture, negative space, or one
  body feature instead of a logo, badge, or prop.
- The mark is clean and material-aware but not wet-glossy, chrome-like, toy-like,
  or photorealistic. Text is absent unless a platform contract explicitly makes a
  single verified glyph part of the identity.

- 图标拥有稳定的方形边界和安全内缩，缩小到 32 x 32 与 64 x 64 预览时仍然可辨；
- 一个剪影或徽记承担第一眼信息，第二个物体只有在支撑同一功能时才允许出现；
- 一个关键特征承载产品身份，例如开口、把手、镜头、路径、面孔或叶片，不能堆积徽章和道具；
- 两到三层浅层平面、遮挡或浮雕解释深度和层级，光线方向保持柔和一致；
- 配色是从功能或主体提炼的克制色系，大色面优先，不使用随机互补色和复杂渐变；
- 对动物或吉祥物标记，保留物种剪影与自然色彩身份，通过姿态、负形或一个身体特征表达产品功能，不能靠 logo、徽章或道具；
- 图标干净且有材质意识，但不能湿亮、铬面化、玩具化或写实，除非平台契约明确要求，默认不放文字。

## Style Signature / 风格签名

High-fidelity output preserves four signatures:

1. a square mark with one unmistakable silhouette;
2. one functional feature that survives thumbnail inspection;
3. soft, shallow depth built from overlap or relief rather than heavy extrusion;
4. a restrained, coherent color and material family that reads as a product
   identity, not a generic 3D object.

高保真结果必须同时保留四个签名：

1. 一个拥有明确剪影的方形标记；
2. 一个经得起缩略图检查的功能特征；
3. 来自遮挡或浮雕的柔和浅层深度，而不是厚重挤出；
4. 连贯克制的配色与材质，读起来像产品身份，不是泛化 3D 物件。

## Ownership Contract / 权责契约

The upstream brief owns the product function, audience, identity cue, and any
required platform. This Pattern owns the silhouette simplification, feature
budget, depth construction, color restraint, material, density, and emotional
temperature. The runtime owns pixel dimensions, platform crop, export format,
and text handling.

上游 brief 负责产品功能、受众、身份线索和平台要求。本 Pattern 负责剪影减法、特征预算、深度
构造、配色克制、材质、密度和情绪温度。Runtime 负责像素尺寸、平台裁切、导出格式和文字策略。

Do not let the Pattern invent a new product story. If the function cannot be
expressed by one silhouette and one cue, return to the brief or choose another
artifact route.

Pattern 不得凭空发明新的产品故事。如果一个功能无法用一个剪影和一个线索表达，应返回 brief 或
改选其他 artifact route。

## Internal Layout Routes / 内部版式路由

### Primary Emblem / 主徽记

Center one dominant silhouette inside the square safe area. Use this route when
recognition depends on a single object or character mark.

在方形安全区内居中放置一个主导剪影。识别度依赖单个物件或角色标记时使用。

### Nested Function Relation / 嵌套功能关系

Place one small supporting plane, opening, or inset inside the main silhouette to
show what the product does. The support must remain subordinate at thumbnail size.

在主剪影内部放置一个小型支撑平面、开口或内嵌结构，说明产品做什么。支撑结构在缩略图中必须退后。

### Character Mark / 角色徽记

Use a simplified face, posture, or appendage only when the product genuinely
benefits from a character identity. Keep the silhouette and one functional cue
stronger than expression or decoration.

只有产品确实需要角色身份时，才使用简化面孔、姿态或肢体。剪影和一个功能线索必须强于表情与装饰。

## Fit / 适用范围

Recommended:

- iOS and macOS app icon concepts;
- compact product or tool marks;
- friendly utility, reading, health, creator, and AI tools with one concrete
  function;
- mascot-like marks that must remain recognizable without a wordmark.

适合：

- iOS 和 macOS App 图标概念；
- 紧凑的产品或工具标记；
- 拥有一个具体功能的效率、阅读、健康、创作和 AI 工具；
- 不依赖字标也要能识别的吉祥物式标记。

## Weak Fit / 不适合

- screenshots, dashboards, or icons that need several readable labels;
- complex brand systems with many independent symbols;
- photoreal objects whose material physics is part of trust;
- poster, cover, or illustration requests where the square mark is only a crop.

- 截图、仪表盘或需要多个可读标签的图标；
- 包含大量独立符号的复杂品牌系统；
- 材质物理本身决定可信度的写实物件；
- 方形只是裁切结果的海报、封面或插图请求。

## Material, Density, And Temperature / 材质、密度与温度

Material is soft and controlled: matte or satin surfaces, shallow relief, clean
edge transitions, and one consistent soft-light direction. Use broad color areas
and only a few tonal steps. Avoid wet gloss, chrome, inflated plastic, heavy
bevels, realistic reflections, and cinematic backgrounds.

材质柔和且受控：哑光或缎面表面、浅浮雕、干净边缘过渡和单一柔光方向。使用宽色面与少量明度层级。
避免湿亮、铬面、充气塑料、厚倒角、真实反射和电影化背景。

Density is low. Every visible part must improve recognition or explain the one
function. Emotional temperature is friendly, precise, quietly optimistic, and
confident rather than childish or theatrical.

密度：低。每个可见部分都必须提升识别度或说明这一个功能。情绪：友好、准确、安静乐观、有信心，
不做幼稚或戏剧化。

## Transfer Boundaries / 迁移边界

- Unlike `paper-sculpture-collage-editorial`, this Pattern must survive as one
  compact mark; it does not use a page field or several editorial planes.
- Unlike `frosted-silhouette-editorial`, depth comes from shallow physical relief,
  not regional translucent windows or blur.
- Unlike `big-character-poster`, type is normally absent and the silhouette, not
  a headline, owns the first read.
- Unlike `whimsical-journal-sketch`, character warmth is constrained by function
  and small-size legibility, not by diary fragments or loose collage.

- 与 `paper-sculpture-collage-editorial` 不同，本 Pattern 必须作为一个紧凑标记成立，不使用页面空间
  或多层编辑平面；
- 与 `frosted-silhouette-editorial` 不同，深度来自浅层实体浮雕，不来自区域透叠或模糊视窗；
- 与 `big-character-poster` 不同，文字通常不存在，剪影而不是标题拥有第一眼信息；
- 与 `whimsical-journal-sketch` 不同，角色温度受功能和小尺寸识别约束，不靠日记碎片或松弛拼贴。

## Runtime Adapter Slots / 运行时槽位

```text
ARTIFACT_KIND
PLATFORM
ASPECT_RATIO
AUDIENCE
ICON_FUNCTION
FIRST_READ
SILHOUETTE
KEY_FEATURE
DEPTH_RELATION
COLOR_IDENTITY
TEXT_HANDLING
FORBIDDEN
```

## Failure Modes / 失败方式

- The icon contains several equal objects and no dominant silhouette.
- The functional cue disappears at 32 x 32, leaving a generic blob or mascot.
- Depth becomes thick extrusion, glossy plastic, chrome, or toy rendering.
- Color becomes a palette showcase or random contrast instead of product identity.
- Platform framing changes the mark's identity between iOS and macOS variants.
- Text, letters, or pseudo-symbols are generated inaccurately.
- The icon becomes a miniature dashboard, badge sheet, or cover composition.
- Decorative expression or props replace the supplied function.

- 图标出现多个同等物体，没有主导剪影；
- 功能特征在 32 x 32 消失，只剩泛化色团或吉祥物；
- 深度变成厚重挤出、光亮塑料、铬面或玩具渲染；
- 配色变成色板展示或随机反差，而不是产品身份；
- iOS 与 macOS 版本的平台框架改变了标记身份；
- 文字、字母或伪符号生成错误；
- 图标退化成缩小版仪表盘、徽章表或封面构图；
- 表情与道具装饰替代了上游功能。

## Fidelity Gate / 保真门

1. Is the function recognizable from silhouette and one cue before material is
   inspected?
2. Does the mark remain identifiable at 32 x 32 and 64 x 64?
3. Are depth and light shallow, consistent, and subordinate to recognition?
4. Does the same identity survive platform framing changes?
5. If color, gloss, and material words are removed, does the same icon grammar
   remain?

1. 不看材质，功能是否已经能从剪影和一个线索中被认出？
2. 缩小到 32 x 32 和 64 x 64 后，标记是否仍然可辨？
3. 深度和光线是否浅、统一，并且服从识别度？
4. 更换平台框架后，身份是否仍然一致？
5. 去掉配色、光泽和材质词后，同一套图标语法是否仍然存在？
