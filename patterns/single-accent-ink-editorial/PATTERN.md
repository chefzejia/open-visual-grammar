# Single-Accent Ink Editorial

```yaml
id: single-accent-ink-editorial
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Editorial covers where heavy black contour and local halftone make one action legible with exactly one semantic accent.
avoid_when: Multi-color decoration, full-frame noise, soft watercolor mood, or exact photographic proof.
```

中文名：单强调色编辑墨线
English name: Single-Accent Ink Editorial

## Definition / 定义

A near-white field and heavy black contour carry the subject and action. Local
halftone adds pressure inside evidence or shadow planes, while one semantic
accent marks the hinge of the argument.

近白纸面与厚重黑色轮廓承载主体和动作。局部网点只在证据或阴影平面内部增加印压，一种语义强调色标出论点的关键转折。

## Invariants / 不变量

- Subject, action, and evidence read from contour before texture or text.
- Halftone is local and subordinate; paper remains open.
- Exactly one accent color is traceable to the visual argument.
- One supported vignette, pair, or text-zone structure remains stable across topics.
- Short exact text is checked or deterministic; no copied brand material.

## Composition Families / 构图家族

- **Contour vignette:** one action and evidence object in a clear field.
- **Two-state pair:** same contour system contrasts one before/after relation.
- **Reserved text zone:** short checked line joins the drawing without carrying it.

## Variables / 可变槽位

`MAIN_SUBJECT`, `VISUAL_ACTION`, `CONCRETE_EVIDENCE`, `ACCENT_COLOR`,
`HALFTONE_REGION`, `ASPECT_RATIO`, `TEXT_HANDLING`, `FORBIDDEN`

## Fit, Material, And Temperature / 适用、材质与温度

Use for editorial actions that need a hand-pressed black contour and one clear
signal. The temperature is direct, tactile, and composed, not playful noise.

## Transfer Boundaries / 迁移边界

The same contour/action/accent contract must transfer to unrelated topics. If the
accent or halftone becomes the style subject, the Pattern has lost ownership.

## Fidelity Gate / 保真门

- Action and evidence remain legible with text and halftone hidden.
- One accent is semantic and stable.
- Local pressure leaves active whitespace.
- Three outputs vary relation or vignette structure, not color or paper texture.

## Failure Modes / 失败方式

Generic vector art, multiple accents, full-frame noise, unreadable action,
decorative text, and global texture filters fail. Delete the Pattern if contour
cannot carry the visual argument.

## Direct Compilation Route: Single Accent Ink / 直接生成路线：Single Accent Ink

# Single-Accent Editorial Ink Calibration / 单强调色编辑墨线校准

This Pattern compilation route encodes the documented `类 Notion 插画工坊`
description into a source-safe editorial ink method. It keeps the observable
grammar of heavy black handdrawn lines, fine halftone, active whitespace, and
one accent color without copying a brand's characters, compositions, or visual
assets.

这份 Pattern compilation route 将“类 Notion 插画工坊”的描述提炼为不依赖品牌的编辑墨线方法。
它只保留粗黑手绘线、细密半调网点、主动留白和一种强调色，不复制品牌角色、构图或视觉资产。

## Style Signature / 风格签名

- Use a heavy black or near-black handdrawn contour as the first structural read;
  line pressure and small corrections may remain visible.
- Keep fine halftone dots subordinate to the subject, shadow, or one evidence
  plane; they are not a full-frame noise filter.
- Use one accent color only, selected from red, blue, or yellow when the brief
  permits it. The accent must identify a supplied object, action, or hierarchy.
- Keep a near-white paper field and large active whitespace so the image feels
  like an editorial illustration rather than a filled canvas.
- Treat short checked text as a small integrated note. For long or exact copy,
  reserve a clean deterministic text region instead of drawing pseudo-lettering.
- Prefer simplified shapes and one readable relation over generic flat-vector
  decoration or a dense sticker sheet.

