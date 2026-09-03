# 0004: Intent Skills And Pattern-Owned Composition Families

Date: 2026-08-25

## Decision

Expose three agent skills by user intent:

```text
ovg-style-reverse  references -> reusable visual method
ovg-create         source -> visual asset
ovg-review         candidate -> root-layer diagnosis
```

Do not create one skill per visual pattern. Registry and pattern capsules remain
the source of truth for visual methods.

The source and visual argument own the claim, action, subject, and concrete
evidence. A pattern may own composition families, density ranges, headline-scene
relationships, and other structural behavior when repeated references prove
that those decisions are part of the visual identity.

## Rationale

The previous reverse workflow correctly removed sample-specific subjects and
coordinates, but treated composition as fully upstream. This over-correction
could preserve color and texture while deleting the information architecture
that made a reference style recognizable.

The three tasks also have different inputs and stopping conditions:

- reversal adopts reusable method from references;
- creation compiles one source into one runtime artifact;
- review diagnoses the highest failed ownership layer before any regeneration.

Keeping them in one skill would blur authorization and encourage a failed
candidate to be regenerated before its root cause was known.

## Consequences

- Skills route work; patterns continue to own visual method.
- Pattern extraction must name style signatures, supported composition families,
  and a fidelity gate when references support them.
- A pattern is not required to fit arbitrary compositions.
- If a channel requires removing a pattern's style signature, agents select a
  different pattern instead of retaining only surface material words.
- Review does not imply permission to regenerate, overwrite, or publish.
