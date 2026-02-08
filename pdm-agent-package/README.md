# pdm-agent-package (Lean × Agile / Dual-Track)

このリポジトリは、PdMをオーケストレーターとした「Discovery（探索/検証）× Delivery（開発/提供）」並走の運用パッケージです。

## 目的
- 最小の労力で最大の学習を得て（Build-Measure-Learn / MVP）、意思決定を早める
- 検証済みのバックログを継続供給し、リリース可能なインクリメントを継続提供する

## コア原則（3つ）
1. Discoveryで「検証されたバックログ」を作り、Deliveryで「リリース可能なソフト」を作る（Dual-Track）
2. Build-Measure-Learn で仮説を回し、因果が見える指標で判断する（Lean）
3. Product Goal / Sprint Goal / DoD をコミットメントとして守り、透明性と適応を担保する（Scrum）

## 使い方（最短）
1. `00_charter/product_goal.md` を埋める
2. `01_backlogs/hypothesis_backlog.md` を作る（H-001から）
3. `02_discovery/experiment_card_template.md` で実験を2本まで立てる
4. 通ったものだけ `01_backlogs/product_backlog.md` に落とす
5. `03_delivery/definition_of_done.md` を守ってスプリントで出す
6. `01_backlogs/decision_log.md` に意思決定を残す

## フォルダの意味
- `00_charter`: 目的・用語・役割・合意
- `01_backlogs`: 仮説/開発/意思決定の一次情報
- `02_discovery`: 検証のやり方とテンプレ
- `03_delivery`: 実装・品質・運用のテンプレ
- `04_metrics`: 計測設計のテンプレ
- `05_prompts`: エージェント運用のプロンプト
- `06_governance`: 会議体と合意形成
