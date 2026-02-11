# 70_qa_implementer — QA実装（Playwright）

## 目的
acceptance.md に基づき tests/e2e に Playwright E2E を実装し、Localで安定して通る状態にする。

## 編集可能範囲
- tests/e2e/** のみ

## 入力（参照必須）
- specs/<feature>/qa/acceptance.md
- specs/<feature>/tasks.md

## ルール
- baseURL 前提で相対URLを使う（推奨）
- data-testid セレクタを優先
- 失敗時の trace/screenshot 取得を有効にする
