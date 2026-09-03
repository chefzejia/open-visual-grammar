# Patterns

A pattern is a reusable visual abstraction.

Agents should not start here. Start at:

```text
../CATALOG.md
```

Then open one `registry/*.md`, then one pattern.

It is defined by stable visual invariants:

- first read;
- hierarchy;
- composition behavior;
- material and texture;
- density;
- emotional temperature;
- transfer boundaries;
- failure modes.

Recommended scenes help agents choose. They do not lock a pattern to one
channel.

Historical transfer checks that remain useful are distilled into
Pattern-local `iteration.md` files. The complete migration map is in
`docs/pattern-iteration-index.md`; it records durable learning without creating
a second routing or lifecycle surface.

Pattern slugs and directories use English kebab-case. Each `PATTERN.md` should
be bilingual in one file, with Chinese and English names, definition,
invariants, fit, weak-fit, and avoid rules.

Each `PATTERN.md` begins with a small YAML metadata block for agent routing.
Keep it small: id, artifact kinds, runtimes, when to use, when to avoid, and
load-next hints.

## Current Patterns

| Pattern | Invariants |
| --- | --- | --- |
| `big-character-poster` | Dominant headline, public attitude, concrete evidence, rough print energy, strong first read. |
| `print-menu-layout` | Print-ready hierarchy, menu sections, price scanning, hospitality print tone. |
| `eastern-texture-handdrawn` | Chinese paper texture, loose handdrawn line, low saturation, metaphor and whitespace. |
| `pixel-retro` | Pixel blocks, retro game logic, clear silhouette, geek/tool atmosphere. |
| `narrative-journal-infographic` | Handdrawn timeline, comparison, workflow, notes, readable structure. |
| `picture-book-sequence` | Child-safe page-turn storytelling, recurring anchors, one beat per page, controlled material branches. |
| `whimsical-journal-sketch` | Watercolor sketch, marker texture, collage, casual warmth. |
| `flowing-gaze-minimal-cover` | One subject, negative space, unusual viewpoint, pen/etching texture. |
| `minimal-handdrawn-linework` | Clean linework, controlled contrast, low saturation, premium restraint. |
| `limited-color-print-editorial` | Warm paper, one dominant ink, one large structural plane, local print pressure, shared type-image axes. |
| `frosted-silhouette-editorial` | Regional frosted reveal, geometric silhouette, controlled negative space, quiet editorial distance. |
| `paper-sculpture-collage-editorial` | Layered cut-paper planes, meaningful occlusion, matte depth, source-aware color, quiet editorial warmth. |
| `soft-2-5d-icon` | One square silhouette, one functional cue, shallow soft depth, small-size legibility. |
| `thermal-receipt-poster` | Continuous receipt silhouette, exact short record fields, thermal-paper print texture, dry human observation. |
| `semantic-concept-poster` | Short exact text as the visual object, one precise metaphor relation, premium editorial restraint. |
| `retro-pixel-halftone-tech-editorial` | One quickly legible technical narrative, one-bit pixel and halftone material, one controlled signal color. |
| `whiteboard-operator-sketch` | White-background GanFan threadball worker, sparse Chinese labels, one low-tech physical action. |
| `interwoven-portrait-type-cover` | Recognizable portrait, one short title, explicit occlusion map, shared perspective, protected face and mobile safe zones. |
| `restrained-editorial-slide-system` | One reading task per page, shared editorial grid, exact type hierarchy, bounded evidence, restrained ink roles. |
| `adaptive-rembrandt-portrait` | Structure-aware key light, identity-first studio portrait, clean charcoal field, ratio preservation. |
| `city-observation-poster` | Ordinary city action, authorized subject, giant place marker, blue/cyan screenprint note. |
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

Every entry here is a formal Pattern. Add one when the method is clear enough
to implement, then iterate it in place or delete it when the method fails.
