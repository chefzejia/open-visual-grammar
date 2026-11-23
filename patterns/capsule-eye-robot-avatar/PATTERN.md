# Capsule-Eye Robot Avatar

```yaml
id: capsule-eye-robot-avatar
artifact_kinds:
  - app-icon
surfaces:
  - image-generation
when_to_use: Source-grounded square identity icons that reduce a person or character to a flat robot face with two vertical dark capsule eyes and a deliberate lower-left peek.
avoid_when: Expressions, realistic portraits, full-body mascots, text-bearing marks, 3D icons, or subjects whose identity depends on many small details.
```

中文名：胶囊眼极简机器人头像
English name: Capsule-Eye Robot Avatar

## Definition / 定义

Capsule-Eye Robot Avatar converts an authorized source person or character into
one cute, minimal 2D square identity mark. Recognition comes primarily from the
source's hair/head silhouette, representative hair color, and at most one or two
large identifying accents. The face is deliberately normalized into a large
warm-cream round chibi plane rather than a realistic portrait. The robot grammar
is fixed: no mouth or nose, two parallel near-black vertical capsule eyes,
visible pink cheek ovals, chunky flat hair, and a lower-left close-up that nearly
fills the canvas.

胶囊眼极简机器人头像把经过授权的原始人物或角色转换成一个可爱、极简的 2D 方形身份标记。识别度主要
来自原图的头发或头部轮廓、代表性发色，以及最多一两个大型识别点。脸部有意统一成大而暖白/奶油色的
圆润 Q 版色面，不做写实肖像。机器人语法是固定的：没有嘴和鼻子、两个平行的近黑色纵向胶囊眼睛、
清晰的粉色脸颊椭圆、块状平涂头发，以及几乎压满画布的左下近距离构图。

This Pattern stores the visual method, not a brand name, a public character,
or a single person's appearance. The source image supplies identity variables;
the Pattern supplies the reduction grammar.

本 Pattern 保存的是可迁移的视觉方法，不保存品牌名、公共角色或某一个人的具体外貌。原图提供身份变量，
Pattern 提供减法与构图语法。

## Style Signature / 风格签名

High-fidelity output has all of these signatures:

1. an oversized head and chunky hair contour entering from the lower-left,
   cropped by the left and bottom edges and filling roughly 80–95% of the width
   and 92–100% of the height; the charcoal background survives only as a compact
   upper-right wedge, normally no more than about one third of the canvas;
2. a clockwise head tilt of roughly 15–20 degrees, applied to the face, eyes,
   hair, and attached features as one rigid composition;
3. exactly two equal, solid near-black capsule eyes, vertical at neutral head
   orientation, with a length-to-width ratio of about 2.5–3:1;
4. a broad, smooth warm-cream face plane with two clearly visible low-saturation
   pink cheek ovals, but no mouth, nose, eye whites, pupils, highlights, lashes,
   lids, or eyebrows;
5. flat color blocks with almost no contour line, one weak tonal shadow layer,
   and a nearly black charcoal background with no pattern or objects.

高保真结果必须同时具备这些签名：

1. 放大的头部与块状头发轮廓从画面左下方进入，左侧和下侧自然裁切，主体通常覆盖画面宽度的 80–95%、
   高度的 92–100%；深炭灰背景只保留为右上方紧凑的楔形，通常不超过画面的三分之一；
2. 头部顺时针倾斜约 15–20 度，脸、双眼、头发和附着特征作为一个整体同步倾斜；
3. 恰好两个大小相同、实心近黑色的胶囊眼睛，头部正立时为纵向，长宽比约 2.5–3:1；
4. 宽大平滑的暖白/奶油色脸部色块与两个清晰可见、低饱和的粉色脸颊椭圆红晕，但没有嘴、鼻子、眼白、
   瞳孔、反光、睫毛、眼睑或眉毛；
5. 几乎没有轮廓线的平面色块、最多一层很弱的整体阴影，以及没有物体和图案的近黑深炭灰背景。

## Invariants / 不变量

- The output is one 1:1 square icon containing one enlarged head or face. Do not
  shrink the subject into a centered ID-photo or bust composition.
- The two capsule eyes are the highest-priority invariant. They are filled with
  one uninterrupted near-black color, parallel, fully visible, and free of all
  internal eye anatomy or decorative marks.
- The face is round and simplified. It has no mouth or nose, including smile
  marks, dots, cat mouths, realistic lips, nostrils, or copied source expression.
