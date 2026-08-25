# Runtime: Image Generation

Image generation is good at mood, texture, metaphor, and broad composition.

It is weak at exact text, exact UI, exact charts, and factual screenshots.

## Compile a score into an image prompt

Use these slots:

```text
Output:
Audience:
Visual job:
Pattern:
Pattern fidelity anchors:
First read:
Tension:
Main subject:
Concrete evidence:
Composition family:
Composition instance:
Action or relationship:
Scene:
Style:
Lighting:
Information density:
Emotional temperature:
Text handling:
Reference handling:
Forbidden:
```

## Text rule

If exact text matters, either:

- generate an image without text and typeset later; or
- generate only very short title text and inspect it manually.

Do not trust image generation for exact paragraphs, UI labels, tables, or code.

## Reference rule

References should guide structure, not be copied.

If a framework has references, use them to understand:

- layout proportion;
- first read;
- density;
- emotional temperature;
- material treatment.

When a pattern defines composition families or a fidelity gate, compile those
constraints before surface material. A candidate that matches color and texture
but loses the pattern's information structure is not pattern-faithful.

Do not ask the model to reproduce another image.
