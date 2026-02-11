# Acceptance (Playwright)

## Scenario 1: Top page shows access count
- Given API と Web が起動している
- When ユーザーが `/` にアクセスする
- Then `Solo Unicorn` の見出しが表示される
- And TOPアクセス数が数値で表示される

## Scenario 2: Access count increments on reload
- Given `/` を表示中
- When ページを再読み込みする
- Then TOPアクセス数が前回より増加している
