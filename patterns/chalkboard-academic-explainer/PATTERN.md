# Chalkboard Academic Explainer

```yaml
id: chalkboard-academic-explainer
artifact_kinds:
  - image-cover
surfaces:
  - image-generation
when_to_use: Academic explanations, lecture notes, comparisons, diagrams, and research ideas that benefit from a dark chalkboard surface and manually reasoned hierarchy.
avoid_when: Exact documentary proof, dense dashboards, long unstructured prose, polished brand systems, or a visual that only needs a black background.
```

中文名：粉笔板书学术讲解
English name: Chalkboard Academic Explainer

## Definition / 定义

EN: Chalkboard Academic Explainer is a dark-board teaching grammar for making
one question, comparison, mechanism, or research idea legible through chalk
writing and hand-drawn diagrams. It combines a live lecture feel with explicit
information hierarchy. The board is a shared spatial surface for words, marks,
arrows, equations, and sketches; it is not a decorative blackboard texture.

CN：粉笔板书学术讲解是一种深色板书教学语法，用粉笔文字和手绘图示把一个问题、对比、机制或研究想法讲清楚。
它保留现场讲解的人工感，同时维持明确的信息层级。黑板是文字、标记、箭头、公式和草图共享的空间，不是装饰性的黑板纹理。

## Invariants / 不变量

- One explicit question, claim, or learning task controls the board.
- The reading path is visible before chalk texture is inspected: title or question, structural grouping, then evidence or drawing.
- Use one board field with a limited number of regions. Columns, a central mechanism, or a timeline are allowed when they clarify the task; decorative grids are not.
- Chalk marks have pressure variation, broken edges, slight baseline drift, and occasional erased residue. The surface stays matte and quiet.
- Hierarchy comes from scale, spacing, indentation, and stroke weight. Do not rely on random typefaces or ornamental borders.
- Use chalk white as the primary role. Add at most two semantic accent colors, each with one stable meaning such as comparison, warning, path, or result.
- Text and drawings share edges, arrows, baselines, or containers so they read as one lecture surface rather than caption-plus-illustration islands.
- Keep two or three levels of information depth. A line names one idea, object, relation, or result. When the layout becomes complex, supply a structure guide to the image model instead of adding a separate text layer.
- Hand-drawn diagrams may be simple and imperfect, but their relation, direction, and labels must remain legible at the target size.
- The accepted final bitmap is one model-generated artifact: text, diagrams, arrows, and chalk material are generated together. HTML, SVG, Canvas, or other text overlays are not part of this Pattern.

- 一个明确的问题、判断或学习任务统领整块板书。
- 阅读路径先于粉笔纹理成立：先读标题或问题，再读结构分组，最后读证据或图示。
- 使用一个连续的黑板场域和有限区域。只有在能澄清任务时才使用分栏、中心机制或时间线，不做装饰网格。
- 粉笔保留压力变化、断边、轻微基线漂移和擦除残留，底面保持哑光安静。
- 层级来自字号、间距、缩进和笔画重量，不靠随机字体或装饰边框。
- 粉笔白是主角色，最多增加两种语义强调色，每种颜色只承担一种稳定含义。
- 文字和图画通过共边、箭头、基线或容器共享空间，不能变成标题加孤立插图的两座岛。
- 保持两到三层信息深度。一行只命名一个想法、物件、关系或结果。布局复杂时给生图模型提供结构引导图，不再增加独立文字层。
- 手绘图可以简单且不完美，但关系、方向和标注必须在目标尺寸下可读。
- 正式成品必须是一张由模型一次性生成的位图，文字、图示、箭头和粉笔材质同时生成；HTML、SVG、Canvas 或其他后期叠字不属于这个 Pattern。

## Composition Families / 构图家族

1. **Comparative board / 对比板书:** one question at the top, two or three aligned columns, and short evidence lines that make the contrast scannable.
2. **Mechanism chalk talk / 机制板书:** one central object or process, directional arrows, and short labels arranged around the mechanism.
3. **Derivation path / 推演路径:** a left-to-right or top-to-bottom chain where each mark changes the next state; use equations or symbols only when they are part of the argument.
4. **Research field note / 研究札记:** one observation, a small sketch or evidence cluster, and a short conclusion anchored to the same board field.

