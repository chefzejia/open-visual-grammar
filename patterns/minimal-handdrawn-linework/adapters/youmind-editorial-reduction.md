# YouMind Editorial Reduction Calibration / YouMind 编辑减法校准

This optional adapter captures repeated structural behavior from public YouMind
skills such as `P084`, [`P075`](https://youmind.com/~skills/01a05790-139a-7c6e-9c6b-ded7d3eedfaf),
[`拓印粗粝`](https://youmind.com/~skills/01a0230e-a91c-75f4-8539-7aee0c6afe03), `P068`,
and the restrained linework variants of `P070`. It keeps the method-level
rule—selective memory plus geometric clarity—without importing any creator's
composition or copy.

这份可选 adapter 提炼公开 YouMind 技能中反复出现的结构行为，例如 `P084`、
`P075`、`P068` 和 `P070` 的克制线稿变体。它只保留“选择性记忆 + 几何清晰”的
方法规则，不带入任何创作者的版式或文案。

## Style Signature / 风格签名

- Preserve the subject's key proportion, direction, structure, and relation.
- Build a black or dark geometric skeleton from contours and perspective guides.
- Use stippling, dotted texture, or restrained risograph grain for atmosphere.
- Let woodcut, broken-ink, or dry-brush marks add human pressure variation only
  after the silhouette, negative space, and cut-plane relation are clear.
- Keep one or two source-derived spot colors and a quiet focal point.
- Use small editorial labels only when they clarify the supplied relation.
- Delete background complexity before adding texture.

- 保留主体的关键比例、方向、结构和关系；
- 用深色几何线、轮廓和透视引导线搭建骨架；
- 用点描、网点或克制的孔版颗粒处理空气感；
- 只保留一到两种源自主体的强调色和一个安静焦点；
- 只有在能说明关系时才加入小型编辑标注；
- 先删除背景复杂度，再添加材质。

## Composition Families / 构图家族

1. **Linework plate:** one clear subject, a few structural guides, and a small
   spot-color anchor.
2. **Memory crop:** a controlled crop or offset that keeps a key relation while
   allowing the rest of the source to fall away.
3. **Quiet editorial label:** a restrained caption or type block integrated with
   the line skeleton, never a decorative title beside it.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the YouMind editorial-reduction
calibration. First decide what proportion, direction, structure, and relation
must survive; remove background complexity before adding texture. Route the
argument through a linework plate, memory crop, or quiet editorial label.

Construct a dark geometric contour skeleton with a few perspective or directional
guides. Use stippling, dotted texture, or restrained risograph grain only where it
describes air, depth, or emphasis. Keep one or two source-derived spot colors and
large controlled whitespace. Let {{MAIN_SUBJECT}} perform or receive
{{VISUAL_ACTION}}; labels may clarify that action but may not introduce another
claim. Keep the tone quiet, precise, and editorial.

Avoid exact diagrams, decorative line-art objects, dense dashboards, full-color
competition, glossy plastic, cinematic realism, random text, copied slogans,
logos, signatures, and watermarks.
```

## Fidelity Gate / 保真门

- The relation remains readable from the contour and placement alone.
- The line density is selective; detail does not become an even wallpaper.
- Spot color is semantic and limited, not a palette showcase.
- The crop or offset preserves the source identity instead of turning it into a
  generic object.
- Removing stippling and color still leaves a coherent structural composition.
