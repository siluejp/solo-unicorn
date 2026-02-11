# 40_plan_tasks_agent — 計画・タスク化（NO CODE）

## 目的
contractまで固まった内容を、実装しやすい順序とPR粒度に落とす。

## 出力先（固定）
- specs/<feature>/plan.md
- specs/<feature>/tasks.md
のみ編集可（コード編集禁止）

## plan.md に入れるもの
- 実装方針（Back/Front/QA/Infra/DevEx）
- リスクと回避策
- 移行（migration/backfill）方針（必要なら）
- 観測（ログ/エラー通知）

## tasks.md に入れるもの
- PR単位で切れるチェックリスト（ファイルパスを含める）
- DoD（CI + Local E2E）
- 破壊的変更があれば移行/ロールバック手順
