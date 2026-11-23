# Narrative Journal Infographic

```yaml
id: narrative-journal-infographic
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Handdrawn timelines, workflows, comparisons, system maps, and explainers that need readable structure.
avoid_when: Pure mood images, hard proof screenshots, strong debate posters, or exact charts.
```

中文名：叙事手账·信息可视化
English name: Narrative Journal Infographic


## Definition / 定义

EN: Narrative Journal Infographic is a handdrawn information-visualization
pattern for explaining timelines, comparisons, workflows, and system maps with
a human, manually reasoned texture.

CN: 叙事手账·信息可视化是一种手绘信息可视化范式，用手账式结构解释时间线、对比、流程和系统关系，让复杂内容显得像被人认真推演过。

The child-safe picture-book sequence route is a separate formal Pattern. Use
[`picture-book-sequence`](../picture-book-sequence/PATTERN.md) when page turns,
recurring anchors, and story beats are the primary contract; this Pattern stays
focused on explanation and comparison rather than narrative illustration.

儿童安全的绘本跨页路线已经独立成为正式 Pattern。当翻页、重复锚点和故事节拍是主要契约时，使用
[`picture-book-sequence`](../picture-book-sequence/PATTERN.md)；本 Pattern 继续负责解释和对比，不把叙事插画混在一起。

## Invariants / 不变量

EN:

- handdrawn information structure;
- timeline, comparison, workflow, or system map;
- short notes and labels;
- clean linework;
- soft color;
- clear layout that feels manually reasoned through.

CN:

- 手绘信息结构；
- 时间线、对比、流程或系统图；
- 短注释和短标签；
- 干净线条；
- 柔和配色；
- 清楚、有人工推演感的布局。

## Recommended Cases / 推荐场景

EN:

- long-form explainers;
- knowledge tutorials;
- process breakdowns;
- comparison pieces;
- concept maps.

CN:

- 长文解释；
- 知识教程；
- 流程拆解；
- 对比分析；
- 概念地图。

## Weak Fit / 不适合

EN:

- pure mood images;
- hard proof screenshots;
- strong debate posters;
- precise charts that require exact data rendering.

CN:

- 纯情绪图；
- 强证明截图；
- 强争论海报；
- 需要精确数据渲染的图表。

## Avoid / 避免

EN:

- fake dashboard panels;
- illegible dense labels;
- decorative scrapbooking;
- random text, logos, signatures, or watermarks.

CN:

- 虚假 dashboard 面板；
- 不可读的密集标签；
- 只有装饰感的拼贴手账；
- 随机文字、logo、签名或水印。

## Direct Compilation Route: Cognitive Contrast Card / 直接生成路线：Cognitive Contrast Card

# Cognitive Contrast Card Calibration / 认知反差卡校准

This optional compilation route encodes the documented `小红书爆款人生认知反差卡生成器`
method into a brand-neutral comparison sequence. One life topic becomes a small
set of cards with a stable anchor and layout; each card pairs an early intuitive
judgment with a fuller later judgment in two concrete scenes. The upstream method's
character, copy, and platform treatment remain external.

这份可选 compilation route 将“小红书爆款人生认知反差卡生成器”的方法抽象成品牌中立的对比序列。
一个人生主题被拆成少量卡片，跨卡保持同一锚点与版式；每张卡用两个具体场景对照早期直觉和之后更完整的判断。来源技能的角色、文案与平台样式仍属于外部证据。

## Style Signature / 风格签名

- Default to five cards, but choose four to six from the actual argument rather
  than padding a fixed template.
- Keep one recurring anchor stable in silhouette, role, direction, and palette.
- Give each card one paired contrast: early intuitive state above or beside a
  later, fuller state. The contrast must change the judgment, not just the color.
- Use a consistent card frame and a clear reading order. Keep the scene concrete
  and the text short; reserve exact copy for deterministic text zones.
- Let the visual metaphor live in the two scenes. Do not add platform badges,
  reaction counts, or decorative stickers to simulate social proof.

