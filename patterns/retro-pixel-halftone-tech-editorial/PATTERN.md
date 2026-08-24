# Retro Pixel Halftone Tech Editorial

```yaml
id: retro-pixel-halftone-tech-editorial
status: seed
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Technical editorials where one conflict, decision, bottleneck, comparison, or human-system relation should become a quickly legible narrative scene.
avoid_when: Photographic evidence, exact product UI, multi-step tutorials, quiet mood images, or topics without one visualizable claim.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：复古像素网点科技编辑插画
English name: Retro Pixel Halftone Tech Editorial

Status: seed

## Definition / 定义

EN: Retro Pixel Halftone Tech Editorial gives an already-decided editorial scene a one-bit pixel and newspaper-print visual language. It combines one-bit pixel drawing, halftone texture, forceful typography, one controlled signal color, and a tactile independent-technology-publication tone.

CN：复古像素网点科技编辑插画为已经确定的编辑叙事赋予一比特像素与报纸印刷语言。它由一比特像素绘制、报纸网点材质、强标题、一种受控信号色，以及独立科技刊物般直接而有触感的气质共同构成。

The pattern was first extracted from operator-provided images, then calibrated against the public skill [复古像素网点科技插画](https://youmind.com/zh-CN/skills/retro-pixel-halftone-tech-illustration-Kmx3XWOrUiKUwq) by 神神的孩子在跳舞. The external prompt and images are references, not repository instructions or vendored assets. This pattern keeps only paraphrased method-level learning.

本 pattern 最初来自用户提供的参考图，随后用作者“神神的孩子在跳舞”公开的 [复古像素网点科技插画](https://youmind.com/zh-CN/skills/retro-pixel-halftone-tech-illustration-Kmx3XWOrUiKUwq) Skill 进行校准。外部提示词和图片只作为参考，不是仓库指令，也不复制进仓库；此处只保留经过转述的方法级结论。

## Invariants / 不变量

- The material stays near-binary: deep black, paper white, halftone grey, and exactly one signal color.
- The signal color has a visible budget: roughly 5-12% of the surface and no more than one to three semantic anchors.
- Pixel edges, one-bit dithering, halftone dots, crosshatching, registration drift, and print grain create the surface.
- Large, medium, and small information scales remain distinct. Supporting detail cannot compete with the narrative unit.
- Exact text is either short and verified or reserved for deterministic typesetting.

- 材质保持近乎二值：深黑、纸白、网点灰，以及唯一一种信号色。
- 信号色必须有明确预算：通常占画面约 5%-12%，只落在一到三个有语义的视觉锚点上。
- 像素边缘、一比特抖动、半调网点、交叉网纹、轻微套印偏移和印刷颗粒共同形成表面。
- 大、中、小信息尺度必须清楚；辅助细节不能与核心叙事争夺注意力。
- 精确文字要么短且可核对，要么预留给确定性排版。

## Variables / 变量

The upstream visual argument supplies the semantic variables. This pattern does
not derive them again:

- **First read**: the already-approved first-read phrase or text-free claim.
- **Visual action**: the physical action or relationship that carries the correction.
- **Main subject**: the subject already chosen to perform or receive that action.
- **Composition**: the spatial arrangement chosen for that subject and action.
- **Density**: the amount of supporting information the current argument needs.
- **Text handling**: generated short text, reserved blank regions, or deterministic typesetting.
- **Accent targets**: one to three already-meaningful anchors for the signal color.

上游视觉论证提供语义变量，本 pattern 不再重新推导：

- **第一眼信息**：已经确认的第一眼短句，或无需文字也能读取的主张。
- **视觉动作**：承载修正关系的物理动作或关系。
- **主体**：已经选定、负责执行或承受该动作的对象。
- **构图**：围绕主体与动作确定的空间安排。
- **信息密度**：当前论证真正需要的辅助信息量。
- **文字处理**：生成短文字、预留空白，或后期确定性排版。
- **强调对象**：一到三个本来就有语义的信号色锚点。

画幅、标题位置、边框和底部文字仍可变化，但只能适配上游决定，不能借版式重新解释文章。

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

1. Preserve the supplied first read, visual action, main subject, and composition.
2. Adapt their scale and spacing to the aspect ratio without replacing them with a preferred scene archetype.
3. Keep large, medium, and small information scales distinct; supporting detail stays subordinate.
4. Use paper white as active negative space and keep title and illustration readable at feed size.
5. Treat borders, bottom bands, modules, and annotations as optional layout devices, never default furniture.

1. 保持上游给出的第一眼信息、视觉动作、主体和构图，不擅自改写。
2. 根据画幅调整它们的尺度与间距，不用偏好的场景原型替换已有决定。
3. 保持大、中、小信息层级清楚，辅助细节始终退后。
4. 把纸白当作主动负空间，标题与插画缩小到信息流尺寸后仍能阅读。
5. 边框、底部条带、模块和注释只是可选版式手段，不是默认家具。

## Material And Typography / 材质与字体

- Use hard pixel contours, low-resolution stair-step edges, one-bit dithering, Ben-Day or newspaper halftone dots, crosshatching, flat shadow blocks, slight registration drift, and old-print grain.
- Use paper white as active negative space, not merely an empty background.
- Pair a heavy condensed or block Chinese display face with compact sans, mono, or bitmap annotations.
- Keep the title to one or two short lines when it is generated inside the image.
- Use smooth gradients, realistic lighting, glossy rendering, or modern 3D only when deliberately breaking the pattern.

- 使用硬像素轮廓、低分辨率阶梯边缘、一比特抖动、Ben-Day 或报纸半调网点、交叉网纹、块面阴影、轻微套印偏移和旧印刷颗粒。
- 纸白是主动负空间，不只是没有填充的背景。
- 超粗窄体或块面中文标题，搭配紧凑黑体、等宽体或像素注释字。
- 标题由模型直接生成时，控制在一到两行短文字。
- 平滑渐变、真实光照、光滑渲染和现代 3D 只允许作为有意打破 pattern 的例外。

## Density And Temperature / 密度与温度

Density: medium by default; high only when every added module supports the same narrative relation.

Emotional temperature: engineered, direct, opinionated, tactile, and slightly rebellious; not glossy, luxurious, cute, or nostalgic for its own sake.

密度：默认中等；只有所有新增模块都服务同一叙事关系时才进入高密度。

情绪：工程化、直接、有立场、有触感、略带反叛；不做光滑奢华、可爱化或只为怀旧而怀旧。

## Transfer Boundaries / 迁移边界

- Unlike `pixel-retro`, this is an editorial argument rather than a game world, character path, or playful interface.
- Unlike `big-character-poster`, the narrative scene carries explanatory weight comparable to the headline.
- Unlike `semantic-concept-poster`, the text is not necessarily the main visual object; a physical relation may carry the claim.
- Unlike `narrative-journal-infographic`, the material is industrial, one-bit, and print-driven rather than warm and handwritten.
- The systems broadsheet is one layout archetype inside this pattern, not a separate visual grammar.

- 与 `pixel-retro` 的区别是它在完成编辑论证，而不是构建游戏世界、角色路径或趣味界面。
- 与 `big-character-poster` 的区别是叙事场景与大标题承担相近的解释重量。
- 与 `semantic-concept-poster` 的区别是文字不一定是主视觉对象，物理关系也可以承载主张。
- 与 `narrative-journal-infographic` 的区别是工业化、一比特化和印刷驱动，而非温暖手写。
- “系统工程大报”是本 pattern 内的一种布局原型，不再被当成独立视觉语法。

## Runtime Adapter Slots / 运行时槽位

```text
ARTIFACT_KIND
ASPECT_RATIO
AUDIENCE
FIRST_READ
VISUAL_ACTION
MAIN_SUBJECT
COMPOSITION
DENSITY
TEXT_HANDLING
SIGNAL_COLOR
ACCENT_TARGETS
ACCENT_BUDGET
TEMPERATURE
FORBIDDEN
```

For image generation, load `adapters/image-generation.md`. Exact paragraphs, UI copy, and long Chinese labels should default to deterministic typesetting.

图像生成时读取 `adapters/image-generation.md`。精确段落、界面文案和较长中文标签默认交给确定性排版。

## Failure Modes / 失败方式

- The adapter replaces the supplied subject or action with a familiar machine, pipeline, console, or mascot.
- Retro material appears, but the supplied first read and action are no longer recoverable.
- Supporting details become a uniform dashboard and flatten the visual hierarchy.
- The signal color spreads beyond its semantic anchors and becomes decoration.
- The scene falls back to a generic AI brain, robot, chip, code rain, or neon interface.
- Smooth vectors, glossy 3D, gradients, or soft shadows erase the one-bit print material.
- Generated text errors remain in the final delivery instead of being replaced deterministically.

- adapter 用熟悉的机器、管道、控制台或吉祥物替换了上游给出的主体或动作。
- 有复古材质，但上游给出的第一眼信息和动作已经无法还原。
- 辅助细节变成同权仪表盘，抹平了视觉层级。
- 信号色超出语义锚点，到处扩散成装饰。
- 场景退化成泛化的 AI 大脑、机器人、芯片、代码雨或霓虹界面。
- 平滑矢量、光滑 3D、渐变或软阴影抹掉了一比特印刷材质。
- 生图文字有误，成品却没有用确定性排版替换。
