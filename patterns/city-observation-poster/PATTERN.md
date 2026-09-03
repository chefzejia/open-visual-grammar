# City Observation Poster

```yaml
id: city-observation-poster
artifact_kinds:
  - image-cover
runtimes:
  - image-generation
when_to_use: Vertical visual diaries where an authorized subject, a short place marker, and one ordinary city action form a screenprint poster.
avoid_when: Landmark postcards, travel brochures, maps, realistic city photography, or covers without a daily-life cue.
load_next:
  image-generation: adapters/youmind-city-observation-poster.md
```

中文名：城市观察海报
English name: City Observation Poster

## Definition / 定义

The city is read through one ordinary action, not a landmark list. A supplied
subject stays recognizable beside a giant short marker, blue/cyan linework, and
a limited screenprint surface in a vertical `3:4` frame.

城市通过一个日常动作被读出，不靠地标清单。上游主体在竖版 `3:4` 画面中保持可辨，与巨型短标记、蓝青线稿和限色孔版表面共同构成观察海报。

## Invariants / 不变量

- Supplied character identity survives through silhouette, pose, and one defining feature.
- One ordinary action or atmosphere carries the place observation.
- Giant short title or place marker shares the frame with subject and cue.
- Blue/cyan linework, limited source-aware color, and restrained screenprint texture stay controlled.
- The result reads as a visual note, not a postcard, map, or mascot scene.

## Composition Families / 构图家族

- **Character and title:** subject anchors one side and title counterweights it.
- **Daily scene plate:** one everyday action occupies the main field.
- **Quiet city index:** marker, repeated line rhythm, and one local object form a note.

## Variables / 可变槽位

`CITY_MARKER`, `MAIN_SUBJECT`, `IDENTITY_ANCHORS`, `DAILY_CUE`, `ASPECT_RATIO`,
`LINEWORK_COLOR`, `PALETTE_BUDGET`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for a commuter waiting under elevated rail or a person carrying a folded
stool past a closing market stall. The temperature is observant, local, and
lightly tactile, never touristic.

## Transfer Boundaries / 迁移边界

Two unrelated places must share the same identity, title, line, and screenprint
contract. Landmarks may support facts but cannot replace the daily action.

## Fidelity Gate / 保真门

- Place relation remains readable with title hidden.
- Subject, action, and marker share one vertical hierarchy.
- Screenprint texture is local and limited.
- Three outputs differ by poster structure, not palette or crop only.

## Failure Modes / 失败方式

Postcard landmarks, tourism icons, map dashboards, generic mascots, glossy 3D,
and unverified place text fail. Delete the Pattern if the daily observation does
not survive a new place.
