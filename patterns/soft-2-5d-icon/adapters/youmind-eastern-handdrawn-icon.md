# YouMind Eastern Handdrawn Icon Calibration / YouMind 国风手绘图标校准

This optional branch adapts the public YouMind [国风手绘APP图标设计](https://youmind.com/~skills/01a04e58-ff5d-76d1-a259-5c95a3a8587b)
description for app, Skill, mini-program, and desktop icons. It keeps the
`soft-2-5d-icon` identity contract while changing the material treatment to
eastern freehand watercolor, xuan-paper grain, and restrained halftone. It does
not add souvenir symbols or turn the icon into an illustration page.

这份可选分支将公开 YouMind [国风手绘APP图标设计](https://youmind.com/~skills/01a04e58-ff5d-76d1-a259-5c95a3a8587b)
的描述编译为 App、Skill、小程序和桌面端图标方法。它保留 `soft-2-5d-icon` 的身份契约，只把材质改为
东方写意水彩、宣纸肌理和克制半色调，不添加旅游纪念符号，也不把图标扩展成插画页面。

## Style Signature / 风格签名

- Keep a stable square boundary, safe inset, one dominant silhouette, and one functional cue from the base Pattern.
- Use eastern freehand watercolor with visible brush pauses, softened edges, and xuan-paper fiber as the material field; depth comes from restrained wash overlap, not glossy extrusion.
- Use a small, coherent color family derived from the supplied function or subject. Keep the paper field dominant and avoid random complementary accents.
- Add retro halftone dots only as a subordinate print layer that supports the silhouette or one cue; never cover the entire mark with noise.
- Keep the icon clean and culturally quiet. Do not add seals, characters, roofs, clouds, cranes, or other stock symbols unless the product brief supplies them as evidence.
- Render a large master (default `2048 x 2048`) and inspect the same mark at `64 x 64` and `32 x 32`; the silhouette and cue must survive downsampling.

- 保持稳定方形边界、安全内缩、一个主剪影和一个功能线索，遵守基础 Pattern 契约；
- 用带有停顿、柔化边缘和宣纸纤维的东方写意水彩建立材质，深度来自克制的水彩叠染，不来自光亮挤出；
- 从功能或主体提炼小而连贯的色系，纸面占主导，不添加随机互补色；
- 复古半色调网点只能作为服从剪影或功能线索的次级印刷层，不能让噪点覆盖整个标记；
- 图标保持干净、安静，不凭空添加印章、人物、屋顶、云、鹤等套路符号，除非产品 brief 明确提供；
- 默认生成 `2048 x 2048` 大图，并在 `64 x 64` 与 `32 x 32` 检查同一标记，剪影与线索必须经得起缩小。

## Composition Families / 构图家族

Use the base Pattern's `Primary Emblem`, `Nested Function Relation`, or
`Character Mark` routes. This adapter changes brush, paper, halftone, and color
behavior only; it does not create a fourth composition route.

沿用基础 Pattern 的“主徽记”“嵌套功能关系”或“角色徽记”路由。本 adapter 只改变笔触、纸张、半色调和配色行为，
不新增第四种构图路由。

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at 2048 x 2048 master resolution.

The upstream icon score is authoritative:
- Platform: {{PLATFORM}}
- Icon function: {{ICON_FUNCTION}}
- First read: {{FIRST_READ}}
- Silhouette: {{SILHOUETTE}}
- Key feature: {{KEY_FEATURE}}
- Depth relation: {{DEPTH_RELATION}}
- Color identity: {{COLOR_IDENTITY}}
- Text handling: {{TEXT_HANDLING}}

Use the Soft 2.5D Icon Pattern with the YouMind Eastern Handdrawn Icon
calibration. Keep a stable square safe inset, one dominant silhouette, and one
functional cue. Choose only Primary Emblem, Nested Function Relation, or
Character Mark according to the score.

Render an eastern freehand watercolor mark on a dominant xuan-paper field. Keep
brush pauses, softened edges, and a restrained wash overlap visible; use shallow
physical depth only when it improves recognition. Derive a coherent color family
from {{COLOR_IDENTITY}} and add a subordinate retro halftone layer to one plane
or cue. Prepare a clean 2048 x 2048 master and verify the same silhouette and cue
at 64 x 64 and 32 x 32. Keep the platform frame from changing the mark's identity.

Do not add stock cultural symbols, random seals, glossy 3D, chrome, toy plastic,
full-frame halftone noise, miniature UI, text, logos, signatures, or watermarks.
{{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `COLOR_IDENTITY`: use supplied function or subject colors, usually one quiet paper family plus one or two meaningful accents.
- `DEPTH_RELATION`: name one shallow relation such as nested, opening, resting, or wrapping; avoid cinematic lighting language.
- `TEXT_HANDLING`: normally `no text`; icons should not depend on generated Chinese lettering.
- `FORBIDDEN`: add only brief-specific cultural inaccuracies or platform constraints; keep the base Pattern boundaries.

## Fidelity Gate / 保真门

- The icon is identifiable from silhouette and one cue before paper or halftone is inspected.
- Xuan-paper, watercolor, and halftone work as a bounded material system rather than a decorative filter.
- The same mark survives 64 x 64 and 32 x 32 inspection and keeps its platform identity.
- Cultural symbols are supplied evidence, not generic decoration.
- Removing material words still leaves the base soft-icon grammar: square boundary, one silhouette, one cue, shallow depth.
