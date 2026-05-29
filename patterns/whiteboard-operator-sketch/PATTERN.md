# Whiteboard Tiny Worker Sketch

```yaml
id: whiteboard-operator-sketch
status: seed
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: White-background handdrawn body illustrations for agent workflows, token/context concepts, handoff, setup, and article-body teaching images.
avoid_when: Strong feed covers, serious risk arguments, exact UI proof, polished product hero images, formal diagrams, or scenes that need exact brand-owned characters.
load_next:
  references: refs/README.md
```

中文名：白板小工草图
English name: Whiteboard Tiny Worker Sketch

Status: seed

## Definition / 定义

EN: Whiteboard Tiny Worker Sketch is a white-background handdrawn illustration
pattern. It turns one abstract technical relation into a small physical work
scene: a tiny non-human worker, one low-tech object or path, sparse Chinese
labels, red/orange/blue notes, and generous whitespace.

CN: 白板小工草图是一种白底手绘正文插图范式。它把一个抽象技术关系转成一个小型物理劳动现场：一个非人类小工、一个低科技物件或路径、少量中文标注、红橙蓝批注和大量留白。

## Source Decomposition / 来源拆解

EN: This OVG capsule is decomposed from the public
`helloianneo/ian-xiaohei-illustrations` skill. It preserves the reusable visual
grammar, not the original protagonist as GanFan brand material.

CN: 这个 OVG capsule 拆自公开的 `helloianneo/ian-xiaohei-illustrations` skill。这里沉淀的是可复用视觉语法，不把原主角当作 GanFan 品牌素材。

Mapped layers:

1. `style-dna`: pure white canvas, thin black handdrawn lines, strong
   whitespace, sparse red/orange/blue handwritten Chinese notes.
2. `character-ip`: converted into a replaceable tiny-worker slot. GanFan should
   use its own worker species rather than copying the source mascot.
3. `composition-patterns`: workflow, system-local, before/after, character
   state, concept metaphor, method layers, map route, and mini comic.
4. `prompt-template`: converted into OVG adapter slots.
5. `qa-checklist`: converted into failure modes and visual QA.

拆解层：

1. `style-dna`：纯白画布、细黑手绘线、大量留白、少量红橙蓝中文手写批注。
2. `character-ip`：转成可替换的小工插槽。GanFan 应该使用自己的小工物种，而不是复制来源 mascot。
3. `composition-patterns`：workflow、系统局部、前后对比、角色状态、概念隐喻、方法分层、地图路线、小漫画分镜。
4. `prompt-template`：转成 OVG adapter slots。
5. `qa-checklist`：转成失败模式和视觉 QA。

## License And Attribution / 授权与归属

EN: The source repository is MIT-licensed, which permits use, modification, and
redistribution, including commercial use, as long as the copyright and license
notice are preserved. MIT also disclaims warranty. Even with that permission,
GanFan should not present the original protagonist or raw example images as its
own visual IP.

CN: 来源仓库使用 MIT 许可证。MIT 允许使用、修改、再分发，也允许商业使用，前提是保留版权和许可证声明；同时它不提供担保。即便法律上允许，GanFan 也不应该把原主角或原始样例图包装成自己的视觉 IP。

## Protagonist Slot / 主角插槽

Default GanFan worker species:

```text
线团小工
```

Visual traits:

- small black scribble-thread ball, not a solid bean mascot;
- two tiny white or empty-dot eyes;
- thin stick arms and legs;
- no mouth, no smile, blank serious expression;
- slight handdrawn asymmetry;
- works inside the system instead of posing for the viewer.

可替换物种：

- 线团小工：适合 agent、context、token、handoff、工具链；
- 纸团小工：适合文档、草稿、改稿、资料整理；
- 电缆小工：适合安装、连接、运行环境、自动化；
- 墨滴小工：适合写作、创意、知识沉淀。

Do not use the source mascot name in production prompts unless the task is
explicitly about the source project. Do not draw a cute sticker character.

除非任务明确讨论来源项目，否则生产 prompt 不使用来源 mascot 名称。不要画成可爱贴纸角色。

## Invariants / 不变量

EN:

- pure white background; no beige, paper texture, gradient, shadow, or noise;
- 16:9 horizontal article-body composition by default;
- thin black handdrawn linework with slight wobble and visible imperfection;
- one tiny non-human worker species, usually the GanFan threadball worker;
- one physical action performed by the worker: pull, carry, hook, sort, stuff,
  weigh, guard, connect, repair, press, return, ferment, or pass through;
- one low-tech object or path: cart, drawer, box, hook, pipe, well, crank,
  switch, ladder, door, stamp, scale, press, line, or broken machine;
- two to eight short Chinese handwritten labels;
- orange for main path, movement, arrows, or rope;
- red only for warning, problem, key reminder, or result;
- blue only for secondary note, feedback, loop, or system state;
- at least 35% blank white space;
- one cognitive action, not a full architecture diagram.

CN:

