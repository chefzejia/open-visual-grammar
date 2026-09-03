# Registry: Image Cover

Use this route for X covers, article cards, documentation hero images, generated
posters, and other single-image editorial assets.

## Load Order

1. Read this registry.
2. For a public editorial cover, read `grammar/visual-argument.md` and finish
   the visual argument before selecting a pattern.
3. Pick one pattern whose visual language fits the completed argument.
4. Read `patterns/<pattern>/PATTERN.md`.
5. Follow the Pattern's own layout routing and adapt the selected route to the
   approved action, subject, evidence, aspect ratio, and channel. Do not invent
   a composition outside the Pattern.
6. Read `patterns/<pattern>/refs/README.md` only when visual calibration matters.
7. Read `patterns/<pattern>/adapters/image-generation.md` if it exists.
8. Read `runtimes/image-generation.md` only when compiling the final prompt.
9. Read `grammar/density.md` or `grammar/metaphor-distance.md` only when the
   completed argument still leaves that specific decision unresolved.

Pattern selection is downstream of meaning. A pattern owns material,
hierarchy, typography, layout routes, density, color behavior, and
emotional temperature; it must not choose the article's claim, visual action,
main subject, or evidence. If a channel constraint removes the pattern's style
signature, select another pattern instead of keeping only its material words.

## Patterns

| Pattern | Best fit | Avoid when |
| --- | --- | --- |
| `big-character-poster` | public feed covers with a sharp correction, strong first read, and concrete evidence object | neutral docs hero, calm premium page, exact UI proof |
| `narrative-journal-infographic` | handdrawn timelines, workflows, comparisons, system maps | pure mood image, exact data chart |
| `flowing-gaze-minimal-cover` | quiet reflective covers with one subject and large negative space | urgent tutorial, high-density checklist |
| `pixel-retro` | playful technical systems, tool paths, runtime cost, game-like logic | premium corporate document, realistic proof |
| `eastern-texture-handdrawn` | slow editorial metaphor, paper texture, restraint | hard technical proof, dense explainer |
| `whimsical-journal-sketch` | warm approachable journal-collage, creative notes, lighter technical entry | serious financial warning, strict product proof |
| `minimal-handdrawn-linework` | quiet concept illustration with one clear relation | strong public conflict, high-density explainer |
| `limited-color-print-editorial` | tactile editorial covers with one large silhouette or plane, warm paper, one dominant ink, and local charcoal or print pressure | full-color photography, glossy depth, dense diagrams, unrestricted palettes |
| `frosted-silhouette-editorial` | quiet geometric covers using regional reveal levels, silhouettes, and controlled negative space | exact UI proof, dense tutorials, uniform blur, glossy glass effects |
| `paper-sculpture-collage-editorial` | tactile editorial covers rebuilt from layered cut-paper planes, meaningful occlusion, and source-aware color | exact UI proof, dense tutorials, photographic evidence, glossy 3D, long copy |
| `thermal-receipt-poster` | vertical social records with verified short fields, a continuous receipt silhouette, thermal-paper material, and dry human observation | dense data, long copy, fake measurements, exact UI proof, or scene-led illustration |
| `semantic-concept-poster` | horizontal concept posters where one short sentence must be the main visual object and the image reveals its hidden tension | exact UI proof, dense tutorials, long commands, decorative text-on-background covers |
| `retro-pixel-halftone-tech-editorial` | technical editorials where one conflict or human-system relation should become a framed, information-rich pixel-halftone plate | sparse spot illustration, photographic proof, exact UI, multi-step tutorials, mood-only covers |
| `whiteboard-operator-sketch` | white-background GanFan threadball sketches for docs body images, WeChat inline teaching images, agent workflows, token/context metaphors | strong X hooks, full PPT-style decks, serious risk arguments, exact UI proof, polished product hero, formal diagrams |
| `interwoven-portrait-type-cover` | portrait-led social covers where one short title shares perspective and occlusion with an authorized recognizable person | long copy, identity-unsafe edits, group scenes, exact UI proof, detached text overlays |

## Required Output

Before generation, produce a visual score with:

```text
Artifact kind: image-cover
Runtime: image-generation
Visual job:
Primary source:
Supporting sources:
Source inclusion rule:
Reader pain:
False belief:
Correction:
Stakes:
First read / cover sentence:
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
Pattern reference handling:
Pattern temperature:
Topic-specific forbidden:
```

The first-read sentence, visual action, main subject, and concrete evidence must
make the correction recoverable without reading the source article. The chosen
layout route must come from and preserve the selected Pattern's style signature. If the
score only communicates the broad topic, stop and revise the visual argument.

Select the pattern only after those semantic fields are fixed, then compile the
score into the image runtime. The prompt is a one-off compiled artifact and does
not belong in Open Visual Grammar.
