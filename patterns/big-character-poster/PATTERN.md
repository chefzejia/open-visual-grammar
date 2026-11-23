# Big Character Poster

```yaml
id: big-character-poster
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Public feed covers where a short title, concrete evidence object, and sharp correction should carry the first read.
avoid_when: Neutral documentation heroes, exact UI proof, calm premium pages, or layouts that need deterministic text rendering.
```

中文名：大字报
English name: Big Character Poster


## Definition / 定义

Big Character Poster is a design language for public feed covers with a strong
point of view.

It is not a prompt template and not a layout recipe. It helps an agent enter
the right visual space before writing a one-off image prompt.

大字报是一种有明确立场的信息流封面设计语言。

它不是 prompt 模板，也不是固定版式配方。它的作用是让 agent 在写一次性图像 prompt 之前，先进入正确的视觉判断空间。

## Spirit / 精神

This style believes that a cover should take a position before it decorates a
topic.

The image should feel like an editorial poster pasted onto the feed: direct,
physical, opinionated, and a little rude. It should not feel like a SaaS banner,
dashboard collage, or neutral documentation hero.

The title has weight. The evidence has texture. The metaphor makes an argument.

这个风格相信：封面应该先表态，再装饰话题。

画面应该像贴进信息流里的编辑海报：直接、物理、有观点，甚至有一点不客气。它不应该像 SaaS banner、dashboard 拼贴或中性的文档 hero。

标题要有重量。证据要有质感。隐喻要能提出论点。

## Invariants / 不变量

Use this vocabulary as material, not as a checklist:

- oversized Chinese headline type;
- ink, paper, wall paint, stamp, poster grain, rough print texture;
- red pencil marks, warning marks, torn paper, pressure marks, tape, labels;
- concrete evidence objects: bill, receipt, session card, command slip, bridge,
  plug, archive tag, handoff note, status surface;
- one physical action: bends, weighs down, cuts open, peels back, cracks,
  compresses, stains, blocks, exposes;
- warm paper, black ink, dirty off-white, warning red, one small accent color.

The best images combine a loud first read with one concrete object that proves
the article is about a real problem.

把下面这些当成材料，不要当成 checklist：

- 超大的中文标题字；
- 墨、水纸、墙漆、印章、海报颗粒、粗糙印刷肌理；
- 红铅笔标记、警告标记、撕纸、压痕、胶带、标签；
- 具体证据物件：账单、收据、session 卡片、命令纸条、桥、插头、档案标签、handoff 便签、状态表面；
- 一个物理动作：弯折、压住、切开、揭开、裂开、压缩、染脏、阻挡、暴露；
- 暖纸、黑墨、脏白、警告红、一个小面积强调色。

最好的图，会同时拥有强第一眼和一个能证明“这篇文章讲的是现实问题”的具体物件。

## What Gives It Force / 力量来源

The force comes from the relationship between title, object, and argument.

Good examples usually have:

- a short title that can act like the main object;
- a concrete pain the reader recognizes;
- one object that makes the abstract claim tangible;
- a visual action that changes the title or the object;
- enough roughness to feel argued, not polished by a template;
- details that reward inspection without becoming the first read.

The title, metaphor, and evidence should feel designed together. If the title
could be swapped onto another background without changing the image, the design
language has not arrived yet.

力量来自标题、物件和论点之间的关系。

好的例子通常有：

- 一个短标题，标题本身可以像画面主物件一样存在；
- 一个读者能认出的具体痛点；
- 一个把抽象观点变成现实感的物件；
- 一个改变标题或物件状态的视觉动作；
- 足够粗粝，让画面像在表达立场，而不是被模板磨平；
- 经得起细看，但不会抢走第一眼的细节。

标题、隐喻和证据应该像是一起被设计出来的。如果标题可以随便贴到另一个背景上，画面含义不变，这个设计语言就还没有成立。

## Source Contract / 来源契约

Before writing a prompt, define the current asset:

```text
Visual job:
Primary source:
Supporting sources:
Source inclusion rule:
```

The primary source is the smallest material that should drive this image:
usually the channel draft, article hook, selected passage, or campaign brief.

Add supporting sources only when they materially change the audience, factual
boundary, visual claim, delivery constraint, or reuse target.

写 prompt 前，先定义当前视觉任务：

