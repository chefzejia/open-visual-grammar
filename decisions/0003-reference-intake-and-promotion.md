# 0003: Reference Intake And Adoption Boundary

Date: 2026-05-19

The eval and lifecycle-state portions of this decision are superseded by
[0005: Direct Pattern Iteration](0005-direct-pattern-iteration.md).

## Decision

Keep source intake outside the public grammar repository.

Open Visual Grammar may receive reviewed learning from external references, but
it does not store raw personal collections, one-off scraped material, private
bookmarks, API diagnostics, or unreviewed inspiration dumps.

Use a two-layer system:

```text
private intake workspace -> operator decision -> public grammar adoption
```

The private intake workspace may collect links, screenshots, media metadata,
notes, candidate groupings, and review packets from X bookmarks or other
sources. This repository receives only public-safe, method-level artifacts:

- pattern references;
- pattern-local examples with critique;
- anti-patterns and failure modes;
- grammar or runtime improvements.

## Rationale

Open Visual Grammar exists to preserve reusable visual judgment, not to mirror a
personal inspiration archive.

Automatic intake is useful because good references appear continuously and are
easy to lose. Automatic adoption is harmful because it collapses the distinction
between taste input and public method. A single attractive image does not prove a
pattern, and a saved post does not automatically become grammar.

This boundary also keeps the public repository safe:

- private bookmarks and logged-in screenshots stay out;
- third-party media is not copied without review;
- generated prompts remain execution artifacts, not source of truth;
- agents do not learn to browse every reference folder by default;
- public examples remain explainable and transferable.

## Adoption Contract

A reference can be adopted only after an operator can explain what it teaches.

Before adding anything to this repository, write down:

```text
Source:
Public-safety status:
Pattern target:
Pattern or grammar dependency:
What it teaches:
What it does not prove:
Why it belongs in OVG:
```

Pattern targets are limited to:

```text
patterns/<slug>/refs/
patterns/<slug>/examples/
patterns/<slug>/anti-patterns.md
grammar/
runtimes/
docs/
decisions/
```

If the reference is useful but not yet method-level, keep it in the private
intake workspace.

## Private Intake Workspace

The intake workspace is deliberately not specified here as an implementation.
The target environment may choose its own tools, APIs, schedules, storage, and
review interface.

The only required contract is behavioral:

- collect user-selected and source-selected visual references over time;
- preserve source attribution and enough context for review;
- separate private raw material from public-safe Pattern decisions;
- produce periodic review packets;
- never commit private material or credentials into this repository;
- never adopt directly into OVG without operator review.

## Consequences

- OVG remains a public method repository, not a private asset database.
- Intake automation can evolve independently on another machine.
- Agents working in OVG should identify the Pattern that will own imported
  method-level learning before editing the repository.
- A future `ovg-source-intake` workspace should describe mission, constraints,
  expected outputs, and review loops, but it should not hard-code implementation
  details for unknown environments.
