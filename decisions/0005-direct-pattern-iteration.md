# 0005: Direct Pattern Iteration

Date: 2026-09-03

## Decision

Every directory under `patterns/` is a formal Pattern from its first commit.
There is no candidate, seed, canonical, promotion, or eval lifecycle inside
OVG.

When external evidence reveals a reusable method, add it directly to an
existing Pattern or create a new Pattern. Iterate that Pattern in place when
production teaches something new. If the method fails its intended use, delete
the Pattern instead of keeping an incubation state.

## Consequences

- Pattern metadata contains routing and execution fields only; it has no
  maturity field.
- The showcase lists Patterns by artifact kind and real WebP assets, without a
  maturity filter or empty-state artwork.
- Evals, promotion matrices, and acceptance gates are not repository surfaces.
  Run-specific checks and generated candidates stay in the consuming project's
  work directory.
- Intake notes may record raw, interesting, clustered, or rejected source
  evidence, but only adopted method-level learning enters `patterns/`.
