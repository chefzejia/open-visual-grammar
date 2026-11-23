# Limited Color Print Editorial

```yaml
id: limited-color-print-editorial
artifact_kinds:
  - image-cover
  - deterministic-layout
surfaces:
  - image-generation
  - deterministic-layout
when_to_use: Editorial covers or slide-like pages that need one strong silhouette, a strict two-or-three-ink palette, modernist geometry, and visible print pressure.
avoid_when: Photographic proof, glossy depth, dense dashboards, unrestricted brand palettes, exact diagrams, or narratives that need several competing scenes.
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

This Pattern is calibrated from the public skills
`雕塑感蓝色炭笔插画`
and `Clay Minimal`.
Their public descriptions and previews are external evidence only. OVG keeps the
transferable color, geometry, hierarchy, and print-pressure contract.

本 Pattern 参考“雕塑感蓝色炭笔插画”和“Clay Minimal”描述。公开说明与预览图只作外部证据；
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

## Direct Compilation Route: Deterministic Layout / 直接生成路线：Deterministic Layout

# Deterministic Layout Compilation Route / 确定性版式 Compilation Route

Use this compilation route for slide-like pages and fixed editorial layouts. The public
`Clay Minimal` page provides calibration evidence for a cream-and-cool-
ink, geometric-sans, woodcut branch. OVG keeps the reusable page system and does
not copy its sample deck or wording.

这份 compilation route 用于幻灯片式页面和固定编辑版式。`Clay Minimal` 提供暖白纸面、冷色墨、
几何无衬线和木刻分支的校准证据。OVG 只保留可迁移的页面系统，不复制示例 deck 或文案。

## Layout Contract / 版式契约

- Define paper, dominant ink, structural dark, and rule colors as named tokens.
- Use one display role, one body role, one accent role, and a script fallback.
- Reuse only the `geometric print spread`, `type-led plate`, and a quiet evidence page derived from them.
- Keep one large plane or woodcut illustration per page.
- Give charts a semantic single-ink treatment; do not invent categorical color.
- Package fonts and verify every page at delivery size.

- 将纸色、主墨色、结构深色和分隔线颜色定义为命名 token；
- 使用展示、正文、强调和文字系统 fallback 四种字体角色；
- 只复用“几何印刷跨页”“字体主导图版”和由它们派生的安静证据页；
- 每页只保留一个大色面或木刻插图；
- 图表使用语义明确的单墨色，不凭空增加分类色；
- 打包字体，并按交付尺寸检查每页。

## Compile Slots / 编译槽位

```text
Output format:
Output dimensions:
Page count:
Content structure:
First read per page:
Dominant ink role:
Display type role:
Body type role:
Script fallback:
Illustration source:
Evidence modules:
Density:
QA checks:
Forbidden:
```

## Token Skeleton / Token 骨架

```text
color.paper
color.ink.primary
color.ink.structural
color.rule
space.page
space.module
type.display
type.body
type.accent
type.fallback
line.hairline
texture.print-pressure
```

## Fidelity Gate / 保真门

- Every page has one obvious first read and one shared alignment system.
- The palette stays within paper, one dominant ink, and one structural dark.
- Illustration texture is local and does not reduce text contrast.
- Page families feel related without repeating identical coordinates.
- CJK and Latin content preserve the same hierarchy after font fallback.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 图像生成 Compilation Route

Use this compilation route for the image-generation branch of
`limited-color-print-editorial`. It is calibrated by the documented `雕塑感蓝色炭笔插画` method, but it does not require a classical figure, cobalt
blue, or any source composition.

这份 compilation route 用于 `limited-color-print-editorial` 的图像生成分支。它参考“雕塑感蓝色炭笔插画”方法，但不要求古典人物、钴蓝或来源构图。

## Required Inputs / 必填输入

```text
Artifact kind:
Audience:
Aspect ratio:
First read:
Visual action:
Main subject:
Concrete evidence:
Dominant ink role:
Text handling:
Topic-specific forbidden:
```

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Limited Color Print Editorial grammar. Begin with a warm paper ground,
one dominant ink chosen for {{DOMINANT_INK_ROLE}}, and at most one charcoal or
near-black structural ink. Build a sculptural focal field or type-led plate from
one large geometric plane and one readable silhouette. Preserve the supplied
subject, evidence, and action; do not import classical figures, arches, pottery,
or any source slogan unless the brief requires them.

Apply charcoal grain, dry rubbing, woodcut pressure, or uneven print coverage
inside established shapes. Keep edges, hierarchy, and negative space readable
before texture. Align any short title to the same axes as the image. Reserve
exact copy for deterministic post-layout when spelling matters.

Avoid full-color illustration, decorative vintage distress, gradients, glossy
3D, cinematic lighting, floating caption boxes, random text, logos, signatures,
watermarks, and {{TOPIC_SPECIFIC_FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- One plane or silhouette owns the first read.
- Paper, dominant ink, and optional structural dark remain the whole palette.
- Manual pressure reads locally and never becomes full-frame noise.
- The subject and action remain recognizable without color or texture.
- Removing the source theme still leaves a transferable editorial structure.
