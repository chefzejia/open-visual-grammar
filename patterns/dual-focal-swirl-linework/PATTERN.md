# Dual-Focal Swirl Linework

```yaml
id: dual-focal-swirl-linework
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Covers where two supplied anchors must remain distinct while a circular line path makes their relationship the first read.
avoid_when: Single-subject covers, dense factual diagrams, or topics that need a literal scene or exact UI proof.
```

中文名：双焦点漩涡线描
English name: Dual-Focal Swirl Linework

## Definition / 定义

Two supplied anchors share one breathable gouache field. Circular or arcing line
rhythm guides the eye between them, while a small set of flat complementary
blocks clarifies the relation. The line path is structural, not background noise.

两个上游锚点共处一个有呼吸感的水粉场域。圆形或弧形线条把视线从一个锚点引向另一个，少量平面互补色块负责说清关系。线条路径承担结构，不是背景噪声。

## Invariants / 不变量

- Two supplied anchors remain distinct and jointly carry the first read.
- One circular line rhythm creates an intentional eye path between them.
- Dense marks gather around meaningful structure; open field protects breathing space.
- Flat complementary color blocks stay limited and never become gradients or 3D shading.
- The source story, buildings, lone witness, and exact color coordinates do not carry recognition.

## Composition Families / 构图家族

- **Anchor orbit:** circular line rhythm visibly connects both anchors.
- **Flat relation:** two flat blocks carry the relation with reduced line density.
- **Breath field:** fewer marks and more open gouache test whether the relation survives.

## Variables / 可变槽位

`ANCHOR_A`, `ANCHOR_B`, `SHARED_RELATION`, `ASPECT_RATIO`, `LINE_DENSITY`,
`COMPLEMENTARY_BLOCKS`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for conceptual covers with two real endpoints: a torn map and a returning
edge, or a dry bed and a distant rain barrel. Keep airy gouache, hand-drawn
line, and restrained blue/amber or source-aware blocks. The temperature is
curious, humane, and gently tense rather than urban, cinematic, or cute.

## Transfer Boundaries / 迁移边界

The relation must transfer from archive recovery to water sharing, or to another
pair of unrelated anchors, without adding a city, a third focal character, or a
new palette system. If one anchor becomes decoration, this Pattern is not a fit.

## Fidelity Gate / 保真门

- Both anchors and the line path are readable without the prompt.
- Dense/open contrast and limited blocks survive at thumbnail size.
- Removing color and texture leaves the same two-anchor spatial relation.
- Three outputs differ by structure, not hue, crop, or camera.

## Failure Modes / 失败方式

Random swirl wallpaper, one-anchor hierarchy, generic watercolor scenery,
uncontrolled complementary color, and decorative city storytelling are failures.
When the relation repeatedly cannot be recovered, delete this Pattern.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 生图 Compilation Route

Use this compilation route to compile the `dual-focal-swirl-linework` Pattern into a
one-off image-generation prompt. The prompt belongs in the consuming project.

这份 compilation route 把 `dual-focal-swirl-linework` 编译成一次性的生图 prompt；最终
prompt 只留在调用方项目，不写回 OVG。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Anchor A: {{ANCHOR_A}}
- Anchor B: {{ANCHOR_B}}
- Shared relation: {{SHARED_RELATION}}
- Text handling: {{TEXT_HANDLING}}

Use the Dual-Focal Swirl Linework Pattern. Keep both supplied anchors distinct
and equally meaningful. Build one breathable gouache field with a deliberate
circular or arcing line path that carries the eye from Anchor A to Anchor B.
Use only a few flat complementary blocks to clarify {{SHARED_RELATION}}. Dense
marks belong near meaningful structure; protect open field elsewhere.

Choose Anchor Orbit, Flat Relation, or Breath Field according to the supplied
argument. The line path must perform the relation, not become wallpaper. Keep
the source story, buildings, lone witness, exact source colors, and any copied
wording out of the style instruction. Reserve exact text for deterministic
post-layout or use only short checked text.

Avoid random swirl decoration, a single dominant anchor, generic watercolor
scenery, gradients, 3D shading, cinematic atmosphere, logos, signatures,
watermarks, and invented landmarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `ANCHOR_A` and `ANCHOR_B`: name supplied subjects or evidence, not abstract style words.
- `SHARED_RELATION`: one visible connection, contrast, return, or exchange.
- `TEXT_HANDLING`: short checked text or a deterministic text region.
- `FORBIDDEN`: add topic-specific exclusions without changing the two-anchor budget.

## Fidelity Gate / 保真门

- Both anchors remain readable with line density and color hidden.
- The circular path visibly connects the anchors and has no decorative branches.
- Complementary blocks stay flat and limited; open gouache field remains visible.
- Removing color and texture leaves the same two-anchor relation.
