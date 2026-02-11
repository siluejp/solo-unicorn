import { expect, test } from "@playwright/test";

test("top page is reachable", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Solo Unicorn/);
  await expect(page.getByRole("heading", { name: "Solo Unicorn" })).toBeVisible();
});
