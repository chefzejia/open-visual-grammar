# Open Visual Grammar / 开放视觉语法

Open Visual Grammar 是一套把视觉直觉翻译成可执行生成结果的方法。

它不是 prompt 库。Prompt 是某个 runtime 的编译结果。真正值得沉淀
的资产，是视觉语法：一个视觉意图如何变成张力、层级、密度、隐喻、
材料和执行约束。

## 为什么需要它

AIGC 让生产图片、PPT、网页、视频、shader 变得便宜。

但它没有让视觉判断变便宜。

很多失败的生成，问题都出在视觉不变量太弱。

Open Visual Grammar 的顺序更靠前：

1. 观众第一眼应该理解什么？
2. 画面里的张力是什么？
3. 跨主题复用时，什么必须保持不变？
4. 信息密度应该多高？
5. 最后由哪个 runtime 执行？

## 核心概念

| 概念 | 含义 |
| --- | --- |
| Grammar / 语法 | 跨 pattern 的底层视觉语言：张力、层级、密度、隐喻、节奏、温度。 |
| Pattern / 范式 | 可复用视觉抽象，内部持有稳定不变量、迁移边界、参考图、adapter 和案例。 |
| Score / 谱面 | 单次任务的视觉计划，可以编译成 prompt、shader spec、deck layout 或 scene brief。 |
| Runtime / 执行器 | 生成落地的媒介：图像模型、HTML/CSS、PPT、shader、视频、游戏引擎。 |

## 仓库结构

```text
index.html   面向人的视觉橱窗，可直接在浏览器打开。
CATALOG.md   Agent 入口和路由选择。
registry/    按交付类型路由。Agent 先打开一个 registry，再进入一个 pattern。
grammar/     跨 pattern 的视觉语法。只有具体决策需要时再读。
patterns/    稳定视觉范式。一次只加载一个。
runtimes/    跨 pattern 的执行约束。
docs/        协议和操作说明。
decisions/   架构说明和项目决策记录。
```

## 视觉橱窗

直接打开 [`index.html`](index.html)，可以浏览全部已注册 Pattern 及其人审
WebP 参考图，不需要启动服务器。

静态文件就是正式交付入口。只有自动化浏览器禁止访问 `file://` 时，才临时
启动 HTTP 静态服务做验证；localhost 不是 OVG 的运行依赖，也不是正式入口。

