# YouMind Fixed-Era Editorial Transfer / YouMind 固定年代编辑视觉迁移

This promotion-candidate eval tests whether the era-aware method from the public
YouMind skill transfers across unrelated subjects while one historical branch
remains fixed. The target era must own the palette, type treatment, geometry,
print texture, and whitespace; it must not become a generic vintage filter or a
copied historical poster.

本用例用于晋级前测试，判断公开 YouMind 年代视觉方法能否在无关主题之间迁移，同时固定一个
历史分支。目标年代必须同时约束配色、字体、几何、印刷质感和留白，不得退化成泛复古滤镜，
也不得临摹具体历史海报。

## Artifact Kind / 交付类型

- Artifact kind: `image-cover`
- Runtime: `image-generation`
- Status: promotion candidate; no canonical Pattern yet
- Source study: `docs/youmind-style-atlas.md`
- Public source: [中国近现代年代风格视觉设计](https://youmind.com/~skills/01a03e1b-999f-71d5-a151-12d1768a4486)

## Fixed Input Contract / 固定输入契约

Use one target branch for the entire run: **1940s limited-color woodcut
editorial**. Keep the same `2:3` aspect ratio, audience, visual job, and short
text policy across all candidates and both topics. Do not add period celebrities,
historical slogans, uniforms, flags, or copied poster coordinates merely to make
the era legible.

| Topic | Physical action | Evidence object | Reader question |
| --- | --- | --- | --- |
| Repair cooperative finds the missing part that keeps a bicycle lamp dark | a hand seats one small part and the beam reconnects | loose screw, lamp housing, narrow beam | what single omission blocks the system? |
| Neighborhood library reopens a shaded reading room after summer heat | a folding shade screen redirects light around the reading table | sun patch, screen slats, open doorway, book stack | what small intervention makes the room usable? |

The semantic topics are contemporary and unrelated to the source skill. The
visual system must remain 1940s across both rows; changing the target era between
topics invalidates the transfer probe.

## Required Visual Argument / 必填视觉论证

Before compiling a runtime prompt, record:

```text
Visual job:
Audience:
Aspect ratio:
Target era branch:
Era rationale:
Physical action:
Concrete evidence:
First read:
Palette and ink budget:
Typography treatment:
Geometry and mark language:
Whitespace plan:
Pattern route:
Pattern fidelity anchors:
Text handling:
Topic-specific forbidden:
```

`Era rationale` must explain why the fixed branch changes the whole visual
system, not only the paper tint. The score must state what the reader learns from
the physical action and evidence object before any long title is read.

## Three-Candidate Requirement / 三候选要求

Generate exactly three candidates for each topic while keeping the score and
target era fixed:

1. `Woodcut Action`: an asymmetrical poster plate where the carved mark and one
   limited-color plane carry the action.
2. `Quiet Cover`: the same 1940s system with more active paper and whitespace;
   the evidence object stays readable at thumbnail size.
3. `Type-Geometry Plate`: the short title participates in the geometric frame or
   band while the physical relation remains visible without relying on text.

These are composition routes inside one era system, not three period styles. If a
candidate needs a different decade, glossy realism, a modern UI, or a copied
historical layout to read, record a transfer failure instead of changing the
route.

## Pass Signals / 通过信号

- The fixed 1940s branch is visible as a coordinated system of limited color,
  display type, asymmetry or block geometry, woodcut/print marks, paper, and
  deliberate whitespace.
- The subject, physical action, and evidence object are identifiable before
  texture inspection; the action survives when the title is removed.
- Both unrelated topics use the same era system without importing historical
  characters, slogans, props, or exact source composition.
- The palette remains bounded and semantic; texture supports the relation rather
  than disguising a generic illustration.
- All three candidates differ by structural solution, not by hue, crop, or a
  superficial “old poster” treatment.
- Exact text is short and checked or reserved for deterministic typesetting.

## Fail Signals / 失败信号

- Only yellowed paper, grain, or distressed edges indicate the era while type,
  geometry, and palette are contemporary or generic.
- The result becomes a propaganda imitation, museum reproduction, or nostalgic
  collage with no topic-specific action.
- One topic works only because it borrows a period object, slogan, figure, or
  source-specific layout.
- Text is long, pseudo-Chinese, misspelled, or carrying the visual argument that
  the image should carry.
- The three candidates are merely palette or camera changes, or one candidate
  requires an unsupported composition family.

## Run Record / 运行记录

Store prompts, generated candidates, and operator decisions in the consuming
project's `_work/` directory. Only reviewed, reusable learning may return to the
atlas or a future Pattern.
