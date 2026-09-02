# YouMind Cognitive Contrast Card Calibration / YouMind 认知反差卡校准

This optional adapter distills the public YouMind `小红书爆款人生认知反差卡生成器`
method into a brand-neutral comparison sequence. One life topic becomes a small
set of cards with a stable anchor and layout; each card pairs an early intuitive
judgment with a fuller later judgment in two concrete scenes. The source skill's
character, copy, and platform treatment remain external.

这份可选 adapter 将公开 YouMind“ 小红书爆款人生认知反差卡生成器”的方法抽象成品牌中立的对比序列。
一个人生主题被拆成少量卡片，跨卡保持同一锚点与版式；每张卡用两个具体场景对照早期直觉和之后更完整的判断。来源技能的角色、文案与平台样式仍属于外部证据。

## Style Signature / 风格签名

- Default to five cards, but choose four to six from the actual argument rather
  than padding a fixed template.
- Keep one recurring anchor stable in silhouette, role, direction, and palette.
- Give each card one paired contrast: early intuitive state above or beside a
  later, fuller state. The contrast must change the judgment, not just the color.
- Use a consistent card frame and a clear reading order. Keep the scene concrete
  and the text short; reserve exact copy for deterministic text zones.
- Let the visual metaphor live in the two scenes. Do not add platform badges,
  reaction counts, or decorative stickers to simulate social proof.

- 默认五张卡，但页数应由实际论证在四到六张之间决定，不为套模板而填充。
- 跨卡保持一个重复锚点的剪影、角色、方向和少量配色稳定。
- 每张卡只做一组对照：上方或一侧是早期直觉状态，另一侧或下方是更完整的后来判断。对照必须改变判断，而不只是换颜色。
- 保持统一卡框和清楚阅读顺序。场景要具体，文字要短；准确文案交给确定性文字区。
- 让视觉隐喻存在于两组场景之间，不添加平台徽章、互动数量或装饰贴纸来伪造社交证明。

## Sequence Families / 序列家族

1. **Intuition to judgment:** each card moves from a quick assumption to the
   missing context that changes it.
2. **Expectation to consequence:** the first scene shows the hoped-for outcome;
   the second shows the overlooked cost or constraint.
3. **Label to lived case:** a compact claim is paired with two ordinary moments,
   keeping the recurring anchor in the same role.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create a sequence of {{CARD_COUNT}} {{ARTIFACT_KIND}} cards for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream comparison argument is authoritative:
- Core topic: {{CORE_TOPIC}}
- Recurring anchor: {{RECURRING_ANCHOR}}
- Card beats: {{CARD_BEATS}}
- Contrast rule: {{CONTRAST_RULE}}
- Text handling: {{TEXT_HANDLING}}

Use the Narrative Journal Infographic grammar with the YouMind cognitive-contrast
card calibration. Keep {{RECURRING_ANCHOR}} identical in silhouette, role,
direction, and restrained palette across cards. Give every card one concrete
paired contrast: an early intuitive judgment and a fuller later judgment. Make
the missing context visible through the scene relation, not through a long
explanation or a second metaphor.

Use one consistent card frame, warm paper or a quiet neutral field, clean
handdrawn lines, and low-saturation fills. Keep headings and recall cues short
and reserve exact copy for {{TEXT_HANDLING}}. Preserve mobile legibility and a
clear reading order from card one to the last card.

Avoid changing character identity, unrelated props, social-platform badges,
reaction counts, dashboard panels, dense scrapbook decoration, long generated
paragraphs, pseudo-Chinese, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `CARD_COUNT`: normally five; use four to six only when the source argument
  justifies the change.
- `RECURRING_ANCHOR`: one supplied actor, object, or witness; do not import a
  source character.
- `CARD_BEATS`: one short sentence per card, with both states named.
- `CONTRAST_RULE`: state what changes the judgment on every card.
- `TEXT_HANDLING`: use short checked labels plus deterministic body copy when
  exact wording matters.

## Fidelity Gate / 保真门

- The sequence has one topic, one stable anchor, and a consistent card frame.
- Every card contains a readable two-state contrast that changes the judgment.
- The later context is visible in the scene, not only in text.
- Removing platform branding, source copy, and decorative stickers leaves the
  same comparison method.
- The cards remain legible on a phone and do not become a dashboard or sticker
  sheet.
