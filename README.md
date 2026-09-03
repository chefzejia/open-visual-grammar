# Open Visual Grammar

Open Visual Grammar is a method for turning visual intuition into executable
generation.

It is not a prompt library. A prompt is one compiled form of a visual score.
The durable asset is the grammar: the way a visual intention becomes tension,
hierarchy, density, metaphor, material, and runtime constraints.

## Why This Exists

AIGC makes it cheap to produce images, decks, shaders, videos, and interfaces.
It does not make visual judgment cheap.

Most failed generations come from weak visual invariants.

Open Visual Grammar starts earlier:

1. What should the viewer understand first?
2. What is the visual tension?
3. What must stay invariant across topics?
4. How dense should the surface be?
5. Which runtime will execute the score?

## Core Terms

| Term | Meaning |
| --- | --- |
| Grammar | Shared visual language: tension, hierarchy, density, metaphor, rhythm, temperature. |
| Pattern | A reusable visual abstraction with stable invariants, transfer boundaries, references, adapters, and examples. |
| Score | A task-specific visual plan that can compile into a prompt, shader spec, deck layout, or scene brief. |
| Runtime | The execution surface: image model, HTML/CSS, slide deck, shader, video, game engine. |

## Repository Map

```text
index.html   Human-facing visual showcase; opens directly in a browser.
CATALOG.md   Agent entry point and route selector.
registry/    Artifact-kind routing. Agents open one registry before one pattern.
grammar/     Cross-pattern visual language. Read only when a decision needs it.
patterns/    Stable visual patterns. Load one pattern at a time.
runtimes/    Cross-pattern execution constraints.
skills/      Reusable agent workflows for extracting or maintaining visual grammar.
docs/        Protocols and operating notes.
decisions/   Architecture notes and project decisions.
```

## Visual Showcase

Open [`index.html`](index.html) to browse every registered pattern and its
reviewed WebP references. The page works as a local static file and needs no
server.

The static file is the canonical delivery surface. A temporary HTTP server is
only a browser-automation fallback for environments that block `file://` URLs;
it is not an OVG runtime dependency.

