# YouMind Documentary Split Calibration / YouMind 纪实分屏校准

This optional adapter distills the public YouMind P062 description into a
controlled before/after page. The upper half retains a lightly adjusted source
record; the lower half reduces the same subject or action to sparse black
linework with one memory accent. It does not copy the source image, text, or
coordinates.

这份可选 adapter 将公开 YouMind P062 的描述提炼成受控的上下分屏页面。上半保留轻度处理后的来源记录，
下半把同一主体或动作减成稀疏黑色线稿，并留下一个记忆色点。不复制来源图片、文字或坐标。

## Style Signature / 风格签名

- A clear upper/lower split creates a documentary-to-memory transformation within one page.
- The upper plate keeps source atmosphere without becoming a second story; the lower plate deletes background and retains the key subject, relation, or action.
- Lower linework is sparse, pen-like, slightly hesitant, and intentionally not CAD-perfect.
- One tiny source-derived accent color may recur in the lower plate; the rest stays pale paper and black line.
- One or two short handwritten notes may bridge the split, following the supplied action or observed humor.
- The page feels like an independent publication insert: quiet, tactile, and lightly odd rather than nostalgic or decorative.

- 清晰的上下分屏在同一页面内制造“纪实到记忆”的转化；
- 上半保留来源氛围但不引入第二个故事，下半删去背景，只保留关键主体、关系或动作；
- 下半线稿稀疏、像钢笔手绘、略带犹豫，不做 CAD 般完美；
- 下半最多重复一个源自主体的小面积强调色，其余保持浅纸和黑线；
- 一到两句短手写字可以顺着动作或观察幽默连接上下两半；
- 页面像独立刊物内页，安静、有触感、略有古怪，不做怀旧装饰。

## Composition Families / 构图家族

1. **Documentary-to-memory split:** upper source atmosphere, lower line reduction, and one shared action.
2. **Evidence-to-gesture split:** upper concrete evidence, lower simplified gesture or relation, with no invented object.
3. **Quiet split note:** a short handwritten bridge crosses the whitespace without becoming a headline.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Minimal Handdrawn Linework grammar with the YouMind documentary-split
calibration. Divide one page into a clear upper and lower plate. Keep the upper
plate as a lightly adjusted source atmosphere or concrete evidence; do not add a
second story. In the lower plate, delete background complexity and preserve only
the key subject, relation, and {{VISUAL_ACTION}} as sparse black pen linework.

Keep the lower lines hesitant, open, and hand-corrected rather than CAD-perfect.
Extract at most one tiny accent color from {{MAIN_SUBJECT}} or
{{CONCRETE_EVIDENCE}} and use it as a memory flash in the lower plate; keep the
rest pale paper and black line. Let one or two short handwritten notes bridge the
split only when they clarify {{VISUAL_ACTION}} and obey {{TEXT_HANDLING}}.

Preserve large active whitespace and an independent-publication rhythm. Avoid
full-color illustration, equal-detail halves, decorative frames, generic titles,
nostalgic grime, random text, logos, signatures, and watermarks. {{FORBIDDEN}}
```

## Fidelity Gate / 保真门

- The upper/lower transformation is immediately visible and carries the same action.
- The lower plate remains recognizable without the upper image.
- Only one small accent color is used, and it is traceable to the supplied subject or evidence.
- The split is a meaningful relation, not two unrelated images stacked together.
- Removing color and paper texture still leaves a documentary-to-memory structure.
