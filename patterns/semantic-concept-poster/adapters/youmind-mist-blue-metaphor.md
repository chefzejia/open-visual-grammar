# YouMind Mist-Blue Metaphor Calibration / YouMind 雾蓝单隐喻校准

This optional adapter distills the public YouMind `隐喻标题插画` description
into a brand-neutral horizontal editorial-cover method. It preserves short text
as the visual subject, one precise metaphor, mist-blue and off-white restraint,
and a bounded warm accent without copying a source composition or slogan.

这份可选 adapter 将公开 YouMind “隐喻标题插画”的描述提炼为品牌中立的横向编辑封面方法。
它保留短文字主视觉、单一准确隐喻、雾蓝与米白的克制关系和受控暖色强调，不复制来源构图或口号。

## Style Signature / 风格签名

- Use a `16:9` horizontal frame with generous inner whitespace; the composition
  must read as an editorial cover, not a banner full of modules.
- Keep one short, checked core text as the dominant visual object. The metaphor
  must alter, support, expose, or obstruct that text through one clear relation.
- Build a restrained palette from mist blue and off-white with at most one warm
  accent. The accent should mark the semantic hinge, not decorate the canvas.
- Use granular spray or soft print grain locally around the metaphor or text
  relation; keep the paper field clean and avoid uniform noise.
- Let one or two necessary shapes, objects, or marks remain. Empty space carries
  tone and gives the text room to breathe.
- If exact text cannot be rendered reliably, generate a text-free base with a
  reserved deterministic text region; never let pseudo-lettering carry meaning.

- 使用 `16:9` 横向画幅和充足内留白，整体像编辑封面，不像模块堆满的 banner；
- 一个短且已核验的核心文字是主视觉对象，隐喻通过一个明确关系改变、托举、暴露或遮挡它；
- 以雾蓝和米白建立克制配色，最多一个暖色强调，且只标记语义转折；
- 喷绘颗粒或柔和印刷颗粒只在隐喻/文字关系附近局部出现，纸面保持干净；
- 只保留一两个必要形状、物件或标记，留白承担情绪并给文字呼吸空间；
- 精确文字无法稳定生成时，输出无字底图并预留确定性排版区，不能让伪文字承担意义。

## Composition Families / 构图家族

1. **Text under pressure:** a single force, fault, or field changes the reading of
   the core text without obscuring it.
2. **Text and small reveal:** one small object or opening exposes the hidden
   meaning behind the sentence.
3. **Text in distance:** two related forms or a measured gap make the sentence's
   tension visible while the text remains dominant.

1. **文字受压：** 一个压力、断层或场域改变核心文字的阅读方式，但不遮住文字；
2. **文字与小型揭示：** 一个小物件或开口揭示句子背后的隐藏含义；
3. **文字处于距离中：** 两个相关形式或一段可感知距离让句子张力显形，文字仍然主导。

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at 16:9 horizontal format.

The upstream visual argument is authoritative:
- Core text: {{CORE_TEXT}}
- Literal meaning: {{LITERAL_MEANING}}
- Hidden tension: {{HIDDEN_TENSION}}
- Best visual relation: {{VISUAL_RELATION}}
- Main subject or evidence: {{MAIN_SUBJECT}}
- Text handling: {{TEXT_HANDLING}}

Use the Semantic Concept Poster Pattern with the YouMind Mist-Blue Metaphor
calibration. Keep {{CORE_TEXT}} short, exact, dominant, and integrated with the
image. Choose Text Under Pressure, Text and Small Reveal, or Text in Distance
according to {{VISUAL_RELATION}}; use one relation only.

Build a restrained 16:9 editorial cover from mist blue and off-white, with at most
one warm accent tied to {{HIDDEN_TENSION}}. Keep generous active whitespace and
one or two necessary shapes or objects. Use granular spray or soft print grain
only near the semantic relation; do not cover the frame with texture. The viewer
must read the text first and understand the metaphor second.

When exact text matters, render only the short checked text or reserve a clean
deterministic text region for post-layout. Do not copy any source slogan,
composition, or brand artwork.

Avoid generic AI fog, robots, neural networks, circuit boards, SaaS banners,
PPT title pages, decorative symbol piles, glossy 3D, high-saturation gradients,
full-frame noise, long generated text, pseudo-Chinese, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `CORE_TEXT`: keep it short enough for a single readable line or a deliberate
  two-line break; verify spelling outside the image model when required.
- `VISUAL_RELATION`: name one action such as pressure, obstruction, reveal,
  distance, echo, or exposure; do not stack several metaphors.
- `TEXT_HANDLING`: choose `short checked text` or `deterministic text region`.
- `FORBIDDEN`: add topic-specific literal shortcuts or symbols only when they
  would make the metaphor generic or misleading.

## Fidelity Gate / 保真门

- The short text is the first read and remains legible at feed size.
- One visual relation makes the hidden tension visible without a second story.
- Mist blue, off-white, and one warm accent remain restrained and semantic.
- Spray/print grain is local and subordinate; whitespace stays active.
- Removing the palette and material words still leaves the same text-metaphor
  relationship and supported horizontal structure.

- 短文字是第一眼信息，在信息流尺寸仍然清楚；
- 一个视觉关系让隐藏张力显形，不引入第二个故事；
- 雾蓝、米白和一种暖色保持克制且具有语义；
- 喷绘/印刷颗粒局部且退后，留白仍然主动；
- 去掉配色和材质词后，文字—隐喻关系及横向结构仍然成立。

## Failure Recovery / 失败恢复

- If the text becomes a caption beside an unrelated image, return to one relation
  that changes the text's meaning and enlarge the text block.
- If the frame feels like generic AI fog, replace the atmosphere with a concrete
  pressure, reveal, distance, or obstruction tied to the score.
- If the palette becomes decorative, remove the warm accent or tie it to the
  semantic hinge and restore off-white space.
- If exact wording fails, remove generated text and use deterministic post-layout.
