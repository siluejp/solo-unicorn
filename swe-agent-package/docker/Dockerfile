FROM mcr.microsoft.com/devcontainers/python:1-3.12-bullseye

# Development utilities for Django/Next.js monorepo workflows.
RUN rm -f /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        gnupg \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
        | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" \
        > /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        libasound2 \
        libatk-bridge2.0-0 \
        libatk1.0-0 \
        libatspi2.0-0 \
        libcairo2 \
        libcups2 \
        libdbus-1-3 \
        libgbm1 \
        libpango-1.0-0 \
        libxcomposite1 \
        libxdamage1 \
        libxfixes3 \
        libxkbcommon0 \
        libxrandr2 \
        build-essential \
        libpq-dev \
        make \
        nodejs \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

COPY docker/requirements-dev.txt /tmp/requirements-dev.txt
RUN python -m pip install --upgrade pip \
    && python -m pip install -r /tmp/requirements-dev.txt \
    && rm -f /tmp/requirements-dev.txt
