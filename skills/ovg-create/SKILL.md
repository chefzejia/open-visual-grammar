---
name: ovg-create
description: 从文章、脚本、产品说明或视觉简报创建 OVG 视觉资产。当用户要求配图、做封面、把正文转成视觉命题或按 Open Visual Grammar 生成图片时使用；不用于逆向参考风格或只审查已有成品。
---

# OVG Create

把内容主张编译成可验收的视觉资产。先决定画面要证明什么，再选择 Pattern；Pattern 选定后，尊重它真正拥有的构图家族、密度、字体和材质边界。

## 入口

1. 读取 OVG 根目录的 `AGENTS.md` 和 `CATALOG.md`。
2. 按交付类型只打开一个 `registry/*.md`。
3. 编辑类封面先读取 registry 指定的视觉论证语法。
4. 视觉论证成立后选择一个 Pattern，再按其 `load_next` 读取 adapter 和 runtime。

不要先挑风格再从正文寻找理由。不要一次加载所有 Pattern。

## 输入契约

- `Primary source` 是当前图片真正服务的最小正文、段落、脚本或简报。
- 额外材料只有在改变受众、事实边界、视觉主张、交付规格或复用目标时才进入输入。
- 文章主张、视觉动作、主体和具体证据由内容决定，不能由 Pattern 发明。
- Pattern 可以约束构图家族、密度范围、标题与场景关系、材质和情绪温度。

若 Pattern 的高保真边界与渠道要求冲突，改选 Pattern。不要保留风格名称，再删掉它的风格签名。

## 工作流

1. 明确交付类型、渠道、画幅和图片是否真的有助于点击、理解或操作。
2. 从 Primary source 完成视觉论证：读者误解、修正、代价、第一眼信息、视觉动作、主体和具体证据。
3. 视觉动作必须是可见关系或物理动词。只能说明宽泛主题时停止，不生成。
4. 选择能承载该论证的 Pattern。读取它的风格签名、适用边界和失败方式。
   需要视觉校准时，先读 Pattern 的 `refs/README.md`，再实际查看其中点名的 WebP；不能只凭文字摘要想象参考图。
5. 从 Pattern 支持的构图家族中选择一种，再根据动作、主体、证据与画幅形成构图实例。上游不预先锁死任意构图，Pattern 也不得改写文章主张。
6. 写出 visual score，编译一次性 runtime prompt。Prompt 是编译产物，不是视觉方法真源。
7. 用户要求生成时，一次生成一个候选。计费或请求状态不明时不自动重试。
8. 按语义一致性、Pattern 保真度和 runtime 完成度依次验收。没有通过时只修正最高层根因。

## Visual Score

```text
Artifact kind:
Runtime:
Visual job:
Primary source:
Supporting sources:
Source inclusion rule:
Reader pain:
False belief:
Correction:
Stakes:
First read:
Visual action:
Why it bites:
Main subject:
Concrete evidence:
Pattern:
Composition family:
Composition instance:
Pattern fidelity anchors:
Density:
Text handling:
Reference handling:
Temperature:
Forbidden:
```

## 交付边界

- 精确中文优先使用确定性排版，但字体、尺度和位置必须继续服从 Pattern，不能作为通用黑体覆盖在留白上。
- 参考图只用于校准结构、密度、材料与温度，不逐像素复制。
- 单次 prompt、候选图和拒绝稿留在消费项目的临时目录。
- 只有经过确认的可复用方法回流 OVG；只有最终选中的素材进入消费项目正式资产目录。
- OVG 晋升与渠道交付是两个动作。只有人工明确确认其可复用价值后，才按 `docs/reference-intake-protocol.md` 把公开安全的结果另存为无损 WebP；不要因此替换消费项目的 PNG 交付文件。

普通视觉任务不自动进入评测模式。用户要求审查成品或候选明显偏离时，使用 `ovg-review` 的三层诊断，而不是积累更多禁用词。
