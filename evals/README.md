# Evals

This directory contains reusable evaluation cases and rubrics for Open Visual
Grammar.

Evals are not image rankings and not model benchmarks. They are controlled
situations that reveal whether a visual pattern is stable, transferable, and
useful.

## Directory Map

```text
cases/      Fixed reproduction scenarios.
rubrics/    Judgment guides for operator review.
```

## How To Use

1. Choose one case from `cases/`.
2. Use the pattern named by that case.
3. Produce a visual argument stack.
4. Produce a task-specific score.
5. Compile it into the target runtime.
6. Generate three candidates in the consuming project.
7. Judge with the rubrics.
8. Feed stable learning back into the pattern.

Runtime prompts, generated images, and rejected candidates belong in the
consuming project's work folder, not here.

## First Suite

Start with:

```text
cases/big-character-poster-reproduction.md
```

This first suite tests whether the big-character poster method can reproduce
the historical GanFan / SorryCode cover quality across old and new topics.

Judge it with:

```text
rubrics/visual-argument.md
rubrics/first-read.md
rubrics/visual-tension.md
rubrics/anti-ai-template.md
rubrics/pattern-transfer.md
```

Keep this suite narrow. Add new suites only when they have their own source
contract, target runtime, and operator judgment criteria.

The focused ownership regression for the retro pixel editorial Pattern is:

```text
cases/retro-pixel-style-ownership.md
```

It checks that article semantics cannot silently replace the Pattern's palette,
object language, layout, material, or emotional temperature.

The YouMind transfer suite is:

```text
cases/youmind-style-transfer.md
rubrics/youmind-style-fidelity.md
```

It checks whether the handdrawn-memory (including the naive-doodle adapter),
structural-line-reduction,
pixel-silhouette-mask, constrained-editorial-print, contemporary-eastern-
restraint, Swiss-glass-silhouette, and paper-sculpture-collage clusters survive
two unrelated topics without copying source-specific subjects, slogans, or
layouts.

The icon-specific transfer suite is:

```text
cases/youmind-icon-transfer.md
rubrics/youmind-icon-fidelity.md
```

It checks whether the `soft-2-5d-icon` Pattern survives three unrelated product
functions, two platform frames, and 32 x 32 thumbnail inspection.

The thermal receipt transfer suite is:

```text
cases/youmind-thermal-receipt-transfer.md
rubrics/youmind-thermal-receipt-fidelity.md
```

It checks whether verified daily records keep one continuous receipt silhouette,
stable field order, factual text discipline, restrained thermal material, and
the same grammar across three unrelated topics.

The dual-focal swirl-linework promotion probe is:

```text
cases/youmind-dual-focal-swirl-transfer.md
rubrics/youmind-dual-focal-swirl-fidelity.md
```

It tests whether circular line rhythm, dense/open breathing space, and limited
complementary blocks survive two non-urban topics before a new Pattern is added.

The isometric cutaway promotion probe is:

```text
cases/youmind-isometric-cutaway-transfer.md
rubrics/youmind-isometric-cutaway-fidelity.md
```

It tests whether coherent axes, meaningful section planes, transparent blueprint
overlays, and structurally necessary support frames survive two non-building
topics through the optional `minimal-handdrawn-linework` adapter before a new
Pattern is added.

The giant-world scale promotion probe is:

```text
cases/youmind-monstrous-scale-transfer.md
rubrics/youmind-monstrous-scale-fidelity.md
```

It tests whether frame-exceeding world silhouettes, tiny witness actions, and
print-like atmosphere survive two non-fantasy topics before a new Pattern is added.

The fixed-era editorial promotion probe is:

```text
cases/youmind-era-editorial-transfer.md
rubrics/youmind-era-editorial-fidelity.md
```

It tests whether one selected historical branch controls palette, typography,
geometry, print texture, and whitespace across two unrelated contemporary topics
before an era-aware Pattern is added.

The place-poster adapter probe is:

```text
cases/youmind-place-poster-transfer.md
rubrics/youmind-place-poster-fidelity.md
```

It checks whether a verified place name, landmark, and geographic cue survive the
same handdrawn screenprint poster system across two place actions.

The gold-foil documentary-split promotion probe is:

```text
cases/youmind-gold-foil-split-transfer.md
rubrics/youmind-gold-foil-split-fidelity.md
```

It checks whether a portrait `3:4` documentary-to-flat-gold split, front-facing
plane, one derived dark base hue, restrained foil texture, and bounded microtype
transfer across two unrelated object-and-action topics before the route is
promoted beyond an optional adapter.

The portrait-quote promotion probe is:

