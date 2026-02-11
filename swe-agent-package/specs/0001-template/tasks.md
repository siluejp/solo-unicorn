# tasks.md

## PR-1 Spec/Contract 固定
- [ ] `specs/0001-template/spec.md` 更新
- [ ] `specs/0001-template/contract/openapi.yaml` 更新
- [ ] `specs/0001-template/contract/data_contract.md` 更新
- [ ] `specs/0001-template/qa/acceptance.md` 更新

## PR-2 実装
- [ ] Back実装（`apps/api/**`）
- [ ] Front実装（`apps/web/**`）
- [ ] QA実装（`tests/e2e/**`）
- [ ] 必要なら DevEx/Infra 更新

## Done
- [ ] `make lint` 成功
- [ ] `make typecheck` 成功
- [ ] `make test` 成功
- [ ] `make e2e` 成功

## 失敗時ルール
- [ ] 失敗ログを記録
- [ ] 修正後に同一コマンドを再実行して成功確認

## 破壊的変更がある場合
- [ ] 移行手順
- [ ] ロールバック手順
