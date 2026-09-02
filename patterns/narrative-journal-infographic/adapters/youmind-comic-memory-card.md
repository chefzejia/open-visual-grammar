# YouMind Comic Memory-Card Calibration / YouMind 连环记忆卡校准

This optional adapter distills the public YouMind `搞怪背单词` description into
a compact learning-card grammar. It keeps one continuous mini-story across
four to twelve readable beats, puts the supplied concept inside the action, and
leaves only a small header and recall cue outside the scene.

这份可选 adapter 将公开 YouMind“搞怪背单词”的描述提炼成紧凑学习卡语法。它让一个连续小戏贯穿四到十二个可读节拍，
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

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream learning argument is authoritative:
- Target concept: {{TARGET_CONCEPT}}
- Pronunciation or cue: {{PRONUNCIATION_OR_CUE}}
- Meaning: {{MEANING}}
- Example sentence: {{EXAMPLE_SENTENCE}}
- Recall prompt: {{RECALL_PROMPT}}
- Text handling: {{TEXT_HANDLING}}

Use the Narrative Journal Infographic grammar with the YouMind comic-memory-card
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
- The candidate remains child-safe and readable at mobile-card size.
- Removing the decorative material still leaves a continuous learning story.
