# Acceptance (Playwright)

## Scenario 1: Web top page is reachable
- Given Local Docker 環境で web が起動している
- When ユーザーが `/` にアクセスする
- Then ページタイトルに `Solo Unicorn` が含まれる
- And 画面に `Solo Unicorn` テキストが表示される

## Scenario 2: API health endpoint responds
- Given Local Docker 環境で api が起動している
- When `GET /api/health/` を呼び出す
- Then HTTP 200 が返る
- And `{"status":"ok"}` が返る
