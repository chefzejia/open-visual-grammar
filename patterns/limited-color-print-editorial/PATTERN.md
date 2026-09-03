# Limited Color Print Editorial

```yaml
id: limited-color-print-editorial
artifact_kinds:
  - image-cover
  - deterministic-layout
runtimes:
  - image-generation
  - deterministic-layout
when_to_use: Editorial covers or slide-like pages that need one strong silhouette, a strict two-or-three-ink palette, modernist geometry, and visible print pressure.
avoid_when: Photographic proof, glossy depth, dense dashboards, unrestricted brand palettes, exact diagrams, or narratives that need several competing scenes.
load_next:
  image-generation: adapters/image-generation.md
  deterministic-layout: adapters/deterministic-layout.md
```

中文名：限色印刷编辑图版
English name: Limited Color Print Editorial


## Definition / 定义

EN: Limited Color Print Editorial reduces a subject or argument into one dominant
silhouette, one architectural color field, and a strict ink budget on warm paper.
Charcoal, woodcut, dry-brush, or uneven print pressure may reveal the hand of the
process, but geometry and hierarchy must remain readable before texture.

CN：限色印刷编辑图版把主体或论点压缩成一个主导剪影、一个建筑感色场，以及暖纸面上的严格墨色预算。
炭笔、木刻、干刷或不均匀印压可以留下手工过程，但几何结构和信息层级必须先于纹理被读懂。

