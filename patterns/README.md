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

Pattern slugs and directories use English kebab-case. Each `PATTERN.md` should
be bilingual in one file, with Chinese and English names, definition,
invariants, fit, weak-fit, and avoid rules.

Each `PATTERN.md` begins with a small YAML metadata block for agent routing.
Keep it small: id, status, artifact kinds, runtimes, when to use, when to avoid,
and load-next hints.

## Current Patterns

| Pattern | Status | Invariants |
| --- | --- | --- |
| `big-character-poster` | canonical | Dominant headline, public attitude, concrete evidence, rough print energy, strong first read. |
| `print-menu-layout` | candidate | Print-ready hierarchy, menu sections, price scanning, hospitality print tone. |
| `eastern-texture-handdrawn` | seed | Chinese paper texture, loose handdrawn line, low saturation, metaphor and whitespace. |
| `pixel-retro` | seed | Pixel blocks, retro game logic, clear silhouette, geek/tool atmosphere. |
| `narrative-journal-infographic` | seed | Handdrawn timeline, comparison, workflow, notes, readable structure. |
| `whimsical-journal-sketch` | seed | Watercolor sketch, marker texture, collage, casual warmth. |
| `flowing-gaze-minimal-cover` | seed | One subject, negative space, unusual viewpoint, pen/etching texture. |
| `minimal-handdrawn-linework` | seed | Clean linework, controlled contrast, low saturation, premium restraint. |
| `limited-color-print-editorial` | seed | Warm paper, one dominant ink, one large structural plane, local print pressure, shared type-image axes. |
| `frosted-silhouette-editorial` | seed | Regional frosted reveal, geometric silhouette, controlled negative space, quiet editorial distance. |
| `paper-sculpture-collage-editorial` | seed | Layered cut-paper planes, meaningful occlusion, matte depth, source-aware color, quiet editorial warmth. |
| `soft-2-5d-icon` | seed | One square silhouette, one functional cue, shallow soft depth, small-size legibility. |
| `thermal-receipt-poster` | seed | Continuous receipt silhouette, exact short record fields, thermal-paper print texture, dry human observation. |
| `semantic-concept-poster` | seed | Short exact text as the visual object, one precise metaphor relation, premium editorial restraint. |
| `retro-pixel-halftone-tech-editorial` | seed | One quickly legible technical narrative, one-bit pixel and halftone material, one controlled signal color. |
| `whiteboard-operator-sketch` | seed | White-background GanFan threadball worker, sparse Chinese labels, one low-tech physical action. |
| `interwoven-portrait-type-cover` | seed | Recognizable portrait, one short title, explicit occlusion map, shared perspective, protected face and mobile safe zones. |
| `restrained-editorial-slide-system` | seed | One reading task per page, shared editorial grid, exact type hierarchy, bounded evidence, restrained ink roles. |

## Candidate Policy

Candidate patterns may live here as seeds when they preserve reusable visual
DNA. Mark their status clearly.

Do not promote a pattern only because a model produced an attractive image once.
The reusable object is the method, not the generated output.