- 默认五张卡，但页数应由实际论证在四到六张之间决定，不为套模板而填充。
- 跨卡保持一个重复锚点的剪影、角色、方向和少量配色稳定。
- 每张卡只做一组对照：上方或一侧是早期直觉状态，另一侧或下方是更完整的后来判断。对照必须改变判断，而不只是换颜色。
- 保持统一卡框和清楚阅读顺序。场景要具体，文字要短；准确文案交给确定性文字区。
- 让视觉隐喻存在于两组场景之间，不添加平台徽章、互动数量或装饰贴纸来伪造社交证明。

## Sequence Families / 序列家族

1. **Intuition to judgment:** each card moves from a quick assumption to the
   missing context that changes it.
2. **Expectation to consequence:** the first scene shows the hoped-for outcome;
   the second shows the overlooked cost or constraint.
3. **Label to lived case:** a compact claim is paired with two ordinary moments,
   keeping the recurring anchor in the same role.

## Model Prompt / 模型生成提示词

```text
Create a sequence of {{CARD_COUNT}} {{ARTIFACT_KIND}} cards for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream comparison argument is authoritative:
- Core topic: {{CORE_TOPIC}}
- Recurring anchor: {{RECURRING_ANCHOR}}
- Card beats: {{CARD_BEATS}}
- Contrast rule: {{CONTRAST_RULE}}
- Text handling: {{TEXT_HANDLING}}

Use the Narrative Journal Infographic grammar with the cognitive-contrast
card calibration. Keep {{RECURRING_ANCHOR}} identical in silhouette, role,
direction, and restrained palette across cards. Give every card one concrete
paired contrast: an early intuitive judgment and a fuller later judgment. Make
the missing context visible through the scene relation, not through a long
explanation or a second metaphor.

Use one consistent card frame, warm paper or a quiet neutral field, clean
handdrawn lines, and low-saturation fills. Keep headings and recall cues short
and reserve exact copy for {{TEXT_HANDLING}}. Preserve mobile legibility and a
clear reading order from card one to the last card.

Avoid changing character identity, unrelated props, social-platform badges,
reaction counts, dashboard panels, dense scrapbook decoration, long generated
paragraphs, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `CARD_COUNT`: normally five; use four to six only when the source argument
  justifies the change.
- `RECURRING_ANCHOR`: one supplied actor, object, or witness; do not import a
  source character.
- `CARD_BEATS`: one short sentence per card, with both states named.
- `CONTRAST_RULE`: state what changes the judgment on every card.
- `TEXT_HANDLING`: use short checked labels plus deterministic body copy when
  exact wording matters.

## Fidelity Gate / 保真门

- The sequence has one topic, one stable anchor, and a consistent card frame.
- Every card contains a readable two-state contrast that changes the judgment.
- The later context is visible in the scene, not only in text.
- Removing platform branding, source copy, and decorative stickers leaves the
  same comparison method.
- The cards remain legible on a phone and do not become a dashboard or sticker
  sheet.

## Direct Compilation Route: Comic Memory Card / 直接生成路线：Comic Memory Card

# Comic Memory-Card Calibration / 连环记忆卡校准

This optional compilation route encodes the documented `搞怪背单词` description into
a compact learning-card grammar. It keeps one continuous mini-story across
four to twelve readable beats, puts the supplied concept inside the action, and
leaves only a small header and recall cue outside the scene.

这份可选 compilation route 将“搞怪背单词”的描述提炼成紧凑学习卡语法。它让一个连续小戏贯穿四到十二个可读节拍，
把上游概念嵌入动作，只在画面外保留小型头部信息和召回提示。

## Style Signature / 风格签名

- One continuous, child-safe mini-story carries the learning relation from first beat to last.
- Use four, six, eight, or ten-to-twelve beats according to the material; every beat must advance the same action.
- The target concept, meaning, and example are expressed inside the scene through dialogue, a sign, or a sound cue rather than a detached list.
- Keep one compact header and one recall prompt outside the comic; do not wrap the page in a dashboard.
- Favor impact and recall over polished rendering, while keeping characters, direction, and text roles stable across beats.
- Humor comes from the supplied word or concept and stays child-safe; do not invent unsafe or unrelated jokes.

- 由一个连续、适合儿童的微型故事从第一格推进到最后一格；
- 根据材料选择四格、六格、八格或十到十二格，每格都推进同一个动作；
- 目标概念、词义和例句通过对白、招牌或拟声提示进入场景，不做脱离画面的列表；
- 画面外只保留紧凑头部信息和一行召回提示，不把页面套成仪表盘；
- 记忆冲击优先于精致渲染，同时保持各格人物、方向和文字角色稳定；
- 幽默来自上游词语或概念且适合儿童，不编造危险或无关笑话。

## Composition Families / 构图家族

1. **Four-beat punchline:** setup, misunderstanding, correction, recall; use for one simple word or concept.
2. **Six-to-eight beat escalation:** repeat one visual action with increasing consequence, then land the supplied meaning.
3. **Ten-to-twelve beat chain:** use only when an example sentence or relation genuinely needs more steps; keep the reading path obvious.

## Model Prompt / 模型生成提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream learning argument is authoritative:
- Target concept: {{TARGET_CONCEPT}}
- Pronunciation or cue: {{PRONUNCIATION_OR_CUE}}
- Meaning: {{MEANING}}
- Example sentence: {{EXAMPLE_SENTENCE}}
- Recall prompt: {{RECALL_PROMPT}}
- Text handling: {{TEXT_HANDLING}}

Use the Narrative Journal Infographic grammar with the comic-memory-card
calibration. Turn the supplied concept, meaning, and example into one continuous,
child-safe mini-story. Choose four, six, eight, or ten-to-twelve beats according
to the material, and make every beat advance the same action toward a clear
recall. Put the concept inside the scene through a short dialogue, sign, or sound
cue; do not place the lesson beside an unrelated illustration.

Keep a clear reading path and stable character direction across beats. Outside the
comic, include only one compact header and one short recall prompt. Favor impact
and recall over polished rendering, but keep text short and follow
{{TEXT_HANDLING}}. Humor must come from {{TARGET_CONCEPT}} and remain child-safe.

Avoid dashboard panels, disconnected flashcards, long paragraphs, unsafe jokes,
random text, pseudo-Chinese, copied source characters, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The same visual action links every beat and the reading path is obvious.
- Concept, meaning, and example are recoverable from the scene before reading the recall line.
- Header and recall prompt stay subordinate to the comic.
- The generated image remains child-safe and readable at mobile-card size.
- Removing the decorative material still leaves a continuous learning story.

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

These notes merge the source picture-book sequence, cognitive-contrast card,
and multi-page handdrawn transfer checks.

这份笔记合并来源绘本跨页序列、认知反差卡和多页手绘解释器的迁移检查。

## Stable Checks / 稳定检查

- Choose one sequence family from the named compilation routes: progression,
  quiet-to-busy reveal, anchor comparison, steps, or timeline. The family must
  follow the supplied argument, not fill a page count.
- Every page or card advances exactly one claim, action, or transition. A stable
  anchor keeps its role, silhouette, direction, and small color cue across the
  sequence.
- Cognitive contrast uses four to six cards, normally five. Each card must show
  an early intuitive state and a fuller later state in concrete paired scenes;
  the later context changes the judgment.
- Mobile-first `9:16` pages remain readable with warm paper, low-saturation
  handdrawn marks, and sparse collage cues. Exact long copy belongs in
  deterministic text zones.

- 从命名 compilation route 中选择一个序列家族：递进、安静到繁忙揭示、锚点对照、步骤或时间线。家族必须服从论证，不能为了凑页数。
- 每页或每张卡只推进一个论点、动作或转折。重复锚点跨页保持角色、剪影、方向和一小组配色线索稳定。
- 认知反差使用四到六张卡，通常为五张。每张卡必须用具体场景展示早期直觉和更完整的后来判断，后来情境要真正改变判断。
- 移动端 `9:16` 页面保持可读，使用暖纸、低饱和手绘线和稀疏拼贴。准确长文案交给确定性文字区。

## Transfer Set / 迁移主题组

The method is retained for an emergency-kit inventory sequence, a decision
handoff, two unrelated life-topic comparisons, and other four-to-eight-page
explainers. Source characters, costumes, publisher marks, platform badges, and
copied lettering never carry recognition.

## Failure Recovery / 失败恢复

- Decorative spreads, equal-weight panels, or unrelated pages must be rewritten
  as verb-led page beats.
- If the anchor changes identity or the text explains the whole relation,
  simplify the scene and move exact copy to deterministic layout.
- If the route needs a new composition family or source-specific IP, stop and
  keep the evidence outside OVG; do not add a hidden Pattern state.
