# YouMind Crayon Portrait Calibration / YouMind 蜡笔肖像校准

This Pattern adapter distills the public YouMind `蜡笔肖像` description into a
source-safe, identity-preserving portrait method. It keeps the live-drawing
paper, dry crayon pressure, restrained structural color, and open whitespace
without copying a source face, outfit, or creator-specific treatment.

这份 Pattern adapter 将公开 YouMind `蜡笔肖像` 的描述提炼为不依赖来源的身份保留肖像方法。
它只保留现场绘画纸面、干擦蜡笔笔压、克制结构色和开放留白，不复制来源脸部、服装或创作者的特定处理。

## Style Signature / 风格签名

- A portrait remains recognizable through face shape, hair pattern, expression, and one or two supplied details before the material is noticed.
- The field is white or near-white drawing paper with visible fiber, dry rubbing, broken strokes, and open edges; it is not a polished digital painting.
- Most facial and clothing areas stay paper-white. Warm coral, pink, brick, cool blue, or peacock notes appear only where they clarify a structural turn or shadow.
- Hair uses a warm, limited value range with deliberate density changes rather than a solid digital fill.
- A simple one-color side wash may support the shoulders, but it stops near the contour and leaves the head and lower page breathing.
- Identity fidelity is observational, not caricature. Freckles, glasses, earrings, stray hairs, and fabric cues are retained only when supplied and legible.

- 肖像先靠脸型、发型节奏、表情和一两个来源细节保持可辨，再让材质出现；
- 画面是白色或近白色素描纸，能看见纸纤维、干擦、断续笔触和开放边缘，不做精修数字绘画；
- 面部和服装大部分留白，只在结构转折或阴影提示处使用珊瑚、粉、砖红、冷蓝或孔雀色；
- 头发使用温暖且受限的明暗范围，通过密度变化而非数字色块建立体积；
- 可以用单色侧向底洗轻托肩部，但要贴合轮廓，在头部周围和页面下方留出呼吸；
- 身份保真来自观察，不靠夸张变形。雀斑、眼镜、耳环、散发和面料线索只有在来源提供且清晰时才保留。

## Composition Families / 构图家族

1. **Open-paper bust:** a chest-up portrait sits slightly off-center on a large paper field; one supplied detail carries the first recognition cue.
2. **Live-study crop:** a tighter head-and-shoulders crop uses a small one-color side wash and leaves an unfinished lower edge, as if drawn in one sitting.
3. **Quiet diptych:** two supplied portraits or expressions share the same paper and color budget only when the brief contains a real comparison; each face must remain independently identifiable.

1. **开放纸面半身像：** 肖像略偏心落在大面积纸面中，一个来源细节承担第一眼识别；
2. **现场速写裁切：** 头肩近景配小面积单色侧向底洗，下缘保留未完成感，像一次画完的现场记录；
3. **安静双联画：** 只有简报中存在真实对照时才并置两张肖像，共用纸面和色彩预算，每张脸都必须独立可辨。

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Crayon Portrait Editorial Pattern with the YouMind crayon-portrait
calibration. Preserve the supplied person's face shape, hair pattern,
expression, pose, and one or two identity details before stylizing. The portrait
must be recognizable without a name, title, or accessory label.

Place one open-paper bust, live-study crop, or quiet diptych on white or near-
white drawing paper. Show fiber, dry rubbing, broken pressure, and unfinished
edges. Keep most skin, clothing, and the lower page as paper-white. Use a small
structural color budget: warm hair values plus only a few coral, pink, brick,
cool-blue, or peacock marks where they clarify a supplied facial plane or
shadow. A simple one-color side wash may support the shoulders but must stop at
the contour. Keep the expression natural and observational; do not beautify,
age, caricature, or invent features.

Reserve exact names, quotes, and captions for deterministic post-layout. Avoid
photoreal skin, glossy digital painting, yellowed grime, full-bleed backgrounds,
heavy makeup, costume invention, sticker packs, random text, logos, signatures,
and watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- Face shape, hair pattern, expression, and supplied details identify the person before paper texture is noticed.
- White paper and open edges remain visible; dry crayon pressure reads as material rather than blur or digital noise.
- Most areas stay unfilled, with a small structural accent palette and no yellow cast.
- Any side wash supports the silhouette and does not compete with the face.
- The portrait remains observational and non-caricatured across unrelated people or roles.
- Removing color and texture still leaves the same identity and composition.

## Failure Recovery / 失败恢复

- If the portrait becomes generic, restore face contour, hair rhythm, and one supplied feature before adding any color.
- If the surface becomes a polished digital painting, return large areas to paper white, break the stroke, and expose dry rubbing.
- If color takes over, remove every mark that does not clarify a structural plane; keep a warm hair range and a few cool shadow cues.
- If the background competes, reduce it to a one-color side wash that stops at the shoulders and reopen the page around the head.
- If the result caricatures the subject, undo proportion changes and re-check the supplied expression and pose.
