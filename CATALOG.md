# Open Visual Grammar Catalog

This is the agent entry point.

Do not browse the repository. Route first, then load one pattern capsule.

## Routing Steps

1. Identify the artifact kind.
2. Open exactly one registry file.
3. Pick one pattern when the registry provides a fit.
4. Read that pattern's `PATTERN.md`.
5. If the registry explicitly allows work without a pattern, load only the
   named grammar and runtime contracts.
6. Read only the adapter, grammar, runtime contract, refs, or examples named by
   the selected pattern and registry route.

## Artifact Kinds

| Artifact kind | Registry | Use when |
| --- | --- | --- |
| `image-cover` | `registry/image-cover.md` | X covers, article cards, docs hero images, generated posters |
| `app-icon` | `registry/app-icon.md` | App icons, product symbols, compact mascot marks |
| `deterministic-layout` | `registry/deterministic-layout.md` | HTML/CSS, Typst, PDF, print-ready or customer-facing fixed layouts |
| `shader-effect` | `registry/shader-effect.md` | WebGL/GLSL-style fields, light, material, motion, invisible systems |
| `motion-video` | `registry/motion-video.md` | Video compositions, animated covers, motion explainers |

## Reverse A Visual Style

When the task starts from reference images and asks to reverse-engineer a style
or extract a reusable meta-prompt, read:

```text
skills/ovg-style-reverse/SKILL.md
```

The current public-safe YouMind intake study is documented in
`docs/youmind-style-atlas.md`. Use it as a routing aid after reading the skill;
it records cluster evidence and promotion status, not one-off prompts or raw
third-party images.

For source discovery beyond YouMind, use `docs/style-discovery-sources.md`. It
maps high-signal archives to the visual evidence they can teach and keeps raw
inspiration separate from OVG promotion.

The first bounded implementation is recorded in
`docs/style-discovery-batch-2026-09.md`; load it when a source-discovery task
needs current evidence, promotion decisions, or the latest stop condition.

The skill separates stable visual grammar from content-specific variables, then
routes the result into an existing pattern or a new seed pattern. It does not
store one-off compiled prompts in this repository.

## Create A Visual Asset

When the task starts from an article, script, product brief, or approved claim
and asks for a cover or other visual asset, read:

```text
skills/ovg-create/SKILL.md
```

The skill owns the end-to-end compilation path from primary source to visual
argument, Pattern-owned layout route, runtime prompt, and acceptance check.

## Review A Visual Asset

When the task starts from a generated candidate and asks why it misses the
claim or reference style, read:

```text
skills/ovg-review/SKILL.md
```

The skill separates visual-argument failure, pattern-fidelity failure, and
runtime failure before recommending one correction. It does not regenerate or
overwrite an asset without an explicit request.

## Default Rule

If the request already names a delivery surface, route by artifact kind first.

Examples:

- "make an X cover" -> `image-cover`
- "make a printable menu HTML/PDF" -> `deterministic-layout`
- "make a shader effect" -> `shader-effect`
- "make a video intro" -> `motion-video`

If the request names only a visual style, route to the pattern only after
choosing the artifact kind.

If a registry says no pattern is canonical for that artifact kind, do not force
one. Use the registry's required output fields and runtime contract.

## Do Not Load By Default

- Do not read all of `patterns/`.
- Do not read all of `grammar/`.
- Do not read all of `runtimes/`.
- Do not copy one-off prompts from consuming projects.

## Core Rule

Registry owns routing.
Pattern owns visual method.
Runtime owns execution contract.
Grammar owns shared vocabulary.
