# Deterministic Layout Adapter / 确定性版式 Adapter

Compile `picture-book-sequence` into fixed-format HTML/CSS, Typst, PDF, or
print-ready pages. Use this route when page dimensions, exact copy, and page
order must survive export; image generation may supply visual studies, but it
must not own final text or pagination.

将 `picture-book-sequence` 编译为固定格式的 HTML/CSS、Typst、PDF 或可打印页面。当页面尺寸、准确文案和页序必须在导出后保持不变时使用此路由；图像生成可以提供视觉草图，但不能负责最终文字或分页。

## Required Score / 必填 Score

```text
Output format:
Output dimensions:
Page count:
Audience and safety boundary:
Sequence family:
Recurring anchor:
Page beat per page:
Short scene cue:
Deterministic body copy:
Material branch:
Whitespace and density rhythm:
Font roles and fallback:
QA checks:
Forbidden:
```

## Compile Rules / 编译规则

1. Choose one sequence family—progression, quiet-to-busy reveal, anchor comparison, or path/return—and keep it across the whole artifact.
2. Give every page one dominant action or relation. Keep the recurring anchor's role, silhouette, direction, and color cue stable.
3. Reserve exact headings, labels, dialogue, and long copy for deterministic text zones. Never rasterize required copy into generated art.
4. Define page dimensions and safe margins before placing scenes. Use one large page field rather than an equal-weight panel grid.
5. Keep the selected material branch consistent across pages. Let density change only when the supplied beat needs a pause or reveal.
6. Verify export dimensions, page count, text overflow, font loading, contrast, reading order, and child-safe content at the smallest delivery size.

1. 先选择一种序列家族——递进、安静到繁忙揭示、锚点对照或路径/回环——并贯穿整套页面。
2. 每页只保留一个主动作或关系。重复锚点的角色、剪影、方向和配色线索必须稳定。
3. 准确标题、标签、对白和长文案放入确定性文字区，不能把必需文案交给图像生成后再猜测。
4. 先定义页面尺寸和安全边距，再放置场景。使用一个主页面场域，不默认拆成等权重格子。
5. 全页保持同一材质分支。只有上游节拍需要停顿或揭示时才改变密度。
6. 检查导出尺寸、页数、文字溢出、字体加载、对比度、阅读顺序，以及最小交付尺寸下的儿童安全内容。

## Token Skeleton / Token 骨架

```text
color.paper
color.ink
color.accent
space.page
space.safe
space.scene
type.heading
type.scene-cue
type.body
type.fallback
texture.material-branch
```

## Fidelity Gate / 保真门

- Page order and state changes remain understandable without reading the body copy.
- Every page advances one supplied beat; no decorative-only page or filler spread exists.
- The recurring anchor is recognizable and directionally coherent at delivery size.
- Exact text is selectable, deterministic, and free of overflow or pseudo-text.
- The material branch, whitespace rhythm, and child-safe temperature remain consistent across the sequence.

- 不读正文也能从页序和状态变化理解故事推进。
- 每页都推进一个上游节拍，不存在纯装饰页或凑数跨页。
- 在交付尺寸下仍能识别重复锚点，方向关系前后一致。
- 准确文字可选择、可复现，没有溢出或伪文字。
- 材质分支、留白节奏和儿童安全温度在整套序列中保持一致。
