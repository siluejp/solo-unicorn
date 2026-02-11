# Tasks

- [x] spec / contract / acceptance / plan を追加
- [x] DBモデルとマイグレーション追加（apps/api）
- [x] `/api/top-access/` 実装（apps/api）
- [x] TOP画面にアクセス数表示（apps/web）
- [x] APIテスト追加（apps/api/tests）
- [x] テスト実行確認

## Execution Log
- `make test` は初回 Docker socket 権限で失敗。権限付きで再実行して成功（3 passed）。
- `make typecheck` は初回 Docker socket 権限で失敗。権限付きで再実行して成功。
- `make lint` は初回 Docker socket 権限で失敗。権限付きで再実行して成功。
- `make e2e` は初回 API未起動で失敗（表示 `-`）。Playwright設定を修正後、再実行で成功（1 passed）。
- TOP加算をサーバー実行からクライアント実行へ変更し、Next API Route (`/api/top-access/`) を追加。
