# Contributing to Open Visual Grammar

OVG 接受的是可迁移的视觉方法，不是一次性 Prompt 集合。

## 新增或迭代 Pattern

1. 先阅读根目录 `AGENTS.md`、`CATALOG.md` 和目标 Pattern。
2. 只有当新证据不能由已有 Pattern 解释时，才新建 `patterns/<english-kebab-slug>/`。
3. 在一份双语 `PATTERN.md` 中写清楚不变量、构图、边界、直接生成路线和失败方式。
4. 真实生成时一次只发起一个请求；确认结果后才把公开安全的 WebP 放入 `examples/`。
5. 生成日志、Prompt、拒绝稿、私有截图和账号信息留在消费项目或临时目录，不进入 OVG。
6. 运行 showcase 检查并检查 diff。

## 不要创建的东西

- candidate、eval、promotion、maturity 或 intake 状态；
- 只为了路由而存在的 registry；
- 跨 Pattern 的视觉 grammar 或 runtime 层；
- Pattern 外的长期 Prompt 模板；
- 没有说明稳定失败模式的 rejected 图片。

## 验证

```bash
node scripts/build-showcase.mjs
node scripts/build-showcase.mjs --check
node --check showcase-data.js
git diff --check
```

`index.html` 是静态文件，直接打开即可查看汇总。OVG 不要求本地服务。
