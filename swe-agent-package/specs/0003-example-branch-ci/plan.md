# Plan

1. CI workflow を `.github/workflows` に追加する
2. trigger を `example` ブランチ限定にする
3. lint/typecheck/test の3ジョブを構成する
4. test ジョブに PostgreSQL service container を追加する
5. 参照漏れがないことを確認する
