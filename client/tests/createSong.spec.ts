import { test, expect, Page } from '@playwright/test';
import { createSong, cleanUp, searchSong, checkTextInSongResults } from './functions';

const newSongName = "Cooler Song";

test.beforeEach(async ({ page }) => {
  await cleanUp(page);
});

test.afterEach(async ({ page }) => {
  await cleanUp(page);
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/#/songs');
  await searchSong(page, newSongName);
  await checkTextInSongResults(page, 'No slot content defined.');
  await createSong(page, newSongName);
  await searchSong(page, newSongName);
  await checkTextInSongResults(page, newSongName);
});