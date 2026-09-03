# Image Generation Adapter / 生图 Adapter

Use this adapter to compile the `dual-focal-swirl-linework` Pattern into a
one-off image-generation prompt. The prompt belongs in the consuming project.

这份 adapter 把 `dual-focal-swirl-linework` 编译成一次性的生图 prompt；最终
prompt 只留在调用方项目，不写回 OVG。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Anchor A: {{ANCHOR_A}}
- Anchor B: {{ANCHOR_B}}
- Shared relation: {{SHARED_RELATION}}
- Text handling: {{TEXT_HANDLING}}

Use the Dual-Focal Swirl Linework Pattern. Keep both supplied anchors distinct
and equally meaningful. Build one breathable gouache field with a deliberate
circular or arcing line path that carries the eye from Anchor A to Anchor B.
Use only a few flat complementary blocks to clarify {{SHARED_RELATION}}. Dense
marks belong near meaningful structure; protect open field elsewhere.

Choose Anchor Orbit, Flat Relation, or Breath Field according to the supplied
argument. The line path must perform the relation, not become wallpaper. Keep
the source story, buildings, lone witness, exact source colors, and any copied
wording out of the style instruction. Reserve exact text for deterministic
post-layout or use only short checked text.

Avoid random swirl decoration, a single dominant anchor, generic watercolor
scenery, gradients, 3D shading, cinematic atmosphere, logos, signatures,
watermarks, and invented landmarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `ANCHOR_A` and `ANCHOR_B`: name supplied subjects or evidence, not abstract style words.
- `SHARED_RELATION`: one visible connection, contrast, return, or exchange.
- `TEXT_HANDLING`: short checked text or a deterministic text region.
- `FORBIDDEN`: add topic-specific exclusions without changing the two-anchor budget.

## Fidelity Gate / 保真门

- Both anchors remain readable with line density and color hidden.
- The circular path visibly connects the anchors and has no decorative branches.
- Complementary blocks stay flat and limited; open gouache field remains visible.
- Removing color and texture leaves the same two-anchor relation.