- Normalize a human face to a warm-cream/champagne face plane. Preserve source
  identity mainly through hair color, hair length, parting, curl, bangs, tied
  shape, and at most one or two large identifying accents. For a non-human
  source, preserve its essential face-surface color only when that color is the
  identity cue; do not let realistic skin tone dominate a human conversion.
- If the source has no visible hair or a feature is occluded, keep it absent.
  Do not invent bangs, glasses, facial hair, ornaments, or mechanical parts.
- Hair and accessories are broad smooth masses. Use adjacency and color blocks
  instead of thick black outlines, hair-by-hair rendering, wiring, screws, or
  dense panel detail.
- Keep enough empty face area around the eyes and blush for a friendly, readable
  icon. Glasses or facial hair may survive only when source-grounded and must
  not cover the eyes or recreate a realistic mouth structure.
- The background is a uniform near-black charcoal field. Exclude borders,
  badges, logos, text, numbers, watermarks, speech bubbles, particles, glow,
  lens flares, and extra scene objects.
- The conflict order is fixed: subject fills the canvas; capsule eyes; warm-cream
  mouthless and noseless round face with blush; fully visible tilted close-up;
  source hair palette and one or two core cues; remaining detail.

- 输出是一个 1:1 方形图标，只包含一个放大的头部或脸部，不把主体缩小成居中的证件照或半身像；
- 两个胶囊眼睛是最高优先级不变量：近黑单色实心、彼此平行、完整可见，内部不画任何眼睛结构或装饰；
- 脸部圆润且高度简化，不画嘴和鼻子，包括微笑线、小点、猫嘴、写实嘴唇、鼻孔或原图表情；
- 主要保留原图的发色、长度、分缝、卷曲度、刘海、扎发形态，以及最多一两个大型识别线索；只有非人类主体在表面色确实构成身份时才保留原表面色；
- 如果原图没有可见头发或某个特征被遮挡，就保持缺失，不凭空添加刘海、眼镜、胡须、装饰或机械部件；
- 头发与装饰使用平滑的大色块，通过相邻色块区分形态，不画粗黑轮廓、逐根发丝、线路、螺丝或密集面板细节；
- 眼睛与红晕周围保留足够但不松散的脸部面积，让大脸、双眼和腮红共同形成可爱图标；眼镜或胡须只有在原图中是核心识别线索时才可最低限度保留，且不能遮眼或重新画出写实嘴部结构；
- 背景为近黑深炭灰纯色，不加入边框、徽章、logo、文字、数字、水印、对话气泡、粒子、光晕、镜头光斑或额外场景物体；
- 冲突优先级固定为：主体压满画布；胶囊眼睛；暖白/奶油色、无嘴无鼻且带腮红的圆脸；双眼完全可见的倾斜近景；原图发色与一两个核心线索；其他细节。

## Composition Families / 构图家族

### Lower-Left Peek / 左下窥视

The canonical route. Enlarge the face until it fills roughly 80–95% of the
canvas width and 92–100% of its height; crop the left and lower head edges at the
canvas boundary. Tilt the complete head clockwise 15–20 degrees so the eye on
the image-left appears slightly higher. Keep both eyes unobstructed and reserve
only a compact upper-right wedge as charcoal negative space. Include no torso,
hands, clothing, or collar; a tiny source-grounded accessory is allowed only
when it is necessary for recognition.

默认路线。放大脸部，使主体覆盖画面宽度约 80–95%、高度约 92–100%，头部左侧和下侧在画布边界自然裁切。
整个头部顺时针倾斜 15–20 度，使画面左侧的眼睛略高。双眼必须无遮挡，右上方只保留一块紧凑的深炭灰楔形，
不能让留白成为画面的主角。不画躯干、手部、衣服或衣领；只有在识别确实需要时才保留一个极小的原图装饰。

### Feature-Preserving Crop / 特征保留裁切

Use only as a rescue adjustment when the canonical crop would erase a supplied
core feature or let the bangs cover an eye. Change scale, position, or hair
length minimally while preserving the same lower-left peek, tilt, charcoal
field, and full-eye visibility. This is not permission to center the head or
invent a new accessory.

只在默认裁切会抹掉原图核心特征或让刘海遮住眼睛时使用。仅小幅调整缩放、位置或刘海长度，同时保留左下
窥视、倾斜、深炭灰背景和双眼完整可见。它不是把头部居中，也不是发明新装饰的许可。

