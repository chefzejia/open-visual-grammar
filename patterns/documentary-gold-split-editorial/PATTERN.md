# Documentary Gold Split Editorial

```yaml
id: documentary-gold-split-editorial
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Portrait `3:4` covers where one documentary record transforms into a flat gold-foil identity plane through a strict split.
avoid_when: Glossy gold objects, luxury decoration, unrelated upper and lower scenes, or long text.
```

中文名：纪实金箔分屏编辑封面
English name: Documentary Gold Split Editorial

## Definition / 定义

The upper plate is a lightly adjusted documentary record. The lower plate
reduces the same identity or action to a front-facing matte gold graphic on one
deep derived base hue. The transformation is the visual argument.

上半是轻度处理的纪实记录，下半把同一身份或动作压缩成平视的哑光金色图形，放在一个从来源派生的深色底上。转化关系本身就是视觉论点。

## Invariants / 不变量

- Strict upper/lower split remains obvious and both plates share one subject or action.
- Lower gold plane is flat, front-facing, matte-to-soft, and source-recognizable without a title.
- Base hue is one clean darkened hue derived from the source; gold is the only high-value material signal.
- Hammer marks, embossing, edge lift, and foil breaks stay sparse.
- Exact copy is short and deterministic; no luxury motifs or copied source coordinates.

## Composition Families / 构图家族

- **Strict split:** equal-function documentary and gold plates.
- **Gold identity plate:** lower plate owns symbolic first read; upper plate anchors identity.
- **Embossed edge note:** short checked label near lower edge, never a second story.

## Variables / 可变槽位

`FIRST_READ`, `VISUAL_ACTION`, `MAIN_SUBJECT`, `CONCRETE_EVIDENCE`, `ASPECT_RATIO`,
`DERIVED_BASE_HUE`, `GOLD_PRESSURE`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for archival, cultural, or object-led topics with a real transformation. The
temperature is tactile and quietly luxurious, not flashy, metallic, or ornamental.

## Transfer Boundaries / 迁移边界

The same split must transfer across two unrelated subjects. If upper and lower
halves tell separate stories, the route is invalid.

## Fidelity Gate / 保真门

- Split and shared action are readable immediately.
- Lower plate remains flat and square to the viewer.
- Gold texture is restrained and the base hue is traceable.
- Removing foil leaves the same documentary-to-symbolic relation.

## Failure Modes / 失败方式

3D gold sculpture, mirror metal, generic luxury, equal-detail halves, invented
props, and title-led recognition fail. Delete the Pattern if the transformation
cannot carry the subject.

## Direct Compilation Route: Gold Foil Split / 直接生成路线：Gold Foil Split

# Gold-Foil Documentary Split Calibration / 纯金压印纪实分屏校准

This Pattern compilation route encodes the documented `GPT2 x 金箔 x 转绘 x 美学提示词 x VOL.044`
description into a source-safe editorial split. It keeps the documentary-to-flat-gold
transformation, front-facing plane, deep derived base, and restrained foil texture
without copying a source subject, slogan, or exact coordinates.

这份 Pattern compilation route 将`GPT2 x 金箔 x 转绘 x 美学提示词 x VOL.044` 的描述提炼为不依赖来源的编辑分屏方法。
它只保留纪实到平面纯金的转化、平视承载面、深色提取底和克制金属肌理，不复制来源主体、口号或精确坐标。

## Style Signature / 风格签名

- A portrait `3:4` page uses a strict documentary-to-gold split; the upper and lower plates share one source identity or action.
- The upper plate remains a lightly adjusted, magazine-like record. The lower plate reduces the same subject to a flat gold-foil or hammered-gold graphic on a deep, clean base.
- Gold is a planar pressed or thinly laid material with matte-to-soft luster, small hammer marks, edge lift, and occasional foil breaks. It is never a glossy 3D object.
- The camera faces the lower plane squarely. Horizontal and vertical relations stay stable, with quiet negative space around the gold mark.
- The lower base derives one core hue from the source, then deepens and cleans it so the gold remains the only high-value material signal.
- A very short title or status note may enter as low-contrast embossing; exact copy belongs to deterministic post-layout.
- The temperature is archival, tactile, and quietly luxurious rather than flashy, metallic, or ornamental.