```text
cases/youmind-portrait-quote-transfer.md
rubrics/youmind-portrait-quote-fidelity.md
```

It tests whether portrait identity, a protected lower quote zone, and one
supporting scene cue transfer across two unrelated human stories before a new
Pattern is added.

The adaptive Rembrandt studio portrait promotion probe is:

```text
cases/youmind-rembrandt-portrait-transfer.md
rubrics/youmind-rembrandt-portrait-fidelity.md
```

It tests whether identity anchors, structure-aware key light, a clean charcoal
studio field, and ratio-preserving framing survive a person-and-pet transfer
before a photographic Pattern is added.

The pastoral pixel-character adapter probe is:

```text
cases/youmind-pastoral-pixel-character-transfer.md
rubrics/youmind-pastoral-pixel-character-fidelity.md
```

It checks whether a source identity, optional action strip, controlled pixel
grid, and one bounded background mode transfer without copying game assets.

The single-accent editorial ink adapter probe is:

```text
cases/youmind-single-accent-ink-transfer.md
rubrics/youmind-single-accent-ink-fidelity.md
```

It checks whether heavy black handdrawn contours, local halftone, one semantic
accent, and a deterministic text-zone policy transfer across unrelated topics.

The mist-blue single-metaphor adapter probe is:

```text
cases/youmind-mist-blue-metaphor-transfer.md
rubrics/youmind-mist-blue-metaphor-fidelity.md
```

It checks whether short text remains the first read while one visual relation,
16:9 whitespace, restrained mist-blue palette, and deterministic text handling
transfer across unrelated editorial topics.

The multi-page handdrawn-explainer adapter probe is:

```text
cases/youmind-multi-page-handdrawn-transfer.md
rubrics/youmind-multi-page-handdrawn-fidelity.md
```

It checks whether mobile-first vertical page sequences, one claim per page, a
stable recurring anchor, and a bounded paper-and-ink material system transfer
without copying source-specific characters or costumes.

The emotional-metaphor editorial adapter probe is:

```text
cases/youmind-emotional-metaphor-transfer.md
rubrics/youmind-emotional-metaphor-fidelity.md
```

It checks whether a short checked line, one Aha relation, active whitespace, and
one high-purity semantic anchor transfer without copying lyrics, film scenes,
artist styles, or named IP.

The animal-mascot icon adapter probe is:

```text
cases/youmind-animal-mascot-transfer.md
rubrics/youmind-animal-mascot-fidelity.md
```

It checks whether credible species anatomy, one function-bearing body cue,
shallow matte depth, and iOS/macOS identity continuity transfer without logos,
costumes, props, or copied characters.

The graphic fashion-avatar promotion probe is:

```text
cases/youmind-graphic-avatar-transfer.md
rubrics/youmind-graphic-avatar-fidelity.md
```

It checks whether hair and face identity anchors, one optional accessory cue,
rough marker or dry-brush edges, restrained watercolor color, and a clean
warm-white field survive two unrelated avatar briefs and 64/32 px inspection
before deciding between `app-icon` and a future `profile-avatar` artifact kind.

The nested-blue collage promotion probe is:

```text
cases/youmind-nested-blue-collage-transfer.md
rubrics/youmind-nested-blue-collage-fidelity.md
```

It checks whether a wrinkled-paper border, centered blue field, clipped torn
paper pieces, halftone silhouette, handwritten orbit, and one utility cue
survive two unrelated image-cover topics before a new collage Pattern is added.

The spatial-word poster adapter probe is:

```text
cases/youmind-spatial-word-poster-transfer.md
rubrics/youmind-spatial-word-poster-fidelity.md
```

It checks whether one short word can become a physical barrier, support, or room
that an actor changes through one concrete action, while keeping text-first
hierarchy and deterministic copy handling.

The cognitive-contrast-card adapter probe is:

```text
cases/youmind-cognitive-contrast-card-transfer.md
rubrics/youmind-cognitive-contrast-card-fidelity.md
```

It checks whether a stable five-card frame and recurring anchor can make an early
intuition versus fuller judgment visible across two unrelated life topics.

The box-operator-sketch adapter probe is:

```text
cases/youmind-box-operator-transfer.md
rubrics/youmind-box-operator-fidelity.md
```

It checks whether one closed box-like worker and one physical action can explain
an article judgment or risk across two unrelated body-illustration topics while
preserving the whiteboard parent grammar.

The city-observation-poster adapter probe is:

```text
cases/youmind-city-observation-poster-transfer.md
rubrics/youmind-city-observation-poster-fidelity.md
```

It checks whether a supplied character, one everyday city action, giant short
title, blue/cyan linework, and limited screenprint surface transfer across two
places without becoming a landmark postcard.
