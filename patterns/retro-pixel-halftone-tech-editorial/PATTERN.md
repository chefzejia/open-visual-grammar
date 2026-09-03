# Retro Pixel Halftone Tech Editorial

```yaml
id: retro-pixel-halftone-tech-editorial
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Technical editorials where one conflict, decision, bottleneck, comparison, or human-system relation should become a framed, information-rich editorial plate.
avoid_when: Sparse spot illustrations, photographic evidence, exact product UI, multi-step tutorials, quiet mood images, or topics without one visualizable claim.
load_next:
  image-generation: adapters/image-generation.md
  references: refs/README.md
```

中文名：复古像素网点科技编辑插画
English name: Retro Pixel Halftone Tech Editorial


## Definition / 定义

EN: Retro Pixel Halftone Tech Editorial turns one technical argument into a framed editorial plate. It combines an integrated headline-and-scene system, evidence modules at sharply different scales, one-bit pixel drawing, halftone texture, controlled safety orange, and the tone of an independent technology broadsheet.

CN：复古像素网点科技编辑插画把一个技术判断组织成带框架的编辑图版。它不只是像素和网点材质，还包括标题与解释场景一体化、尺度分明的证据模块、受控的安全橙，以及独立科技大报般直接而有触感的气质。

The pattern was first extracted from operator-provided images, then calibrated against the public skill [复古像素网点科技插画](https://youmind.com/zh-CN/skills/retro-pixel-halftone-tech-illustration-Kmx3XWOrUiKUwq) by 神神的孩子在跳舞. The external prompt and images are references, not repository instructions or vendored assets. This pattern keeps only paraphrased method-level learning.

本 pattern 最初来自用户提供的参考图，随后用作者“神神的孩子在跳舞”公开的 [复古像素网点科技插画](https://youmind.com/zh-CN/skills/retro-pixel-halftone-tech-illustration-Kmx3XWOrUiKUwq) Skill 进行校准。外部提示词和图片只作为参考，不是仓库指令，也不复制进仓库；此处只保留经过转述的方法级结论。

## Invariants / 不变量

- The material stays near-binary: deep black, dominant warm paper white, halftone grey, and safety orange as the only signal color.
- Safety orange has a visible budget: roughly 5-12% of the surface and no more than one to three semantic anchors.
- Pixel edges, one-bit dithering, halftone dots, crosshatching, registration drift, and print grain create the surface.
- Objects are flat, front-facing or orthographic editorial symbols. Volumetric sci-fi shells, cinematic perspective, glossy machinery, and cable-heavy control panels belong to another visual language.
- Large, medium, and small information scales remain distinct. Supporting detail cannot compete with the narrative unit.
- Exact text is either short and verified or reserved for deterministic typesetting.
- The image reads as an authored editorial plate rather than a spot illustration floating beside a title.
- Headline, main mechanism, and supporting evidence share one visible frame and one argument.
- Dense detail is organized by sharp scale changes, not spread as equal-weight dashboard furniture.

- 材质保持近乎二值：深黑、占主导的暖纸白、网点灰，以及唯一一种信号色安全橙。
- 安全橙必须有明确预算：通常占画面约 5%-12%，只落在一到三个有语义的视觉锚点上。
- 像素边缘、一比特抖动、半调网点、交叉网纹、轻微套印偏移和印刷颗粒共同形成表面。
- 物体使用扁平、正视或正投影的编辑符号语言。立体科幻外壳、电影透视、光滑机械和电缆密集的控制台属于另一套视觉语言。
- 大、中、小信息尺度必须清楚；辅助细节不能与核心叙事争夺注意力。
- 精确文字要么短且可核对，要么预留给确定性排版。
- 画面必须读起来像一张经过编排的编辑图版，而不是标题旁边漂着一幅单体插画。
- 标题、核心机制和辅助证据处于同一个可见框架内，共同证明一个判断。
- 高密度细节依靠强烈的尺度差组织，不能铺成同权仪表盘。

## Style Signature / 风格签名

High-fidelity output preserves all four signatures:

1. A strong outer frame, band, rule system, or equivalent device makes the page feel deliberately published.
2. A large block headline participates in the composition instead of occupying an unrelated blank field.
3. One central technical mechanism or human-system relation carries the claim; small modules annotate or prove it.
4. Pixel icons, labels, arrows, halftone fields, and controlled safety orange create an engineered reading rhythm.

高保真结果必须同时保留四个签名：

1. 粗边框、条带、分隔线或功能等价物让画面形成明确的出版物边界；
2. 大块标题参与构图，而不是放在与插画互不相关的空白区；
3. 一个核心技术机制或人机关系承载主张，小模块只负责注释或举证；
4. 像素图标、短标签、箭头、网点块与受控的安全橙共同形成工程化阅读节奏。

## Ownership Contract / 权责契约

The article owns only semantic content: first read, correction, visual action,
main subject, and concrete evidence. This Pattern owns the visual method:
editorial frame, layout routing, scale rhythm, density range, palette, object
rendering, typography hierarchy, material, and emotional temperature. The
runtime owns only execution details such as aspect ratio, text strategy, and
export constraints.

A compiled prompt must not invent a second art direction. Every noun or adjective
that changes palette, perspective, object construction, layout, typography,
material, or temperature must trace to this Pattern. Article concepts may be
physicalized only with the flat editorial symbol language defined here; do not
turn abstract concepts into an unrelated volumetric or futuristic object language
unless those objects are themselves concrete evidence in the source.

文章只拥有语义内容：第一眼信息、修正、视觉动作、主体与具体证据。本 Pattern
拥有视觉方法：编辑框架、版式路由、尺度节奏、密度范围、配色、物体画法、字体层级、
材质和情绪温度。Runtime 只拥有画幅、文字策略和导出约束等执行细节。

编译后的 Prompt 不得再发明第二套美术方向。凡是会改变配色、透视、物体构造、版式、
字体、材质或情绪的名词与形容词，都必须能追溯到本 Pattern。文章中的抽象软件概念只能
用这里定义的扁平编辑符号来物理化；除非立体或未来主义物件本身就是正文证据，否则不得
擅自引入另一套物体语言。

## Semantic Inputs And Pattern Decisions / 语义输入与 Pattern 决策

The upstream visual argument supplies only semantic inputs:

- **First read**: the already-approved first-read phrase or text-free claim.
- **Visual action**: the physical action or relationship that carries the correction.
- **Main subject**: the subject already chosen to perform or receive that action.
- **Concrete evidence**: objects or contrasts that can prove the action without another claim.
- **Text handling**: generated short text, reserved blank regions, or deterministic typesetting.
- **Accent targets**: one to three meaningful anchors derived from the action or decisive evidence.

上游视觉论证只提供语义输入：

- **第一眼信息**：已经确认的第一眼短句，或无需文字也能读取的主张。
- **视觉动作**：承载修正关系的物理动作或关系。
- **主体**：已经选定、负责执行或承受该动作的对象。
- **具体证据**：无需引入第二个主张，就能证明动作或关系的物件与对照。
- **文字处理**：生成短文字、预留空白，或后期确定性排版。
- **强调对象**：从动作或决定性证据中提取一到三个有语义的锚点。

Pattern 再根据这些语义选择内部版式路由。版式路由、密度、颜色和物体画法不是上游或
runtime prompt 的自由变量。画幅和具体坐标可以变化，但不能借适配重新解释文章或改变风格。

## Internal Layout Routes / 内部版式路由

Every route uses the same systems-broadsheet skeleton: dominant warm paper,
one strong outer frame, an integrated block headline, one explanatory relation,
subordinate proof modules, and a narrow functional rule or conclusion band.
Routes change how the semantic action occupies that skeleton; they are not
independent art directions.

所有路由都使用同一套系统工程大报骨架：占主导的暖纸白、一道强外框、参与构图的块面标题、
一个解释性关系、退后的证据模块，以及窄而有功能的分隔条或结论条。路由只决定语义动作如何
占据这套骨架，不是彼此独立的美术方向。

### Systems Broadsheet / 系统工程大报骨架

The primary and highest-fidelity family. Use a framed horizontal plate with a
large headline zone, one dominant mechanism or relation, a small number of
evidence modules, and an optional bottom conclusion band. Modules may be dense,
but every one must support the same claim.

首选且保真度最高的家族。使用带框横向图版、大标题区、一个主导机制或关系、少量证据模块，以及可选的底部结论条。模块可以密集，但必须全部服务同一个判断。

### Transformation Route / 转化路由

Use when the argument has a real before/after correction. The two states share
one frame and visual vocabulary; a single directional transition explains what
changed. Do not use a generic comparison when the article has no temporal or
causal transformation.

只在文章确实存在前后转化时使用。两个状态共享一个框架和视觉语言，由一个明确方向解释发生了什么变化；没有时间或因果转化时，不做泛化左右对比。

### Mechanism Route / 机制路由

Use one oversized loop, gate, burden, bridge, or human-system relation as the
center. Render it as a flat editorial schematic, not a volumetric prop. Keep the
paper field, asymmetric reading rhythm, integrated headline, proof modules, and
functional band of the systems-broadsheet skeleton.

用一个被放大的循环、关卡、负担、桥梁或人机关系占据中心，并把它画成扁平编辑示意图，
而不是立体道具。继续保留系统工程大报骨架中的纸白场、非对称阅读节奏、咬合标题、证据模块
和功能条带。

## Fit / 适用范围

Recommended:

- technical arguments with one visible conflict or causal mechanism;
- editorial covers that need both a strong first read and an explanatory scene;
- abstract software, AI, organization, cost, risk, or workflow concepts that can be physicalized;
- comparisons where one axis genuinely changes the reader's judgment.

适合：

- 存在一个可视冲突或因果机制的技术判断；
- 同时需要强第一眼和解释性场景的文章封面；
- 可以被物理化的软件、AI、组织、成本、风险或工作流概念；
- 围绕一个关键轴展开、足以改变读者判断的对照。

Weak fit:

- calm reflective essays with no concrete tension;
- exact data charts, product screenshots, or photographic proof;
- tutorials requiring several sequential steps;
- topics whose meaning depends on long text rather than one visible relation.

弱适配：

- 没有具体矛盾的安静随笔；
- 精确数据图、产品截图或摄影证据；
- 需要连续展示多个步骤的教程；
- 必须依赖长文字、无法压缩成一个可见关系的主题。

Avoid when the visual would become a generic robot, brain, chip, code rain, or decorative retro scene with no direct connection to the claim.

当画面只能退化成机器人、大脑、芯片、代码雨或与主张无关的复古装饰时，不使用本 pattern。

## Composition Behavior / 构图行为

1. Preserve the supplied first read, visual action, main subject, and concrete evidence.
2. Select an internal layout route after those semantic decisions are fixed.
3. Keep large, medium, and small information scales distinct; supporting detail stays subordinate.
4. Use paper white as active negative space and keep title and illustration readable at feed size.
5. Use borders, bands, modules, and annotations according to the selected family; they must perform editorial work rather than decorate.

1. 保持上游给出的第一眼信息、视觉动作、主体和具体证据，不擅自改写。
2. 在语义决定完成后，按本 Pattern 选择内部版式路由。
3. 保持大、中、小信息层级清楚，辅助细节始终退后。
4. 把纸白当作主动负空间，标题与插画缩小到信息流尺寸后仍能阅读。
5. 按内部版式路由使用边框、条带、模块和注释；它们必须承担编辑功能，不能只做装饰。

## Material And Typography / 材质与字体

- Use hard pixel contours, low-resolution stair-step edges, one-bit dithering, Ben-Day or newspaper halftone dots, crosshatching, flat shadow blocks, slight registration drift, and old-print grain.
- Keep warm paper white visibly dominant. Black may form rules, labels, shadows, and a narrow band, but not a giant inverse masthead or a mostly black interface surface.
- Pair a heavy condensed or block Chinese display face with compact sans, mono, or bitmap annotations.
- Keep the title in one to three compact lines when it is generated inside a wide cover. Deterministic type must preserve the block or pixel hierarchy and remain integrated with the frame.
- Use smooth gradients, realistic lighting, glossy rendering, or modern 3D only when deliberately breaking the pattern.

- 使用硬像素轮廓、低分辨率阶梯边缘、一比特抖动、Ben-Day 或报纸半调网点、交叉网纹、块面阴影、轻微套印偏移和旧印刷颗粒。
- 暖纸白必须在画面中明显占主导。黑色可以形成结构线、标签、阴影和窄条带，但不能扩张成巨大的反白刊头或大面积黑色界面。
- 超粗窄体或块面中文标题，搭配紧凑黑体、等宽体或像素注释字。
- 宽封面中的标题由模型直接生成时，控制在一到三行紧凑短句；后期确定性排版也必须保持块面或像素层级，并参与整体框架。
- 平滑渐变、真实光照、光滑渲染和现代 3D 只允许作为有意打破 pattern 的例外。

## Density And Temperature / 密度与温度

Density: medium-high by default; high when every added module supports the same narrative relation. Sparse composition is outside the high-fidelity range.

Emotional temperature: engineered, direct, opinionated, tactile, and slightly rebellious; not glossy, luxurious, cute, or nostalgic for its own sake.

密度：默认中高；所有新增模块都服务同一叙事关系时可以进入高密度。稀疏构图不属于该风格的高保真范围。

情绪：工程化、直接、有立场、有触感、略带反叛；不做光滑奢华、可爱化或只为怀旧而怀旧。

## Transfer Boundaries / 迁移边界

- Unlike `pixel-retro`, this is an editorial argument rather than a game world, character path, or playful interface.
- Unlike `big-character-poster`, the narrative scene carries explanatory weight comparable to the headline.
- Unlike `semantic-concept-poster`, the text is not necessarily the main visual object; a physical relation may carry the claim.
- Unlike `narrative-journal-infographic`, the material is industrial, one-bit, and print-driven rather than warm and handwritten.
- The systems broadsheet skeleton is the mandatory structural and fidelity anchor for this pattern.

- 与 `pixel-retro` 的区别是它在完成编辑论证，而不是构建游戏世界、角色路径或趣味界面。
- 与 `big-character-poster` 的区别是叙事场景与大标题承担相近的解释重量。
- 与 `semantic-concept-poster` 的区别是文字不一定是主视觉对象，物理关系也可以承载主张。
- 与 `narrative-journal-infographic` 的区别是工业化、一比特化和印刷驱动，而非温暖手写。
- “系统工程大报”骨架是本 Pattern 必须保留的结构与保真锚点。

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
ACCENT_TARGETS
FORBIDDEN
```

For image generation, load `adapters/image-generation.md`. Exact paragraphs, UI copy, and long Chinese labels should default to deterministic typesetting.

图像生成时读取 `adapters/image-generation.md`。精确段落、界面文案和较长中文标签默认交给确定性排版。

## Failure Modes / 失败方式

- The adapter replaces the supplied subject or action with a familiar machine, pipeline, console, or mascot.
- Retro material appears, but the supplied first read and action are no longer recoverable.
- Supporting details become a uniform dashboard and flatten the visual hierarchy.
- Safety orange spreads beyond its semantic anchors and becomes decoration.
- The scene falls back to a generic AI brain, robot, chip, code rain, or neon interface.
- The runtime prompt introduces a palette, perspective, object-construction language, density, or emotional temperature not owned by this Pattern.
- The image uses an unrelated volumetric or futuristic object language even though the source supplied only an abstract relation.
- Smooth vectors, glossy 3D, gradients, or soft shadows erase the one-bit print material.
- Generated text errors remain in the final delivery instead of being replaced deterministically.
- The result becomes a single etched object on a mostly empty field with a clean modern title beside it.
- Color and halftone resemble the references, but the frame, scale rhythm, title-scene integration, and evidence modules disappear.

- adapter 用熟悉的机器、管道、控制台或吉祥物替换了上游给出的主体或动作。
- 有复古材质，但上游给出的第一眼信息和动作已经无法还原。
- 辅助细节变成同权仪表盘，抹平了视觉层级。
- 安全橙超出语义锚点，到处扩散成装饰。
- 场景退化成泛化的 AI 大脑、机器人、芯片、代码雨或霓虹界面。
- runtime prompt 引入了本 Pattern 未拥有的配色、透视、物体构造、密度或情绪温度。
- 正文只提供抽象关系，画面却擅自使用无关的立体或未来主义物体语言。
- 平滑矢量、光滑 3D、渐变或软阴影抹掉了一比特印刷材质。
- 生图文字有误，成品却没有用确定性排版替换。
- 结果退化成大块空白中的单个蚀刻物件，旁边配一段干净的现代黑体标题。
- 颜色和网点接近参考，但边框、尺度节奏、标题与场景咬合、证据模块全部消失。

## Fidelity Gate / 保真门

Before approving an output, check in order:

1. **Ownership trace**: Can every style decision in the score and prompt be traced to this Pattern rather than invented by the article adapter or runtime?
2. **Editorial structure**: Can the paper-dominant frame and scale hierarchy be recognized before inspecting texture?
3. **Argument**: Do the headline, main mechanism, and evidence modules support one correction?
4. **Material**: Are flat one-bit contours, halftone, print grain, and safety orange present without becoming costume?
5. **Typography**: Is the title structurally integrated and are exact words verified or typeset deterministically?

任一输出先依次检查：

1. **权责追踪**：score 与 prompt 中的每一项风格决定能否追溯到本 Pattern，而不是由文章 adapter 或 runtime 发明？
2. **编辑结构**：不看材质细节，是否已经能认出纸白占主导的框架和尺度层级？
3. **视觉论证**：标题、核心机制和证据模块是否共同支持一个修正？
4. **材质**：扁平一比特轮廓、网点、印刷颗粒和安全橙是否存在，又没有沦为表面装扮？
5. **字体**：标题是否参与结构，精确文字是否经过核对或确定性排版？

结构失败时，不靠增加网点、颗粒或禁用词补救；应返回内部版式路由或 Pattern 选择重新编译。
