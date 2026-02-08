# Hypothesis Backlog（仮説バックログ）

> 目的：最大リスクを早く潰す（価値/利用性/実現性/収益性）

## 状態
- new / running / validated / invalidated / parked

## 優先順位の付け方（推奨）
Priority = Impact × Confidence / Cost
- Impact: 1〜5
- Confidence: 0.1〜1.0
- Cost: 1〜5

## 一覧
| ID | 仮説（If/then/because） | リスク種別 | 期待影響 | 主要指標 | 信頼度 | コスト | 状態 | 次アクション |
|---|---|---|---|---|---:|---:|---|---|
| H-001 | If ... then ... because ... | value/usability/feasibility/viability | +? | ? | 0.5 | 3 | new | E-001設計 |

## ルール
- “実験できない仮説”は書かない（反証可能に言い換える）
- 実験が通らなかったら invalidated か parked にし、Decision Logへ
