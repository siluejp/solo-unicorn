# Solo Unicorn Monorepo

Django REST Framework（API）と Next.js（Web）を同居させたモノレポです。  
ローカル開発は Docker Compose / Dev Container、デプロイ先は Render を前提にしています。

## Stack
- Backend: Django REST Framework (`apps/api`)
- Frontend: Next.js + TypeScript + Tailwind (`apps/web`)
- E2E: Playwright (`tests/e2e`)
- Local DB: PostgreSQL (Docker)
- Deploy: Render.com + Managed PostgreSQL

## Repository Structure
- `apps/api`: Django API
- `apps/web`: Next.js Web
- `tests/e2e`: Playwright E2E
- `docker`: ローカル開発用 Docker/Compose 設定
- `infra/render`: Render 用 Blueprint / Dockerfile
- `specs`: feature ごとの仕様・計画・タスク

## Local Development
前提:
- Docker / Docker Compose が使えること
- VS Code Dev Container（任意）

起動:
```bash
make up
make bootstrap
```

主要コマンド:
```bash
make lint
make typecheck
make test
make e2e
make migrate
make logs
make down
```

## Dev Container
- 設定: `.devcontainer/devcontainer.json`
- Compose: `docker/docker-compose.yml`

VS Code で「Reopen in Container」を実行すると、`postCreateCommand` で初期セットアップが走ります。

## Render Deployment
このリポジトリは Blueprint デプロイを前提にしています。

1. Render Dashboard で `New +` → `Blueprint`
2. リポジトリを接続
3. Blueprint path に `infra/render/render.yaml` を指定

これで以下が作成されます。
- `solo-unicorn-api`（Docker Web Service）
- `solo-unicorn-web`（Docker Web Service）
- `solo-unicorn-postgres`（Managed PostgreSQL）

## CI
- Workflow: `.github/workflows/ci-example.yml`
- Trigger: `example` ブランチへの `push` / `pull_request`
- Jobs: `lint`, `typecheck`, `test`

## Notes
- `docker/docker-compose.yml` はローカル開発用です（Render では直接使用しません）。
- 機密情報（`.env`, `auth.json` など）はコミットしないでください。
