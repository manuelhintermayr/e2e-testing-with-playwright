import { test, expect } from '@playwright/test';

test('logging', async ({ page }) => {
  // Subscribe to 'request' and 'response' events.
  page.on('request', request => console.log('>>', request.method(), request.url()));
  page.on('response', response => console.log('<<', response.status(), response.url()));

  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
  await page.getByText('Nevermind').click();
  await page.getByRole('link', { name: 'View' }).first().click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Nevermind2');
  await page.getByRole('textbox', { name: 'Tab' }).click();
  await page.getByRole('textbox', { name: 'Tab' }).fill('1');
  await page.getByRole('textbox', { name: 'Lyrics' }).click();
  await page.getByRole('textbox', { name: 'Lyrics' }).fill('2');
  await page.getByRole('button', { name: 'Save Song' }).click();
  await page.getByText('TabTracker').click();
});