# Image-Generation Meta-Prompt / 图像生成元提示词

This adapter compiles the `thermal-receipt-poster` Pattern for image
generation. Exact dates, numbers, names, and quotes should be placed by a
deterministic typesetting step whenever the consuming runtime supports it.

```text
Create one vertical {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream record is authoritative and exact:
- Language: {{LANGUAGE}}
- Record anchor: {{RECORD_ANCHOR}}
- Date: {{DATE}}
- Place: {{PLACE}}
- Mood or state: {{MOOD_OR_STATE}}
- Detail lines: {{DETAIL_LINES}}
- Quote: {{QUOTE}}
- Footer: {{FOOTER}}
- Text handling: {{TEXT_HANDLING}}

Use the Thermal Receipt Poster visual grammar. Turn the supplied record into one
continuous, narrow receipt or ticket document. Establish the record anchor first,
then keep the field order: identity, mood or state, factual detail lines, one
short quote, and the supplied footer or closing mark. Omit fields that are not
provided. Never invent amounts, steps, temperatures, timestamps, barcode data,
proper nouns, or plausible measurements.

Choose Record Strip, Long Receipt, or Quiet Stub according to the amount of
verified content. Keep the paper field continuous and vertically scannable. Use
monospaced or narrow receipt-like typography with clear line spacing and simple
section separators. Preserve every exact string according to {{TEXT_HANDLING}};
do not generate pseudo-text when deterministic placement is available.

Use warm off-white thermal paper, charcoal or black print, slight horizontal
banding, uneven heat coverage, and restrained paper-edge or roll cues. Set
{{PAPER_INTENSITY}} without adding stains, sepia grime, glossy plastic, or a
photographic prop. Keep density low to medium and let blank paper remain visible.
The quote may be slightly heavier or larger, but it remains one field inside the
record rather than a marketing headline.

Keep the tone observational, lightly dry, and human. Do not add a second event,
decorative story, invented joke, fake total, barcode, stamp, icon, logo, or
watermark. Avoid dashboards, card stacks, vintage travel-poster decoration,
coffee stains, film grain, glossy 3D, and generic nostalgia. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `RECORD_ANCHOR`: one supplied date, place, event, or state that makes the record identifiable.
- `DETAIL_LINES`: short factual lines only; keep their order if the source gives one.
- `QUOTE`: one verified short line. Leave blank when the source has no quote.
- `FOOTER`: a supplied closing phrase or omit it; never invent a receipt total.
- `TEXT_HANDLING`: use `deterministic typesetting` for exact strings or `short checked text only` when the runtime must render text.
- `PAPER_INTENSITY`: choose `light`, `medium`, or `strong` thermal banding without changing the palette or layout.
- `FORBIDDEN`: add topic-specific factual or visual mistakes without repeating the Pattern contract.

- `RECORD_ANCHOR`：填写一个上游提供的日期、地点、事件或状态，让记录可识别；
- `DETAIL_LINES`：只放短事实行，来源有顺序时保持顺序；
- `QUOTE`：填写一句经过核对的短句，没有就留空；
- `FOOTER`：使用来源提供的收束语，否则省略，不能凭空生成小票总计；
- `TEXT_HANDLING`：准确字符串选择“确定性排版”，运行时必须绘字时才用“只生成经核对的短文字”；
- `PAPER_INTENSITY`：选择 `light`、`medium` 或 `strong` 的热敏打印带，不改变配色或版式；
- `FORBIDDEN`：补充主题特有的事实或视觉错误，不重复 Pattern 契约。

## Fidelity Gate / 保真门

- One continuous receipt silhouette is visible at feed size.
- Field order remains readable before paper texture is inspected.
- Exact facts are not changed, embellished, or replaced by plausible metrics.
- The quote stays short and subordinate to the record contract.
- Removing thermal adjectives still leaves the same vertical record method.

## Failure Recovery / 失败恢复

- **Icon substitution:** if a blank field becomes a weather, transport, work, or
  status pictogram, collapse the brief to one record scaffold and forbid all
  semantic icons. Keep the missing facts for deterministic typesetting.
- **Event collision:** if the prompt names multiple visual events, choose one
  record anchor and remove every secondary scene before retrying.
- **Decorative padding:** if the receipt fills empty corridors with symbols or
  invented metrics, restore the quiet-stub route and require continuous paper,
  rules, separators, and blank fields only.

## 失败恢复

- **图标替代：** 如果空字段被天气、交通、工作或状态图标填充，把简报收窄为一张记录骨架，并禁止所有语义图标；缺失事实交给确定性排版。
- **事件冲突：** 如果提示词同时写了多个视觉事件，只保留一个记录锚点，移除所有次要场景后再重试。
- **装饰填充：** 如果小票用符号或虚构指标填满空走廊，恢复 Quiet Stub 路由，只允许连续纸面、规则、分隔线和空白字段。
