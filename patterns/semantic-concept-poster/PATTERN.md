# Semantic Concept Poster

```yaml
id: semantic-concept-poster
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Horizontal concept posters where a short exact text must become the main visual object and the image must translate the text's metaphor, emotion, and argument into one minimal visual relationship.
avoid_when: Exact UI proof, dense infographics, long text layouts, decorative illustration, brand/product pages, or covers that can be solved by a concrete evidence object alone.
```

中文名：语义概念海报
English name: Semantic Concept Poster


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

## Runtime Compilation Route Slots / 直接输入槽位

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

## Direct Compilation Route: Emotional Metaphor Editorial / 直接生成路线：Emotional Metaphor Editorial

# Emotional Metaphor Editorial Calibration / 情绪隐喻编辑校准

This optional compilation route encodes the documented `词影 · 海报引擎Pro`
description into a source-safe editorial method. It keeps the shared operation
of turning a short, verified line into one precise emotional metaphor, with a
restrained palette and one semantic color hinge. It does not copy the source
skill's lyric, film, poem, style menu, or preview composition.

这份可选 compilation route 将“词影 · 海报引擎Pro”的共同方法抽象成来源安全的编辑海报语法。
它保留把短句转化为一个准确情绪隐喻、用克制配色和一个语义色彩铰链完成画面的操作，不复制来源技能的歌词、电影、诗歌、风格菜单或预览构图。

## Style Signature / 风格签名

- Use the `semantic-concept-poster` horizontal cover contract: the short checked line remains the first read and the visual metaphor is the second read.
- Reduce the supplied emotional source to one Aha relation—pressure, distance, echo, exposure, collapse, or another single verb—rather than illustrating every literal noun.
- Build from a low-saturation paper or neutral field and one small high-purity semantic anchor. The anchor marks the emotional hinge; it is not a decorative palette sample.
- Keep one or two necessary forms, generous breathing room, and a flat editorial or print-like surface. The image is intentionally non-photorealistic and should not resemble an IP scene.
- When source context matters, keep a tiny publication-style attribution line separate from the core text. Exact lyrics, quotations, and credits must be checked and typeset deterministically when needed.
- Offer a coherent poster, not a text template with an unrelated background. The metaphor owns the composition and the text remains legible within it.

- 使用 `semantic-concept-poster` 的横向封面契约：短且经核对的文字是第一眼，视觉隐喻是第二眼。
- 将来源情绪压缩成一个 Aha 关系，如压力、距离、回声、暴露或坍塌；不要把所有字面名词都画出来。
- 以低饱和纸面或中性场为底，只设置一个小而高纯度的语义锚点。锚点标记情绪转折，不是展示调色板。
- 只保留一到两个必要形体、充足呼吸空间和扁平编辑或印刷表面。画面有意反写实，不应变成 IP 场景。
- 来源背景确有必要时，用细小出版信息行承载署名，与核心文字分开。歌词、引语和署名必须核对，必要时交给确定性排版。
- 交付一张完整海报，不做“文字模板 + 无关背景”；隐喻负责构图，文字在其中保持可读。

## Composition Families / 构图家族

1. **Emotional pressure:** a single force compresses, bends, or interrupts the text without hiding it.
2. **Measured distance:** two related forms and their gap make the supplied feeling visible while the text stays dominant.
3. **Small reveal:** one opening, object, or color hinge exposes the hidden meaning behind the line.

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at 16:9 horizontal format.

The upstream emotional argument is authoritative:
- Emotional source: {{EMOTIONAL_SOURCE}}
- Core text: {{CORE_TEXT}}
- Hidden tension: {{HIDDEN_TENSION}}
- Visual relation: {{VISUAL_RELATION}}
- Main subject or evidence: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Semantic Concept Poster Pattern with the emotional-metaphor
calibration. Keep {{CORE_TEXT}} short, exact, and dominant. Reduce the source to
one Aha relation and choose Emotional Pressure, Measured Distance, or Small
Reveal according to {{VISUAL_RELATION}}. Do not literalize every noun or add a
second metaphor.

Build a low-saturation editorial field from paper white or a neutral base. Add
one small high-purity color anchor tied to {{HIDDEN_TENSION}} and keep all other
colors quiet. Use one or two necessary forms, generous whitespace, flat
illustration or print-like marks, and a restrained publication feel. The viewer
must read the text first and understand the emotional relation second.

If source context needs attribution, reserve a tiny deterministic publication
line below or beside the core text. Follow {{TEXT_HANDLING}} for exact text; do
not let generated pseudo-lettering carry meaning.

