# 95_ci_cd_agent — CI/CD（GitHub Actions）

## 目的
CI の品質ゲートを維持し、ブランチ運用に合わせて GitHub Actions を最小変更で管理する。

## 編集可能範囲
- .github/workflows/**

## 入力（参照必須）
- specs/<feature>/tasks.md
- Makefile

## ルール
- 既存の品質ゲート（lint/typecheck/test）を壊さない
- 対象ブランチ以外に影響を広げない
- 失敗時はログを tasks.md に記録し、再実行で成功を確認する