This Pattern is calibrated from the public YouMind skills
[`雕塑感蓝色炭笔插画`](https://youmind.com/~skills/01a0192c-41fc-7dba-bc39-7e8730a40315)
and [`Clay Minimal`](https://youmind.com/~skills/019f23b5-358e-71b3-8e73-c2fc9cdf0a76).
Their public descriptions and previews are external evidence only. OVG keeps the
transferable color, geometry, hierarchy, and print-pressure contract.

本 Pattern 参考公开 YouMind 技能“雕塑感蓝色炭笔插画”和“Clay Minimal”。公开说明与预览图只作外部证据；
OVG 只保留可迁移的限色、几何、层级和印压关系。

## Invariants / 不变量

- A paper ground is an active color role, not an empty background.
- The palette uses one dominant ink, one optional dark structural ink, and the paper color. A second decorative accent is not added casually.
- One silhouette or large structural plane owns the first read.
- Geometry establishes the composition before charcoal, grain, rubbing, or woodcut texture is applied.
- Type and image share the same axes, margins, and pressure; type is not placed in a detached caption box.
- Texture varies pressure inside an established shape. It does not blur edges or simulate a global vintage filter.
- Negative space remains deliberate at both cover and slide scale.
- The emotional temperature is intellectual, tactile, and composed rather than nostalgic, luxurious, or playful.

- 纸张底色是主动的色彩角色，不是空背景；
- 配色由一种主墨色、一种可选深色结构墨和纸色组成，不随意增加第二装饰强调色；
- 一个剪影或大结构色面承担第一眼；
- 先用几何建立构图，再加入炭笔、颗粒、擦印或木刻材质；
- 文字与图像共享轴线、边距和视觉压力，不把文字塞进脱离画面的说明框；
- 纹理只在既定形状内部改变印压，不模糊轮廓，也不做全局复古滤镜；
- 封面和幻灯片尺度下都保留有意义的负空间；
- 情绪应理性、触感明确、沉着，不做怀旧、奢华或卖萌。

## Style Signature / 风格签名

High-fidelity output preserves four signatures:

1. warm paper plus one dominant cool or dark ink;
2. one large geometric field or silhouette that survives thumbnail viewing;
3. visible manual pressure contained by a clear structure;
4. editorial type aligned to the image rather than floating above it.

高保真结果必须同时保留四个签名：

1. 暖纸色加一种主导冷色或深色墨；
2. 缩略图下仍成立的大几何色场或剪影；
3. 被清晰结构约束住的手工印压；
4. 与图像共用轴线，而不是漂浮其上的编辑排版。

## Ownership Contract / 权责契约

The upstream brief owns the claim, subject, evidence, audience, and exact copy.
This Pattern owns the ink budget, structural planes, silhouette hierarchy,
negative-space rhythm, and print pressure. The runtime owns exact text,
dimensions, font packaging, and deterministic alignment.

上游简报负责论点、主体、证据、受众和准确文案。本 Pattern 负责墨色预算、结构色面、剪影层级、
留白节奏与印压。Runtime 负责准确文字、尺寸、字体打包和确定性对齐。

## Composition Families / 构图家族

### Sculptural Focal Field / 雕塑焦点色场

One person, object, or relation sits against or inside one large color field.
The field may be an arch, circle, slab, or cropped plane, but it must clarify
scale and hierarchy rather than decorate the subject.

一个人物、物件或关系落在一块大色场中或其前。色场可以是拱形、圆形、板块或裁切平面，
但必须说明尺度与层级，不能只是装饰。

### Geometric Print Spread / 几何印刷跨页

Type, one print illustration, and a small evidence module share a strict grid.
Use this for slide-like pages or landscape editorial plates with moderate content.

标题、一个印刷插图和一个小型证据模块共用严格网格。适用于中等信息量的幻灯片式页面或横向编辑图版。

### Type-Led Plate / 字体主导图版

A short title becomes the largest plane while one carved or charcoal subject
acts as evidence. The subject must not be reduced to a decorative corner icon.

短标题成为最大的结构面，一个木刻或炭笔主体承担证据。主体不能退化成角落里的装饰图标。

## Variables / 可变槽位

- subject and evidence relation;
- dominant ink hue, derived from the source or approved identity;
- charcoal, woodcut, dry-brush, or uneven-coverage pressure;
- one of the supported composition families;
- display type personality and script fallback;
- cover, page, or slide aspect ratio.

- 主体与证据关系；
- 源自主体或已批准识别系统的主墨色；
- 炭笔、木刻、干刷或不均匀覆盖的印压方式；
- 受支持的构图家族；
- 展示字体性格与文字系统 fallback；
- 封面、页面或幻灯片比例。

## Fit And Boundaries / 适用与边界

Good fit:

- reflective editorial covers with one strong subject;
- cultural, research, craft, and concept themes that benefit from print tactility;
- slide systems that can use a strict color budget and a small set of reusable page families.

Weak fit:

- full-color product photography or exact UI evidence;
- decks requiring many unrelated chart colors;
- detailed spatial explanations where every connection must be exact;
- playful children's illustration or luxury photographic campaigns.

适合：一个主体主导的编辑封面；适合印刷触感的文化、研究、手作和概念主题；
能够接受严格限色与少量页面家族的幻灯片系统。

不适合：全彩产品摄影、准确 UI 证据、多色数据图表、精确空间说明、儿童绘本或奢华摄影广告。

## Density And Temperature / 密度与温度

Density is low to medium. A page may contain several facts, but one item must own
the first read and the others must share a visible alignment system. Temperature
is quiet, modernist, tactile, and self-possessed.

密度为低到中。页面可以容纳多条事实，但必须有一个第一眼，其余内容共享可见的对齐系统。
情绪安静、现代主义、具有触感且克制自持。

## Fidelity Gate / 保真门

- The first read survives when texture is removed.
- The palette still reads as paper plus one dominant ink, with at most one structural dark.
- Grain and pressure remain inside intentional shapes.
- Type and image share axes and visual weight.
- The same grammar transfers to two unrelated subjects without importing a classical figure, pottery studio, or source slogan.

## Failure Modes / 失败模式

- **Vintage filter:** global yellowing or noise replaces material logic. Recover by restoring clean paper and local pressure variation.
- **Palette drift:** several attractive accents appear. Recover by assigning every color one role and removing extras.
- **Texture-first:** grain obscures the silhouette. Recover by rebuilding the large plane before reintroducing texture.
- **Template slide:** type and image occupy unrelated boxes. Recover by choosing one shared axis and one dominant plane.
- **Source imitation:** classical figures or pottery objects appear without semantic reason. Recover from the upstream subject and evidence.