## Variables / 可变槽位

`SOURCE_SUBJECT`, `SURFACE_COLOR`, `HAIR_SILHOUETTE`, `HAIR_COLOR`,
`CORE_FEATURES`, `HEAD_TILT`, `CROP_ROUTE`, `BACKGROUND`, `ASPECT_RATIO`,
`TEXT_HANDLING`, `TOPIC_FORBIDDEN`

- `SOURCE_SUBJECT`: the authorized person or character in the supplied image;
  identity comes only from this input, never from a style reference.
- `SURFACE_COLOR`: default `warm cream/champagne` for a human face; preserve a
  non-human surface color only when it is a defining identity cue.
- `HAIR_SILHOUETTE` and `HAIR_COLOR`: source length, part, curl, bangs, tied
  shape, and representative color; omit the slot when absent or occluded.
- `CORE_FEATURES`: no more than one or two large source-grounded features such
  as a distinctive hair tuft, ear shape, single ornament, or mechanical part.
  Prefer outer contour to tiny detail and do not transfer features from another
  reference image.
- `HEAD_TILT`: default `clockwise 15–20 degrees`; only adjust enough to protect
  eye visibility or a source-grounded feature.
- `CROP_ROUTE`: default `lower-left-peek`; use `feature-preserving-crop` only for
  the rescue case above.
- `BACKGROUND`: default uniform near-black charcoal; it may not become a scene.
- `TEXT_HANDLING`: image content is `no text`; the runtime response is the image
  only when generation is requested, without explanatory copy.
- `TOPIC_FORBIDDEN`: add only source-specific exclusions; the Pattern bans
  generic decorative and anatomical drift already.

## Fit, Material, Density, And Temperature / 适用、材质、密度与温度

Use for square profile icons, compact bot or assistant identities, source-based
character marks, and deliberately strange but friendly product avatars. The
material is flat 2D color blocking with almost no linework, no 3D volume, and at
most one broad weak shadow. Density is low but not empty: the face, chunky hair,
two eyes, and two cheek ovals should visibly occupy the frame. The mood is cute,
soft, observant, and icon-like rather than expressive, theatrical, glossy, or
photoreal.

适合方形头像、紧凑的机器人或助手身份标记、基于原图的角色标记，以及有意保持陌生感但友好的产品头像。
材质是几乎没有线稿的平面 2D 色块，不制造 3D 体积，最多添加一层宽而弱的阴影。密度低但不能空：脸、块状
头发、双眼和两处腮红都应明确占据画面。情绪柔和、可爱、观察性强且像图标，不做夸张表情、戏剧化、光泽化或写实化。

## Transfer Boundaries / 迁移边界

- Unlike `graphic-fashion-avatar`, this Pattern does not preserve source
  expression and does not rely on mouth, nose, or expressive eyes. Its identity
  grammar is the warm-cream round face, blush, capsule eyes, and oversized crop.
- Unlike `soft-2-5d-icon`, it is strictly flat 2D. Do not import relief, shallow
  planes, soft studio light, plastic, or toy rendering.
- Unlike a generic mascot pattern, source identity is not replaced by a standard
  animal or bot design. Preserve the source hair/head silhouette, representative
  hair color, and up to one or two cues; the human face itself is intentionally
  normalized to the warm-cream icon plane.
- A style reference may teach this Pattern's geometry, but it may not donate
  skin tone, hair, expression, accessories, or mechanical parts to the subject.
- Text, labels, logos, and badges are outside the Pattern. If the product needs
  typography, route it to a separate deterministic layout or cover pattern.

- 与 `graphic-fashion-avatar` 不同，本 Pattern 不保留原图表情，也不依靠嘴、鼻子或富有表情的眼睛；暖白/奶油色圆脸、
  腮红、胶囊眼和压满画布的裁切才是身份语法；
- 与 `soft-2-5d-icon` 不同，本 Pattern 严格使用平面 2D，不引入浮雕、浅层平面、棚拍柔光、塑料或玩具渲染；
- 与通用吉祥物 Pattern 不同，本 Pattern 不把原图身份替换成标准动物或机器人设计，只保留原图头发/头部轮廓、代表性发色和最多一两个线索；人类脸部本身有意统一为暖白/奶油色图标色面；
- 风格参考只能提供本 Pattern 的几何语法，不能把肤色、发色、表情、装饰或机械部件迁移到主体上；
- 文字、标签、logo 和徽章不属于本 Pattern。如产品确实需要文字，应改走独立的确定性排版或封面路线。

