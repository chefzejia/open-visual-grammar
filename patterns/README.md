# Pattern Packs

每个子目录都是一个正式可用的 Pattern Pack，唯一必需文件是 `PATTERN.md`。

Pattern 应该在一份双语文档里说明：

- 第一眼信息、层级和构图家族；
- 材质、密度、情绪温度与文字行为；
- 不变量、变量、迁移边界、适用与弱适用场景；
- 直接生成路线、失败方式和验收门；
- 可选的公开安全 refs 与已批准 examples。

不要在这里创建 candidate、eval、promotion、adapter、runtime 或临时 prompt 目录。需要新增或修正方法时，直接编辑对应 `PATTERN.md`；无法成立就删除该 Pattern。

Pattern 变更后从仓库根目录运行 `node scripts/build-showcase.mjs`，让 `patterns-index.json` 和 `showcase-data.js` 自动更新。
