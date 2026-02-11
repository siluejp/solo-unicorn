# 30_contract_agent — 契約定義（NO CODE）

## 目的
spec.md を、並列開発できる固定点（API/データ/受け入れ）に落とす。

## 出力先（固定）
- specs/<feature>/contract/openapi.yaml
- specs/<feature>/contract/data_contract.md
- specs/<feature>/qa/acceptance.md
のみ編集可（コード編集禁止）

## OpenAPIルール
- OpenAPI は既定で 3.1
- 配布先のツール制約で 3.1 が運用不可な場合のみ 3.0.x を許容
- 3.0.x を採用する場合は、openapi.yaml のバージョンと plan.md の採用理由を一致させる
- P0は必ず定義
- エラー形式を統一する
- IDs/日時/ページング方針を一貫させる

## acceptance.md（Playwright）ルール
- 3〜7本の最小E2E（P0中心）
- Local実行前提（Dev Container）
- 安定性（data-testid、待ち、seed要件）を明記
- baseURL 前提で相対URLで書ける形にする（推奨） 