```text
Visual job:
Primary source:
Supporting sources:
Source inclusion rule:
```

Primary source 是最小但足以驱动画面的材料，通常是目标渠道草稿、文章 hook、选中段落或 campaign brief。

只有当补充材料会改变受众、事实边界、视觉主张、交付约束或复用目标时，才加入 supporting sources。

## Argument Questions / 论点问题

Answer these before prompting:

```text
Reader pain:
False belief:
Correction:
Stakes:
Cover sentence:
Concrete evidence:
Visual action:
Why it bites:
```

`Concrete evidence` matters. A poster about cost should probably contain a bill,
receipt, meter, ledger, or comparable evidence object. A poster about session
recovery should probably contain a session card, command slip, archive tag, or
resume path. The evidence object is not decoration; it is what makes the claim
feel real.

prompt 前先回答：

```text
Reader pain:
False belief:
Correction:
Stakes:
Cover sentence:
Concrete evidence:
Visual action:
Why it bites:
```

`Concrete evidence` 很重要。讲成本的海报，最好有账单、收据、计量表、账本或类似证据物件。讲 session 恢复的海报，最好有 session 卡片、命令纸条、档案标签或恢复路径。证据物件不是装饰，它让观点变得真实。

## Prompting Posture / 编译姿态

Write a fresh prompt for the current image. Do not fill a universal template.

The final prompt may be short or long, literal or metaphorical, image-model
first or layout-first. The only requirement is that it preserves the design
language:

- the cover feels like a finished poster, not a neutral asset;
- the first read has attitude;
- the title is a designed force in the composition;
- concrete evidence carries the article's real pain;
- the visual action makes the correction visible;
- the image would be hard to reuse for ten unrelated AI posts.

Let the agent choose the prompt wording that fits the article, model, and
channel. The pattern should shape judgment, not replace it.

为当前图像写新的 prompt，不要填万能模板。

最终 prompt 可以长也可以短，可以直接也可以隐喻，可以先服务图像模型，也可以先服务版式。唯一要求是保留这个设计语言：

- 封面像完整海报，而不是中性素材；
- 第一眼有态度；
- 标题是构图里的视觉力量；
- 具体证据承载文章真实痛点；
- 视觉动作让纠正关系变得可见；
- 这张图很难复用到十篇无关 AI 文章上。

让 agent 根据文章、模型和渠道选择具体措辞。Pattern 应该塑造判断，而不是替代判断。

## References / 参考

Use references as taste anchors, not as things to copy pixel by pixel:

```text
refs/agent-runtime-cost-x-cover.webp
refs/context-token-economics-x-cover.webp
```

Ask what makes them work:

- Where is the attitude?
- What is the first read?
- Which object proves the pain is real?
- How does the title participate in the image?
- What detail would disappear first at phone size?
- What makes the image feel like a public argument rather than a generic tech
  banner?

参考图是品味锚点，不是逐像素复制对象。

看它们时问：

- 态度在哪里？
- 第一眼是什么？
- 哪个物件证明痛点是真的？
- 标题如何参与画面？
- 手机信息流尺寸下，哪个细节会最先消失？
- 为什么它像公共论点，而不是通用技术 banner？

## Recommended Cases / 推荐场景

Good fit:

- X Article covers;
- single-image post hooks;
- public tutorials with one strong warning or correction;
- beginner-facing AI literacy posts that need one memorable first sentence.

## Weak Fit / 不适合

Poor fit:

- calm product documentation hero images;
- exact UI proof;
- step-by-step tutorials where screenshots carry trust;
- brand pages that need product photography or institutional calm.

适合：

- X Article 封面；
- 单图帖 hook；
- 有一个强警告或强纠正的公共教程；
- 需要一句话被记住的新手 AI 科普内容。

不适合：

- 安静产品文档 hero；
- 精确 UI 证明；
- 截图承担信任的步骤教程；
- 需要产品摄影或机构感的品牌页面。

## Avoid / 避免

EN:

- SaaS banner smoothness;
- dashboard collage;
- neutral documentation hero tone;
- abstract AI symbols without evidence;
- background-only images with the title pasted on later;
- generic tech decoration;
- random text, logos, signatures, or watermarks.

CN:

- 光滑 SaaS banner 感；
- dashboard 拼贴；
- 中性文档 hero 语气；
- 没有证据物件的抽象 AI 符号；
- 先生成背景、后贴标题的图；
- 通用技术装饰；
- 随机文字、logo、签名或水印。