Choose one family per artifact. Do not mix a comparison board, a full lecture
slide deck, and a decorative mind map in one image.

## Fit / 适用范围

- model or method comparisons;
- academic article explainers and lecture notes;
- scientific mechanisms and annotated sketches;
- research hypotheses, definitions, and conceptual maps;
- workshop notes where words and drawings need one material language.

## Weak Fit / 不适合

- exact data tables, legal or financial records, or UI screenshots;
- long prose that cannot be reduced to short lines;
- pure mood images or promotional posters with no teaching task;
- polished corporate identity systems that require packaged brand typography;
- a topic where chalk texture is the only requested attribute.

## Material, Density, And Temperature / 材质、密度与温度

The main material is dry chalk on a charcoal-to-black matte field. Use low-level
powder, erased ghosts, and uneven deposits only to support the feeling of a
working board. Keep the temperature curious, rigorous, and approachable: it
should feel like a researcher explaining a thought in real time, not like a
school decoration board or a spooky theatrical set. Density is medium by
default, with active negative space around the first read and between groups.

主材质是炭黑到黑色哑光板面上的干粉笔。粉尘、擦除残影和不均匀积粉只用于支持“正在工作的板书”感觉，不能喧宾夺主。
情绪应当好奇、严谨、可接近，像研究者正在现场讲解一个想法，不是校园装饰板，也不是戏剧化的阴暗布景。
默认中等密度，第一眼和分组之间保留主动留白。

## Direct Input Slots / 直接输入槽位

```text
ARTIFACT_KIND
ASPECT_RATIO
AUDIENCE
LEARNING_TASK
FIRST_READ
COMPOSITION_FAMILY
STRUCTURAL_GROUPS
MAIN_SUBJECT_OR_MECHANISM
TEXT_CONTENT
DIAGRAM_CONTENT
HIERARCHY_LEVELS
CHALK_COLOR_ROLES
MATERIAL_BRANCH
TEXT_RENDERING_STRATEGY
STRUCTURE_GUIDE_ROLE
FORBIDDEN
```

## Transfer Boundaries / 迁移边界

- Transfer the board grammar, chalk behavior, hierarchy, and word-image relations—not the sample's model names, claims, handwriting, or exact column coordinates.
- A dark background alone is not evidence of this Pattern. If removing chalk and structure leaves only a mood field, route elsewhere.
- `whiteboard-operator-sketch` owns white-background tiny-worker scenes with one physical action. Use this Pattern when the board itself and academic explanation are primary.
- `narrative-journal-infographic` owns warm paper handdrawn explanations. Use this Pattern when dark chalk, board-space reasoning, and live lecture tone are essential.
- Short exact copy goes directly into the image prompt. Complex copy and spatial relations use a structure guide as model input, while the final pixels still come from one image-generation pass.
- Structure guides transfer grouping, relative position, reading order, and arrow direction only. They are not reusable final layers and must not be composited over or under the generated result.
- Do not copy a lecturer's handwriting, institutional marks, branded board layout, or source-specific diagrams.

## Fidelity Gate / 保真门

- The question or learning task is recoverable at thumbnail size.
- Removing color and chalk texture leaves a readable hierarchy and spatial relation.
- The selected composition family is clear and does not collapse into a decorative collage or dashboard.
- Words and diagrams inhabit one board field through shared axes, arrows, or edges.
- Chalk white dominates; accents remain semantic and limited.
- A text-heavy topic and a drawing-heavy topic both preserve the same board grammar without importing the original subject matter.
- Required copy is present, readable, and manually checked against the prompt; there is no extra pseudo-text.
- The final bitmap remains complete when separated from every structure guide, HTML page, SVG, Canvas, or font package.

## Failure Modes / 失败方式