- 竖版 `3:4` 页面采用严格的纪实到纯金分屏，上下两块共享同一来源身份或动作；
- 上半保留轻度处理后的杂志式纪实记录，下半把同一主体减成深色洁净底上的平面金箔或锻金图形；
- 金色是平面压印或薄层铺展的材质，只保留哑光到柔光、轻微锤纹、边缘起伏和局部断裂，绝不做高光 3D 物件；
- 下半镜头正对承载平面，水平垂直关系稳定，金色图形周围保留安静留白；
- 下半底色从来源提取一个核心色相后加深、提纯，让金色成为唯一高价值材质信号；
- 只有极短标题或状态词才可作为低对比压印进入画面，精确文案交给确定性排版；
- 情绪应像档案、触感和安静的奢雅，不做炫耀式金属或装饰堆叠。

## Composition Families / 构图家族

1. **Strict documentary-to-gold split:** equal functional upper and lower plates share one subject and one action.
2. **Gold identity plate:** the lower plate carries the first symbolic read while the upper record anchors recognition; the split remains explicit.
3. **Quiet embossed edge note:** a short checked label sits near the lower plate edge without becoming a headline or a second story.

1. **严格纪实到纯金分屏：** 上下两块具有相等功能，共享同一主体和动作；
2. **纯金身份图版：** 下半承担符号化第一眼，上半纪实记录负责身份锚定，分屏关系仍须清楚；
3. **安静压印边注：** 一条已核验的短注记靠近下半边缘，不升级为标题或第二个故事。

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Documentary Gold Split Editorial Pattern with the gold-foil
documentary-split calibration. Build a portrait 3:4 page with a strict
documentary-to-gold transformation. Keep the upper plate as a lightly adjusted,
magazine-like source record or concrete evidence. In the lower plate, reduce the
same subject, relation, and {{VISUAL_ACTION}} to a flat gold-foil, hammered-gold,
or thinly pressed graphic on a deep, clean base.

Face the lower plane squarely. Preserve stable horizontal and vertical relations,
large active whitespace, and the source identity before adding material. Derive
one core hue from {{MAIN_SUBJECT}} or {{CONCRETE_EVIDENCE}} for the lower base,
then deepen and clean it. Keep gold matte to softly luminous with restrained
hammer marks, embossing, edge lift, and occasional foil breaks. It must read as
pressed or laid flat, never as a glossy 3D sculpture, plastic coating, or gold
object floating in space.

Use Strict Documentary-to-Gold Split, Gold Identity Plate, or Quiet Embossed Edge
Note only when the visual argument supports that family. Add a very short checked
label only when {{TEXT_HANDLING}} permits it; reserve exact copy for deterministic
post-layout. Avoid equal-detail halves, perspective distortion, mirror gold,
generic luxury motifs, decorative frames, random text, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The upper/lower transformation is immediately visible and the same subject or action links both plates.
- The lower graphic is flat, front-facing, and recognizable without relying on a title.
- Gold texture is matte-to-soft and restrained; no glossy 3D gold, plastic, or jewelry decoration appears.
- The lower base is a clean darkened hue traceable to the source, with meaningful whitespace around the mark.
- Any label is short, checked, and subordinate; exact copy remains deterministic.
- Removing color and foil texture still leaves the documentary-to-gold split and the same identity relation.

## Failure Recovery / 失败恢复

- If the lower half becomes a 3D object, flatten the plane, restore the square camera, and remove specular highlights before changing the subject.
- If the upper and lower halves tell different stories, keep the same source identity and action, then delete invented props from the lower plate.
- If gold becomes flashy or muddy, reduce it to matte foil with sparse hammer marks and return the base to one clean derived hue.
- If the title carries recognition, strengthen the lower contour and upper evidence first; move exact wording to deterministic post-layout.
