# YouMind Colored Pencil Sketch Calibration / YouMind 彩铅速写校准

This optional adapter captures the selective pencil behavior visible in the
public YouMind [`手绘`](https://youmind.com/~skills/0198b610-a036-7661-8ce2-18f912b015b4)
skill. Its public workflow bans people and text, but those are source-task
constraints rather than universal style invariants. OVG keeps the reusable
graphite skeleton, selective colored-pencil emphasis, and open paper field.

这份可选 adapter 提炼公开 YouMind“手绘”技能的选择性铅笔方法。来源工作流禁止人物和文字，但这属于
单次任务约束，不是普遍风格不变量。OVG 保留可迁移的石墨骨架、局部彩铅强调和开放纸面。

## Style Signature / 风格签名

- Establish proportion, axis, and silhouette with graphite before color.
- Color only the focal plane, action, or material cue that must be understood first.
- Let pencil pressure and stroke direction describe volume; do not airbrush shading.
- Keep background evidence to a few directional traces on warm-white paper.
- Preserve source identity without over-rendering every contour.

- 先用石墨确定比例、轴线和剪影，再加入颜色；
- 只给第一眼必须理解的焦点平面、动作或材质线索上色；
- 用铅笔压力和排线方向塑造体积，不做喷枪式阴影；
- 暖白纸面上只保留少量方向性背景痕迹；
- 在不过度描满所有轮廓的前提下保留来源身份。

## Composition Families / 构图家族

1. **Open study:** one subject and a few directional traces on a broad paper field.
2. **Selective color plate:** a graphite subject with one colored focal plane.
3. **Object relation sketch:** two supplied objects or states connected by one clear action line.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the colored-pencil-sketch
calibration. Build {{MAIN_SUBJECT}} from a light graphite axis, a readable
silhouette, and selective pressure changes. Choose an open study, selective
color plate, or object relation sketch only when the supplied action supports
it. Apply colored pencil to one focal plane or cue that clarifies
{{VISUAL_ACTION}}; keep the remaining surface graphite and warm paper.

Use a few directional background traces only when they preserve source evidence.
Reserve exact text for deterministic layout. Avoid even-detail rendering,
airbrushed shading, decorative rainbow color, full scenes, glossy 3D, random
text, logos, signatures, watermarks, and {{FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- Graphite alone preserves subject, proportion, and action.
- Color has one semantic job and remains local.
- Pencil pressure reads as structure rather than noise.
- Paper stays open and no background is invented to fill space.
- Removing texture leaves a coherent line-based composition.
