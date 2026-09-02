# YouMind Emotional Metaphor Transfer / YouMind 情绪隐喻迁移

This case tests the optional emotional-metaphor-editorial adapter distilled from
the public YouMind gallery. It checks whether a short line, one Aha relation,
and a restrained single-anchor palette transfer without copying lyrics, film
scenes, artist styles, or named IP.

本用例测试从 YouMind 公开技能提炼的情绪隐喻编辑 adapter，检查短句、一个 Aha 关系和单一强调色能否迁移，
同时不复制歌词、电影场景、艺术家风格或具体 IP。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Pattern: `semantic-concept-poster`
- Adapter: `adapters/youmind-emotional-metaphor-editorial.md`
- Source study: `docs/youmind-style-atlas.md`

## Fixed Topic Pairs / 固定主题对

| Topic | Core text | Visual relation | Semantic anchor |
| --- | --- | --- | --- |
| a team saves time by skipping a handoff | 省下的交接，最后会变成加班。 | pressure | one small red mark that grows where the missing handoff should be |
| a neighborhood loses its evening shade | 没有人说再见，街道却慢慢变亮。 | measured distance | one high-purity amber window separated from a quiet blue-grey field |

Use the same audience and `16:9` horizontal format for all candidates within a
topic. The lines above are test text, not source quotations.

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Primary source:
Reader pain:
False belief:
Correction:
Stakes:
First read:
Concrete evidence:
Visual action:
Why it bites:
Main subject:
Pattern layout route:
Layout instance:
Pattern:
Pattern fidelity anchors:
Pattern density:
Text handling:
Topic-specific forbidden:
```

Also record `EMOTIONAL_SOURCE`, `CORE_TEXT`, `HIDDEN_TENSION`,
`VISUAL_RELATION`, and `MAIN_SUBJECT` for the adapter slots.

## Three-Candidate Requirement / 三候选要求

Generate exactly three posters for each topic:

1. primary route: the clearest emotional pressure, distance, or reveal;
2. alternate route: another supported relation with the same core text;
3. boundary probe: remove secondary marks and keep only the text, one relation, and one semantic anchor.

All three candidates must keep the same text, audience, aspect ratio, and
visual argument. Do not change the relation merely to create a new mood.

## Pass Signals / 通过信号

- The short line is the first read and the chosen relation is understandable without a caption.
- One form, gap, force, or opening makes the hidden tension visible; no literal scene takes over.
- Low-saturation field and one high-purity anchor remain restrained and semantic.
- The poster reads as a designed editorial object rather than a text template or ad banner.
- Removing lyric, film, poetry, or artist framing leaves the same text-to-metaphor method.
- No source quotation, named IP, creator style imitation, or generated pseudo-Chinese appears.

## Failure Signals / 失败信号

- The image is a decorative illustration with text pasted beside it.
- More than one metaphor or several bright accents compete with the core line.
- The palette becomes a showcase, a gradient, or a generic AI atmosphere.
- The text is misspelled, cropped, too small, or carries the whole argument alone.
- The output depends on a copied song, film, celebrity, artist, or exact composition.
- A candidate requires a layout outside `semantic-concept-poster`.

Store prompts and generated candidates in the consuming project's `_work/`
directory, not in this repository. Feed only operator-reviewed learning back
into the adapter or its anti-patterns.
