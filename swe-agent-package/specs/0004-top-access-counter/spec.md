# Feature Spec: Top Access Counter

## Goal
TOP 画面にアクセス数を表示し、アクセス数をDBで永続管理する。

## Scope
- TOP 画面アクセス時にAPI経由でカウントを1増加
- 増加後のアクセス数をTOP画面に表示
- カウントはDBに保存され、再起動後も維持される

## Out Of Scope
- ユーザー別の集計
- 日次/月次の分析
- 管理画面での編集

## Success Criteria
- `/api/top-access/` でカウントを加算して返せる
- TOP画面で現在のアクセス数が表示される
- APIテストが追加される
