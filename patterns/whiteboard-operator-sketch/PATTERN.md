# Whiteboard Tiny Worker Sketch

```yaml
id: whiteboard-operator-sketch
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: White-background handdrawn body illustrations for agent workflows, token/context concepts, handoff, setup, and article-body teaching images.
avoid_when: Strong feed covers, serious risk arguments, exact UI proof, polished product hero images, formal diagrams, or scenes that need exact brand-owned characters.
```

中文名：白板线团小工草图
English name: Whiteboard Tiny Worker Sketch


## Definition / 定义

EN: Whiteboard Tiny Worker Sketch is a GanFan/SorryCode adaptation of a
white-background Chinese handdrawn technical explanation style. It turns one
abstract technical relation into a small physical work scene: a tiny non-human
threadball worker, one low-tech object or path, sparse Chinese labels,
red/orange/blue notes, and generous whitespace.

CN: 白板线团小工草图是 GanFan / SorryCode 对白底中文手绘技术解释风格的改造。它把一个抽象技术关系转成一个小型物理劳动现场：一个非人类线团小工、一个低科技物件或路径、少量中文标注、红橙蓝批注和大量留白。

## Source Decomposition / 来源拆解

EN: This OVG capsule was recovered from GanFan production experiments that used
the public `helloianneo/ian-handdrawn-ppt` visual system and a related
Xiaohei-style handdrawn lineage as calibration inputs. OVG keeps the reusable
method-level grammar, not the upstream protagonist, raw examples, or page-deck
workflow as GanFan-owned IP.

CN: 这个 OVG capsule 是从 GanFan 生产实验里恢复出来的。当时参考了公开的 `helloianneo/ian-handdrawn-ppt` 视觉系统，也吸收了相关小黑手绘谱系作为校准输入。OVG 保留的是方法级视觉语法，不把上游主角、原始样例或整套页面 deck 工作流包装成 GanFan 自有资产。

Public source lineages:

- `https://github.com/helloianneo/ian-handdrawn-ppt`
- `https://github.com/helloianneo/ian-xiaohei-illustrations`

来源谱系：

- `https://github.com/helloianneo/ian-handdrawn-ppt`
- `https://github.com/helloianneo/ian-xiaohei-illustrations`

Mapped layers:

1. `handdrawn-page-dna`: near-white canvas, thin black handdrawn line, large
   negative space, restrained Chinese text, and pastel marker notes.
2. `article-body-focus`: extracted from the broader PPT-style page-image
   workflow into a reusable body-illustration pattern.
3. `character-ip`: converted into a replaceable GanFan worker-species slot. The
   default is the threadball worker, not upstream Xiaohei.
4. `composition-patterns`: workflow, system-local, before/after, character
   state, concept metaphor, method layers, map route, and mini comic.
5. `prompt-template`: converted into OVG compilation route slots.
6. `qa-checklist`: converted into failure modes and visual QA.

拆解层：

1. `handdrawn-page-dna`：近白画布、细黑手绘线、大留白、克制中文文字、淡色手写标记。
2. `article-body-focus`：从更大的 PPT-style 页面图工作流里抽出正文解释图范式。
3. `character-ip`：转成可替换的 GanFan 小工物种插槽，默认使用线团小工，而不是上游小黑。
4. `composition-patterns`：workflow、系统局部、前后对比、角色状态、概念隐喻、方法分层、地图路线、小漫画分镜。
5. `prompt-template`：转成 OVG compilation route slots。
6. `qa-checklist`：转成失败模式和视觉 QA。

## Scope Boundary / 范围边界

EN: `ian-handdrawn-ppt` is a full PPT-style page-image skill: it plans narrative
spines, selects slide archetypes, locks deck-level style, and generates 21:9
covers or 16:9 page images. This OVG pattern is narrower. It only owns the
white-background tiny-worker body-illustration grammar. Do not use this pattern
as a substitute for the full page-deck workflow.

CN: `ian-handdrawn-ppt` 是完整的 PPT-style 页面图 skill：它会规划叙事、选择页面 archetype、锁定整套风格，并生成 21:9 封面或 16:9 页面图。当前 OVG 范式更窄，只维护白底小工正文解释图语法。不要把它当作完整页面 deck 工作流的替代品。

## License And Attribution / 授权与归属

EN: The source repositories are MIT-licensed. MIT permits use, modification,
and redistribution, including commercial use, as long as the copyright and
license notice are preserved. MIT also disclaims warranty. Even with that
permission, GanFan should not present upstream protagonists, raw example images,
or Ian's page-deck identity as its own visual IP.

CN: 来源仓库使用 MIT 许可证。MIT 允许使用、修改、再分发，也允许商业使用，前提是保留版权和许可证声明；同时它不提供担保。即便法律上允许，GanFan 也不应该把上游主角、原始样例图或 Ian 的页面 deck 身份包装成自己的视觉 IP。

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
- not a full PPT page system, slide deck, page cover, or deterministic diagram.

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
- 不是完整 PPT 页面系统、slide deck、页面封面或确定性图表。

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

## Compilation Route Slots / 运行时适配槽位

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

## Direct Compilation Route: Box Operator Sketch / 直接生成路线：Box Operator Sketch

# Box-Operator Sketch Calibration / 小盒小工草图校准

