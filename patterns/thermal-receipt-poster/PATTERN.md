# Thermal Receipt Poster

```yaml
id: thermal-receipt-poster
status: seed
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Vertical social posters that turn verified daily facts into a receipt-like record with thermal-paper material, fixed fields, and dry human humor.
avoid_when: Dense data, long copy, fake measurements, exact UI proof, multi-scene illustration, or topics that need decorative nostalgia rather than a record.
load_next:
  image-generation: adapters/image-generation.md
```

中文名：热敏小票记录海报
English name: Thermal Receipt Poster

Status: seed

## Definition / 定义

EN: Thermal Receipt Poster turns a small, verified life record into a narrow
receipt-like visual document. The method uses a fixed field order, thermal-paper
surface, monospaced information hierarchy, deliberate whitespace, and a dry
human voice. It makes a memory feel like a record or proof without pretending
that missing measurements are real.

CN：热敏小票记录海报把一段已核验的生活记录压缩成窄幅收据式视觉文档。它使用固定字段顺序、热敏纸表面、
等宽信息层级、克制留白和冷幽默的人味，让记忆像一张记录凭证，但不把缺失的测量数据伪装成事实。

This Pattern is calibrated from the public YouMind skill `热敏小票海报生成器`.
The source page and its copy are evidence only; this Pattern keeps the reusable
record contract and does not copy a slogan, private story, or preview image.

本 Pattern 参考 YouMind 公开技能“热敏小票海报生成器”。来源页面和文案只作证据；本 Pattern 只保留可迁移的
记录契约，不复制口号、私密故事或预览图。

## Invariants / 不变量

- The canvas reads as one continuous vertical receipt or ticket, not a dashboard or a collage of unrelated cards.
- A compact identity line establishes the record first: date, place, event, or another supplied anchor.
- Content follows a readable field order: identity, mood or state, factual detail lines, one short quote, and a footer or closing mark when supplied.
- Every date, number, named place, and proper noun comes from the upstream source. Never invent amounts, steps, temperatures, timestamps, or barcode data.
- Typography is monospaced or receipt-like, with clear line spacing, section separators, and a legible hierarchy at the target feed size.
- The surface is warm off-white thermal paper with dark charcoal or black print, uneven ink density, faint horizontal banding, and restrained edge or roll cues.
- Whitespace and short lines carry the emotional rhythm. A sparse record should stay sparse instead of being padded with decorative items.
- The voice is observational, lightly dry, and human. The visual method must not turn into advertising copy or generic nostalgia.

- 画布读起来是一张连续的竖向小票或票据，而不是仪表盘或互不相干的卡片拼贴；
- 先由紧凑的身份行建立记录，例如日期、地点、事件或其他上游提供的锚点；
- 内容按清晰字段顺序排列：身份、心情或状态、事实明细、一句短引语，以及上游提供时的页脚或收束标记；
- 日期、数字、地点和专有名词全部来自上游，不得编造金额、步数、温度、时间戳或条码数据；
- 使用等宽或小票感字体，行距、分隔线和层级在信息流尺寸下仍可读；
- 表面是暖白热敏纸，配深炭黑或黑色打印，保留轻微墨色不均、水平打印带和克制的纸边或卷纸暗示；
- 留白和短行承担情绪节奏，记录稀疏时不能用装饰性条目硬填；
- 语气观察性强、略带冷幽默且有人味，不能退化成广告文案或泛化怀旧。

## Style Signature / 风格签名

High-fidelity output preserves four signatures:

1. one narrow, continuous receipt silhouette;
2. a field order that makes the record scannable before the texture is noticed;
3. thermal paper and printer imperfections that stay subordinate to exact content;
4. a short, dry human line with enough blank space to let it land.

高保真结果必须同时保留四个签名：

1. 一条连续的窄幅小票轮廓；
2. 在注意材质之前就能扫读的字段顺序；
3. 服从准确内容的热敏纸与打印不均；
4. 一句简短、克制、有人味的冷幽默，并留出让它落地的空白。

## Ownership Contract / 权责契约

The upstream brief owns the verified facts, record subject, audience, language,
and the intended emotional observation. This Pattern owns the receipt silhouette,
field order, typography roles, paper material, line density, whitespace rhythm,
and dry temperature. The runtime owns aspect ratio, pixel dimensions, font
packaging, and deterministic text placement.

上游 brief 负责已核验事实、记录主体、受众、语言和要表达的情绪观察。本 Pattern 负责小票轮廓、字段顺序、
字体角色、纸张材质、线条密度、留白节奏和冷幽默温度。Runtime 负责画幅、像素尺寸、字体打包和确定性文字放置。

Do not let the Pattern invent a second event or a new measurement. If the source
does not provide a field, omit it or use a clearly marked neutral placeholder
approved by the upstream contract; do not fill the gap with plausible numbers.

Pattern 不得凭空发明第二个事件或新的测量值。来源没有提供的字段要省略，或使用上游契约明确允许的中性占位符，
不能用看似合理的数字补洞。

## Internal Layout Routes / 内部版式路由

### Record Strip / 记录条

Use a compact, single-column receipt for one event, feeling, or daily snapshot.
The identity line leads, factual details stay short, and one quote receives the
largest pause in the vertical rhythm.

适用于一个事件、一种心情或一段日常切片。身份行先出现，事实明细保持短小，一句引语在竖向节奏中获得最大的停顿。

### Long Receipt / 长小票

Use when the source contains several verified detail lines. Keep the same field
order, but give each line enough breathing room; never turn it into a dense data
table.

来源包含多条已核验明细时使用。保持同一字段顺序，为每行留出呼吸，不要退化成密集数据表。

