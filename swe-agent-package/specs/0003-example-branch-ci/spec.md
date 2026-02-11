# Feature Spec: GitHub Actions for example branch

## Goal
`example` ブランチ向けに GitHub Actions の CI を追加し、最低限の品質ゲートを自動実行する。

## Scope
- `example` ブランチの `push` / `pull_request` で CI を起動する
- `lint` / `typecheck` / `test` を GitHub Actions 上で実行する
- Django テスト用に PostgreSQL service container を使う

## Out Of Scope
- デプロイ自動化（Render への反映）
- E2E の常時実行
- ブランチ保護ルールの設定

## Success Criteria
- `.github/workflows` に workflow が追加される
- `example` ブランチに対して CI が起動する
- 3ジョブ（lint/typecheck/test）が定義されている
