# YouMind Style Fidelity / YouMind 风格保真度

Use this rubric with `cases/youmind-style-transfer.md`. It judges method
transfer, not attractiveness or image-model capability.

本 rubric 与 `cases/youmind-style-transfer.md` 配套使用，判断的是方法迁移，
不是“好不好看”或模型能力。

## Strong Signals / 强信号

### 1. Structure

- **Handdrawn memory:** one focal memory, breathable paper, and an offset or
  spread relation remain visible without color.
- **Structural line reduction:** contour skeleton, selective deletion, and a
  clear relation remain visible without stippling.
- **Pixel silhouette mask:** the source-derived contour contains the stepped
  blocks; it does not become a game screen.
- **Constrained editorial print:** frame, integrated headline, one relation, and
  evidence scale changes read as a published plate.
- **Contemporary eastern restraint:** one quiet relation, pale paper, and
  suggestion through distance or omission remain legible without stock cultural
  symbols.
- **Swiss glass silhouette:** one recognizable contour remains stable while
  clear, softened, and translucent regions explain a real hierarchy or access
  relation; the result does not become uniform blur or glassmorphism UI.
- **Paper sculpture collage:** one recognizable contour remains stable across a
  small stack of cut planes; meaningful overlap explains support, obstruction, or
  access; the result stays matte and editorial rather than becoming a sticker
  sheet or plastic 3D render.

### 2. Subject And Action

- The subject's identity, proportion, direction, or action survives the style
  reduction.
- The evidence object supports the same correction rather than adding a second
  story.
- Three candidates vary placement or evidence emphasis while preserving the
  same visual argument.

### 3. Material Budget

- Paper, line, pixel, ink, halftone, or grain is limited to the selected cluster.
- Accent colors are source-aware and semantic, not a palette showcase.
- Texture supports the relation and never compensates for a weak first read.

### 4. Transfer And Safety

- A second unrelated topic can use the same composition family.
- No creator-specific slogan, name, subject, or exact coordinate is copied.
- Exact text is short and checked, or left for deterministic typesetting.

## Weak Signals / 弱信号

- The image looks handmade, retro, or premium but has no stable spatial rule.
- The subject is recognizable only because the prompt repeats the source skill's
  title or object list.
- Color and grain are convincing while the action or evidence is generic.
- Three candidates are minor palette changes rather than structural solutions.
- Whitespace is merely an empty margin, or density is evenly spread everywhere.

## Review Questions / 复盘问题

1. Before reading the prompt, can you identify the cluster and first read from
   the thumbnail?
2. If all material and color adjectives are removed, what structure remains?
3. Did the Pattern own every layout, density, typography, and temperature choice?
4. Does the subject perform the same action in all three candidates?
5. Which failure should become a boundary, anti-pattern, or adapter improvement?

## Decision Rule / 决策规则

- **Pass:** all strong signals in Structure, Subject And Action, and Transfer And
  Safety are present; no critical fail signal appears.
- **Revise:** the visual argument is sound but one Pattern invariant or runtime
  constraint is missing. Record one targeted adapter or anti-pattern change.
- **Reject:** the result depends on copied source details, loses the visual
  argument, or requires an unsupported composition. Keep the candidate out of OVG.