- 纯白背景，不要米色、纸纹、渐变、阴影、噪点；
- 默认 16:9 横版正文插图；
- 细黑手绘线条，轻微抖动，保留不完美；
- 一个非人类小工物种，默认使用 GanFan 的线团小工；
- 小工承担一个物理动作：拉、搬、钩、分拣、塞、称、守、接、修、压、回流、发酵、穿过；
- 一个低科技物件或路径：手拉车、抽屉、盒子、钩子、水管、井、摇柄、开关、梯子、门、印章、秤、压机、线、坏机器；
- 二到八个短中文手写标注；
- 橙色表达主路径、移动、箭头或绳子；
- 红色只表达警告、问题、关键提醒或结果；
- 蓝色只表达补充说明、反馈、回路或系统状态；
- 至少 35% 空白留白；
- 只画一个认知动作，不画完整架构图。

## Composition Modes / 构图模式

Choose one mode. Do not mix many modes in one image.

选择一种构图模式，不要混太多。

### Workflow / 流程

EN: Left input, middle worker or weird machine, right output. Orange path shows
main movement.

CN: 左侧输入，中间小工或怪机器处理，右侧输出。橙色路径表达主流向。

### System Local / 系统局部

EN: Show only three to five modules. The worker performs the one action that
reveals the system.

CN: 只画三到五个模块。小工承担能揭示系统关系的那个动作。

### Before / After / 前后对比

EN: Left is messy, right is usable, with one worker action changing the state.

CN: 左边混乱，右边可用，中间用一个小工动作改变状态。

### Character State / 角色状态

EN: Two to four tiny scenes, each with one short state label.

CN: 二到四个小状态，每个状态一个短标注。

### Concept Metaphor / 概念隐喻

EN: One strange low-tech object or machine. Few inputs, one output.

CN: 一个奇怪低科技物件或机器。少量输入，一个输出。

### Method Layers / 方法分层

EN: Layers as boxes, shelves, bricks, drawers, or steps. Avoid formal pyramids.

CN: 用盒子、架子、砖块、抽屉或台阶表达层级。避免正式金字塔。

### Map Route / 地图路线

EN: One curved route, a few nodes, the worker pulling, walking, or connecting.

CN: 一条弯曲路径，少量节点，小工拉、走、接线。

### Mini Comic / 小漫画分镜

EN: Two to four small panels for a process or contrast. Each panel has one
action only.

CN: 二到四格表达过程或对比。每格只画一个动作。

## Composition Behavior / 构图行为

EN:

- Start from the relation the reader must understand.
- Convert the relation into a physical verb.
- Pick one worker species and one low-tech object.
- Place the worker at the action point. If removing the worker leaves the image
  unchanged, the image fails.
- Labels should name objects, warnings, paths, states, or outcomes, not explain
  full sentences.
- Keep the scene readable at article-body size.

CN:

- 先确定读者必须看懂的关系。
- 把关系转成一个物理动词。
- 选择一个小工物种和一个低科技物件。
- 小工必须在动作点上。如果去掉小工画面仍成立，说明失败。
- 标注命名物件、警告、路径、状态或结果，不写整句解释。
- 正文小尺寸下也要看懂。

## Adapter Slots / 运行时适配槽位

Fill these before compiling an image prompt:

```text
Theme:
Core idea:
Reader takeaway:
Composition mode:
Worker species:
Worker visual traits:
Physical verb:
Worker action:
Low-tech object/path:
Scene layout:
Allowed labels:
Color roles:
Forbidden drift:
Target channel:
Target size:
```

## QA Checklist / 质量检查

Pass criteria:

- 16:9 horizontal body illustration;
- pure white background;
- one tiny worker doing the core action;
- strange but immediately understandable;
- no title in the top-left corner;
- no structure type label on the image;
- two to eight short readable Chinese labels;
- orange/red/blue used with clear roles;
- subject occupies roughly 40%-60% of the canvas;
- at least 35% blank whitespace;
- one cognitive action only.

通过标准：

- 16:9 横版正文插图；
- 纯白背景；
- 一个小工承担核心动作；
- 有点怪，但一眼能懂；
- 左上角没有标题；
- 画面里不写结构类型；
- 二到八个短中文标注，可读；
- 橙、红、蓝有明确分工；
- 主体约占画面 40%-60%；
- 至少 35% 空白留白；
- 只表达一个认知动作。

## Failure Modes / 失败模式

EN:

- copying the source mascot instead of using the worker slot;
- using the source project name as a style shortcut;
- drawing a generic PPT infographic or formal architecture diagram;
- making the worker cute, smiling, sticker-like, or mascot-poster-like;
- making the worker decorative instead of responsible for the action;
- over-polished vector objects, 3D perspective, heavy hatching, or fake paper;
- too many boxes, arrows, panels, or UI elements;
- labels becoming full sentences;
- random generated Chinese text;
- too many concepts in one drawing.

CN:

- 复制来源 mascot，而不是使用小工插槽；
- 把来源项目名当作风格捷径；
- 画成普通 PPT 信息图或正式架构图；
- 小工可爱化、微笑、贴纸化、吉祥物海报化；
- 小工只是装饰，没有承担动作；
- 物件过度精致、强透视、重排线、伪纸纹；
- 盒子、箭头、面板或 UI 元素过多；
- 标注变成整句解释；
- 生成不可控中文乱码；
- 一张图塞进太多概念。
