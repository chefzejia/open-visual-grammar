# YouMind City-Observation Poster Calibration / YouMind 城市观察海报校准

This Pattern adapter distills the public YouMind `城市观察海报` method into a
character-led place route. It preserves a
supplied character's identity while translating one city's ordinary scene and
emotional cue into a consistent vertical visual diary. The city name, landmark
claims, source character, and any exact copy remain semantic or deterministic
inputs, not style instructions.

这份 Pattern adapter 将公开 YouMind“城市观察海报”提炼为角色主导地点变体。
它保留上游角色身份，把一座城市的日常场景和情绪线索转译为统一的竖版视觉日记。城市名、地标事实、来源角色和准确文案仍是语义或确定性输入，不是风格指令。

## Style Signature / 风格签名

- Keep one supplied character or subject recognizable through silhouette, pose,
  and one defining feature; do not replace it with a generic mascot.
- Extract one ordinary city action or atmosphere—waiting, carrying, repairing,
  commuting, resting, or observing—rather than a tourism landmark list.
- Use a vertical `3:4` poster with one giant short title or city marker. Reserve
  exact lettering for deterministic typesetting when needed.
- Use blue/cyan linework, a limited source-aware editorial palette, restrained
  screenprint or stencil texture, and one clear daily-life cue.
- Keep the poster readable as a visual note, not a travel brochure, map, or
  photographic postcard.

- 保留一个上游角色或主体的剪影、姿态和一个辨识特征，不把它替换成通用吉祥物。
- 提炼一个日常城市动作或气氛，如等待、携带、修理、通勤、休息或观察，不罗列旅游地标。
- 使用竖版 `3:4` 海报和一个巨型短标题或城市标记，准确字形需要时交给确定性排版。
- 使用蓝青线稿、源自地点证据的限色编辑配色、克制孔版或模板印刷肌理，以及一个清楚的日常线索。
- 让海报读成城市观察笔记，不是旅游宣传册、地图或摄影明信片。

## Composition Families / 构图家族

1. **Character and title:** the character anchors one side while the giant title
   and one daily-life cue create the counterweight.
2. **Daily scene plate:** a simplified everyday action occupies the main field;
   the character remains the identity witness rather than a second story.
3. **Quiet city index:** a short city marker, one repeated line rhythm, and one
   local object form a compact visual diary entry.

All three families keep the same vertical frame, blue/cyan line, limited palette,
screenprint surface, and identity rule. Do not switch to a landmark collage,
glossy travel render, or dense map layout.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at 3:4 vertical format.

The upstream place argument is authoritative:
- City marker: {{CITY_MARKER}}
- Character or subject: {{MAIN_SUBJECT}}
- Identity anchors: {{IDENTITY_ANCHORS}}
- Everyday action or atmosphere: {{DAILY_CUE}}
- First read: {{FIRST_READ}}
- Text handling: {{TEXT_HANDLING}}

Use the City Observation Poster Pattern with the YouMind city-observation
calibration. Preserve {{MAIN_SUBJECT}} identity through {{IDENTITY_ANCHORS}}
and place it in one ordinary city action: {{DAILY_CUE}}. Let one giant short
title or city marker share the frame with the character and the cue; do not
illustrate a tourism checklist or invent a landmark.

Draw with blue/cyan handdrawn linework, a limited source-aware editorial
palette, restrained screenprint or stencil texture, and active whitespace. Keep
the character, title, and daily cue in one clear hierarchy. Follow
{{TEXT_HANDLING}}; if exact lettering is unreliable, reserve the title region for
deterministic post-layout.

Avoid generic mascots, landmark collages, map dashboards, photographic postcards,
glossy 3D, broad souvenir symbolism, long generated text, pseudo-Chinese, logos,
signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `CITY_MARKER`: a short checked city name or neutral place marker.
- `IDENTITY_ANCHORS`: two or three supplied features that keep the subject
  recognizable.
- `DAILY_CUE`: one ordinary action or atmosphere with a visible relation to the
  city; do not use a list of attractions.
- `TEXT_HANDLING`: choose short checked title or deterministic text region.
- `FORBIDDEN`: add factual place omissions or invented landmarks without
  changing the Pattern's hierarchy and material budget.

## Fidelity Gate / 保真门

- The supplied character or subject remains recognizable before texture.
- One ordinary city action carries the observation; no tourism checklist is
  required.
- The giant title or marker, subject, and cue share one vertical editorial frame.
- Blue/cyan linework, limited color, and screenprint texture remain controlled.
- Removing city branding and source-specific landmarks leaves the same
  character-led city-observation method.