## Runtime Compilation Route Slots / 直接输入槽位

```text
SOURCE_SUBJECT
SURFACE_COLOR
HAIR_SILHOUETTE
HAIR_COLOR
CORE_FEATURES
HEAD_TILT
CROP_ROUTE
BACKGROUND
ASPECT_RATIO
TEXT_HANDLING
TOPIC_FORBIDDEN
```

## Failure Modes / 失败方式

- Eyes become horizontal bars, unequal in size, tilted independently, covered by
  bangs, or decorated with pupils, whites, highlights, lashes, lids, or brows.
- A mouth, nose, smile, cat mouth, nostril, or copied source expression appears.
- The model invents hair, glasses, facial hair, ornaments, mechanical parts, or
  a fixed hair/non-human surface color that is absent from the source; for a
  human source it may also drift away from the required warm-cream face plane.
- The head is centered, too small, frontal like an ID photo, or cropped without
  the lower-left peek, near-full-frame scale, and compact upper-right wedge.
- Hair becomes thin strands; accessories become dense hardware or costume;
  heavy outlines replace flat adjacent color blocks.
- The output drifts into 3D, realistic portraiture, oil paint, glossy plastic,
  neon glow, cinematic background, badge, logo, watermark, or text.
- A single rescue adjustment changes the whole art direction instead of only
  protecting a source-grounded feature or eye visibility.

- 眼睛变成横条、大小不等、分别倾斜、被刘海遮挡，或出现瞳孔、眼白、反光、睫毛、眼睑、眉毛等装饰；
- 出现嘴、鼻子、微笑、猫嘴、鼻孔或原图表情；
- 模型凭空添加原图没有的头发、眼镜、胡须、装饰、机械部件，或把发色/非人类表面色改成错误的统一颜色；
- 头部居中、过小、像证件照，或让右上留白变成大块空白，失去左下压满画布的近景；
- 头发变成碎发，装饰变成密集硬件或服装，粗黑轮廓取代相邻平面色块；
- 输出漂移到 3D、写实肖像、油画、亮塑料、霓虹光晕、电影背景、徽章、logo、水印或文字；
- 一次所谓的“补救”改写了整套艺术方向，而不是只保护原图线索或双眼可见性。

## Fidelity Gate / 保真门

1. Are there exactly two equal, solid, vertical capsule eyes with no internal
   anatomy or decoration?
2. Is the face round, mouthless, noseless, and free of the source expression?
3. Does the lower-left peek, clockwise tilt, edge crop, and compact upper-right
   charcoal wedge survive at thumbnail size without a dominant empty field?
4. Can the source hair/head silhouette, representative hair color, and no more
   than one or two cues still identify the subject without imported features?
5. If all color and material language is removed, do the eye geometry, face
   grammar, and crop still prove this Pattern?

1. 是否恰好有两个大小相同、实心纵向胶囊眼睛，且没有内部结构或装饰？
2. 脸是否圆润、无嘴、无鼻，并且没有复制原图表情？
3. 缩略图下是否仍保留左下窥视、顺时针倾斜、边缘裁切和紧凑的右上深炭灰楔形，同时没有大块空白？
4. 不引入外部特征的前提下，原图头发/头部轮廓、代表性发色和不超过一两个线索是否仍能识别主体？
5. 去掉所有颜色和材质词后，眼睛几何、圆脸语法和裁切是否仍足以证明这是本 Pattern？

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Image Generation Compilation Route / 生图 Compilation Route

This compilation route compiles the `capsule-eye-robot-avatar` Pattern. It turns an
authorized supplied image into one finished icon; it is not a transcript of a
brand prompt and does not import identity from a style reference.

这份 compilation route 编译 `capsule-eye-robot-avatar` Pattern。它把一张经过授权的输入图像转换成一个完整图标，
不是某个品牌提示词的逐字转录，也不会从风格参考图中借用主体身份。

