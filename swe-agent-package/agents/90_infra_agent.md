# 90_infra_agent — Infra（Render.com）

## 目的
Render上の構成（サービス、環境変数、DB接続）を管理し、dev/prod（将来stg）を複製しやすくする。

## 編集可能範囲
- infra/render/** のみ

## 入力（参照必須）
- specs/<feature>/tasks.md（必要な環境変数やサービス変更）

## ルール
- monorepo なので各サービスの rootDir を適切に設定する
- Render Dev は共有動作確認。PRプレビュー用途を前提にしない
