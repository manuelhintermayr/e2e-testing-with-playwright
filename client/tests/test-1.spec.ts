import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {;
  await page.goto('http://localhost:8080/#/songs');
  await page.getByRole('textbox', { name: 'Search by song title, artist, album, or genre' }).click();
  await page.getByRole('textbox', { name: 'Search by song title, artist, album, or genre' }).fill('Nirvana');
  await page.getByRole('textbox', { name: 'Search by song title, artist, album, or genre' }).press('Enter');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('The login information was incorrect').click();
});