# YouMind Pixel Silhouette Mask Calibration / YouMind 像素轮廓蒙版校准

This optional adapter distills the source-derived pixel-mask method described by
the public YouMind `P063` skill and the pixel branch of [`照片转手帐贴纸`](https://youmind.com/~skills/01a00a93-eb9b-7794-a156-4acab92c4bfa).
The sticker skill also exposes coarse-halftone and matte cut-paper branches;
those belong to their respective editorial or paper-collage routes. The pixel
treatment here is a compositional container, not a request for a game screen.

这份可选 adapter 提炼公开 YouMind `P063` 及“照片转手帐贴纸”像素变体中描述的
源图像素蒙版方法。像素处理是构图容器，不等于要求生成游戏界面。

## Style Signature / 风格签名

- A source-derived silhouette becomes the main visual container.
- Staircase blocks and stepped planes nest inside the semantic contour.
- The palette is limited and source-aware; pixel scale is intentional.
- One clear subject or action survives the reduction.
- Editorial whitespace or a sticker-like border keeps the result legible.

- 源主体提炼出的轮廓成为主要视觉容器；
- 阶梯状像素块和色面只嵌入语义轮廓内部；
- 配色受限且尊重原图身份，像素尺度有意控制；
- 一个清晰主体或动作在减法后仍然存在；
- 编辑留白或贴纸式边界保证缩小后的可读性。

## Composition Families / 构图家族

1. **Silhouette mask:** one large source silhouette holds nested blocks and a
   small evidence detail.
2. **Modular crop:** two or three related crops share one border and palette when
   the source contains a real comparison.
3. **Editorial sticker panel:** a single reconstructed subject sits in a clean
   panel with a restrained label or border.

## Runtime Meta-Prompt / 运行时元提示词

```text
Create {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

The upstream visual argument is authoritative:
- First read: {{FIRST_READ}}
- Visual action: {{VISUAL_ACTION}}
- Main subject: {{MAIN_SUBJECT}}
- Concrete evidence: {{CONCRETE_EVIDENCE}}
- Text handling: {{TEXT_HANDLING}}

Use the Pixel Retro grammar with the YouMind pixel-silhouette-mask calibration.
First extract the recognizable silhouette or relation from {{MAIN_SUBJECT}};
use it as a visual container. Place intentional staircase blocks, stepped planes,
and limited color fields inside that contour so the pixel language explains the
subject or {{VISUAL_ACTION}}.

Choose a silhouette mask, modular crop, or editorial sticker panel only when the
argument supports it. Keep the result modern and editorial: clear contour,
controlled pixel scale, source-aware palette, and enough whitespace for a fast
first read. Do not copy any reference composition or text.

Avoid random pixel noise, full-frame mosaic, 8-bit game HUD, Minecraft-like
worlds, neon cyberpunk, glossy 3D, photorealism, long generated text, logos,
signatures, and watermarks.
```

## Fidelity Gate / 保真门

- The silhouette or relation is recognizable before pixel texture is inspected.
- Pixel blocks stay inside or directly explain the semantic contour.
- The palette and block scale are constrained rather than nostalgic decoration.
- No game UI or unrelated world-building appears.
- Removing pixel texture still leaves a clear subject, crop, or panel structure.
