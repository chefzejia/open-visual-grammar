# Source Multiscript Type-System Calibration / 来源多文字系统校准

This optional adapter distills two public evidence sources: the Tokyo TDC
[2026 Grand Prize page](https://tokyotypedirectorsclub.org/en/award/2026_grandprize/),
which describes Futura 100 Multiscript as a family with six weights, matching
obliques, and optical-size variations, and [Fonts In Use](https://www.fontsinuse.com/),
which indexes real typography by typeface, format, and topic. The sources teach
system design and contextual comparison, not a requirement to use Futura or a
particular award look.

这份可选 adapter 提炼两个公开证据源：Tokyo TDC 2026 Grand Prize 页面描述的多文字字族系统，以及按字体、格式和主题索引真实使用案例的 Fonts In Use。来源教的是系统设计和语境比较，不是要求使用 Futura 或复制某个奖项外观。

## Style Signature / 风格签名

- Define typography by role before choosing a family: display, body, accent, and numeric.
- Treat scripts as one coordinated system. Align x-height or perceived body size, stroke pressure, spacing, and baseline behavior across scripts.
- Use weight, oblique, and optical-size changes to express hierarchy or function; do not switch families merely to create decoration.
- Test the type roles in the actual artifact kind and content density. A type specimen is evidence of range, not proof of a good slide.
- Keep exact copy, citations, and line breaks deterministic. The image or evidence crop shares the same grid and does not become a wallpaper.

- 先定义展示、正文、强调和数字角色，再选择字族；
- 把多种文字当作一个协调系统，跨文字对齐 x-height 或感知正文尺寸、笔压、字距和基线行为；
- 用字重、斜体和光学尺寸表达层级或功能，不为了装饰随意切换字族；
- 在真实交付类型和内容密度中测试字体角色，字族样张只证明范围，不证明页面一定成立；
- 准确文案、引用和换行交给确定性排版，图片或证据裁切与同一网格对齐，不做背景壁纸。

## Layout Route / 版式路由

Use `editorial-cover`, `evidence-grid`, `image-led-spread`, or `quote-pause`
from the base Pattern. Keep the same role tokens and baseline grid when a deck
changes script, page family, or evidence crop.

使用基础 Pattern 的 `editorial-cover`、`evidence-grid`、`image-led-spread` 或 `quote-pause`。当 deck 切换文字系统、页面家族或证据裁切时，继续使用同一组角色 token 和基线网格。

## Deterministic Compile Contract / 确定性编译契约

```text
SCRIPT_SET: {{SCRIPT_SET}}
DISPLAY_ROLE: {{DISPLAY_ROLE}}
BODY_ROLE: {{BODY_ROLE}}
ACCENT_ROLE: {{ACCENT_ROLE}}
NUMERIC_ROLE: {{NUMERIC_ROLE}}
FALLBACK_CHAIN: {{FALLBACK_CHAIN}}
PAGE_FAMILY: {{PAGE_FAMILY}}
EVIDENCE_CROP: {{EVIDENCE_CROP}}
```

1. Choose a family with coverage for every required script, or document the fallback chain before laying out.
2. Compare perceived size and line length, not nominal point size alone.
3. Lock baseline, column, and rule tokens before adjusting individual glyphs.
4. Verify mixed-script overflow, punctuation, numerals, citations, and font loading in the exported artifact.
5. Keep one optional muted accent across the deck; script changes do not authorize a new color system.

1. 选择覆盖所有必需文字的字族，或在排版前写清 fallback 链；
2. 比较感知尺寸和行长，不只看标称字号；
3. 先锁定基线、分栏和分隔线 token，再调单个字形；
4. 在导出物中检查混排溢出、标点、数字、引用和字体加载；
5. 整套 deck 最多使用一个低调强调色，切换文字系统不等于可以换一套配色。

## Fidelity Gate / 保真门

- Display, body, accent, and numeric roles remain distinct in every required script.
- Perceived size, baseline, and spacing feel coordinated without flattening the scripts into identical forms.
- The page still reads as one of the base Pattern's supported families after the type specimen or award identity is removed.
- Exact text and citations survive export with no overflow or fallback surprises.
- Two unrelated decks can reuse the role system without sharing source copy, glyph forms, or award imagery.

## Failure Recovery / 失败恢复

- **Font tourism:** if a display family becomes the subject, restore the page reading task and reduce display usage.
- **Script mismatch:** if one script looks too small or heavy, adjust role-specific size/leading or choose a documented fallback before changing the grid.
- **Fallback surprise:** if missing glyphs change the tone, package the approved fallback and rerun export QA.
- **Specimen wallpaper:** if type samples replace evidence, return the evidence crop and source label to the bounded page module.
- **Color drift:** if each script receives a new accent, restore deck-wide color roles and let weight/spacing carry the distinction.
