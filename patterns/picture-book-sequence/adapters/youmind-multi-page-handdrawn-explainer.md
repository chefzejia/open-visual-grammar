# YouMind Multi-Page Handdrawn Explainer Calibration / YouMind 多页手绘解释器校准

This adapter distills the public YouMind `治愈系萌宠手账绘本信息图`
description into a brand-neutral sequence grammar. It keeps the useful method
claims—mobile-first vertical pages, one argument per page, a recurring anchor,
and a paper-and-ink handdrawn surface—while removing the source skill's cats,
clothes, props, and wording.

这份 adapter 将公开 YouMind“治愈系萌宠手账绘本信息图”的方法抽象成品牌中立的连续页面语法。
它保留移动端竖屏、每页一个论点、跨页重复锚点和纸墨手绘表面，去掉来源技能的猫咪、服装、道具与原文措辞。

## Style Signature / 风格签名

- Deliver a sequence of four to eight `9:16` pages by default; choose the count from the argument, not from a fixed template.
- Give each page one readable claim, scene, or transition. Use progression, comparison, steps, or timeline only when the source argument supports it.
- Keep one recurring anchor—an actor, object, or simple witness—stable in role, silhouette, direction, and a small palette across the sequence.
- Use warm off-white paper, low-saturation color, watercolor or colored-pencil fills, fine handdrawn ink, and sparse collage marks. Texture must stay subordinate to reading order.
- Keep a clear page hierarchy: short heading, concrete scene, and one takeaway or cue. Reserve exact copy for deterministic text zones when the runtime supports them.
- Preserve generous breathing room and mobile-size legibility. Paper tape, notes, arrows, or clips are optional evidence marks, never a decorative scrapbook layer.

- 默认输出四到八页 `9:16` 竖屏序列，页数由论证决定，不套固定模板。
- 每页只承载一个可读论点、场景或转折；只有来源论证确实需要时才使用递进、对比、步骤或时间线。
- 保留一个跨页重复锚点，可以是角色、物件或简单见证者；它的角色、剪影、方向和少量配色必须稳定。
- 使用暖近白纸面、低饱和配色、水彩或彩铅色块、细手绘墨线和稀疏拼贴痕迹，纹理始终退后于阅读顺序。
- 保持清楚的页面层级：短标题、具体情境和一条结论或召回线。运行时支持时，精确文案交给确定性文字区。
- 保留呼吸感与手机尺寸可读性。纸胶带、便签、箭头或回形针只是可选证据标记，不能堆成装饰手账。

## Sequence Families / 序列家族

1. **Progression:** establish a state, show a change, and land the supplied conclusion.
2. **Comparison:** keep the same anchor and frame logic while contrasting two states on separate pages.
3. **Steps:** use only when each page advances one real operation; do not split a single idea into filler pages.
4. **Timeline:** use a stable axis and a small number of dated moments; exact dates belong in deterministic text.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create a sequence of {{PAGE_COUNT}} {{ARTIFACT_KIND}} pages for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream narrative argument is authoritative:
- Core argument: {{CORE_ARGUMENT}}
- Sequence logic: {{SEQUENCE_LOGIC}}
- Recurring anchor: {{RECURRING_ANCHOR}}
- Page beats: {{PAGE_BEATS}}
- Text handling: {{TEXT_HANDLING}}

Use the Picture-Book Sequence grammar with the YouMind multi-page
handdrawn-explainer calibration. Build a mobile-first vertical sequence. Give
each page one concrete claim or transition, and make the reading order obvious
from page one to the last page. Keep {{RECURRING_ANCHOR}} stable in role,
silhouette, direction, and a restrained palette; do not import any source
character, costume, prop, or named world.

Use warm off-white paper, low-saturation colors, watercolor or colored-pencil
fills, fine handdrawn ink, and sparse collage marks. Keep texture and decoration
subordinate to the scene and page hierarchy. Each page should have a short
heading, a concrete situation, and one takeaway or recall cue. Preserve generous
whitespace and legibility at phone-card size. Follow {{TEXT_HANDLING}} and leave
exact long copy for deterministic typesetting.

Avoid dashboards, equal-weight panels, decorative scrapbook clutter, generic
mascot branding, changing character identity, unrelated props, long generated
paragraphs, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `PAGE_COUNT`: choose four to eight pages from the actual argument; do not pad a short idea.
- `SEQUENCE_LOGIC`: choose progression, comparison, steps, or timeline and state why it serves the supplied relation.
- `RECURRING_ANCHOR`: name only the supplied actor, object, or witness; never copy a source character.
- `PAGE_BEATS`: one short sentence per page, each advancing the same argument.
- `TEXT_HANDLING`: use `short checked headings + deterministic body copy` when exact wording matters.
- `FORBIDDEN`: add topic-specific omissions; do not replace the Pattern's material or hierarchy rules.

## Fidelity Gate / 保真门

- The sequence can be understood from page order and scene changes before decoration is inspected.
- Every page advances one supplied claim; no filler page exists only to display a motif.
- The recurring anchor remains recognizable and functionally consistent across pages.
- Warm paper, low-saturation handdrawn marks, and collage accents remain a controlled material budget.
- The output remains readable at mobile size and does not turn into a dashboard or sticker sheet.
- Removing the source skill's animal, costume, and wording leaves the same multi-page method.
