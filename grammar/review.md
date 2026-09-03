# Visual Review Grammar / 视觉复盘语法

This is the shared review order distilled from the retired eval rubrics. It is
not an evaluation suite and does not create a maturity state for a Pattern.
Use it to review one finished output before deciding whether a Pattern needs a
targeted edit or should be deleted.

这份文档提炼已删除 eval rubric 的通用复盘顺序。它不是评测套件，也不为
Pattern 创建成熟度状态。用它复盘一张完成的图，再决定 Pattern 是否需要一次
定向修改，或应该删除。

## Review Order / 复盘顺序

### 1. Visual argument / 视觉论证

- Can the reader name the pain, false belief, correction, and stakes from the image?
- Is there one concrete action or relation rather than a topic symbol?
- Does the evidence object prove this argument instead of adding a second story?

- 读者能否从画面说出痛点、错误信念、修正和利害关系？
- 是否只有一个具体动作或关系，而不是主题符号？
- 证据物件是否证明同一个论点，而不是引入第二个故事？

### 2. First read / 第一眼

- The main idea should be recoverable in one second and at thumbnail size.
- Title, subject, action, and composition must point to the same first read.
- Small labels and texture may reward inspection, but cannot carry the claim.

- 主意应在一秒和缩略图尺寸下被读出。
- 标题、主体、动作和构图必须指向同一个第一眼信息。
- 小标签和材质可以奖励细看，但不能独自承载论点。

### 3. Pattern ownership / Pattern 归属

- Hide topic-specific nouns and check whether the Pattern's grid, silhouette,
  type roles, material, density, and temperature remain identifiable.
- Every layout, palette, and surface decision must be traceable to the Pattern
  or its named adapter.
- Texture and color must support structure; they cannot compensate for a weak
  first read.

- 隐去主题名词后，检查 Pattern 的网格、剪影、字体角色、材质、密度和温度是否仍可辨。
- 每个版式、配色和表面决定都必须能追溯到 Pattern 或其命名 adapter。
- 材质和颜色必须服务结构，不能掩盖薄弱的第一眼信息。

### 4. Transfer and safety / 迁移与安全

- A second unrelated topic must keep the same method while changing its
  argument, evidence, and subject-specific details.
- Structural routes differ by action, relation, or evidence emphasis, not by
  a palette, crop, camera, or lighting swap.
- Remove source names, slogans, characters, logos, coordinates, and private
  details before a result enters a public Pattern example.

- 第二个无关主题应保留同一方法，同时更换论点、证据和主题细节。
- 结构路由应通过动作、关系或证据重心产生差异，不能只是换颜色、裁切、相机或光线。
- 进入公开 Pattern 示例前，去掉来源名称、口号、角色、logo、坐标和私密细节。

## Decision / 决策

- **Keep:** the output explains its visual argument and the Pattern method
  remains legible after decorative material is removed.
- **Edit:** one invariant, adapter rule, text boundary, or runtime constraint is
  missing; make one named change in the Pattern or adapter.
- **Delete:** the intended use repeatedly depends on unsupported composition,
  copied source material, or a generic surface. Delete the Pattern; do not
  preserve a candidate or an evaluation state.

- **保留：**画面能解释自身视觉论证，去掉装饰材质后仍能读出 Pattern 方法。
- **修改：**缺少一个不变量、adapter 规则、文字边界或 runtime 约束，在 Pattern 或 adapter 中做一次命名修改。
- **删除：**预期用途反复依赖不受支持的构图、复制来源素材或泛化表面。删除 Pattern，不保留 candidate 或评测状态。

## Review Record / 复盘记录

When a reviewed result is worth keeping, store a short `score.md` and
`critique.md` beside the Pattern-owned WebP. Keep prompts and rejected runs in
the consuming project. The durable record should explain what the image teaches,
not reproduce the old eval runner.

当复盘结果值得保留时，把简短的 `score.md` 和 `critique.md` 与 Pattern 内的 WebP 放在一起。
Prompt 和被拒绝的运行记录留在消费项目。持久记录应说明图像教会了什么，而不是复原旧 eval 运行器。
