.PHONY: up down logs bootstrap lint typecheck test e2e migrate api web

COMPOSE_FILE := docker/docker-compose.yml
COMPOSE := docker compose -f $(COMPOSE_FILE)
RUN_WORKSPACE := $(COMPOSE) run --rm workspace bash -lc

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f --tail=100

bootstrap:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test && python -m pip install -r docker/requirements-dev.txt && npm --prefix apps/web install && npm --prefix tests/e2e install && npm --prefix tests/e2e exec playwright install --with-deps chromium"

lint:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test && ruff check apps/api && npm --prefix apps/web run lint && npm --prefix tests/e2e run lint"

typecheck:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test && npm --prefix apps/web run typecheck && npm --prefix tests/e2e run typecheck"

test:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test && pytest apps/api/tests -q"

e2e:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test && npm --prefix tests/e2e install && npm --prefix tests/e2e exec playwright install --with-deps chromium && npm --prefix tests/e2e run test"

migrate:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test/apps/api && python manage.py migrate"

api:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test/apps/api && python manage.py runserver 0.0.0.0:8000"

web:
	$(RUN_WORKSPACE) "cd /workspaces/solo-unicorn-test && npm --prefix apps/web install && npm --prefix apps/web run dev -- --hostname 0.0.0.0 --port 3000"
