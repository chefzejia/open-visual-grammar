# Image Generation Adapter / 图像生成 Adapter

Use this adapter for the image-generation branch of
`limited-color-print-editorial`. It is calibrated by the public YouMind
`雕塑感蓝色炭笔插画` page, but it does not require a classical figure, cobalt
blue, or any source composition.

这份 adapter 用于 `limited-color-print-editorial` 的图像生成分支。它参考公开 YouMind
“雕塑感蓝色炭笔插画”，但不要求古典人物、钴蓝或来源构图。

## Required Inputs / 必填输入

```text
Artifact kind:
Audience:
Aspect ratio:
First read:
Visual action:
Main subject:
Concrete evidence:
Dominant ink role:
Text handling:
Topic-specific forbidden:
```

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Limited Color Print Editorial grammar. Begin with a warm paper ground,
one dominant ink chosen for {{DOMINANT_INK_ROLE}}, and at most one charcoal or
near-black structural ink. Build a sculptural focal field or type-led plate from
one large geometric plane and one readable silhouette. Preserve the supplied
subject, evidence, and action; do not import classical figures, arches, pottery,
or any source slogan unless the brief requires them.

Apply charcoal grain, dry rubbing, woodcut pressure, or uneven print coverage
inside established shapes. Keep edges, hierarchy, and negative space readable
before texture. Align any short title to the same axes as the image. Reserve
exact copy for deterministic post-layout when spelling matters.

Avoid full-color illustration, decorative vintage distress, gradients, glossy
3D, cinematic lighting, floating caption boxes, random text, logos, signatures,
watermarks, and {{TOPIC_SPECIFIC_FORBIDDEN}}.
```

## Fidelity Gate / 保真门

- One plane or silhouette owns the first read.
- Paper, dominant ink, and optional structural dark remain the whole palette.
- Manual pressure reads locally and never becomes full-frame noise.
- The subject and action remain recognizable without color or texture.
- Removing the source theme still leaves a transferable editorial structure.
