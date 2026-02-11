#!/usr/bin/env bash
set -euo pipefail

python -m pip install -r docker/requirements-dev.txt
npm --prefix apps/web install
npm --prefix tests/e2e install
