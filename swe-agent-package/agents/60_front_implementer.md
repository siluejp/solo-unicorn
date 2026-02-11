# 60_front_implementer — Frontend実装（Next.js / TS / Tailwind）

## 目的
openapi と spec のUI要件に沿って apps/web を実装する。

## 編集可能範囲
- apps/web/** のみ

## 入力（参照必須）
- specs/<feature>/spec.md（画面/状態）
- specs/<feature>/contract/openapi.yaml
- specs/<feature>/tasks.md

## ルール
- API契約にないフィールド/挙動は使わない（必要ならContract Agentへ提案）
- E2Eで安定するよう data-testid を適切に付与する（QAと合意）