- **Blackboard filter:** only the background changes. Restore the question, hierarchy, and board-space relation, or reject this Pattern.
- **Decorative school poster:** borders, stars, doodles, or slogans displace the learning task. Remove unsupported decoration.
- **Text fog:** long generated writing becomes illegible. Reduce the copy, strengthen exact-text constraints, or use the structure-guide-native-text strategy and regenerate.
- **Overlay dependency:** the image only works after HTML, SVG, Canvas, or other text is placed over it. Reject the result and regenerate all text and content in one model pass.
- **Diagram soup:** arrows and sketches have no dominant relation. Choose one mechanism and one direction before adding labels.
- **Digital-clean drift:** perfect vector edges and uniform type erase the working-board feel. Reintroduce controlled stroke variation without sacrificing legibility.
- **Color drift:** multiple bright colors become decoration. Assign each accent one semantic role and remove the rest.

When these failures recur across unrelated academic and non-academic topics,
delete or revise this Pattern rather than keeping a chalk-only mood preset.

## Direct Compilation Route: Image Generation / 直接生成路线：Image Generation

# Chalkboard Academic Explainer Image Generation

Use image generation for the complete final bitmap: chalk material, diagrams,
arrows, and required text. Do not add a separate text or layout layer after
generation.

Choose one text strategy before writing the model prompt:

1. `simple-native-text`: put a short title and a small set of exact labels
   directly in the prompt. Quote every required string verbatim and forbid
   extra text.
2. `structure-guide-native-text`: for a complex board, supply a simple layout
   image that establishes regions, reading order, relative scale, containers,
   and arrow direction. Treat it only as structure input. The model redraws the
   complete board and generates all final text in the same image pass.

```text
Create one {{ARTIFACT_KIND}} for {{AUDIENCE}} at {{ASPECT_RATIO}}.

Learning task: {{LEARNING_TASK}}
First read: {{FIRST_READ}}
Composition family: {{COMPOSITION_FAMILY}}
Structural groups: {{STRUCTURAL_GROUPS}}
Main subject or mechanism: {{MAIN_SUBJECT_OR_MECHANISM}}
Diagram content: {{DIAGRAM_CONTENT}}
Text content, verbatim: {{TEXT_CONTENT}}
Text rendering strategy: {{TEXT_RENDERING_STRATEGY}}
Structure guide role: {{STRUCTURE_GUIDE_ROLE}}

Use the Chalkboard Academic Explainer Pattern. Build one continuous matte
charcoal-black board field with a clear reading path. Establish the question or
short title first, then the structural groups, then the evidence or mechanism.
Use dry chalk with pressure variation, broken edges, slight baseline drift,
small erased ghosts, and restrained powder. Keep the board human and academic,
not theatrical or decorative.

Use chalk white as the main mark. Add only the declared semantic accents:
{{CHALK_COLOR_ROLES}}. Make words and diagrams share baselines, arrows, edges,
or a central mechanism so they occupy one lecture surface. Keep two or three
levels of information depth. Render all required text natively in the final
image. Reproduce the quoted copy character for character, keep it readable at
the target size, and add no invented labels or pseudo-text.

If a structure guide is provided, use it only for grouping, relative position,
reading order, and arrow direction. Redraw the guide as the final chalkboard;
do not preserve guide styling and do not treat it as an overlay layer.

Do not copy any source handwriting, institution, brand, model name, or sample
claim. Avoid decorative borders, sticker doodles, equal-weight dashboard cards,
neon colors, glossy surfaces, logos, signatures, watermarks, and unsupported
copy. Do not use HTML, SVG, Canvas, deterministic text overlays, or
post-production compositing. {{FORBIDDEN}}
```

## Image QA

- Read the learning task before inspecting texture.
- Confirm that the chosen composition family is visible in the spatial layout.
- Check every required string against the prompt, character by character.
- Reject missing text, substitutions, extra readable text, or pseudo-text.
- Confirm that the accent colors retain their declared semantic roles.
- Confirm that the final bitmap is complete without the structure guide or any
  external text layer.
- Reject images whose identity is only “black background plus white writing.”
