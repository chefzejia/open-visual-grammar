# Image Generation Adapter / 生图 Adapter

Use this adapter for an authorized portrait and one short, checked quote. Exact
copy belongs to deterministic post-layout when spelling matters.

这份 adapter 用于授权人像和一句短且已核验的引语。需要准确拼写时，文字交给
确定性后排版。

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- Portrait and identity anchors: {{PORTRAIT}} / {{IDENTITY_ANCHORS}}
- Physical action: {{PHYSICAL_ACTION}}
- Quote and intent: {{QUOTE}} / {{QUOTE_INTENT}}
- Scene cue: {{SCENE_CUE}}
- Text handling: {{TEXT_HANDLING}}

Use the Portrait-Quote Editorial Pattern. Let the authorized portrait own the
first read through face, pose, and physical action. Protect a lower quote zone
that never crosses the face or becomes a second headline. Add one subordinate
scene cue that supports the quote intent without creating another story.

Choose Close-Up, Scene Mid-Shot, or Negative-Space Portrait. Keep vertical
editorial density stable and human warmth restrained. Use only short checked
text in the image; reserve long or exact copy for deterministic typesetting.
The portrait and action must remain readable with the quote hidden.

Avoid stock faces, quote-only cards, face collision, long pseudo-text, full film
sets, cinematic wallpaper, copied likeness, random text, logos, signatures, and
watermarks. {{FORBIDDEN}}
```

## Slot Guidance / 槽位说明

- `IDENTITY_ANCHORS`: features supplied and authorized for likeness control.
- `QUOTE_INTENT`: what the quote supports; it does not authorize new narrative.
- `SCENE_CUE`: one concrete cue, not a second scene.
- `LOWER_TEXT_ZONE`: keep clear of eyes, mouth, and key action.

## Fidelity Gate / 保真门

- Identity and action survive with quote and scene cue hidden.
- Lower quote zone is protected and legible at feed size.
- The same portrait-to-quote relation transfers across unrelated human stories.
- Removing film-like grading leaves the editorial structure.
