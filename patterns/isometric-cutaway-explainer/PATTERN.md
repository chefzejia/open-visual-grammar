# Isometric Cutaway Explainer

```yaml
id: isometric-cutaway-explainer
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Functional covers where coherent isometric axes and one cutaway reveal a dependency, path, connection, or operating relation.
avoid_when: Decorative exploded views, generic 3D renders, dense dashboards, or scenes whose meaning depends on realism.
```

中文名：等距功能剖切解释图
English name: Isometric Cutaway Explainer

## Definition / 定义

One functional object or system is opened in a coherent isometric view. A
scaffold, frame, grid, or survey line touches it with a named structural action;
the cutaway exposes one dependency rather than showing a decorative model.

一个功能性物件或系统在统一等距视图中被打开。脚手架、框架、网格或测绘线以明确结构动作接触主体；剖切揭示一个依赖关系，不展示装饰模型。

## Invariants / 不变量

- Axes, section depth, and visible layers agree throughout the object.
- One cutaway exposes one supplied dependency, path, connection, or operating relation.
- Support frame performs one action: brace, wrap, reconnect, measure, repair, or map.
- White/ivory research paper and one subordinate surface branch keep the page calm.
- Labels are sparse and exact copy belongs to deterministic layout.

## Composition Families / 构图家族

- **Working cutaway:** opened section plus one support action.
- **Survey plate:** measured layers, transparent guides, and restrained labels.
- **Research overlay:** clean isometric form with faint study traces.

## Variables / 可变槽位

`MAIN_SUBJECT`, `VISUAL_ACTION`, `CONCRETE_EVIDENCE`, `ASPECT_RATIO`, `AXIS_SET`,
`SECTION_DEPTH`, `SUPPORT_ACTION`, `SURFACE_BRANCH`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for a functional object, repair, or operating system whose hidden dependency
must be seen. The temperature is rational, observant, and handmade, not toy-like.

## Transfer Boundaries / 迁移边界

The cutaway must transfer beyond architecture to ordinary objects or systems.
The object relation survives when labels, texture, and source color are removed.

## Fidelity Gate / 保真门

- Axes and section planes are coherent.
- One dependency or path is visible before material detail.
- Support frame touches and performs a structural action.
- Three outputs vary section or overlay structure, not camera or gloss.

## Failure Modes / 失败方式

Wrong perspective, generic 3D, wire clutter, toy diorama, decorative scaffolds,
invented skylines, and label-dependent explanations fail. Delete the Pattern if
the cutaway is not function-led.

## Direct Compilation Route: Isometric Cutaway / 直接生成路线：Isometric Cutaway

# Isometric Cutaway Calibration / 等距剖切校准

This Pattern compilation route encodes the documented P073, transparent-blueprint,
watercolor-layered, impasto-isometric, and notebook-overlay descriptions into a
source-safe functional cutaway method. It keeps the object relation, coherent
axes, and research-paper atmosphere without copying a building, scaffold, named
historical figure, or product.

这份 Pattern compilation route 将 P073、透明蓝图、水彩分层、厚涂等距和手稿叠层描述提炼为不依赖来源的功能剖切方法。
它只保留物件关系、统一等距轴和研究纸面气质，不复制建筑、脚手架、历史人物或产品。

## Style Signature / 风格签名

- One functional object or system is shown in a coherent isometric view; axes, section depth, and visible layers agree.
- A cutaway or separated layer reveals one meaningful dependency, path, connection, or operating relation. It is not a decorative exploded render.
- A scaffold, frame, grid, or survey line touches the object with a named structural role: brace, wrap, reconnect, measure, repair, or map.
- The surface is a restrained research plate: white or ivory textured paper, source-aware color, transparent blueprint lines, translucent watercolor overlap, or controlled palette-knife volume.
- Finished form and visible thinking may coexist as two levels: clean isometric blocks carry the object, faint hand-study traces carry the research process.
- Short labels are sparse and subordinate to geometry. Exact technical copy belongs to deterministic post-layout.
- The temperature is observant, rational, and quietly handmade rather than glossy, game-like, or toy-like.

- 一个功能性物件或系统以统一的等距视图呈现，轴线、剖切深度和可见层级保持一致；
- 剖切或分层揭示一个有意义的依赖、路径、连接或运行关系，不做装饰性爆炸图；
- 脚手架、框架、网格或测绘线必须接触主体并承担明确结构作用，例如支撑、包裹、重连、测量、修复或绘制；
- 表面像克制的研究图版：白色或象牙纹理纸、来源相关色彩、透明蓝图线、水彩叠层或受控刮刀厚度均可，但不能互相堆成材质秀；
- 清晰的等距实体负责物件，若隐若现的手稿线可以负责研究过程；
- 标注少而退后，精确技术文案交给确定性排版；
- 情绪应观察、理性又有手作温度，不做光亮、游戏化或玩具化。

## Composition Families / 构图家族

1. **Working cutaway:** an opened section and one support action carry the first read.
2. **Survey plate:** measured layers, transparent guides, and restrained labels explain one dependency.
3. **Research overlay:** a clean isometric form is accompanied by faint sketch traces that show how the relation was found.

1. **工作剖切：** 打开的剖面和一个支撑动作承担第一眼信息；
2. **测绘图版：** 测量层、透明引导线和克制标注解释一个依赖关系；
3. **研究叠层：** 清晰的等距实体配合淡淡草图痕迹，展示关系如何被观察出来。

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Isometric Cutaway Explainer Pattern with the isometric-cutaway
calibration. Choose Working Cutaway, Survey Plate, or Research Overlay only when
the supplied argument names one relation that needs to be opened, separated,
measured, supported, or reconnected.

Construct one coherent isometric object or system. Keep axes, section depth,
visible layers, and the source-derived proportion consistent. Open or separate
only the layer that explains {{VISUAL_ACTION}} and {{CONCRETE_EVIDENCE}}. Add one
scaffold, frame, grid, or survey line only when it performs a visible structural
action such as brace, wrap, reconnect, measure, repair, or map; delete any line
that does not touch or explain the relation.

Use a restrained white or ivory research-paper field. Choose one subordinate
surface language: transparent blueprint linework, translucent watercolor overlap,
controlled palette-knife volume, or faint notebook traces. Keep source-aware color
limited and short labels sparse; reserve exact copy for deterministic post-layout.
The object and dependency must read before texture. Avoid generic 3D renders,
wrong perspective, decorative wire clutter, glossy plastic, game HUDs, toy
dioramas, invented rooms or skylines, random text, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- Isometric axes, section planes, and visible layers remain coherent before material is inspected.
- The cutaway exposes one supplied dependency, path, connection, or operating relation.
- The support frame or scaffold performs a named structural action and is not decorative wire clutter.
- The object remains recognizable without labels, and labels do not compensate for an unreadable section.
- One restrained research-paper surface and source-aware color budget are maintained across topics.
- Removing texture and color still leaves the same cutaway or research-overlay structure.

## Failure Recovery / 失败恢复

- If the image becomes a generic 3D render, redraw the axes and section planes first, then remove glossy lighting and excess depth.
- If the cutaway is unreadable, open fewer layers and enlarge the one dependency instead of adding labels.
- If the scaffold floats, reconnect it to the exact edge or node it braces, measures, wraps, or repairs; delete any unsupported segment.
- If watercolor, blueprint, impasto, and sketch traces compete, select one surface language and return the rest to paper and line.
- If historical or product references dominate, replace them with the supplied object relation and keep the research-overlay function.
