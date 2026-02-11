# Acceptance

## Scenario 1: push on example branch
- Given `example` ブランチに push する
- When GitHub Actions が起動する
- Then `lint`, `typecheck`, `test` ジョブが実行される

## Scenario 2: pull request targeting example branch
- Given base branch が `example` の pull request を作成する
- When GitHub Actions が起動する
- Then `lint`, `typecheck`, `test` ジョブが実行される
