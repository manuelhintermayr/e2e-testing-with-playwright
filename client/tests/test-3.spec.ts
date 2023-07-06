import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/#/songs');
  await page.getByRole('link', { name: 'add' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Cooler Song');
  await page.getByLabel('Title').press('Tab');
  await page.getByLabel('Artist').click();
  await page.getByLabel('Artist').fill('Riccardo');
  await page.locator('div').filter({ hasText: /^Genre$/ }).click();
  await page.getByLabel('Genre').fill('Techno');
  await page.getByLabel('Album', { exact: true }).click();
  await page.getByLabel('Album', { exact: true }).fill('Xebia');
  await page.getByLabel('Album Image Url').click();
  await page.getByLabel('Album Image Url').fill('goog');
  await page.getByLabel('Album Image Url').press('Control+a');
  await page.getByLabel('Album Image Url').fill('www.google.com/logo.png');
  await page.getByLabel('YouTube ID').click();
  await page.getByLabel('YouTube ID').fill('abc1234');
  await page.getByLabel('Tab').click();
  await page.getByLabel('Tab').fill('Tab');
  await page.getByLabel('Tab').press('Tab');
  await page.getByLabel('Lyrics').fill('Ulalalalalalala');
  await page.getByRole('button', { name: 'Create Song' }).click();
});