# YouMind Torn-Paper Thumbnail Calibration / YouMind 撕纸缩略图校准

This optional adapter captures the high-contrast editorial structure described
by the public YouMind
[`撕纸拼贴 YouTube 缩略图`](https://youmind.com/~skills/019e218a-ca50-7f86-a598-398a9674dbc2)
skill. It belongs under `big-character-poster` because the headline, evidence
portrait, and rough physical action already match that Pattern's argument-first
contract.

这份可选 adapter 提炼公开 YouMind“撕纸拼贴 YouTube 缩略图”的高反差编辑结构。它归入
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

## Runtime Meta-Prompt / 运行时元提示词

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
