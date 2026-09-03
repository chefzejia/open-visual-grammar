# Source Picture-Book Sequence Calibration / 来源绘本跨页序列校准

This adapter defines the source-safe sequence route exposed by the public
[dPICTUS](https://dpictus.com/), [The Original Art](https://societyillustrators.org/awards/the-original-art/),
and [Bologna Children's Book Fair](https://www.bolognachildrensbookfair.com/)
selection programs. Those sources prove that a whole book or spread sequence is
the useful evidence unit; they do not prove one universal picture-book surface.

这份 adapter 提炼公开 dPICTUS、《The Original Art》和 Bologna Children's Book Fair 评选入口中可见的序列证据。
这些来源能证明整本书或跨页序列才是有效证据单位，但不能证明所有儿童绘本共享一种表面画法。

The quiet-to-busy rhythm and recurring-anchor rules below are the transferable
sequence contract. They describe what the selection sources make comparable,
not a claim that every selected title uses the same pacing or character treatment.

下面的“安静到繁忙”节奏和重复锚点规则是可迁移的序列契约，说明评选来源可以比较什么，并不宣称所有入选绘本使用同样的节奏或角色处理。

Do not copy a selected book's characters, lettering, palette, publisher marks,
or creator-specific material. Choose the material branch from the upstream brief
and keep it subordinate to page order and the supplied narrative action.

不要复制入选作品的角色、字形、配色、出版社标记或创作者特定材质。材质分支由上游简报选择，并且必须服从页面顺序和上游叙事动作。

## Style Signature / 风格签名

- The first read is one child-safe action, relation, or change, not a decorative style label.
- A recurring anchor keeps identity, role, direction, and a small color cue across pages.
- Each page or spread advances exactly one beat; the sequence may progress, compare, reveal, or loop back only when the source argument supports it.
- Quiet and busy spreads alternate intentionally so a child can find the next action without a caption-heavy explanation.
- Text enters as a short title, sound cue, label, or dialogue attached to the scene; exact long copy stays deterministic.
- Material is a variable branch: line, watercolor, crayon, collage, or flat print may change, but the reading order and anchor contract do not.

- 第一眼读到的是一个适合儿童的动作、关系或变化，不是某个装饰性的风格标签；
- 一个重复锚点跨页保持身份、角色、方向和一小组配色线索；
- 每页或每个跨页只推进一个节拍，递进、对比、揭示或回环必须由上游论证决定；
- 安静与繁忙的跨页有意交替，让儿童无需依赖大段说明就能找到下一个动作；
- 文字以短标题、拟声、标签或对白进入场景，准确长文案交给确定性排版；
- 材质只是可变分支：线稿、水彩、蜡笔、拼贴或平面印刷都可以切换，但阅读顺序和锚点契约不能变。

## Composition Families / 构图家族

1. **Progression spread / 递进跨页:** establish a state, show one physical or emotional change, and land the supplied conclusion.
2. **Quiet-to-busy reveal / 安静到繁忙的揭示:** begin with a sparse field and let one new relation enter; use the busy spread only for the reveal, not for decoration.
3. **Anchor comparison / 锚点对照:** keep the same anchor and viewpoint while two pages contrast an early assumption with a fuller state.
4. **Path or return / 路径或回环:** a simple directional path crosses the pages and returns to the anchor; use only when the source has a real loop or journey.

Choose one family for a short sequence. Do not turn every page into a different
poster or a uniform grid of panels.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create a sequence of {{PAGE_COUNT}} {{ARTIFACT_KIND}} pages for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream narrative argument is authoritative:
- First read: {{FIRST_READ}}
- Core action: {{VISUAL_ACTION}}
- Recurring anchor: {{RECURRING_ANCHOR}}
- Sequence logic: {{SEQUENCE_LOGIC}}
- Page beats: {{PAGE_BEATS}}
- Text handling: {{TEXT_HANDLING}}

Use the Picture-Book Sequence grammar with this source sequence calibration.
Choose one supported family: progression spread,
quiet-to-busy reveal, anchor comparison, or path/return. Give every page exactly
one child-safe beat and make the reading direction obvious. Keep
{{RECURRING_ANCHOR}} stable in role, silhouette, direction, and one small color
cue. Do not import a source character, costume, named world, publisher mark, or
copied lettering.

Choose one material branch from the brief: clean hand line, watercolor,
crayon, matte collage, or flat print. Keep the branch consistent across the
sequence, with warm or near-white paper only when it supports the brief. Let
quiet space, scale, and one concrete action carry the page turn. Attach only
short checked titles, sound cues, labels, or dialogue to the scene; leave exact
long copy to deterministic typesetting.

Avoid sticker-sheet clutter, equal-weight panels, changing anchor identity,
generic mascot branding, decorative props, unsafe humor, long generated text,
pseudo-Chinese, logos, signatures, watermarks, and source-specific IP. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `PAGE_COUNT`: choose four to eight pages from the real argument; never pad a short idea.
- `RECURRING_ANCHOR`: use one supplied actor, object, or witness. A source animal is not a default anchor.
- `SEQUENCE_LOGIC`: state why progression, reveal, comparison, or return matches the argument.
- `PAGE_BEATS`: write one short action per page; each beat must change state or understanding.
- `TEXT_HANDLING`: prefer short checked scene text plus deterministic body copy.
- `FORBIDDEN`: add topic-specific safety and content limits without weakening the sequence contract.

## Fidelity Gate / 保真门

- The sequence is understandable from page order and scene changes before material detail is inspected.
- Every page advances one supplied action or relation; no page exists only to show a motif.
- The recurring anchor remains recognizable, role-stable, and directionally coherent.
- Quiet and busy fields are intentional, and the output remains legible at mobile or child-sized viewing distance.
- One material branch stays consistent; changing the branch does not change the page grammar.
- Removing source characters, costumes, publisher marks, and copied text leaves the same transferable sequence method.

## Failure Recovery / 失败恢复

- **Decorative spread:** if pages look attractive but do not advance, rewrite the page beats as verbs and remove any unsupported object.
- **Anchor drift:** if the recurring actor changes role or direction, simplify its silhouette and palette before adding texture.
- **Panel grid:** if the sequence becomes a comic or dashboard by default, restore one large page field and one dominant beat.
- **Caption dependence:** if a page needs a paragraph to explain itself, convert the paragraph into a visible action and keep only a short cue.
- **Material switching:** if each page uses a different surface, select one branch and let pacing come from scale, whitespace, and action instead.
