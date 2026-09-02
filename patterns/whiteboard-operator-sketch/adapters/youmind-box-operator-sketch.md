# YouMind Box-Operator Sketch Calibration / YouMind 小盒小工草图校准

This optional adapter distills the public YouMind `小盒｜文章认知插画` method
into a source-safe role-and-action variant of `whiteboard-operator-sketch`. A
single closed box-like worker performs the one physical action that explains an
article judgment, workflow, or risk. The source character, wording, and brand
framing remain external.

这份可选 adapter 将公开 YouMind“小盒｜文章认知插画”提炼为 `whiteboard-operator-sketch` 的来源安全角色—动作变体。
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

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream article argument is authoritative:
- Visual job: {{VISUAL_JOB}}
- First read: {{FIRST_READ}}
- Main judgment or risk: {{MAIN_ARGUMENT}}
- Worker action: {{WORKER_ACTION}}
- Evidence object or path: {{EVIDENCE_OBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Whiteboard Tiny Worker Sketch Pattern with the YouMind box-operator
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
