import { expect, test, type Page } from "@playwright/test";

const topAccessCount = (page: Page) => page.getByTestId("top-access-count");

const readTopAccessCount = async (page: Page): Promise<number> => {
  const countElement = topAccessCount(page);
  await expect(countElement).toHaveText(/^\d+$/);
  const rawCount = (await countElement.textContent())?.trim();
  return Number(rawCount || "0");
};

test("top page shows access count", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Solo Unicorn/);
  await expect(page.getByRole("heading", { name: "Solo Unicorn" })).toBeVisible();
  await expect(topAccessCount(page)).toHaveText(/^\d+$/);
});

test("access count increments on reload", async ({ page }) => {
  await page.goto("/");
  const firstCount = await readTopAccessCount(page);

  await page.reload();
  const secondCount = await readTopAccessCount(page);

  expect(secondCount).toBeGreaterThan(firstCount);
});