Avoid literal lyric scenes, celebrity or artist imitation, named IP, photorealism,
decorative symbol piles, generic AI fog, robots, neural networks, glossy 3D,
banner layouts, long generated text, pseudo-Chinese, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `EMOTIONAL_SOURCE`: summarize the supplied source context in one sentence; do not paste a long copyrighted passage.
- `CORE_TEXT`: use a short checked line, normally one or two deliberate lines; reserve longer copy for deterministic layout.
- `VISUAL_RELATION`: select exactly one pressure, distance, reveal, echo, exposure, or collapse relation.
- `MAIN_SUBJECT`: name only the subject or evidence already approved upstream.
- `TEXT_HANDLING`: choose `short checked text + tiny attribution` or `deterministic text region`.
- `FORBIDDEN`: add literal shortcuts or topic-specific clichés without changing the Pattern's palette or hierarchy.

## Fidelity Gate / 保真门

- The core text is the first read and remains crisp at feed size.
- One emotional relation makes the hidden tension visible; no second story competes with it.
- Low-saturation field and one high-purity anchor form a bounded palette decision.
- The metaphor owns the composition, with active whitespace and no generic template background.
- Removing the source genre, title, and attribution leaves the same short-text-to-metaphor method.
- Exact source wording is checked or typeset outside the image model when fidelity matters.

## Direct Compilation Route: Mist Blue Metaphor / 直接生成路线：Mist Blue Metaphor

# Mist-Blue Metaphor Calibration / 雾蓝单隐喻校准

This optional compilation route encodes the documented `隐喻标题插画` description
into a brand-neutral horizontal editorial-cover method. It preserves short text
as the visual subject, one precise metaphor, mist-blue and off-white restraint,
and a bounded warm accent without copying a source composition or slogan.

这份可选 compilation route 将“隐喻标题插画”的描述提炼为品牌中立的横向编辑封面方法。
它保留短文字主视觉、单一准确隐喻、雾蓝与米白的克制关系和受控暖色强调，不复制来源构图或口号。

## Style Signature / 风格签名

- Use a `16:9` horizontal frame with generous inner whitespace; the composition
  must read as an editorial cover, not a banner full of modules.
- Keep one short, checked core text as the dominant visual object. The metaphor
  must alter, support, expose, or obstruct that text through one clear relation.
- Build a restrained palette from mist blue and off-white with at most one warm
  accent. The accent should mark the semantic hinge, not decorate the canvas.
- Use granular spray or soft print grain locally around the metaphor or text
  relation; keep the paper field clean and avoid uniform noise.
- Let one or two necessary shapes, objects, or marks remain. Empty space carries
  tone and gives the text room to breathe.
- If exact text cannot be rendered reliably, generate a text-free base with a
  reserved deterministic text region; never let pseudo-lettering carry meaning.

- 使用 `16:9` 横向画幅和充足内留白，整体像编辑封面，不像模块堆满的 banner；
- 一个短且已核验的核心文字是主视觉对象，隐喻通过一个明确关系改变、托举、暴露或遮挡它；
- 以雾蓝和米白建立克制配色，最多一个暖色强调，且只标记语义转折；
- 喷绘颗粒或柔和印刷颗粒只在隐喻/文字关系附近局部出现，纸面保持干净；
- 只保留一两个必要形状、物件或标记，留白承担情绪并给文字呼吸空间；
- 精确文字无法稳定生成时，输出无字底图并预留确定性排版区，不能让伪文字承担意义。

## Composition Families / 构图家族

1. **Text under pressure:** a single force, fault, or field changes the reading of
   the core text without obscuring it.
2. **Text and small reveal:** one small object or opening exposes the hidden
   meaning behind the sentence.
3. **Text in distance:** two related forms or a measured gap make the sentence's
   tension visible while the text remains dominant.

1. **文字受压：** 一个压力、断层或场域改变核心文字的阅读方式，但不遮住文字；
2. **文字与小型揭示：** 一个小物件或开口揭示句子背后的隐藏含义；
3. **文字处于距离中：** 两个相关形式或一段可感知距离让句子张力显形，文字仍然主导。

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at 16:9 horizontal format.

