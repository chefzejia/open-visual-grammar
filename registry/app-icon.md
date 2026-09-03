# Registry: App Icon

Use this route for app icons, product symbols, compact mascot marks, and other
square visual identities whose first read must survive at small display sizes.

## Load Order

1. Read this registry.
2. Pick one Pattern whose silhouette and material language fit the icon function.
3. Read `patterns/<pattern>/PATTERN.md`.
4. Read `patterns/<pattern>/adapters/image-generation.md` if it exists.
5. Read `runtimes/image-generation.md` when compiling the final prompt.

Do not route an icon request through `image-cover` just because both outputs are
images. An icon has a square boundary, a semantic silhouette, and a small-size
legibility contract that a cover does not own.

## Patterns

| Pattern | Best fit | Avoid when |
| --- | --- | --- |
| `soft-2-5d-icon` | compact app or product icons with one clear silhouette, one functional cue, and controlled shallow depth | long text, multi-object scenes, exact UI screenshots, dense illustration, or photoreal evidence |

## Required Output

Before generation, produce an icon score with:

```text
Artifact kind: app-icon
Runtime: image-generation
Platform:
Aspect ratio:
Audience:
Icon function:
First read:
Silhouette:
Key feature:
Depth relation:
Color identity:
Pattern:
Pattern fidelity anchors:
Pattern density:
Text handling:
Pattern temperature:
Topic-specific forbidden:
```

The first-read sentence, silhouette, and key feature must explain the function
without relying on a label. Keep the same identity across platform variants;
platform framing is a runtime detail, not a second art direction.
