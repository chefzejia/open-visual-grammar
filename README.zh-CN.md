# Open Visual Grammar

Open Visual Grammar 是一个精简的可复用视觉方法 monorepo。它把真正可迁移的视觉判断直接沉淀在 Pattern Pack 里，让 Agent 读一个 Pattern 就能开始工作。

OVG 不是提示词仓库，也不是一条堆满中间态的流水线。Prompt 只是一次请求的编译产物，除非它属于已经被人工确认的 Pattern 示例，否则不会回流仓库。一个 Pattern 要么能直接工作，要么就地重写或删除。

## 目录结构

```text
open-visual-grammar/
├── skills/
│   ├── ovg-create/SKILL.md
│   ├── ovg-style-reverse/SKILL.md
│   └── ovg-review/SKILL.md
├── patterns/
│   └── <slug>/
│       ├── PATTERN.md
│       ├── refs/          可选公开安全的 WebP 参考
│       └── examples/      可选已确认的 WebP 示例
├── patterns-index.json    自动生成的 Pattern 索引
├── index.html             人类查看的静态汇总页
├── showcase-data.js       自动生成的汇总数据
├── CATALOG.md
└── AGENTS.md
```

原来的 registry、grammar、runtime、docs、decisions、candidate、eval 层已经移除。只有工作流规则才进入 Skill，只有视觉方法才进入它真正拥有的 Pattern。

## 使用方式

1. 读取 `AGENTS.md` 和 `CATALOG.md`。
2. 过滤 `patterns-index.json`，选一个 Pattern。
3. 完整读取对应的 `patterns/<slug>/PATTERN.md`。
4. 根据 Pattern 内置的直接生成路线编译一次性 prompt。
5. 一次生成一张，立刻检查，只有人工认可的结果才能保存进 `examples/`。

复杂布局可以把结构图作为生图输入，但当 Pattern 走图片路线时，最终文字和内容仍由一次生图完成，不再使用 HTML、SVG、Canvas 或后期叠字。

## 汇总页

直接打开 [`index.html`](index.html)，不需要起服务。修改 Pattern 或 WebP 后运行：

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
node --check showcase-data.js
git diff --check
```

## 正式 Pattern 规则

`patterns/` 下每个目录从第一次提交起就是正式 Pattern。没有 candidate、eval、seed、promotion 或成熟度中间态。稳定经验直接写回 `PATTERN.md`；方法失败就重写或删除。一次性 Prompt 和拒绝稿留在 OVG 之外。
