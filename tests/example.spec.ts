import { test, expect } from "@playwright/test";

test("do not pass", async ({ page }) => {
  await expect(async () => {
    await page.waitForTimeout(100);
    expect(1).toBeGreaterThan(2);
  }).toPass({ timeout: 0 });
});