Patterns self-register from `patterns/*/PATTERN.md`; reference, accepted, and
rejected images are discovered under pattern-local `refs/` and `examples/`.
Rebuild the deterministic data file after either source changes:

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
```

Do not edit `showcase-data.js` directly.

Examples live inside the pattern they belong to. One-off production prompts do
not belong in this repository.

Pattern slugs use English kebab-case for stable file paths and tool references.
Human-facing pattern documents are bilingual in the same `PATTERN.md`: Chinese
and English are both first-class operating languages.

## Agent Rule

Use progressive disclosure:

1. Read `AGENTS.md`.
2. Read `CATALOG.md`.
3. Choose one artifact kind and open one registry file.
4. Choose one routed pattern when the registry provides a fit.
5. Read that pattern's `PATTERN.md`, or follow the registry's no-pattern route
   when it explicitly allows one.
6. Open references, adapters, anti-patterns, grammar, or runtime contracts only
   when the route or pattern names them.
7. Produce a task-specific score.
8. Compile the score into the requested runtime.

Do not load the whole repository into context.

## Three Skill Entry Points

- `ovg-style-reverse`: extract style signatures, composition families, transfer boundaries, and a meta-prompt from references.
- `ovg-create`: turn a source or brief into a visual argument, select a pattern and composition family, and create an acceptable asset.
- `ovg-review`: diagnose whether a generated asset failed at the visual argument, pattern fidelity, or runtime layer.

Skills are split by task intent. Patterns remain the source of truth for visual methods; do not create one skill per style.

## Reference Assets

Operator-selected pattern references and reviewed examples use lossless WebP by
default. Each image must teach a reusable method or boundary. A Pattern may
remain image-free when no public-safe example exists; the showcase never adds
filler art. Platform delivery formats stay in the consuming project and are not
governed by this convention.

## Patterns

| Pattern | Invariants |
| --- | --- |
| `big-character-poster` | Dominant headline, public attitude, concrete evidence, rough print energy, strong first read. |
| `print-menu-layout` | Print-ready hierarchy, menu sections, price scanning, hospitality print tone. |
| `eastern-texture-handdrawn` | Chinese paper texture, loose handdrawn line, low saturation, metaphor and whitespace. |
| `pixel-retro` | Pixel blocks, retro game logic, clear silhouette, geek/tool atmosphere. |
| `narrative-journal-infographic` | Handdrawn timeline, comparison, workflow, notes, readable structure. |
| `picture-book-sequence` | Child-safe page-turn storytelling, recurring anchors, one beat per page, and controlled material branches. |
| `whimsical-journal-sketch` | Watercolor sketch, marker texture, collage, casual warmth. |
| `flowing-gaze-minimal-cover` | One subject, negative space, unusual viewpoint, pen/etching texture. |
| `minimal-handdrawn-linework` | Clean linework, controlled contrast, low saturation, premium restraint. |
| `limited-color-print-editorial` | Warm paper, one dominant ink, one large structural plane, local print pressure, shared type-image axes. |
| `frosted-silhouette-editorial` | Regional frosted reveal, geometric silhouette, controlled negative space, quiet editorial distance. |
| `paper-sculpture-collage-editorial` | Layered cut-paper planes, meaningful occlusion, matte depth, source-aware color, quiet editorial warmth. |
| `soft-2-5d-icon` | One square silhouette, one functional cue, shallow soft depth, small-size legibility. |
| `whiteboard-operator-sketch` | White-background GanFan threadball worker, handdrawn technical explanation, sparse Chinese labels. |
| `retro-pixel-halftone-tech-editorial` | Framed technical editorial plate, integrated headline and mechanism, one-bit halftone material, one signal color. |
| `semantic-concept-poster` | Short exact text as the visual object, one precise metaphor relation, premium editorial restraint. |
| `thermal-receipt-poster` | Continuous receipt silhouette, exact short record fields, thermal-paper print texture, dry human observation. |
| `interwoven-portrait-type-cover` | Recognizable portrait, one short title, explicit occlusion map, shared perspective, protected face and mobile safe zones. |
| `restrained-editorial-slide-system` | One reading task per page, shared editorial grid, exact type hierarchy, bounded evidence, restrained ink roles. |
| `adaptive-rembrandt-portrait` | Structure-aware key light, identity-first studio portrait, clean charcoal field, ratio preservation. |
| `city-observation-poster` | Ordinary city action, authorized subject, giant place marker, blue/cyan screenprint note. |
| `source-grounded-place-poster` | Real place-photo identity, four-domain art direction, integrated subject/type relation, and factual boundaries. |
| `crayon-portrait-editorial` | Identity-first portrait, open drawing paper, dry crayon pressure, restrained structural color. |
| `documentary-gold-split-editorial` | Documentary-to-flat-gold transformation, strict split, one dark derived base hue, restrained foil. |
| `dual-focal-swirl-linework` | Two distinct anchors, structural circular line path, breathable gouache field, limited blocks. |
| `fixed-era-editorial-print` | One fixed historical branch coordinating type, geometry, palette, print pressure, and whitespace. |
| `graphic-fashion-avatar` | Silhouette-first square identity mark, one accessory cue, rough edge, small-size legibility. |
| `isometric-cutaway-explainer` | Coherent isometric axes, one functional cutaway, structural support action, calm research paper. |
| `monstrous-scale-editorial` | World silhouette exits the frame, tiny witness performs one action, print-like scale argument. |
| `nested-blue-collage` | Wrinkled paper border, centered blue field, clipped inner paper, halftone subject, sparse utility cue. |
| `portrait-quote-editorial` | Authorized portrait leads, short quote occupies protected lower zone, one subordinate scene cue. |
| `retro-future-print-editorial` | Etched contours, hard warm/cool planes, visible print grain, one structural subject. |
| `single-accent-ink-editorial` | Heavy black contour, local halftone, exactly one semantic accent, active whitespace. |

Every directory under `patterns/` is a formal Pattern from its first commit.
Iteration happens by editing or deleting that Pattern; there is no candidate,
promotion, or evaluation state in the repository. Accepted source learning is
written into a Pattern in one step; rejected material stays outside the public
grammar rather than becoming a second-class Pattern.

Generated images and runtime prompts belong in the consuming project's work
folder. Only reviewed learning should flow back into this repository as
anti-patterns, adapters, or pattern-local examples.

## Reference Intake

External references may inform OVG, but raw collections do not belong here. Use
`docs/reference-intake-protocol.md` when adopting learning from X bookmarks,
websites, image collections, or private source-intake workflows.

The public repository accepts reviewed method-level learning only: references
that calibrate a pattern, examples with critique, anti-patterns, grammar
changes, or runtime constraints.

## What Belongs Here

- Stable visual patterns.
- Reference images that demonstrate a pattern.
- Anti-patterns and failure modes.
- Runtime adapters and compile rules.
- Pattern-local examples that teach the grammar.

## What Does Not Belong Here

- One-off production prompts.
- API diagnostics.
- Rejected generations without analysis.
- Private brand material.
- Raw screenshots with secrets, accounts, or customer data.
- One-off unvalidated word lists.
- General image-model benchmark suites.

One-off production artifacts should live in the consuming project's work folder,
not in this grammar repository.
