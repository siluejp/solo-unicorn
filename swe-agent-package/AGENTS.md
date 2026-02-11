# AGENTS.md — エージェント構成（Codex）

## 前提（このリポジトリはモノレポ）
- Backend: Django REST Framework（apps/api）
- Frontend: Next.js（TypeScript）+ Tailwind（apps/web）
- Local: VS Code Dev Container（Docker）+ Local Postgres（開発とE2Eの基準環境）
- Development/Production: Render.com + Managed PostgreSQL
- IMPORTANT: Render Dev は PRプレビュー/E2Eのターゲットに使わない
- E2E: Playwright（基本はLocalで実行）

## 仕様→実装のゲート（featureごと）
実装に入る前に必ず作る/更新する：
1) specs/<feature>/spec.md
2) specs/<feature>/contract/openapi.yaml + data_contract.md
3) specs/<feature>/qa/acceptance.md（Playwright観点）
4) specs/<feature>/plan.md
5) specs/<feature>/tasks.md
その後に実装（apps/**, tests/**, infra/**）。

## 役割（サブエージェント）と編集可能範囲
- 統括（Orchestrator）: 進行管理・統合・DoD判定。大きなコード編集は避ける。
- 仕様読解（Spec Reader / NO CODE）: specs/<feature>/spec.md のみ編集可
- 契約定義（Contract Agent / NO CODE）: specs/<feature>/contract/* と specs/<feature>/qa/* のみ編集可
- 計画・タスク化（Plan/Tasks Agent / NO CODE）: specs/<feature>/plan.md と tasks.md のみ編集可
- Back実装: apps/api/**（migrations/tests含む）
- Front実装: apps/web/**（型・lint修正含む）
- QA実装: tests/e2e/**（acceptance.md と一致させる）
- DevEx: .devcontainer/**, docker/**, Makefile
- Infra: infra/render/**（Render Blueprint/env/db接続）

## Doneの定義
- CI: lint/typecheck/unit が通る
- Local: `make e2e`（Playwright）が通る
- DB: Local Postgres と Render Postgres は別だが、マイグレーションは両方に適用できること