### Quiet Stub / 安静票根

Use for a sparse record with one anchor and one closing sentence. The blank paper
field is part of the meaning; do not add fake totals, icons, or decorative stamps.

适用于只有一个锚点和一句收束话的稀疏记录。空白纸面本身就是意义的一部分，不添加虚假总计、图标或装饰印章。

## Fit / 适用范围

Recommended:

- daily observations, travel fragments, relationship milestones, mood records, and personal status notes;
- vertical social covers where exact short text matters;
- records that benefit from a documentary object rather than a scene illustration.

适合：

- 日常观察、旅行片段、关系节点、情绪记录和个人状态便签；
- 需要准确短文字的竖版社交封面；
- 适合用记录物件承载，而不是用场景插画解释的内容。

Weak fit:

- multi-step tutorials, exact charts, UI screenshots, long essays, or claims that need several competing visual arguments;
- stories whose humor depends on invented facts or celebrity imitation;
- square icons, landscape diagrams, or outputs where a receipt silhouette is only a crop.

不适合：

- 多步骤教程、精确图表、UI 截图、长文章或需要多个并列视觉论证的主题；
- 依赖编造事实或模仿名人的幽默；
- 方形图标、横向图解，或小票轮廓只是裁切结果的输出。

## Material, Typography, And Density / 材质、字体与密度

Use warm off-white thermal paper, charcoal or black ink, slight banding, uneven
heat coverage, and restrained paper-edge cues. Avoid faux coffee stains, sepia
film grading, glossy plastic, photographic receipts, or a full-screen app UI.

Use a monospaced or narrow receipt-like type role for identity and detail lines.
A short quote may receive a heavier or slightly larger role, but it remains part
of the record rather than a marketing headline. Exact text should be reserved
for deterministic typesetting when the runtime supports it.

Density is low to medium. The number of verified facts determines line count; the
style must not manufacture content to make the poster look full.

材质使用暖白热敏纸、炭黑或黑色打印、轻微水平带、不均匀受热和克制纸边暗示。避免咖啡渍、棕褐胶片滤镜、
光亮塑料、摄影化小票或全屏 App 界面。

字体使用等宽或窄幅小票感角色承载身份与明细。一句引语可以更粗或略大，但仍属于记录，不变成营销标题。运行时支持时，
准确文字应交给确定性排版。

密度：低到中。已核验事实的数量决定行数，不能为了填满海报而制造内容。

## Transfer Boundaries / 迁移边界

- Unlike `print-menu-layout`, the fields record an event or state and do not require price scanning.
- Unlike `retro-pixel-halftone-tech-editorial`, the record is intentionally sparse and does not use a technical broadsheet frame or evidence modules.
- Unlike `semantic-concept-poster`, the quote is one field inside a record; it does not own the whole canvas.
- Unlike `whimsical-journal-sketch`, the receipt object and exact field order carry the identity, not loose fragments or a diary collage.

- 与 `print-menu-layout` 不同，本 Pattern 记录事件或状态，不要求价格扫描；
- 与 `retro-pixel-halftone-tech-editorial` 不同，本 Pattern 有意保持稀疏，不使用科技大报外框或证据模块；
- 与 `semantic-concept-poster` 不同，引语只是记录字段之一，不独占整张画布；
- 与 `whimsical-journal-sketch` 不同，小票物件和准确字段顺序承担身份，而不是松散碎片或手账拼贴。

## Runtime Adapter Slots / 运行时槽位

```text
ARTIFACT_KIND
ASPECT_RATIO
AUDIENCE
LANGUAGE
RECORD_ANCHOR
DATE
PLACE
MOOD_OR_STATE
DETAIL_LINES
QUOTE
FOOTER
TEXT_HANDLING
PAPER_INTENSITY
FORBIDDEN
```

## Failure Modes / 失败方式

- The result looks like a generic vintage poster instead of a continuous receipt.
- Generated numbers, dates, names, or measurements are plausible but unsupported.
- The quote becomes a large advertising headline and the record fields disappear.
- Decorative barcodes, stamps, icons, or fake totals imply facts that were never supplied.
- Thermal texture becomes sepia grime, coffee stains, glossy plastic, or a photographic prop.
- The layout is padded with invented lines because the source record is sparse.
- Text is too small or warped to verify at the target social preview size.
- The output becomes a dashboard or a stack of cards instead of one narrow document.

- 成品像泛化的复古海报，而不是连续的小票；
- 生成了看似合理但来源不支持的数字、日期、姓名或测量值；
- 引语变成广告式大标题，记录字段消失；
- 装饰条码、印章、图标或虚假总计暗示来源没有提供的事实；
- 热敏材质变成棕褐脏旧、咖啡渍、光亮塑料或摄影道具；
- 来源记录稀疏，却用编造条目硬填版面；
- 目标信息流尺寸下文字过小或变形，无法核对；
- 成品变成仪表盘或卡片堆，而不是一张窄幅文档。

## Fidelity Gate / 保真门

1. Can a reviewer identify the receipt silhouette and field order before noticing the texture?
2. Can every exact fact be traced to the upstream record?
3. Does one short quote receive a pause without replacing the record structure?
4. Does the paper and printer treatment stay restrained, warm, and non-photographic?
5. If decorative material words are removed, does the vertical record still read as the same method?

1. 不看材质时，评审能否先识别小票轮廓和字段顺序？
2. 每个准确事实是否都能追溯到上游记录？
3. 一句短引语是否获得停顿，但没有取代记录结构？
4. 纸张与打印处理是否克制、温和且非摄影化？
5. 去掉装饰性材质词后，竖向记录是否仍然读成同一方法？