## Review Questions / 审核问题

Use these to judge the result:

- Does it have a point of view?
- Does the title dominate the first second?
- Is there a concrete evidence object, not just an abstract metaphor?
- Does the visual action make the correction visible?
- Does it feel article-specific?
- Would this still work if it were seen at phone-feed size?
- Does it feel like a finished editorial poster?

If the answer is weak, revise the visual judgment before revising the wording of
the prompt.

用这些问题判断结果：

- 它有没有立场？
- 标题是否支配第一秒？
- 是否有具体证据物件，而不只是抽象隐喻？
- 视觉动作是否让纠正关系变得可见？
- 它是否足够文章特定？
- 放到手机信息流尺寸还是否成立？
- 它是否像一张完成的编辑海报？

如果答案很弱，先改视觉判断，再改 prompt 措辞。

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route

Use this compilation route when an agent needs to turn `big-character-poster` judgment
into an image-generation prompt.

This compilation route is a meta-prompt protocol. It does not provide a universal prompt
template.

## Before Writing The Prompt

The agent should answer, in its own words:

```text
What is this image for?
What source is driving the image?
What should the viewer feel in one second?
What false belief is being challenged?
What correction must become visible?
What concrete evidence object makes the pain real?
How does the title behave as part of the picture?
What physical action carries the argument?
What should be left to the image model's taste?
What must be checked after generation?
```

These answers are planning material. They do not need to appear verbatim in the
final prompt.

## Compile Posture

Write the final prompt for the current article, model, and channel.

The prompt should invite a finished editorial poster, not a neutral background
asset. It should give the model enough visual material to design with:

- the exact or intended headline;
- the article-specific pain;
- one concrete evidence object;
- one physical action;
- the desired poster temperament;
- the visual materials and texture;
- the channel size or aspect ratio;
- any real-world details that make the image less generic.

The agent may choose concise phrasing, descriptive phrasing, bilingual phrasing,
or reference-led phrasing. The pattern does not require one wording shape.

## Variation Direction

When making multiple variations, vary the visual idea, not just the labels.

Useful axes:

- evidence object: bill, receipt, handoff note, command slip, bridge, plug,
  archive card;
- title relationship: stamped, crushed, cut open, wrapped, weighed, blocked;
- visual temperature: rough newspaper, wall poster, receipt collage, propaganda
  print, editorial magazine;
- metaphor distance: literal evidence, near metaphor, more editorial metaphor.

Keep the same article argument across variations, but allow the agent to choose
which visual language best carries it. Three variations do not need to map to a
fixed list of composition models.

## Review After Generation

Judge the image, not the prompt.

Ask:

- Is this a finished poster?
- Does the headline have visual force?
- Is the evidence object specific enough?
- Does the image make the article's correction visible?
- Does it avoid generic AI/software banner energy?
- Would the operator be willing to publish it without explaining the prompt?

If the image fails, revise the visual judgment. Do not keep adding prompt
clauses just to satisfy a checklist.

## Direct Compilation Route: Torn Paper Thumbnail / 直接生成路线：Torn Paper Thumbnail

# Torn-Paper Thumbnail Calibration / 撕纸缩略图校准

This optional compilation route captures the high-contrast editorial structure described
by the documented `撕纸拼贴 YouTube 缩略图` method. It belongs under
`big-character-poster` because the headline, evidence portrait, and rough
physical action already match that Pattern's argument-first contract.

这份可选 compilation route 提炼“撕纸拼贴 YouTube 缩略图”的高反差编辑结构。它归入
`big-character-poster`，因为标题、证据人像和粗粝物理动作已经符合该 Pattern 的论点优先契约。

## Style Signature / 风格签名

- One short, oversized headline owns the first read.
- One authorized portrait or evidence object is cut into a high-contrast silhouette.
- Torn paper exposes, interrupts, frames, or peels back the argument; it is not random edge decoration.
- Black, paper white, and one signal color carry the whole thumbnail.
- The face, evidence, and headline survive mobile thumbnail size.

- 一个短而巨大的标题承担第一眼；
- 一个获授权的人像或证据物件被压缩成高反差剪影；
- 撕纸负责暴露、打断、框定或揭开论点，不做随机边缘装饰；
- 黑色、纸白和一个信号色承担整张缩略图；
- 面部、证据和标题在手机缩略图下仍成立。

