# Feature Spec: Dev Environment Bootstrap

## Goal
Monorepo の基準開発環境を Local Docker 上に構築し、以下を同時に成立させる。

- Backend: Django REST Framework (`apps/api`)
- Frontend: Next.js + TypeScript + Tailwind (`apps/web`)
- DB: Local Postgres (Docker)
- E2E: Playwright (Local 実行)
- Deploy target: Render.com + Managed PostgreSQL (PR Preview は使わない)

## Scope
- ローカル開発で必要な最小アプリ骨格の作成
- Docker/Dev Container/Make コマンドの統合
- Render 用のベース設定雛形作成

## Out Of Scope
- 実サービス機能実装
- 認証/認可
- 本番監視/アラート

## Success Criteria
- `make bootstrap` で依存を導入できる
- `make migrate` / `make test` が通る
- `make e2e` がローカルで動作する
- Render Blueprint に PR Preview を使わない設定が入っている
