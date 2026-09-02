# YouMind Handdrawn Memory Calibration / YouMind 手绘记忆校准

This optional adapter distills the repeated handdrawn-memory behavior visible in
public YouMind skills such as `P067`, `P066`, `P070`, `P071`,
[`P076`](https://youmind.com/~skills/01a05792-3817-7941-9f9b-fa07f9986c1e),
`P080`, and the oil-pastel collage study. The skill names and preview images are
evidence only; do not copy their words, subjects, or exact coordinates.

这份可选 adapter 提炼公开 YouMind 技能中反复出现的手绘记忆行为，例如 `P067`、
`P066`、`P070`、`P071`、`P076`、`P080` 和油画棒拼贴研究。技能名称和预览图只作证据，
不得复制其中的文字、主体或精确坐标。

## Style Signature / 风格签名

- One focal subject or relation, with the rest treated as selective memory.
- Roughly 40-45% or more breathable near-white paper field.
- Thin, hesitant, broken, or lightly corrected hand lines.
- Three to six low-saturation fills, with at most one small bright color jump.
- Short handwritten notes grow from the action or negative space.
- Watercolor, gouache, crayon, pencil, or marker texture stays matte and tactile.
- A pastel-memory branch may leave wipe, overlap, translucent paper, or pressure
  changes visible; a bold-painted branch may use brighter source-derived blocks,
  but grid, spray dots, glow, and geometric marks stay sparse editorial support.

- 一个视觉重心或关系，其余内容只保留成选择性记忆；
- 约 40%-45% 以上可呼吸的近白纸面；
- 纤细、犹豫、断裂或带轻微修正痕迹的手绘线；
- 三到六种低饱和平涂色，最多保留一个小面积亮色跳点；
- 短手写注记从动作或负空间中生长出来；
- 水彩、水粉、蜡笔、彩铅或马克笔保持哑光和触感。
- 粉彩记忆分支可以保留擦拭、透纸、叠色或笔压变化；厚涂分支可以使用更明亮的源图色块，但网格、喷点、
  光晕和几何标记只能作为稀疏的编辑性陪衬。

## Composition Families / 构图家族

1. **Offset single-focus page:** a small off-center subject, a wide paper field,
   and one caption or arrow that follows its gesture.
2. **Quiet journal spread:** two related plates share paper, color, and a short
   handwritten bridge; use only when the source contains a real contrast.
3. **Memory collage:** a few source-derived fragments float around one readable
   subject; fragments must support the same feeling or relation.
4. **Painted editorial plate:** a small or medium subject enters a warm-white
   field with one vivid painted block and sparse grid or direction marks; use a
   restrained label only when the source argument needs it.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Whimsical Journal Sketch grammar with the YouMind handdrawn-memory
calibration. Select one focal subject or relation and let the surrounding paper
field carry air and time. Preserve the supplied action and identity; forget
background detail instead of inventing new story objects.

Build an offset single-focus page, quiet journal spread, memory collage, or
painted editorial plate only when the visual argument supports that family. Keep roughly 40-45% or more
breathable near-white paper. Draw with thin hesitant or broken lines and matte
watercolor, gouache, crayon, pencil, marker, or pastel texture. Use three to six
low-saturation fills derived from the subject, plus no more than one small bright
accent. If the painted editorial plate is selected, allow one brighter
source-derived block and sparse grid, spray, glow, or geometric guide marks; do
not let them become a background pattern. Let a short handwritten note or arrow grow from {{VISUAL_ACTION}} or the
negative space; do not place a generic title in a box.

Keep the emotional temperature warm, lightly playful, and observant. Preserve
large-medium-small hierarchy even when the page feels casual. Avoid childish
clutter, yellowed grime, sticker packs, glossy 3D, generic watercolor wash,
photorealism, copied slogans, random text, logos, signatures, and watermarks.
```

## Fidelity Gate / 保真门

- At thumbnail size, the focal subject and action are still identifiable.
- The paper field is an active compositional region, not an empty export margin.
- The line and fill treatment feels hand-corrected but not dirty or accidental.
- The handwritten note supports the supplied action and contains no unverified
  long text.
- Removing color and texture still leaves the same offset or spread structure.
