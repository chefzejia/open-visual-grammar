# Soft 2.5D Icon

```yaml
id: soft-2-5d-icon
artifact_kinds:
  - app-icon
surfaces:
  - image-generation
when_to_use: Compact app or product icons where one recognizable silhouette and one functional cue must remain legible at small size through controlled shallow depth.
avoid_when: Long text, multi-object scenes, exact UI screenshots, dense illustration, photographic evidence, or icons that need realistic material physics.
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

This Pattern was calibrated against public descriptions for matte 2.5D
sculpture, soft-material app icons, rounded 3D icons, and minimal character IP
marks. Their names and preview images are external evidence only; this Pattern
keeps the method-level icon contract and does not copy a brand or character.

本 Pattern 参考了哑光 2.5D 雕塑、软拟物 App 图标、圆润 3D 图标和极简角色 IP 描述。
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

## Runtime Compilation Route Slots / 直接输入槽位

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

## Direct Compilation Route: Animal Mascot / 直接生成路线：Animal Mascot

# Animal Mascot Calibration / 动物吉祥物校准

This optional compilation route encodes the documented `3D Vivid Mascot 动物 IP 图标`
description into a brand-neutral icon method. It keeps species credibility,
natural color identity, one functional cue, and platform-safe continuity while
removing any source brand, logo, prop, or character design.

这份可选 compilation route 将“3D Vivid Mascot 动物 IP 图标”的方法抽象成品牌中立的图标语法。
它保留物种可信度、自然色彩身份、一个功能线索和跨平台连续性，去掉来源品牌、Logo、道具和具体角色设计。

## Style Signature / 风格签名

- Start with one recognizable animal silhouette whose anatomy, species cues, and natural color identity remain credible.
- Encode the product function through posture, negative space, one body feature, or one nested opening. Do not attach a logo, badge, costume, or decorative prop.
- Keep the `soft-2-5d-icon` square boundary, safe inset, shallow relief, and single soft-light direction. The mascot must survive 32 x 32 and 64 x 64 inspection.
- Use broad matte or satin color areas and two or three quiet depth planes. Expression may support personality but cannot replace the function cue.
- Keep iOS and macOS variants as the same mark; only platform framing or corner treatment may change.
- Text is absent by default. A verified glyph belongs to the product brief and must remain subordinate to the silhouette.

- 从一个可辨认的动物剪影开始，保留可信的身体结构、物种线索和自然色彩身份。
- 通过姿态、负形、一个身体特征或一个内嵌开口表达产品功能，不能贴 Logo、徽章、服装或装饰道具。
- 保持 `soft-2-5d-icon` 的方形边界、安全内缩、浅浮雕和单一柔光方向，缩小到 32 x 32 和 64 x 64 仍可辨。
- 使用宽色面、哑光或缎面材质与两到三层安静深度。表情可以辅助性格，但不能替代功能线索。
- iOS 与 macOS 变体必须是同一标记，只允许平台框架或圆角处理变化。
- 默认无文字；只有产品契约明确需要时才使用经过核对的字形，且必须服从剪影。

## Composition Families / 构图家族

1. **Primary Animal Emblem:** one centered species silhouette, with the function carried by pose or negative space.
2. **Pose Relation:** a shallow inset, opening, or body orientation shows how the animal performs the supplied function.
3. **Body Feature Cue:** one ear, eye, tail, wing, leaf-like appendage, or other species feature becomes the functional hinge.

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} on {{PLATFORM}} at {{ASPECT_RATIO}}.

The upstream icon argument is authoritative:
- Animal species: {{ANIMAL_SPECIES}}
- Icon function: {{ICON_FUNCTION}}
- Identity anchor: {{IDENTITY_ANCHOR}}
- Functional cue: {{FUNCTION_CUE}}
- Pose or negative-space relation: {{POSE_RELATION}}
- Natural color identity: {{NATURAL_PALETTE}}
- Text handling: {{TEXT_HANDLING}}

Use the Soft 2.5D Icon grammar with the animal-mascot calibration.
Preserve {{ANIMAL_SPECIES}} anatomy, recognizable silhouette, and natural color
identity. Encode {{ICON_FUNCTION}} through {{FUNCTION_CUE}} and
{{POSE_RELATION}}; use only one functional cue and do not invent a second story.
Expression may support the personality but must stay subordinate to recognition.

Keep a stable square boundary and safe inset for {{PLATFORM}}. Build two or
three shallow planes, overlaps, or relief levels with one soft consistent light
direction. Use broad matte or satin color areas and keep the mark identifiable at
32 x 32 and 64 x 64. Platform framing may change the crop or corner treatment,
but the animal mark and identity anchor must remain the same.

Do not attach a logo, badge, costume, tool, hat, sign, or decorative prop. Follow
{{TEXT_HANDLING}} and do not let a wordmark carry the function.

Avoid wet gloss, chrome, inflated plastic, thick bevels, photoreal fur, cinematic
backgrounds, miniature UI, generic fantasy creatures, random color changes,
long generated text, pseudo-symbols, logos, signatures, and watermarks.
{{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `ANIMAL_SPECIES`: use a supplied species or choose one only when the brief authorizes derivation; keep its anatomy credible.
- `IDENTITY_ANCHOR`: name one stable silhouette or species cue, not a character backstory.
- `FUNCTION_CUE`: choose one body feature, opening, or negative-space relation that explains the function.
- `POSE_RELATION`: describe one physical pose such as wrapping, resting, peering, carrying, or sheltering.
- `NATURAL_PALETTE`: state the species-derived palette; do not recolor for fashion.
- `TEXT_HANDLING`: normally use `no text`; use one verified glyph only when the icon contract requires it.
- `FORBIDDEN`: add topic-specific failures only. The base Pattern's small-size and depth rules still apply.

## Fidelity Gate / 保真门

- Species identity and anatomy are recognizable before material is inspected.
- One posture, negative space, or body feature communicates the product function at thumbnail size.
- Matte shallow depth supports the silhouette without glossy toy rendering or photoreal fur.
- iOS and macOS framing preserve the same mark and identity anchor.
- Removing the animal's name, palette, and 2.5D adjectives leaves the same function-bearing icon grammar.
- No logo, badge, costume, prop, copied character, or generated wordmark is required for recognition.

## Direct Compilation Route: Eastern Handdrawn Icon / 直接生成路线：Eastern Handdrawn Icon

# Eastern Handdrawn Icon Calibration / 国风手绘图标校准

This optional branch adapts the documented 国风手绘APP图标设计
description for app, Skill, mini-program, and desktop icons. It keeps the
`soft-2-5d-icon` identity contract while changing the material treatment to
eastern freehand watercolor, xuan-paper grain, and restrained halftone. It does
not add souvenir symbols or turn the icon into an illustration page.

这份可选分支将国风手绘 APP 图标设计
的描述编译为 App、Skill、小程序和桌面端图标方法。它保留 `soft-2-5d-icon` 的身份契约，只把材质改为
东方写意水彩、宣纸肌理和克制半色调，不添加旅游纪念符号，也不把图标扩展成插画页面。

## Style Signature / 风格签名

- Keep a stable square boundary, safe inset, one dominant silhouette, and one functional cue from the base Pattern.
- Use eastern freehand watercolor with visible brush pauses, softened edges, and xuan-paper fiber as the material field; depth comes from restrained wash overlap, not glossy extrusion.
- Use a small, coherent color family derived from the supplied function or subject. Keep the paper field dominant and avoid random complementary accents.
- Add retro halftone dots only as a subordinate print layer that supports the silhouette or one cue; never cover the entire mark with noise.
- Keep the icon clean and culturally quiet. Do not add seals, characters, roofs, clouds, cranes, or other stock symbols unless the product brief supplies them as evidence.
- Render a large master (default `2048 x 2048`) and inspect the same mark at `64 x 64` and `32 x 32`; the silhouette and cue must survive downsampling.

- 保持稳定方形边界、安全内缩、一个主剪影和一个功能线索，遵守基础 Pattern 契约；
- 用带有停顿、柔化边缘和宣纸纤维的东方写意水彩建立材质，深度来自克制的水彩叠染，不来自光亮挤出；
- 从功能或主体提炼小而连贯的色系，纸面占主导，不添加随机互补色；
- 复古半色调网点只能作为服从剪影或功能线索的次级印刷层，不能让噪点覆盖整个标记；
- 图标保持干净、安静，不凭空添加印章、人物、屋顶、云、鹤等套路符号，除非产品 brief 明确提供；
- 默认生成 `2048 x 2048` 大图，并在 `64 x 64` 与 `32 x 32` 检查同一标记，剪影与线索必须经得起缩小。

## Composition Families / 构图家族

Use the base Pattern's `Primary Emblem`, `Nested Function Relation`, or
`Character Mark` routes. This compilation route changes brush, paper, halftone, and color
behavior only; it does not create a fourth composition route.

沿用基础 Pattern 的“主徽记”“嵌套功能关系”或“角色徽记”路由。本 compilation route 只改变笔触、纸张、半色调和配色行为，
不新增第四种构图路由。

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at 2048 x 2048 master resolution.

The upstream icon score is authoritative:
- Platform: {{PLATFORM}}
- Icon function: {{ICON_FUNCTION}}
- First read: {{FIRST_READ}}
- Silhouette: {{SILHOUETTE}}
- Key feature: {{KEY_FEATURE}}
- Depth relation: {{DEPTH_RELATION}}
- Color identity: {{COLOR_IDENTITY}}
- Text handling: {{TEXT_HANDLING}}

Use the Soft 2.5D Icon Pattern with the Eastern Handdrawn Icon
calibration. Keep a stable square safe inset, one dominant silhouette, and one
functional cue. Choose only Primary Emblem, Nested Function Relation, or
Character Mark according to the score.

Render an eastern freehand watercolor mark on a dominant xuan-paper field. Keep
brush pauses, softened edges, and a restrained wash overlap visible; use shallow
physical depth only when it improves recognition. Derive a coherent color family
from {{COLOR_IDENTITY}} and add a subordinate retro halftone layer to one plane
or cue. Prepare a clean 2048 x 2048 master and verify the same silhouette and cue
at 64 x 64 and 32 x 32. Keep the platform frame from changing the mark's identity.

Do not add stock cultural symbols, random seals, glossy 3D, chrome, toy plastic,
full-frame halftone noise, miniature UI, text, logos, signatures, or watermarks.
{{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `COLOR_IDENTITY`: use supplied function or subject colors, usually one quiet paper family plus one or two meaningful accents.
- `DEPTH_RELATION`: name one shallow relation such as nested, opening, resting, or wrapping; avoid cinematic lighting language.
- `TEXT_HANDLING`: normally `no text`; icons should not depend on generated Chinese lettering.
- `FORBIDDEN`: add only brief-specific cultural inaccuracies or platform constraints; keep the base Pattern boundaries.

## Fidelity Gate / 保真门

- The icon is identifiable from silhouette and one cue before paper or halftone is inspected.
- Xuan-paper, watercolor, and halftone work as a bounded material system rather than a decorative filter.
- The same mark survives 64 x 64 and 32 x 32 inspection and keeps its platform identity.
- Cultural symbols are supplied evidence, not generic decoration.
- Removing material words still leaves the base soft-icon grammar: square boundary, one silhouette, one cue, shallow depth.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image-Generation Meta-Prompt / 图像生成元提示词

This compilation route compiles the `soft-2-5d-icon` Pattern for image generation. It is
calibrated by documented method descriptions for matte 2.5D sculpture, soft-material
app icons, rounded 3D icons, and minimal character marks, not by copying their
prompts, brands, or preview images.

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream icon score is authoritative:
- Platform: {{PLATFORM}}
- Icon function: {{ICON_FUNCTION}}
- First read: {{FIRST_READ}}
- Silhouette: {{SILHOUETTE}}
- Key feature: {{KEY_FEATURE}}
- Depth relation: {{DEPTH_RELATION}}
- Color identity: {{COLOR_IDENTITY}}
- Text handling: {{TEXT_HANDLING}}

Use the Soft 2.5D Icon visual grammar. Compress the supplied function into one
recognizable square mark. Preserve {{SILHOUETTE}} as the dominant first read and
use {{KEY_FEATURE}} as the one functional cue. Choose Primary Emblem, Nested
Function Relation, or Character Mark only when the score supports that route.

If the score selects an animal or mascot, preserve its species silhouette and
natural color identity. Let posture, negative space, or one body feature encode
the product function; never attach a logo, badge, or decorative prop.

Keep a stable square boundary and safe inset. Build two or three shallow planes,
overlaps, or relief levels so {{DEPTH_RELATION}} explains the function. Keep the
mark identifiable at 32 x 32 and 64 x 64. Use one soft, consistent light direction
and matte or satin surfaces with clean edge transitions.

Use a restrained color family based on {{COLOR_IDENTITY}} with broad color areas
and few tonal steps. Platform framing for {{PLATFORM}} may change the outer crop
or corner treatment, but must not change the mark's identity. Do not add a second
story, wordmark, UI, or decorative props.

Avoid wet gloss, chrome, inflated plastic, thick bevels, heavy extrusion,
photoreal reflections, cinematic backgrounds, miniature dashboards, badge sheets,
random complementary colors, generated paragraphs, pseudo-symbols, logos,
signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `PLATFORM`: specify `iOS`, `macOS`, or both. Keep the same mark across variants;
  platform-specific framing belongs to the runtime.
- `DEPTH_RELATION`: name one physical relation such as nested, opening, resting,
  wrapping, or floating. Do not turn it into a list of lighting effects.
- `COLOR_IDENTITY`: state the subject or function-derived color family, not a
  generic palette trend.
- `TEXT_HANDLING`: normally use `no text`; use a single verified glyph only when
  the icon contract explicitly requires it.
- `FORBIDDEN`: add only topic-specific mistakes. The Pattern's small-size,
  material, and density prohibitions already apply.

- `PLATFORM`：填写 `iOS`、`macOS` 或两者。平台变体保持同一个标记，平台框架由 Runtime 处理；
- `DEPTH_RELATION`：写出一个实体关系，例如嵌套、开口、承托、包裹或悬浮，不要写成光效清单；
- `COLOR_IDENTITY`：写主体或功能导出的色系，不要写泛化的流行配色；
- `TEXT_HANDLING`：通常选择“无文字”，只有图标契约明确要求时才使用一个经过核对的字形；
- `FORBIDDEN`：只补充主题特有错误，Pattern 已有的小尺寸、材质和密度禁区不必重复。

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

This record absorbs the former icon and animal-mascot transfer checks.

这份记录吸收已删除的图标和动物吉祥物迁移检查。

## Stable Checks / 稳定检查

- Use one square silhouette, one function-bearing posture or body feature, one
  soft light direction, and shallow matte depth. The mark must remain legible at
  `32x32` and `64x64` in both iOS and macOS framing.
- Species anatomy or source identity remains credible before any badge, prop,
  label, or decorative surface is inspected. Text-free output is the default.
- The function cue must be carried by the body or negative space: a tail loop
  encloses a reading page, a beak points through a missing-part gap, or a shell
  protects a focus window.
- Three structural routes may vary emblem, pose relation, or body-feature cue;
  color, gloss, camera, and platform swaps are not meaningful iteration.

- 使用一个方形剪影、一个承载功能的姿态或身体特征、一个柔和光向和浅层哑光深度。图标在 iOS 与 macOS 的 `32x32`、`64x64` 框架中都必须可读。
- 在检查徽章、道具、标签和装饰表面前，先保证物种解剖或来源身份可信。默认不生成文字。
- 功能线索必须由身体或负空间承载：尾巴围住阅读页面、鸟喙指向缺失零件的间隙，或龟壳保护专注窗口。
- 三条结构路由可以是徽记、姿态关系或身体特征线索；只换颜色、光泽、相机或平台不算有效迭代。

## Transfer Set / 迁移主题组

Keep the same iOS/macOS contract across a focused reading queue, household
repair finder, and quiet office focus timer. Animal species and function cues
change only with the product brief.

## Failure Recovery / 失败恢复

- A generic fantasy creature, blob, logo, costume, or unrelated prop means the
  function is not owned by the icon silhouette; remove the dependency.
- Gloss, chrome, photoreal fur, or platform-specific framing must not replace
  the same identity anchor.
- If the function repeatedly requires a second object or a different artifact
  route, delete the Pattern rather than keeping a weak icon state.
