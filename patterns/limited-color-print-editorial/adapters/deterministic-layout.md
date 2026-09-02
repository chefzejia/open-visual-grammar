# Deterministic Layout Adapter / 确定性版式 Adapter

Use this adapter for slide-like pages and fixed editorial layouts. The public
YouMind `Clay Minimal` page provides calibration evidence for a cream-and-cool-
ink, geometric-sans, woodcut branch. OVG keeps the reusable page system and does
not copy its sample deck or wording.

这份 adapter 用于幻灯片式页面和固定编辑版式。公开 YouMind `Clay Minimal` 提供暖白纸面、冷色墨、
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