The upstream visual argument is authoritative:
- Core text: {{CORE_TEXT}}
- Literal meaning: {{LITERAL_MEANING}}
- Hidden tension: {{HIDDEN_TENSION}}
- Best visual relation: {{VISUAL_RELATION}}
- Main subject or evidence: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Semantic Concept Poster Pattern with the Mist-Blue Metaphor
calibration. Keep {{CORE_TEXT}} short, exact, dominant, and integrated with the
image. Choose Text Under Pressure, Text and Small Reveal, or Text in Distance
according to {{VISUAL_RELATION}}; use one relation only.

Build a restrained 16:9 editorial cover from mist blue and off-white, with at most
one warm accent tied to {{HIDDEN_TENSION}}. Keep generous active whitespace and
one or two necessary shapes or objects. Use granular spray or soft print grain
only near the semantic relation; do not cover the frame with texture. The viewer
must read the text first and understand the metaphor second.

When exact text matters, render only the short checked text or reserve a clean
deterministic text region for post-layout. Do not copy any source slogan,
composition, or brand artwork.

Avoid generic AI fog, robots, neural networks, circuit boards, SaaS banners,
PPT title pages, decorative symbol piles, glossy 3D, high-saturation gradients,
full-frame noise, long generated text, pseudo-Chinese, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `CORE_TEXT`: keep it short enough for a single readable line or a deliberate
  two-line break; verify spelling outside the image model when required.
- `VISUAL_RELATION`: name one action such as pressure, obstruction, reveal,
  distance, echo, or exposure; do not stack several metaphors.
- `TEXT_HANDLING`: choose `short checked text` or `deterministic text region`.
- `FORBIDDEN`: add topic-specific literal shortcuts or symbols only when they
  would make the metaphor generic or misleading.

## Fidelity Gate / 保真门

- The short text is the first read and remains legible at feed size.
- One visual relation makes the hidden tension visible without a second story.
- Mist blue, off-white, and one warm accent remain restrained and semantic.
- Spray/print grain is local and subordinate; whitespace stays active.
- Removing the palette and material words still leaves the same text-metaphor
  relationship and supported horizontal structure.

- 短文字是第一眼信息，在信息流尺寸仍然清楚；
- 一个视觉关系让隐藏张力显形，不引入第二个故事；
- 雾蓝、米白和一种暖色保持克制且具有语义；
- 喷绘/印刷颗粒局部且退后，留白仍然主动；
- 去掉配色和材质词后，文字—隐喻关系及横向结构仍然成立。

## Failure Recovery / 失败恢复

- If the text becomes a caption beside an unrelated image, return to one relation
  that changes the text's meaning and enlarge the text block.
- If the frame feels like generic AI fog, replace the atmosphere with a concrete
  pressure, reveal, distance, or obstruction tied to the score.
- If the palette becomes decorative, remove the warm accent or tie it to the
  semantic hinge and restore off-white space.
- If exact wording fails, remove generated text and use deterministic post-layout.

## Direct Compilation Route: Spatial Word Poster / 直接生成路线：Spatial Word Poster

# Spatial-Word Poster Calibration / 空间大字海报校准

This optional compilation route encodes the documented `高级大字海报` method into a
source-safe extension of the Semantic Concept Poster. One short checked word or
phrase becomes a physical spatial skeleton, and a necessary actor or object
interacts with that structure to make the meaning visible. The upstream method's
sample words, scenes, and visual presets remain external evidence.

这份可选 compilation route 将“高级大字海报”的方法提炼为语义概念海报的来源安全扩展。
一个经核对的短词或短语成为物理空间骨架，必要的人物或物体与之互动，让词义变得可见。来源技能的示例词、场景和视觉预设仍属于外部证据。

## Style Signature / 风格签名

- Keep one short core word or phrase as the first read; reserve exact text for
  deterministic layout when the runtime cannot guarantee spelling.
- Translate the word's hidden tension into one physical structure: wall,
  barrier, bridge, room, floor, container, or another object that can be
  changed by an action.
- Add one actor, tool, or object only when its interaction explains the word;
  do not illustrate every literal noun in the source.
- Let the structure and the action carry the metaphor. Keep the palette,
  texture, and lighting restrained so the frame does not become a generic scene.
- Preserve generous space around the word-space and keep the poster premium,
  flat, editorial, and non-photorealistic unless the upstream brief requires
  another approved surface.

- 让一个短核心词或短语成为第一眼；运行时无法保证拼写时，把准确文字交给确定性排版。
- 将词的隐藏张力转译成一件可被动作改变的物理结构，如墙、屏障、桥、房间、地面或容器。
- 只有当人物、工具或物体的互动能解释词义时才加入；不要把来源中的每个名词都画出来。
- 让结构与动作承担隐喻，配色、材质和光线保持克制，避免退化成通用场景。
- 文字空间周围保留呼吸感，维持高级、扁平、编辑感和非写实表面，除非上游简报要求其他已批准材质。