- 用粗黑或近黑色手绘轮廓承担第一眼结构，保留笔压和少量修正痕迹；
- 细密半调点只服从主体、阴影或一个证据平面，不能成为全画面的噪点滤镜；
- 只使用一种强调色，brief 允许时从红、蓝、黄中选择，且必须对应主体、动作或层级；
- 使用近白纸面和大面积主动留白，让画面像编辑插图，而不是填满画布；
- 短且已核验的文字作为小型整合注记，长文案或精确文字交给确定性排版区域；
- 优先简化形状和一个清晰关系，不做泛化扁平矢量装饰或密集贴纸页。

## Composition Families / 构图家族

1. **Single editorial vignette:** one object, person, or relation performs the
   supplied action in a generous paper field.
2. **Two-state editorial pair:** two related states share one ink vocabulary and
   one accent only when the source argument is genuinely comparative.
3. **Text-zone plate:** the image owns one side of the relation while a clean,
   aligned text region carries a short checked statement or deterministic copy.

1. **单一编辑小景：** 一个物件、人物或关系在充足纸面中执行上游动作；
2. **双状态编辑对照：** 只有上游论证确实需要比较时，两个相关状态才共享同一套墨线和一种强调色；
3. **文字区图版：** 图像承担关系的一侧，另一侧保留干净对齐的短文字区，供核验文字或确定性排版使用。

## Model Prompt / 模型生成提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Accent target: {{ACCENT_TARGET}}
- Text handling: {{TEXT_HANDLING}}

Use the Single-Accent Ink Editorial Pattern with the Single-Accent
Editorial Ink calibration. Choose Single Editorial Vignette, Two-State Editorial
Pair, or Text-Zone Plate only when the supplied argument supports that family.

Build one dominant black or near-black handdrawn contour with visible pressure
variation and a few human corrections. Keep the subject, relation, and
{{VISUAL_ACTION}} readable before adding material. Add fine halftone dots only
inside a relevant subject, shadow, or evidence plane. Use exactly one accent
color from {{ACCENT_TARGET}}; it must explain hierarchy or source identity, not
decorate the page. Keep a near-white paper field and large active whitespace.

Use a short checked note only when {{TEXT_HANDLING}} permits it. For long or exact
copy, reserve a clean aligned region for deterministic typesetting. The result
should feel like a tactile editorial illustration, not a corporate vector set.

Do not copy any brand, character, slogan, or source composition. Avoid Corporate
Memphis, smooth vector fills, gradients, multi-color competition, full-frame
halftone noise, glossy 3D, decorative sticker clutter, pseudo-Chinese, logos,
signatures, and watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `ACCENT_TARGET`: choose one source-supported relationship and one color; never
  rotate red, blue, and yellow in the same output.
- `TEXT_HANDLING`: normally `no text`, `one short checked note`, or
  `deterministic text region`.
- `FORBIDDEN`: add only topic-specific identity or factual constraints; keep the
  one-accent and whitespace budget unchanged.

## Fidelity Gate / 保真门

- Black handdrawn contour, one accent, fine bounded halftone, and active whitespace
  remain visible before any brand association is considered.
- The supplied subject and action are readable without relying on the text zone.
- Exactly one accent color is semantic and traceable to the score.
- Halftone dots stay local and subordinate; paper remains near-white and open.
- Removing brand, material, and color words still leaves the same supported
  vignette, pair, or text-zone structure.

- 在联想到任何品牌前，粗黑手绘轮廓、一种强调色、局部半调点和主动留白已经成立；
- 不依赖文字区也能读出主体和动作；
- 恰好一种强调色具有语义，并能追溯到视觉评分；
- 半调点局部且退后，纸面近白且开放；
- 去掉品牌、材质和颜色词后，支持的小景、对照或文字区结构仍然成立。

## Failure Recovery / 失败恢复

- If the image becomes a generic vector illustration, restore line pressure and
  remove smooth fills before changing the subject.
- If the page becomes noisy, delete halftone outside the subject or evidence plane
  and restore the near-white field.
- If multiple colors compete, keep only the accent tied to the supplied action or
  object and return the rest to black and paper.
- If text carries the meaning, strengthen the visual relation first and reserve
  exact copy for deterministic post-layout.
