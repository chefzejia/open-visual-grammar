# YouMind Crayon Portrait Transfer / YouMind 蜡笔肖像迁移

This promotion-candidate eval tests whether the public YouMind `蜡笔肖像`
method transfers across unrelated portrait briefs. It must keep identity
anchors, open drawing paper, dry crayon pressure, and a restrained structural
palette without copying a source face, outfit, or fixed pose.

本用例用于晋级前测试，判断公开 YouMind `蜡笔肖像` 方法能否迁移到不同肖像简报。必须保留身份锚点、开放素描纸、干擦蜡笔笔压和克制结构色，不复制来源脸部、服装或固定姿势。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Adapter: `patterns/whimsical-journal-sketch/adapters/youmind-crayon-portrait.md`
- Status: promotion candidate; optional adapter available, no canonical Pattern change
- Source study: `docs/youmind-style-atlas.md`
- Public source: [蜡笔肖像](https://youmind.com/~skills/01a01967-50b6-7847-adec-28dcbb19dd20)

## Fixed Input Contract / 固定输入契约

Keep the same `3:4` ratio, audience, identity policy, and material budget across
all candidates. The brief supplies face, hair, expression, pose, and at most two
details. Do not add a scene, costume, or extra prop to make a portrait more
interesting.

| Topic | Identity anchors | Expression or action | One optional cue |
| --- | --- | --- | --- |
| Museum guide | long oval face, cropped curls, narrow glasses, small mole | attentive half-smile while turning toward a visitor | one enamel pin at the shoulder |
| Night-shift baker | round cheeks, short undercut, broad nose, one ear hoop | tired but amused half-smile after a long shift | one flour-marked cap edge |

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Identity anchors:
Expression or action:
Optional cue:
First read:
Paper and edge treatment:
Color budget:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

The score must explain how a viewer recognizes the person before noticing the
crayon surface. “Hand-drawn portrait” is not a sufficient visual argument.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score fixed:

1. `Open-Paper Bust`: chest-up portrait, broad paper field, and one supplied
   feature carry recognition.
2. `Live-Study Crop`: tighter head-and-shoulders crop, unfinished lower edge,
   and one-color side wash test the material without a full background.
3. `Quiet Diptych`: the same subject in two supplied expressions shares the paper
   and color budget; each face remains independently identifiable.

If a candidate needs a detailed scene, extra prop, or text label to read, record
a transfer failure instead of changing the route.

## Pass Signals / 通过信号

- Face shape, hair pattern, expression, and supplied details remain identifiable before texture.
- White paper, fiber, dry rubbing, broken strokes, and open edges are visible without becoming noise.
- Most skin, clothing, and lower page remain paper-white; only a small structural accent palette is used.
- The side wash supports the shoulders and does not compete with the face.
- The same method works for both topics and all three candidate families.
- No source-specific face, outfit, creator label, or copied caption appears.

## Fail Signals / 失败信号

- The output becomes a generic cartoon, polished digital painting, or photoreal retouch.
- A full-bleed scene, costume, accessory set, or caption carries recognition instead of the supplied face and hair.
- Color fills the page, drifts into a yellow cast, or loses structural purpose.
- Roughness reads as blur or random damage rather than controlled dry pressure.
- The two topics require different art directions, or candidates are only crop and hue swaps.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
