# YouMind Spatial-Word Poster Calibration / YouMind 空间大字海报校准

This optional adapter distills the public YouMind `高级大字海报` method into a
source-safe extension of the Semantic Concept Poster. One short checked word or
phrase becomes a physical spatial skeleton, and a necessary actor or object
interacts with that structure to make the meaning visible. The source skill's
sample words, scenes, and visual presets remain external evidence.

这份可选 adapter 将公开 YouMind“高级大字海报”的方法提炼为语义概念海报的来源安全扩展。
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

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream semantic argument is authoritative:
- Core text: {{CORE_TEXT}}
- Literal meaning: {{LITERAL_MEANING}}
- Hidden tension: {{HIDDEN_TENSION}}
- Visual relation: {{VISUAL_RELATION}}
- Main actor or evidence: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Semantic Concept Poster Pattern with the YouMind spatial-word
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
