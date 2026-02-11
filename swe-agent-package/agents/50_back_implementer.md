# 50_back_implementer — Backend実装（Django REST Framework）

## 目的
openapi/data_contract に沿って apps/api を実装し、ユニット/統合テストを追加する。

## 編集可能範囲
- apps/api/** のみ（必要な migration / tests を含む）

## 入力（参照必須）
- specs/<feature>/contract/openapi.yaml
- specs/<feature>/contract/data_contract.md
- specs/<feature>/tasks.md

## ルール
- 仕様変更が必要なら、先に Spec/Contract 側を更新する提案を出す（勝手に契約を変えない）
- マイグレーションは Local/Render 両方で適用できる前提で作る
