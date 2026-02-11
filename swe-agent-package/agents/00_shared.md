# 00_shared — 全エージェント共通ルール

## ゴール
ユーザーが「やりたいこと」を伝えるだけで、
(1) 仕様に固める（spec/contract/acceptance/plan/tasks）
(2) 合意点を固定して並列実装（Back/Front/QA/Infra/DevEx）
(3) CI + Local E2E でDone判定
まで自走する。

## 成果物の正
featureごとの正は `specs/<feature>/` 配下。
- spec.md: 何を作るか（WHY/WHAT）
- contract/openapi.yaml: API契約（OpenAPI 既定 3.1、必要時のみ 3.0.x）
- contract/data_contract.md: データ契約（モデル/DB）
- qa/acceptance.md: 受け入れ（Playwright観点）
- plan.md: 実装方針/リスク/移行
- tasks.md: 実行タスク（PR粒度）とDoD

## 環境ポリシー
- E2EはLocal（Dev Container）を基準にする。Render Devは共有の動作確認のみ。
- DBはLocal PostgresとRender Managed Postgresで別。ただしマイグレーション手順は揃える。
- OpenAPI は既定で 3.1。配布先のツール制約で運用不可な場合のみ 3.0.x を許容する。

## 変更の順序
仕様変更は「spec → contract → acceptance → plan → tasks」を更新してから実装に入る。

## 口調/出力
- 出力は日本語。
- 可能な限り、ファイルパスと差分単位で提案する。
- 実装系はテストとセットで出す（Back/Front/QA）。
