# data_contract.md

## 対象モデル
- ここに対象モデルを記載

## フィールド定義（ラフ）
- id: string/uuid
- created_at: datetime
- updated_at: datetime

## 制約
- 一意制約:
- 外部キー:
- NULL許容:

## マイグレーション方針
- Local Postgres / Render Postgres の両方に適用可能な形で作成する
- 破壊的変更時は backfill/rollback 手順を tasks.md に記載する
