import { test, expect, Page } from '@playwright/test';

test('logging songs', async ({ page }) => {
  // log only for song requests
  page.on('request', (request) => {
    if (request.url().startsWith('http://localhost:8081/songs')) {
      console.log('>>', request.method(), request.url());
    }
  });

  page.on('response', (response) => {
    if (response.url().startsWith('http://localhost:8081/songs')) {
      console.log('<<', response.status(), response.url());
    }
  });

  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
  await modifySong(page);
});

test('logging images', async ({ page }) => {
  // Log image-related responses
  page.on('response', async (response) => {
    const contentType = response.headers()['content-type'];

    if (contentType && contentType.startsWith('image/')) {
      console.log('<<', response.status(), response.url());
    }
  });

  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
  await modifySong(page);
});

const modifySong = async (page: Page) => {
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
}