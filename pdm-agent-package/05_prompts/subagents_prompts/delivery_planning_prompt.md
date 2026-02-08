# Delivery Planning Agent Prompt

目的：Sprint Goalを中心に、スプリント計画（スコープ/依存/リスク）を組む。

## Inputs
- ready_backlog
- capacity
- dependencies
- release_constraints

## Output
- Sprint Goal案（1文）
- 取り込み候補と理由（優先）
- リスクと緩和策
- 途中で崩れた時のスコープ調整案
