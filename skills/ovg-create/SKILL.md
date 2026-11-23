---
name: ovg-create
description: 从文章、脚本、产品说明或视觉简报直接选择一个 OVG Pattern 并生成可交付视觉资产。
---

# OVG Create

把内容主张编译成一个可验收的视觉资产。Pattern 是视觉方法的唯一真源；
Prompt 只为当前请求临时生成。

## 工作流

1. 读取根目录 `AGENTS.md`、`CATALOG.md` 和 `patterns-index.json`。
2. 根据 artifact kind、视觉动作、题材边界和交付比例选一个 Pattern。
3. 完整读取 `patterns/<slug>/PATTERN.md`，只使用它声明的构图家族、材质、密度、文字行为和失败边界。
4. 从 primary source 写一个临时视觉简报：第一眼信息、需要修正的误解、视觉动作、主体和具体证据。
5. 用 Pattern 内置的 direct compilation route 编译一次 prompt。不要发明第二套风格方向。
6. 用户要求生成时一次只请求一张；请求状态不明时不自动重试。
7. 立刻检查主题、构图、Pattern 保真度、文字和尺寸。只有用户明确认可的公开安全 WebP 才能放入 Pattern `examples/`。

## 内容与 Pattern 的权责

- 内容输入决定读者第一眼要理解什么、主体是谁、发生什么动作、哪些证据必须出现。
- Pattern 决定构图、尺度节奏、密度、配色、材质、透视、文字与图像的关系以及情绪温度。
- 当前消费项目决定模型、画幅、输入图和导出格式。

如果一个 Pattern 与交付约束冲突，换 Pattern；不要保留名称却删除它的核心签名。

## 文字与结构图

短文字可以直接在 prompt 中逐字描述。复杂信息可以把结构图作为模型输入，结构图只传递分区、顺序、相对尺度和箭头关系；最终文字、内容和材质必须由一次生图完成。不要使用 HTML、SVG、Canvas 或后期叠字补救图片 Pattern。

## 边界

一次性 prompt、请求日志、候选图、拒绝稿和 API 诊断留在消费项目或临时目录。OVG 只接收 Pattern 方法、公开安全的 refs 和人工确认的 WebP 示例。不要创建 candidate、eval、promotion 或 maturity 记录。
