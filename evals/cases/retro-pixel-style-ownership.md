# Case: Retro Pixel Style Ownership

## Job

Test whether `retro-pixel-halftone-tech-editorial` keeps a strong visual identity
when the article topic changes, without copying a prior article layout.

## Pattern

`patterns/retro-pixel-halftone-tech-editorial/PATTERN.md`

Inspect the Pattern-owned accepted example before compiling:

`patterns/retro-pixel-halftone-tech-editorial/examples/agent-personal-capacity/accepted.webp`

## Semantic Input

- First read: `同一个模型，换个 Agent 就像换了一个人`
- Correction: the model stays identical while the surrounding Agent changes what it can see, call, and complete.
- Visual action: the same model reaches only conversation in one environment and reaches files, tools, permissions, and an accepted result in another.
- Main subject: the same model shown twice.
- Concrete evidence: speech bubble, file, terminal, permission, tool, accepted result.

These fields own meaning only. They do not authorize a new palette, perspective,
object-construction language, or editorial layout.

## Pass Signals

- Warm paper white visibly dominates; black builds the frame and flat diagrams;
  safety orange is the only signal color.
- The result is a framed, information-rich technology broadsheet at first read.
- Objects are flat, front-facing or orthographic pixel-editorial symbols.
- The headline, one explanatory relation, proof modules, and narrow functional
  band share one editorial structure.
- The runtime prompt contains no style decision that cannot be traced to the Pattern.
- The new topic changes the semantic scene without becoming a template copy of
  the accepted example.

## Fail Signals

- The prompt introduces cobalt, neon, cinematic lighting, 3D perspective, or a
  large black interface surface.
- Abstract software concepts become cartridges, chassis, futuristic cores, or
  cable-heavy control panels without source evidence.
- Pixel texture remains, but the result reads first as a sci-fi dashboard,
  arcade panel, or modern infographic.
- The operator needs the previous article cover to explain what the style should be.

## Acceptance Question

If the title and topic-specific objects were removed, would the remaining frame,
palette, object language, hierarchy, density, material, and temperature still be
identifiable as this Pattern? If not, reject the compilation before generation.