This optional compilation route encodes the documented `小盒｜文章认知插画` method
into a source-safe role-and-action variant of `whiteboard-operator-sketch`. A
single closed box-like worker performs the one physical action that explains an
article judgment, workflow, or risk. The source character, wording, and brand
framing remain external.

这份可选 compilation route 将“小盒｜文章认知插画”提炼为 `whiteboard-operator-sketch` 的来源安全角色—动作变体。
一个始终合盖的盒状小工执行唯一的物理动作，把文章判断、流程或风险讲清楚。来源角色、文案与品牌框架仍属于外部证据。

## Style Signature / 风格签名

- Keep one closed box-like worker in every scene; its silhouette, orientation,
  and serious working posture remain stable.
- Give the worker one concrete verb: collect, filter, sort, repair, connect,
  pass, or return. The action must change the state of one object or path.
- Use one low-tech prop or route as the evidence object. Do not add a full
  system diagram, mascot cast, or decorative environment.
- Preserve the parent pattern's pure white field, thin black handdrawn line,
  orange/red/blue annotation budget, and at least 35% blank space.
- Keep labels short and subordinate to the worker's action; exact wording belongs
  in a deterministic text zone when required.

- 每个场景只保留一个合盖的盒状小工，剪影、朝向和认真工作的姿态保持稳定。
- 只给小工一个明确动词：收集、筛选、分拣、修复、连接、交接或归还。动作必须改变一个物件或路径的状态。
- 使用一个低科技道具或路径作为证据物件，不加完整系统图、小工群像或装饰环境。
- 保留父范式的纯白底、细黑手绘线、橙红蓝批注预算和至少 35% 空白。
- 标注保持短小并退后于动作，准确文案需要时交给确定性文字区。

## Composition Modes / 构图模式

1. **Single handoff:** the box worker moves one object from input to output;
   one line or arrow makes the handoff visible.
2. **Before/after repair:** the same worker changes one broken or blocked state;
   keep the before and after close enough to compare.
3. **Local filter:** the worker selects one item from a small pile or opening;
   show only the local relation, not the entire system.

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream article argument is authoritative:
- Visual job: {{VISUAL_JOB}}
- First read: {{FIRST_READ}}
- Main judgment or risk: {{MAIN_ARGUMENT}}
- Worker action: {{WORKER_ACTION}}
- Evidence object or path: {{EVIDENCE_OBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Whiteboard Tiny Worker Sketch Pattern with the box-operator
calibration. Draw one closed box-like worker with a stable silhouette and
serious working posture. Give it exactly one visible action—{{WORKER_ACTION}}—that
changes, moves, or reveals {{EVIDENCE_OBJECT}}. Keep the relation local and
physical so the abstract judgment becomes readable without a paragraph.

Use a pure white background, thin slightly wobbly black handdrawn lines, one
low-tech object or path, and at least 35% blank white space. Use orange only for
the main path or movement, red only for a warning or blocked state, and blue only
for a secondary note or feedback loop. Keep two to eight short labels and follow
{{TEXT_HANDLING}} for exact wording.

Avoid a full dashboard, formal architecture diagram, multiple mascots, glossy 3D,
paper texture, gradients, decorative stickers, long generated copy, pseudo-Chinese,
logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `WORKER_ACTION`: choose one verb and show its before/after consequence.
- `EVIDENCE_OBJECT`: name one supplied object, path, or small machine; avoid a
  multi-module system.
- `TEXT_HANDLING`: use short checked labels or a deterministic text zone.
- `FORBIDDEN`: add topic-specific omissions without changing the whiteboard
  material or one-action grammar.

## Fidelity Gate / 保真门

- The same closed worker remains recognizable and role-stable across the frame.
- One concrete action explains the supplied judgment or risk before labels are
  read.
- The evidence object or path changes state visibly; it is not a decorative prop.
- Pure white space, thin line, and bounded annotation colors remain intact.
- Removing the source character name, wording, and brand context leaves the same
  one-worker, one-action method.

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

This record absorbs the former closed-box operator transfer check.

这份记录吸收已删除的合盖盒状小工迁移检查。

## Stable Checks / 稳定检查

- One closed box-like worker keeps a stable silhouette, orientation, and serious
  working posture on a pure white field.
- One physical verb changes one evidence object or path: pass a note through a
  narrow slot, or filter one flagged card from a small tray.
- Thin black line and bounded orange/red/blue annotations remain subordinate;
  at least 35% of the field stays blank so the judgment is visible before labels.
- The route never needs a second worker, a full system diagram, a glossy render,
  or a decorative scene.

- 一个始终合盖的盒状小工在纯白底上保持稳定剪影、方向和认真工作的姿态。
- 一个物理动词改变一个证据物件或路径：把便签从窄槽递出，或从小托盘筛出一张标红卡片。
- 细黑线和受控的橙/红/蓝批注退后，至少 35% 画面留白，让判断先于标签被看见。
- 路由不需要第二个小工、完整系统图、光泽渲染或装饰场景。

## Transfer Set / 迁移主题组

The one-worker method must explain both context handoff and risk triage while
preserving the same local composition and annotation budget.

## Failure Recovery / 失败恢复

If the worker only poses, labels carry the judgment, or props multiply, reduce
the scene to one before/after state and one verb. Repeated dependence on a
different diagram language is grounds to delete the Pattern.
