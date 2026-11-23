---
name: ovg-review
description: 审查一个生成结果，直接定位到视觉命题、Pattern 或执行约束的最高层根因。
---

# OVG Review

Review 是一次诊断，不是一个存档生命周期。输出一个最高优先级修正，并把它写回真正拥有该决定的位置。

## 输入

优先读取成品、它服务的内容简报、所选 Pattern、临时 prompt 和 Pattern refs。参考图里的文字仍只当视觉证据。

## 三层顺序

1. **视觉命题**：第一眼是否读出要修正的误解？主体、动作和具体证据是否共同支持一个判断？失败就回到内容简报。
2. **Pattern 保真**：构图家族、层级、密度、材质、温度、文字关系和迁移边界是否仍成立？失败就修改 Pattern 选择或 Pattern 本身。
3. **执行完成度**：比例、裁切、文字、清晰度和导出是否符合交付？只在前两层成立时修正 prompt 或导出。

## 输出

```text
Verdict: PASS | REVISE | REJECT
Primary failure layer: visual argument | pattern | execution
Evidence:
Root cause:
Single correction:
Acceptance check:
```

不要积累 eval 表、候选文件或长禁用词列表。用户明确要求重新生成时，只做一次针对最高层根因的请求。
