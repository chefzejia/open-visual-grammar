# YouMind Isometric Cutaway Transfer / YouMind 等距剖切迁移

This promotion-candidate eval tests whether the public YouMind P073 method and
the related transparent-blueprint method transfer from micro-architecture to
functional objects. The method must keep a correct isometric view, a readable
cutaway, and a support frame with structural purpose without copying the source
building, scaffold shape, or labels.

本用例用于晋级前测试，判断公开 YouMind P073 与透明蓝图方法能否从微缩建筑迁移到功能物件。必须保留正确等距视图、可读剖切和有结构作用的支撑框架，同时不复制原始建筑、脚手架形状或标注。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Adapter: `patterns/minimal-handdrawn-linework/adapters/youmind-isometric-cutaway.md`
- Status: promotion candidate; optional adapter available, no canonical Pattern yet
- Source study: `docs/youmind-style-atlas.md`
- Public sources: [小小东 x 微缩 x 等距 x P073](https://youmind.com/~skills/01a0578b-5e6f-7fdd-b872-74932df40622); [GPT2 x 蓝图 x 拆解 x 美学提示词 x VOL.048](https://youmind.com/~skills/01a032b2-7e5a-7e0c-b0e7-2a9ae93f54a9); [GPT2 x 拆解 x 分层 x 美学提示词 x VOL.042](https://youmind.com/~skills/01a03296-7da4-7075-b500-176b3c311546); [GPT2 x isometric x 达芬奇 x 美学提示词 x VOL.401](https://youmind.com/~skills/01a03291-30ea-7ea4-ab72-9040c4645eec)

## Fixed Input Contract / 固定输入契约

Keep the same aspect ratio, audience, visual job, label policy, and material
budget across all candidates. The object supplies the cutaway relation; the
style must not invent a building or turn the result into a generic 3D render.

| Topic | Cutaway subject | Support or survey action | Reader question |
| --- | --- | --- | --- |
| Water purifier repair | a compact filter housing | a frame braces the opened section and exposes the blocked path | where does flow stop? |
| Archive box inventory | a layered document box | a frame measures and separates one hidden dependency | what must be found before filing? |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Cutaway subject:
Visible layers:
Support or survey action:
First read:
Isometric axes:
Label budget:
Paper and color:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must identify one section relationship and explain why the support
frame is needed. “Tiny detailed 3D object” is not a valid visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Working Cutaway`: the opened section and support frame carry the first read.
2. `Survey Plate`: a quieter diagram with measured layers and restrained labels.
3. `Repair Intervention`: the frame visibly wraps, braces, or reconnects the failing relation.

If a candidate needs a skyline, room scene, decorative machinery, or a new
perspective system to read, record a transfer failure instead of changing the
route.

## Pass Signals / 通过信号

- Isometric axes, section depth, and visible layers remain coherent.
- The support frame has a named structural action, not decorative wire clutter.
- The object and the failure or dependency are identifiable before texture.
- White textured paper, source-aware color, and short labels stay subordinate to the section relation.
- The same route works for both non-building topics and all three candidate families.
- No copied building silhouette, source scaffold layout, slogan, or coordinates appear.

## Fail Signals / 失败信号

- Perspective slips into generic 3D or the cutaway becomes an exploded product render.
- Scaffolding is ornamental, disconnected, or denser than the object itself.
- Labels compensate for an unreadable section relationship.
- The paper and miniature scale are present, but no repair, survey, or dependency action is visible.
- The three candidates are camera, color, or object swaps rather than structural solutions.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