## Composition Families / 构图家族

1. **Torn reveal:** the headline or evidence is exposed by one large peel.
2. **Cutout confrontation:** a portrait silhouette pushes against or interrupts the headline.
3. **Paper verdict:** one evidence object sits under a torn headline strip as a visible conclusion.

## Model Prompt / 模型生成提示词

```text
Create a finished feed or video thumbnail at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Correction: {{CORRECTION}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Big Character Poster grammar with the torn-paper-thumbnail calibration.
Build one short oversized headline, one authorized high-contrast portrait or
evidence silhouette, and one meaningful paper action: torn reveal, cutout
confrontation, or paper verdict. Use black, paper white, and one signal color.
Let the tear expose, interrupt, frame, or peel back the supplied correction.

Keep the face, evidence, and headline readable at mobile thumbnail size. Reserve
exact text for deterministic post-layout when necessary. Avoid random scrap
collage, multiple portraits, decorative tape, tiny labels, glossy 3D, cinematic
backgrounds, pseudo-text, logos, watermarks, and {{FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- Headline and evidence remain legible at thumbnail size.
- The tear performs one semantic action tied to the correction.
- The palette stays black, paper white, and one signal color.
- The portrait or object is evidence, not decorative personality imagery.
- Removing torn texture still leaves a forceful title-evidence relation.

## Failure Recovery / 失败恢复

- **Symbol substitution:** if the model turns an abstract correction into
  currency marks, arrows, charts, or other icons, replace the semantic symbol
  with one physical evidence relation such as repeated blank slips. Keep the
  exact headline for deterministic post-layout.
- **Mood collage:** if the tear reveals unrelated scraps, return to one large
  peel, one evidence object, and the black/paper/signal palette.

## 失败恢复

- **符号替代：** 如果模型把抽象论点变成货币符号、箭头、图表或其他图标，用一条物理证据关系（例如重复的空白单据）替代语义符号，准确标题交给确定性后排。
- **情绪拼贴：** 如果撕口露出互不相关的碎片，回到一处大撕口、一个证据物件和黑/纸白/信号色配色。

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

These notes absorb the former reproduction case and its first-read, visual
argument, visual-tension, anti-template, and transfer checks.

这份笔记吸收已删除的复现用例，以及第一眼、视觉论证、视觉张力、反模板和迁移检查。

## Stable Checks / 稳定检查

- Start with the smallest primary source that owns the cover job. Record reader
  pain, false belief, correction, stakes, concrete evidence, and one physical
  action before writing a model prompt.
- Make the short Chinese headline a structural object. It may be stamped,
  bent, weighed down, cut open, peeled back, or exposed by the evidence.
- Use one specific evidence object such as a bill, receipt, command slip,
  session record, plugin surface, or handoff note. Generic dashboards and
  abstract tech symbols fail the method.
- Keep the public-cover frame rough, warm, and argued. Detail is subordinate to
  the first read; the result should still work at `1500x600` feed size.

- 先用最小且真正负责封面任务的主来源，记录读者痛点、错误信念、修正、利害关系、具体证据和一个物理动作，再写 model prompt。
- 让短中文标题成为结构物件，可以被盖章、压弯、压住、切开、揭开或被证据暴露。
- 使用账单、收据、命令纸条、会话记录、插件表面或交接便签等具体证据物件。泛化仪表盘和抽象科技符号不符合本方法。
- 公共封面保持粗粝、温暖、有立场。细节退后，画面在 `1500x600` 信息流尺寸仍能工作。

## Transfer Set / 迁移主题组

The method remains coherent for runtime cost, context-token economics, session
recovery, plugin-state confusion, and one unseen tutorial topic. The argument
changes by topic; the title-as-force, evidence object, physical action, and
rough editorial temperature remain invariant.

## Failure Recovery / 失败恢复

- If the title becomes a caption, rebuild the composition around its shape and
  relationship to the evidence.
- If the image is attractive but reusable for ten unrelated posts, replace the
  generic metaphor with the article's actual record or object.
- If the scene over-explains, keep one public correction and remove secondary
  lessons, UI panels, and decorative crisis cues.
- If the method repeatedly needs a different art direction, delete this Pattern
  instead of retaining an intermediate state.
