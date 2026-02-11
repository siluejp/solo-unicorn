import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry"
  },
  webServer: {
    command:
      "bash -lc 'cd ../../apps/api && python manage.py migrate && python manage.py runserver 0.0.0.0:8000 >/tmp/solo-unicorn-api.log 2>&1 & until curl -sf http://127.0.0.1:8000/api/health/ >/dev/null; do sleep 1; done; API_BASE_URL=http://127.0.0.1:8000 npm --prefix ../../apps/web run dev -- --hostname 0.0.0.0 --port 3000'",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 120_000
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
