# YouMind Pastoral Pixel Character Calibration / YouMind 田园像素角色校准

This optional adapter distills the public YouMind `星露谷风格图像生成`
description into a source-safe pixel-character method. It keeps the transferable
workflow of a front-facing identity anchor, an optional action set, and a bounded
background choice without copying a game, character, location, or asset sheet.

这份可选 adapter 将公开 YouMind “星露谷风格图像生成”的描述提炼为不依赖具体游戏的像素角色方法。
它只保留正面身份锚点、可选动作组和受控背景选择，不复制任何游戏、角色、地点或素材表。

## Style Signature / 风格签名

- Start from one front-facing source view so identity is established before
  pixel reduction.
- Use a controlled low-resolution grid, hard pixel edges, and a small source-aware
  palette; do not add random dithering to hide weak structure.
- When an action set is requested, keep the same head, hair, clothing, body
  proportion, and palette across a small number of visibly distinct poses.
- Choose one background mode: a quiet solid field or a sparse pastoral scene that
  supports the character without becoming a second subject.
- Keep the character readable at the target tile size and leave enough breathing
  room for a clean panel or sprite-sheet presentation.

- 先用一个正面来源建立身份，再进行像素减法；
- 使用受控低分辨率网格、硬像素边缘和从来源提取的少量配色，不用随机抖动掩盖结构问题；
- 需要动作组时，保持头发、服装、身体比例和配色连续，只改变可读的动作姿态；
- 背景只选一种模式：安静纯色，或服务角色的稀疏田园场景，不能让背景变成第二主体；
- 在目标 tile 尺寸下仍然辨认角色，并为单张面板或精灵图保留干净呼吸空间。

## Composition Families / 构图家族

1. **Front character plate:** one centered or slightly offset character on a
   quiet solid field.
2. **Action strip:** two to six related poses share one grid, border, scale, and
   identity palette. Use this only when the source or brief names real actions.
3. **Pastoral scene panel:** one character action enters a sparse field with one
   or two environmental cues; the scene never becomes a detailed game map.

1. **正面角色面板：** 一个居中或轻微偏置的角色置于安静纯色背景；
2. **动作条带：** 两到六个相关姿态共享网格、边界、尺度和身份配色，只有来源或 brief 明确需要动作时使用；
3. **田园场景面板：** 一个角色动作进入稀疏环境，只保留一两个环境线索，不能扩展成细密游戏地图。

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Main subject: {{MAIN_SUBJECT}}
- Identity anchors: {{IDENTITY_ANCHORS}}
- Action or action set: {{ACTION_SET}}
- Background mode: {{BACKGROUND_MODE}}
- Text handling: {{TEXT_HANDLING}}

Use the Pixel Retro grammar with the YouMind Pastoral Pixel Character
calibration. Establish one front-facing identity anchor before reducing it to a
controlled pixel grid. Keep hard pixel edges, intentional tile scale, a small
source-aware palette, and stable head, hair, clothing, and body proportions.

Choose Front character plate, Action strip, or Pastoral scene panel only when the
visual argument supports it. For an action strip, keep two to six poses on the
same grid and make each pose materially distinct. For a scene panel, use only a
quiet solid field or a sparse pastoral field with one or two supporting cues.
Keep the character readable at {{TARGET_TILE_SIZE}} and reserve clean breathing
room around the mark.

Do not copy any game, creator, named character, location, sprite sheet, costume,
logo, or exact composition. Avoid random pixel noise, smooth gradients,
photorealism, glossy 3D, modern HUD widgets, dense maps, invented text, logos,
signatures, and watermarks.
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: name only visible, source-supported traits such as hair
  shape, glasses, coat patch, silhouette, or one clothing block.
- `ACTION_SET`: use `none` for a single plate; otherwise list two to six concrete
  actions that share one character identity.
- `BACKGROUND_MODE`: `solid` or `sparse pastoral`; never combine both as layers.
- `TARGET_TILE_SIZE`: choose the consuming runtime's actual preview or tile size,
  then inspect one step smaller for collapse.
- `TEXT_HANDLING`: normally `no text`; reserve captions for a deterministic panel
  layer instead of drawing pseudo-lettering into the sprite.

## Fidelity Gate / 保真门

- The character is identifiable from silhouette and identity anchors before the
  background or nostalgic color is inspected.
- Action-strip poses share the same identity, grid, scale, and palette while each
  action remains readable.
- The chosen background mode remains subordinate and does not introduce a second
  story or a detailed game map.
- Pixel scale is intentional, with hard edges and a bounded palette rather than
  full-frame noise or a generic 8-bit filter.
- Removing the pastoral or pixel-material words still leaves a coherent character
  plate, action strip, or scene-panel structure.

- 在检查背景和怀旧配色前，角色剪影与身份锚点已经可辨；
- 动作组共享同一身份、网格、尺度和配色，每个动作仍然清楚；
- 背景模式退后，不引入第二个故事或细密游戏地图；
- 像素尺度有意控制，使用硬边和受限配色，不用满屏噪点或泛化 8-bit 滤镜；
- 去掉田园或像素材质词后，角色面板、动作条带或场景面板的结构仍然成立。

## Failure Recovery / 失败恢复

- If the character becomes generic, reduce the action set and restore one
  source-supported identity anchor before changing the palette.
- If poses drift, return to one shared grid and a fixed head/body proportion.
- If the scene dominates, switch to a solid field or remove all but one cue.
- If the result reads as a game UI, remove HUD panels, score bars, buttons, and
  decorative map elements; keep only the character composition.