## Composition Families / 构图家族

1. **Word barrier:** the word forms a wall or gate; one action opens, blocks, or
   crosses it.
2. **Word support:** the word becomes a bridge, floor, or scaffold; an object
   depends on it, repairs it, or reveals its load.
3. **Word room:** the word outlines a room or container; one necessary object
   exposes the distance, pressure, or absence inside it.

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream semantic argument is authoritative:
- Core text: {{CORE_TEXT}}
- Literal meaning: {{LITERAL_MEANING}}
- Hidden tension: {{HIDDEN_TENSION}}
- Visual relation: {{VISUAL_RELATION}}
- Main actor or evidence: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Semantic Concept Poster Pattern with the spatial-word
calibration. Keep {{CORE_TEXT}} short, exact, and the first read. Turn the word
into one physical structure chosen from Word Barrier, Word Support, or Word Room.
Make {{MAIN_SUBJECT}} interact with that structure so {{HIDDEN_TENSION}} becomes
visible through one action. Do not add a second metaphor or illustrate every
literal noun.

Use restrained editorial color, active whitespace, and a flat premium surface.
Keep the word-space relation legible before texture. Follow {{TEXT_HANDLING}};
if exact lettering is unreliable, generate a clean text-free base and typeset
{{CORE_TEXT}} deterministically afterward.

Avoid generic AI symbols, decorative architecture, unrelated characters,
photorealism, glossy 3D, banner templates, long generated copy, pseudo-Chinese,
logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `CORE_TEXT`: one short checked word or phrase, normally one to four words.
- `HIDDEN_TENSION`: the single pressure, distance, support, obstruction, or
  exposure relation the structure must reveal.
- `VISUAL_RELATION`: choose exactly one of barrier, support, or room before
  prompting.
- `MAIN_SUBJECT`: one supplied actor, tool, or evidence object whose action
  changes the text-space.
- `TEXT_HANDLING`: choose short checked text or a deterministic text region;
  never ask the image model to typeset long copy.

## Fidelity Gate / 保真门

- The short word or phrase is readable and remains the first read.
- The spatial skeleton is recognizable as a consequence of the word, not generic
  architecture added behind it.
- One actor or object performs a visible action that changes the word's meaning.
- Removing texture and secondary decoration leaves the same word-space relation.
- No second metaphor, invented slogan, named IP, or unrelated prop is required.

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

These notes absorb the former emotional-metaphor, mist-blue-metaphor, and
spatial-word poster checks.

这份笔记吸收已删除的情绪隐喻、雾蓝隐喻和空间大字海报检查。

## Stable Checks / 稳定检查

- Short exact text is the first read. One pressure, distance, reveal, echo,
  exposure, collapse, barrier, support, or passage relation changes its meaning.
- The metaphor owns the layout. It must be concrete enough to name without a
  paragraph and must remain visible after grain, lighting, and secondary marks
  are removed.
- Mist blue or another quiet field may dominate with at most one high-purity
  semantic anchor. Whitespace remains active at `16:9` feed size.
- For spatial words, derive a wall, bridge, room, or similar skeleton from the
  word's meaning, then let one actor or object cross, open, support, or expose it.

- 短而准确的文字是第一眼信息。一个压力、距离、揭示、回响、暴露、坍塌、阻挡、支撑或穿越关系改变它的含义。
- 隐喻拥有版式，必须具体到无需段落说明即可命名；去掉颗粒、光照和次要标记后，关系仍应可见。
- 雾蓝或其他安静场域可以主导画面，最多保留一个高纯度语义锚点；在 `16:9` 信息流尺寸下留白仍然主动。
- 空间大字海报从词义派生墙、桥、房间或类似骨架，再让一个主体或物件穿越、打开、支撑或暴露它。

## Transfer Set / 迁移主题组

The same text-first system must work for two unrelated emotional/editorial
topics and for two unrelated short words. The relation, not source lyrics,
films, artists, slogans, or decorative fog, carries the meaning.

## Failure Recovery / 失败恢复

If the image is text-on-background, generic fog, multi-metaphor clutter, or a
generic scene beside large type, shorten the line and rebuild one relation. If
the word-space method repeatedly needs unsupported layouts, delete the route or
Pattern rather than keeping a style-only state.
