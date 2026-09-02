# YouMind Emotional Metaphor Fidelity / YouMind 情绪隐喻保真度

Use this rubric with `cases/youmind-emotional-metaphor-transfer.md`. Judge the
text-to-metaphor method, not whether the poster resembles a particular song,
film, or artist.

本 rubric 与 `cases/youmind-emotional-metaphor-transfer.md` 配套，判断文字到隐喻的方法，不评价海报是否像某首歌、电影或某位艺术家。

## Strong Signals / 强信号

### 1. Text And Relation

- The short core text is the first read and remains legible at feed size.
- Exactly one pressure, distance, reveal, echo, exposure, or collapse relation changes the text's meaning.
- The relation is concrete enough to name without a long explanatory caption.

### 2. Composition And Palette

- The metaphor owns the layout; forms are not a decorative background behind pasted text.
- A low-saturation field and one high-purity anchor create one semantic color decision.
- Active whitespace and a restrained poster frame survive at `16:9` thumbnail size.

### 3. Transfer And Safety

- The method works for both fixed topics without lyrics, celebrity likeness, artist imitation, or named IP.
- Three candidates vary the supported relation or spatial emphasis while keeping the same score and text.
- Exact copy is checked or reserved for deterministic typesetting; no pseudo-Chinese appears.

## Weak Signals / 弱信号

- The poster looks emotional but the relation is generic fog, stars, or a random object.
- Multiple bright colors or several metaphors compete with the line.
- The image only feels coherent because a source song, film, or artist is named.
- Candidates differ only by palette or decorative texture.

## Decision Rule / 决策规则

- **Pass:** all strong signals in Text And Relation, Composition And Palette, and Transfer And Safety are present; no critical failure appears.
- **Revise:** the line and relation are sound but text handling, anchor budget, or whitespace needs one targeted adapter change.
- **Reject:** the output depends on copied source material, loses the single relation, or requires an unsupported layout.
