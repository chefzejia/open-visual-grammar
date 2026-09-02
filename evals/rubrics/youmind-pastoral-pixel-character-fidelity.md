# YouMind Pastoral Pixel Character Fidelity / YouMind 田园像素角色保真

Use this rubric with `cases/youmind-pastoral-pixel-character-transfer.md`.
Judge identity and action continuity before rewarding pixel nostalgia.

本 rubric 与 `cases/youmind-pastoral-pixel-character-transfer.md` 配套使用，先判断身份和动作连续性，
再评价像素怀旧感。

## Strong Signals / 强信号

- A front-facing source establishes a recognizable silhouette and the named
  identity anchors survive pixel reduction.
- Action-strip poses keep the same head, clothing, body proportion, grid, and
  palette while each action remains legible.
- The background mode is exactly one of solid or sparse pastoral and remains
  subordinate to the character action.
- Hard pixel edges, controlled tile scale, and a bounded palette carry the style;
  no random noise or smooth rendering is doing the work.
- The adapter transfers to both topics without named game assets, copied scenes,
  or source-specific compositions.

## Weak Signals / 弱信号

- The result feels nostalgic, but the identity anchors are generic or drift
  between poses.
- A pastoral background is attractive yet competes with the action or becomes a
  detailed game map.
- Pixel texture is present, but the candidates are merely palette swaps.
- Captions explain an action that the sprite or panel cannot show.

## Operator Questions / 操作者问题

1. Can the subject and identity anchors be named with the background hidden?
2. Does each action remain readable on the same grid and scale?
3. Is one background mode doing only supporting work?
4. Would the structure survive if game-specific words were removed?
5. Is this adapter ready for a reviewed production example, or does it need an
   anti-pattern?

## Decision Rule / 决策规则

- **Pass:** identity, action continuity, controlled pixel grid, background
  restraint, and source-safe transfer all hold with no critical fail signal.
- **Revise:** the route is sound but one identity, action, or density constraint
  is missing; record one targeted adapter adjustment.
- **Reject:** the result depends on generic avatar logic, copied game content,
  dense map/HUD decoration, drifting poses, or pseudo-text. Keep it out of OVG.