```text
Create exactly one finished 1:1 square app-icon identity mark from the supplied
source image. The source image is authoritative for the person or character's
identity. If there is no source image, ask for the attachment; if there are
multiple people and no target is named, ask which person to convert.

Source-grounded slots:
- Face tone: {{SURFACE_COLOR}} (default: warm cream/champagne for a human face)
- Hair or head silhouette: {{HAIR_SILHOUETTE}}
- Hair color: {{HAIR_COLOR}}
- Core features, no more than one or two: {{CORE_FEATURES}}

Use the Capsule-Eye Robot Avatar Pattern. Reduce the subject to a huge, cute,
rounded, minimal 2D icon face made from broad smooth color blocks. For a human
subject, use a warm-cream/champagne face plane instead of realistic skin tone.
Preserve the source hair/head contour, representative hair color, and only the
supplied core features. Do not transfer skin tone, hair, accessories,
expression, or mechanical parts from any style reference. If a source feature
is absent or occluded, keep it absent; do not invent it.

Use the Lower-Left Peek composition by default. Make the head fill roughly
80–95% of the canvas width and 92–100% of its height; crop the left and lower
edges at the canvas boundary. Tilt the entire head, hair, attached features, and
eyes clockwise by about {{HEAD_TILT}}; the image-left eye should sit slightly
higher. Keep both eyes fully visible and leave only a compact uniform near-black
charcoal wedge in the upper-right, never a large empty field. Use the
Feature-Preserving Crop only when the default crop would erase a supplied core
feature or cover an eye; adjust scale, position, or fringe minimally.

The face is round, soft, cute, and chibi-like. Draw no mouth and no nose. Add
exactly two clearly visible low-saturation pink flat cheek ovals on the warm-
cream face plane. Draw exactly two equal solid near-black vertical capsule eyes,
parallel to each other, with rounded ends and a length-to-width ratio of about
2.5–3:1. At neutral head orientation their long axes are perpendicular to the
line between
the eye centers; rotate them only with the head. The eyes contain no whites,
irises, pupils, highlights, reflections, lashes, eyelids, eyebrows, hooks, or
base strokes.

Simplify hair and attached features into a few chunky, tapered smooth planes
with almost no outline. Use the source's representative colors, flat fill, one
or two simple darker shape accents, and at most one broad weak shadow layer.
Do not render individual strands, realistic anatomy, dense ornaments, screws,
wiring, circuit panels, clothing, or costume detail. Do not draw a torso, hands,
neck, or collar; keep at most one tiny source-grounded accent when it is needed
for recognition.

Fill the whole background with a uniform near-black charcoal color. Exclude
objects, patterns, borders, badges, logos, words, numbers, watermarks, speech
bubbles, exclamation marks, particles, glow, lens flare, 3D rendering,
photorealism, oil paint, sketch lines, heavy contrast, glossy plastic, and
cinematic lighting.

Conflict priority, highest first:
1. head fills the canvas; no dominant empty field;
2. exactly two undecorated near-black capsule eyes;
3. a warm-cream round face with no mouth or nose and two pink cheek ovals;
4. a tilted close-up with both eyes fully visible;
5. the source's hair palette, silhouette, and one or two core cues;
6. all remaining detail.

Output only the generated image when generation is requested. Do not add a
caption, explanation, title, logo, or other text inside or outside the image.
For later revisions, change only the requested part and keep the Pattern,
source identity, eye geometry, crop, and background unchanged unless explicitly
asked otherwise.

Topic-specific exclusions: {{TOPIC_FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `SURFACE_COLOR`: write `warm cream/champagne` for a human source. Preserve a
  non-human face-surface color only when it is a defining identity cue; never
  let realistic skin tone dominate the icon.
- `HAIR_SILHOUETTE` and `HAIR_COLOR`: describe only what is visible in the
  supplied source. If absent or covered, write `absent` rather than inventing a
  default.
- `CORE_FEATURES`: list at most one or two large, source-grounded cues. Prefer a
  distinctive hair tuft, ear shape, single ornament, or mechanical silhouette
  over small texture.
- `HEAD_TILT`: normally `clockwise 15–20 degrees`; it is a whole-composition
  rotation, not independent eye rotation.
- `TOPIC_FORBIDDEN`: add only source-specific mistakes. The Pattern already
  excludes generic text, anatomy, decoration, and material drift.

## Runtime Notes / 运行时说明

This is an image-only conversion route. Do not append a prose answer to a
successful generation request. If the source image or target person is
ambiguous, ask for the missing input before compiling the prompt. A later edit
must be local: preserve all unchanged Pattern constraints rather than silently
re-solving the whole icon.

这是一个只输出图像的转换路线。成功生图后不要附加解释性文字。如果没有输入图像，或多人目标不明确，
先请求缺失信息再编译 prompt。后续修改必须是局部修改：除非用户明确要求，不要默默重解整张图标。
