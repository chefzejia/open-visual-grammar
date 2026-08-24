# Semantic Concept Poster

```yaml
id: semantic-concept-poster
status: seed
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Horizontal concept posters where a short exact text must become the main visual object and the image must translate the text's metaphor, emotion, and argument into one minimal visual relationship.
avoid_when: Exact UI proof, dense infographics, long text layouts, decorative illustration, brand/product pages, or covers that can be solved by a concrete evidence object alone.
load_next:
  image-generation: ../../runtimes/image-generation.md
```

中文名：语义概念海报
English name: Semantic Concept Poster

Status: seed

## Definition / 定义

Semantic Concept Poster turns a short input sentence into the central visual
object of a high-end concept poster.

The image is not an illustration around the text. The text is the subject. The
visual system exists to make the text's hidden meaning visible through one
precise relationship: connection, pressure, obstruction, split, echo, distance,
illumination, collapse, exposure, compression, or another relation that fits the
source.

语义概念海报把一句短文本变成高级概念海报里的视觉主体。

它不是“给文字配插图”。文字本身就是主体。画面元素的任务，是把文字背后的含义、情绪、隐喻和传播张力，通过一个准确的视觉关系显现出来：连接、压迫、遮挡、分裂、回声、距离、照亮、坠落、暴露、压缩，或更适合当前主题的关系。

## Invariants / 不变量

- one short core text, large enough to read at feed size;
- generous inner padding around the text;
- text, metaphor, and layout act as one object, not separate layers;
- one visual relationship carries the argument;
- only necessary objects, marks, lines, space, light, or symbols remain;
- restrained palette with one clear emotional decision;
- premium flat-design / editorial-poster finish, not ad banner, PPT cover, e-commerce poster, or cheap illustration;
- no logo, QR code, watermark, contact info, meaningless decoration, or fake UI.

- 一个短核心文本，在信息流尺寸也必须可读；
- 文字周围有合理内边距；
- 文字、隐喻和构图像同一个物件，不是分离图层；
- 一个视觉关系承载论点；
- 只保留必要的人、物、空间、符号、线条、光影或结构；
- 配色克制统一，但要有明确情绪；
- 高级平面设计感和概念海报感，不是广告页、PPT 封面、电商海报或廉价插画；
- 不出现 logo、二维码、水印、联系方式、无意义装饰或假 UI。

## Source Contract / 来源契约

Before prompting, reduce the source to:

```text
Core text:
Literal meaning:
Hidden tension:
Emotional state:
Best visual relation:
Forbidden literal shortcuts:
```

`Core text` must be short. If the source is long, select or rewrite the first-read
sentence before generation. The model should not be asked to typeset a whole
article.

prompt 前先把来源压缩成：

```text
核心文字：
字面意思：
隐藏冲突：
情绪状态：
最佳视觉关系：
禁止的直白捷径：
```

`核心文字` 必须短。来源很长时，先选出或改写第一眼文字，再生成图。不要让模型排整篇文章。

## Composition Behavior / 构图行为

The poster should produce a two-step read:

1. The viewer sees the text immediately.
2. The viewer understands the metaphor by noticing how the surrounding visual
   relation changes, damages, supports, blocks, or exposes that text.

Common composition moves:

- the text is cut by a single fault line;
- the text sits inside a pressure field;
- one small object reveals the hidden system;
- repetition creates an echo, cache, or loop;
- light exposes a secret layer behind the text;
- distance between two identical forms makes the cost visible.

海报应该形成两步阅读：

1. 第一眼看到文字；
2. 第二眼通过文字周围的关系，理解画面如何改变、损伤、托举、遮挡或暴露这句话。

常见构图动作：

- 文字被一道断层切开；
- 文字处在压力场中；
- 一个小物件揭示隐藏系统；
- 重复形成回声、缓存或循环；
- 光照出文字背后的秘密层；
- 两个相同形式之间的距离让成本可见。

## Runtime Adapter Slots / 运行时槽位

Use these slots when compiling for image generation:

```text
Output:
Core text:
Metaphor:
Visual relation:
Composition:
Palette:
Texture:
Text handling:
Forbidden:
```

Text rule:

- prefer short Chinese text;
- put the text in the prompt verbatim;
- require crisp, legible, correctly spelled text;
- inspect the output manually;
- if exact text fails, generate without text and typeset externally.

文字规则：

- 优先短中文；
- 在 prompt 中逐字给出；
- 要求清晰、可读、无错字、无遮挡；
- 输出后人工检查；
- 如果模型文字失败，改为无字底图再外部排字。

## Recommended Cases / 推荐场景

Good fit:

- X Article covers with one memorable sentence;
- short public arguments;
- AI literacy posts where the metaphor matters more than exact UI proof;
- editorial covers where the title must feel designed, not pasted.

适合：

- 有一句可记住标题的 X Article 封面；
- 短公共论点；
- 隐喻比 UI 证据更重要的 AI literacy 内容；
- 标题必须像被设计出来、而不是贴上去的编辑封面。

## Weak Fit / 不适合

Poor fit:

- exact product instructions;
- screenshots as proof;
- long command snippets;
- multi-step diagrams;
- covers whose trust depends on a real interface or real chart.

不适合：

- 精确产品教程；
- 需要截图证明；
- 很长的命令片段；
- 多步骤图解；
- 信任来自真实界面或真实图表的封面。

## Failure Modes / 失败模式

- the image becomes a decorative background with pasted text;
- the visual metaphor is generic AI fog, robot, neural network, or circuit board;
- the text is misspelled, cropped, distorted, or too small;
- too many symbols compete with the headline;
- the poster feels like a SaaS banner or PPT title page;
- the visual relationship does not change the meaning of the text.

- 画面变成“装饰背景 + 贴字”；
- 隐喻变成通用 AI 雾、机器人、神经网络、电路板；
- 文字错字、裁切、变形或太小；
- 符号太多，抢走标题；
- 画面像 SaaS banner 或 PPT 题图；
- 视觉关系没有改变文字含义。