Pattern 从 `patterns/*/PATTERN.md` 自动注册；橱窗自动发现 Pattern 内
`refs/` 与 `examples/` 下的参考、正例和反例。修改这些真源后执行：

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
```

`showcase-data.js` 是可再生编译产物，不要手工修改。

案例跟随对应 pattern 存放。一次性生产 prompt 不进入这个仓库。

Pattern slug 使用英文 kebab-case，保证路径、工具调用和 GitHub 链接稳定。
面向人的 `PATTERN.md` 采用单文件中英双语：中文和英文都是一等工作语言。

## Agent 使用原则

渐进披露，不要一次把所有上下文塞进去：

1. 读 `AGENTS.md`。
2. 读 `CATALOG.md`。
3. 选择一个交付类型，并打开一个 registry 文件。
4. 如果 registry 里有合适范式，就选择一个范式。
5. 只读这个范式的 `PATTERN.md`；如果 registry 明确允许 no-pattern 路径，就按 registry 读取 runtime / grammar。
6. 需要时再读它点名的参考图、adapter、反例、grammar 或 runtime contract。
7. 写出本次任务的 visual score。
8. 按目标 runtime 编译成 prompt / shader spec / layout spec。

## 三个 Skill 入口

- `ovg-style-reverse`：从参考组提取风格签名、构图家族、迁移边界和元提示词。
- `ovg-create`：从正文或简报完成视觉论证，选择 Pattern 与构图家族并生成可验收资产。
- `ovg-review`：从候选图反查视觉命题、Pattern 保真或 Runtime 执行问题。

Skill 按任务意图拆分，Pattern 仍然是视觉方法真源。不要为每种风格建立一个 Skill。

## 参考资产

经过人工选择的 Pattern 参考图和已审案例默认使用无损 WebP。每张图都必须能说明可复用方法或边界；尚无真实人审产出的 Pattern 保持无图，不补占位图。平台交付格式继续由消费项目决定，不受这条约定影响。

## 正式 Pattern

| Pattern | 不变量 |
| --- | --- |
| `big-character-poster` | 大标题、公共态度、具体证据、粗粝印刷感、强第一眼。 |
| `print-menu-layout` | 可打印层级、菜单章节、价格扫读、餐饮印刷气质。 |
| `eastern-texture-handdrawn` | 宣纸肌理、松弛手绘线条、低饱和、隐喻和留白。 |
| `pixel-retro` | 像素块、复古游戏逻辑、清晰轮廓、极客工具气质。 |
| `narrative-journal-infographic` | 手绘时间线、对比、流程、注释、可读结构。 |
| `whimsical-journal-sketch` | 水彩速写、马克笔、拼贴、轻松温暖。 |
| `flowing-gaze-minimal-cover` | 单一主体、负空间、独特视角、钢笔/蚀刻质感。 |
| `minimal-handdrawn-linework` | 干净线稿、克制反差、低饱和、高级克制。 |
| `limited-color-print-editorial` | 暖纸面、一种主墨色、一个大结构色面、局部印压、共享图文轴线。 |
| `frosted-silhouette-editorial` | 区域化磨砂显隐、几何剪影、受控留白、安静的编辑距离感。 |
| `paper-sculpture-collage-editorial` | 剪纸叠层、语义遮挡、哑光浅层深度、源自主体配色、安静的编辑温度。 |
| `soft-2-5d-icon` | 一个方形剪影、一个功能线索、柔和浅层深度、小尺寸可读性。 |
| `whiteboard-operator-sketch` | 白底 GanFan 线团小工、手绘技术解释、少量中文标注。 |
| `retro-pixel-halftone-tech-editorial` | 带框技术编辑图版、标题与机制一体化、像素网点、单一信号色。 |
| `semantic-concept-poster` | 短句文字作为视觉主体，一个精确隐喻关系，克制编辑气质。 |
| `thermal-receipt-poster` | 连续小票轮廓、准确短字段、热敏纸材质、冷幽默观察。 |
| `interwoven-portrait-type-cover` | 可辨人像、一个短标题、明确遮挡图、共享透视、受保护的面部与移动端安全区。 |
| `restrained-editorial-slide-system` | 每页一个阅读任务、共享编辑网格、准确字体层级、受控证据和克制墨色。 |
| `adaptive-rembrandt-portrait` | 结构感知主光、身份优先棚拍肖像、干净炭黑场、保留原始画幅。 |
| `city-observation-poster` | 日常城市动作、授权主体、巨型地点标记、蓝青孔版观察笔记。 |
| `crayon-portrait-editorial` | 身份优先肖像、开放素描纸、干擦蜡笔笔压、克制结构色。 |
| `documentary-gold-split-editorial` | 纪实到平面金色转化、严格分屏、单一深色提取底、克制箔面。 |
| `dual-focal-swirl-linework` | 两个独立锚点、结构性圆弧线、透气水粉场域、限量色块。 |
| `fixed-era-editorial-print` | 一个固定年代分支统一字体、几何、配色、印压和留白。 |
| `graphic-fashion-avatar` | 剪影优先方形身份标记、一个配饰线索、粗粝边缘、小尺寸可读。 |
| `isometric-cutaway-explainer` | 统一等距轴、一个功能剖切、结构支撑动作、安静研究纸面。 |
| `monstrous-scale-editorial` | 世界轮廓越出画面、小见证者执行动作、版画式尺度论证。 |
| `nested-blue-collage` | 皱纸外框、中蓝场域、撕纸内层、半调主体、稀疏功能线索。 |
| `portrait-quote-editorial` | 授权人像先读、短引语进入受保护下区、一个次要场景线索。 |
| `retro-future-print-editorial` | 蚀刻轮廓、硬边冷暖平面、可见印刷颗粒、一个结构主体。 |
| `single-accent-ink-editorial` | 粗黑轮廓、局部半调、恰好一种语义强调色、主动留白。 |

每个 `patterns/` 目录从第一次提交起就是正式 Pattern。后续只编辑或删除
这个 Pattern，不设置 candidate、seed、promotion 或 evaluation 中间态。被接受的
来源学习一次性写入 Pattern；被拒绝的材料留在公共语法之外，不创建次级 Pattern。

生成图和 runtime prompt 留在调用方项目的工作目录。只有经过复盘的
稳定经验，才回流到本仓库，成为 anti-pattern、adapter 或 pattern 内案例。

## 什么应该进入这个仓库

- 稳定视觉范式；
- 能说明范式的参考图；
- 反例和失败模式；
- runtime adapter 和编译规则；
- 能讲清楚方法的 pattern 内案例；

## 什么不应该进入这个仓库

- 一次性生产 prompt；
- API 诊断日志；
- 没有分析的失败图；
- 私有品牌材料；
- 带密钥、账号、客户数据或内部信息的截图；
- 一次性、未验证的词表；
- 通用图片模型跑分套件。

一次性的生产过程应该留在调用方项目的 `_work/` 里，而不是进入这个语法仓库。
