# Pixel Retro

```yaml
id: pixel-retro
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Playful technical systems, tool paths, runtime cost, and choices that can become game-system logic.
avoid_when: Premium corporate documents, fine emotional essays, realistic product proof, or calm institutional docs.
```

中文名：像素复古风
English name: Pixel Retro


## Definition / 定义

EN: Pixel Retro is a playful technical-visual pattern that translates tools,
paths, costs, and system choices into visible 8-bit or 16-bit game logic.

CN: 像素复古风是一种偏好玩的技术视觉范式，把工具、路径、成本和系统选择翻译成可见的 8-bit / 16-bit 游戏逻辑。

## Invariants / 不变量

EN:

- visible pixel blocks;
- 8-bit or 16-bit structure;
- retro palette;
- clear silhouette;
- game-system logic;
- geek/tool atmosphere.

CN:

- 可见像素块；
- 8-bit 或 16-bit 结构；
- 复古配色；
- 清晰轮廓；
- 游戏系统逻辑；
- 极客和工具气质。

## Recommended Cases / 推荐场景

EN:

- developer tools;
- CLI or session workflows;
- tool history;
- game-adjacent explanations;
- playful technical maps.

CN:

- 开发者工具；
- CLI 或 session 流程；
- 工具历史；
- 接近游戏语境的解释；
- 轻松、有路径感的技术地图。

## Weak Fit / 不适合

EN:

- premium corporate documents;
- fine emotional essays;
- realistic product proof;
- calm institutional docs.

CN:

- 高级企业文档；
- 细腻情绪文章；
- 写实产品证明；
- 安静机构型文档。

## Avoid / 避免

EN:

- smooth gradients;
- photorealism;
- soft anti-aliased painting;
- oil, watercolor, or ink wash;
- glossy high-resolution surfaces;
- random text, logos, signatures, or watermarks.

CN:

- 平滑渐变；
- 写实摄影；
- 柔和抗锯齿绘画；
- 油画、水彩或水墨；
- 光滑高分辨率表面；
- 随机文字、logo、签名或水印。

## Direct Compilation Route: Pastoral Pixel Character / 直接生成路线：Pastoral Pixel Character

# Pastoral Pixel Character Calibration / 田园像素角色校准

This optional compilation route encodes the documented `星露谷风格图像生成`
description into a source-safe pixel-character method. It keeps the transferable
workflow of a front-facing identity anchor, an optional action set, and a bounded
background choice without copying a game, character, location, or asset sheet.

这份可选 compilation route 将“星露谷风格图像生成”的描述提炼为不依赖具体游戏的像素角色方法。
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

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Main subject: {{MAIN_SUBJECT}}
- Identity anchors: {{IDENTITY_ANCHORS}}
- Action or action set: {{ACTION_SET}}
- Background mode: {{BACKGROUND_MODE}}
- Text handling: {{TEXT_HANDLING}}

Use the Pixel Retro grammar with the Pastoral Pixel Character
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

## Direct Compilation Route: Pixel Mask / 直接生成路线：Pixel Mask

# Pixel Silhouette Mask Calibration / 像素轮廓蒙版校准

This optional compilation route distills the source-derived pixel-mask method described by
the documented `P063` method and the pixel branch of `照片转手帐贴纸`.
The sticker skill also exposes coarse-halftone and matte cut-paper branches;
those belong to their respective editorial or paper-collage routes. The pixel
treatment here is a compositional container, not a request for a game screen.

这份可选 compilation route 提炼`P063` 及“照片转手帐贴纸”像素变体中描述的
源图像素蒙版方法。像素处理是构图容器，不等于要求生成游戏界面。

## Style Signature / 风格签名

- A source-derived silhouette becomes the main visual container.
- Staircase blocks and stepped planes nest inside the semantic contour.
- The palette is limited and source-aware; pixel scale is intentional.
- One clear subject or action survives the reduction.
- Editorial whitespace or a sticker-like border keeps the result legible.

- 源主体提炼出的轮廓成为主要视觉容器；
- 阶梯状像素块和色面只嵌入语义轮廓内部；
- 配色受限且尊重原图身份，像素尺度有意控制；
- 一个清晰主体或动作在减法后仍然存在；
- 编辑留白或贴纸式边界保证缩小后的可读性。

## Composition Families / 构图家族

1. **Silhouette mask:** one large source silhouette holds nested blocks and a
   small evidence detail.
2. **Modular crop:** two or three related crops share one border and palette when
   the source contains a real comparison.
3. **Editorial sticker panel:** a single reconstructed subject sits in a clean
   panel with a restrained label or border.

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Pixel Retro grammar with the pixel-silhouette-mask calibration.
First extract the recognizable silhouette or relation from {{MAIN_SUBJECT}};
use it as a visual container. Place intentional staircase blocks, stepped planes,
and limited color fields inside that contour so the pixel language explains the
subject or {{VISUAL_ACTION}}.

Choose a silhouette mask, modular crop, or editorial sticker panel only when the
argument supports it. Keep the result modern and editorial: clear contour,
controlled pixel scale, source-aware palette, and enough whitespace for a fast
first read. Do not copy any reference composition or text.

Avoid random pixel noise, full-frame mosaic, 8-bit game HUD, Minecraft-like
worlds, neon cyberpunk, glossy 3D, photorealism, long generated text, logos,
signatures, and watermarks.
```

## Fidelity Gate / 保真门

- The silhouette or relation is recognizable before pixel texture is inspected.
- Pixel blocks stay inside or directly explain the semantic contour.
- The palette and block scale are constrained rather than nostalgic decoration.
- No game UI or unrelated world-building appears.
- Removing pixel texture still leaves a clear subject, crop, or panel structure.

## Durable Iteration Notes / 已沉淀的迭代规则

# Direct Iteration Notes / 直接迭代笔记

This record absorbs the former pastoral pixel-character transfer check.

这份记录吸收已删除的田园像素角色迁移检查。

## Stable Checks / 稳定检查

- Establish identity from a front-facing source, fixed grid, target tile size,
  bounded palette, and text-free policy before adding a background.
- A front character plate, action strip, and scene panel are structural routes;
  they share identity anchors, scale, and palette.
- Action remains readable on the grid. Solid or sparse pastoral background is
  subordinate and never becomes a dense map, HUD, or second narrative.
- No game-specific character, map, costume, named world, logo, or pseudo-text
  carries recognition.

- 在加入背景前，先用正面来源、固定网格、目标 tile 尺寸、受控配色和无文字策略建立身份。
- 正面角色图、动作条和场景面板是结构路由，三者共享身份锚点、尺度和配色。
- 动作必须在网格上可读。纯色或稀疏田园背景退后，不能变成密集地图、HUD 或第二个故事。
- 不允许游戏角色、地图、服装、命名世界、logo 或伪文字承担识别。

## Transfer Set / 迁移主题组

Use the same method for a night-shift baker loading a first tray and a garden
volunteer recovering a plant after a storm. The second topic tests whether the
field stays subordinate to the character action.

## Failure Recovery / 失败恢复

If the result becomes a generic 8-bit avatar, sprite sheet, or game interface,
remove decorative environment and restore the identity anchor and one action.
Repeated dependence on game-specific material is grounds to delete the Pattern.
