# Deterministic Layout Adapter / 确定性版式 Adapter

Compile `restrained-editorial-slide-system` into HTML/CSS, Typst, PDF, or another
fixed slide renderer. Do not use image generation for exact text, charts, page
sequence, or citation placement.

把 `restrained-editorial-slide-system` 编译到 HTML/CSS、Typst、PDF 或其他固定幻灯片渲染器。
准确文字、图表、页面顺序和引用位置不得交给图像模型。

## Required Score / 必填 Score

```text
Output format:
Output dimensions:
Audience:
Deck job:
Page sequence:
Reading task per page:
Page family per page:
Display role:
Body role:
Accent role:
Numeric role:
Script fallback:
Evidence sources:
Image crop rules:
Color roles:
Density by page:
QA checks:
Forbidden:
```

## Token Contract / Token 契约

```text
color.paper
color.text
color.muted
color.accent
color.rule
space.page-x
space.page-y
space.column
space.module
type.display
type.body
type.accent
type.numeric
type.fallback
line.rule
radius.media
```

## Compile Rules / 编译规则

1. Define the reading task and page family before layout values.
2. Use one deck-wide grid; page families may span or subdivide it but may not invent unrelated margins.
3. Keep display scarce and body readable at delivery size.
4. Use tabular numerals or equivalent alignment for metrics.
5. Crop images intentionally and retain source/caption metadata where required.
6. Verify overflow, contrast, source labels, page count, and font loading in the final export.

1. 先确定阅读任务和页面家族，再写布局数值；
2. 整套使用一个主网格，页面家族可以跨列或细分，但不能发明无关边距；
3. 展示字体稀缺使用，正文在交付尺寸下可读；
4. 指标使用等宽数字或等价对齐方案；
5. 图片有意裁切，并按要求保留来源与说明；
6. 在最终导出中检查溢出、对比度、来源标注、页数和字体加载。

## Fidelity Gate / 保真门

- Every page has exactly one dominant reading task.
- All pages share grid, spacing, and color tokens.
- The four type roles remain distinct after export.
- Evidence is bounded, sourced, and aligned.
- No page relies on decorative filler to feel complete.
