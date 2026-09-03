# Interwoven Portrait Type Cover

```yaml
id: interwoven-portrait-type-cover
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Portrait-led social covers where a short title must share depth, perspective, and occlusion with a recognizable person while remaining legible on mobile.
avoid_when: Anonymous stock portraits, long copy, identity-unsafe edits, exact UI proof, group scenes, or covers where type can remain a detached overlay.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：人物文字景深交织封面
English name: Interwoven Portrait Type Cover


## Definition / 定义

EN: Interwoven Portrait Type Cover treats a recognizable portrait and a short
title as one depth composition. Selected letters pass behind the subject while
other strokes remain in front or beside the silhouette. Perspective, occlusion,
face safety, and mobile readability create the identity; a generic text overlay
does not.

CN：人物文字景深交织封面把可辨识人像与短标题当成同一个景深构图。部分字形进入人物之后，
其他笔画留在前景或贴着剪影。透视、遮挡、面部安全区和移动端可读性共同构成身份，普通叠字不算。

This Pattern is calibrated from the public YouMind skills
[`文字环绕人物海报`](https://youmind.com/~skills/019fd6c4-b85b-7a5d-8976-7195059c006e)
and [`3D标题人像封面设计师`](https://youmind.com/~skills/019fda36-331c-7f78-8f2f-d2352dd0237e).
Their portraits, wording, and preview compositions remain external evidence.

本 Pattern 参考公开 YouMind 技能“文字环绕人物海报”和“3D 标题人像封面设计师”。来源人物、文案和预览构图
只作外部证据，不进入 OVG 的可复用内容。

## Invariants / 不变量

- The person remains recognizable from supplied identity anchors before typography is inspected.
- The title is short enough to survive as shape and language at mobile feed size.
- A deliberate occlusion map defines which strokes sit behind the head, body, or one foreground object and which remain in front.
- The face, eyes, and essential identity details stay protected from letter collisions.
- Type follows one scene axis, silhouette contour, or perspective plane; it is not scattered around the subject arbitrarily.
- The portrait and title share one first read. Neither becomes a caption for the other.
- Exact copy is verified and, when necessary, rendered deterministically after image generation.
- Depth comes from overlap, scale, crop, and perspective, not glossy extrusion or generic drop shadows.

- 人物先通过上游身份锚点保持可辨，再让排版进入画面；
- 标题足够短，在手机信息流尺寸下既是形状也是语言；
- 明确制定遮挡图，规定哪些笔画进入头部、身体或一个前景物件之后，哪些留在前景；
- 面部、眼睛和关键身份细节不被字形撞击；
- 文字沿一条场景轴、剪影轮廓或透视平面组织，不围着人物随机散落；
- 人像与标题共同构成第一眼，二者都不是对方的说明文字；
- 文案必须核对，必要时由确定性后期排版完成；
- 景深来自遮挡、尺度、裁切和透视，不来自光亮挤出或通用投影。

## Style Signature / 风格签名

1. recognizable portrait first;
2. one short title with an explicit front/behind plan;
3. one scene or silhouette axis controlling the letter flow;
4. protected face plus readable mobile safe zones.

1. 可辨识人像先成立；
2. 一个拥有明确前后关系的短标题；
3. 一条控制字形流动的场景轴或剪影轴；
4. 被保护的面部与移动端安全区。

## Ownership Contract / 权责契约

The upstream brief owns portrait authorization, identity anchors, title copy,
platform, audience, and scene truth. This Pattern owns portrait scale, title
geometry, occlusion map, depth relation, safe zones, and density. The runtime
owns exact glyph rendering, masks, compositing, and final dimensions.

上游简报负责肖像授权、身份锚点、标题文案、平台、受众和场景事实。本 Pattern 负责人像尺度、字形几何、
遮挡图、景深关系、安全区和密度。Runtime 负责准确字形、蒙版、合成与最终尺寸。

## Composition Families / 构图家族

### Hand-Letter Orbit / 手写环绕

One hand-drawn or marker-like title follows the head-and-shoulder contour. A few
strokes pass behind the portrait and return to the foreground without crossing
the face.

一组手写或马克笔感标题沿头肩轮廓组织，少量笔画进入人像之后，再回到前景，但不穿过面部。

### Perspective Title Column / 透视标题栏

A condensed vertical or angled title follows a wall, table, doorway, or another
real scene plane. The portrait interrupts the column once or twice to establish
depth.

窄体竖排或倾斜标题沿墙、桌面、门框或其他真实场景平面组织。人物对标题形成一到两次遮挡以建立景深。

### Foreground Word Plane / 前景词面

One oversized word occupies foreground and middle ground while the portrait
remains readable through crop and selective occlusion. Use only when the word is
the true first-read hook.

一个超大词同时占据前景与中景，人像通过裁切和选择性遮挡保持可辨。只有该词确实是第一眼 hook 时使用。

## Variables / 可变槽位

- authorized portrait and identity anchors;
- title and language;
- one supported type personality: hand-lettered, condensed editorial, or restrained serif/sans;
- scene plane or silhouette axis;
- foreground/background stroke allocation;
- photography temperature and one approved accent color;
- vertical or landscape social ratio.

## Fit And Weak Fit / 适用与弱适用

Good fit:

- creator, interview, profile, and video covers;
- one-person or one-pet identity covers with a short hook;
- scenes containing a usable wall, doorway, table, or negative-space plane.

Weak fit:

- long titles or multi-person group portraits;
- private portraits without explicit authorization;
- thumbnails where the face is already too small;
- exact product proof, diagrams, or text-heavy explainers.

## Density And Temperature / 密度与温度

Density is low to medium. Use one portrait, one title, and at most one scene cue.
Temperature follows the approved portrait and topic, but the construction should
feel editorial, direct, and spatial rather than effects-heavy.

密度为低到中。只使用一个人像、一个标题和至多一个场景线索。情绪跟随人物与主题，构造应保持编辑感、
直接且具有空间关系，不堆特效。

## Fidelity Gate / 保真门

- The person remains recognizable when the title layer is hidden.
- The title remains readable when the portrait mask is simplified.
- The front/behind relation can be described as an explicit occlusion map.
- No critical glyph crosses the face or platform safety area.
- The same grammar works for two unrelated portrait subjects and titles.

## Failure Modes / 失败模式

- **Sticker text:** type floats over the image. Recover by choosing one real axis and adding one meaningful occlusion.
- **Face collision:** letters cross eyes or identity details. Recover by reopening the face-safe mask.
- **Fake depth:** bevels and shadows replace overlap. Recover with scale, crop, and mask relations.
- **Unreadable hook:** too many words or inconsistent lettering. Recover by shortening the title and preserving one type role.
- **Identity drift:** the scene restyles the person. Recover the supplied face, hair, expression, and pose before typography.
