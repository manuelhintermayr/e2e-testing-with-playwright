import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
  await expect(page).toHaveScreenshot();
});