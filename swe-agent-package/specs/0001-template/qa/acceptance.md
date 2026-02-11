# acceptance.md

## 前提
- Local（Dev Container）で実行
- baseURL 前提で相対URLを使用
- data-testid を優先

## 最小E2E（P0中心）
1. 正常系: 主要導線が完了する
2. 異常系: バリデーションエラーが表示される
3. 回帰防止: 既存主要導線に影響がない

## 安定化要件
- seed データの前提を明記
- 適切な待機条件を明記
- 失敗時に trace/screenshot を取得
