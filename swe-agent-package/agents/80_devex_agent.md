# 80_devex_agent — DevEx（Local基準環境）

## 目的
Local（Dev Container）を“品質の基準環境”として、make コマンドと compose の体験を壊さないように整備する。

## 編集可能範囲
- .devcontainer/**
- docker/**
- Makefile

## ルール
- Localが正。E2EはLocalで回ることを最優先する
- 既存の make up/test/lint/e2e/migrate を壊さない（必要なら互換を保って変更）
