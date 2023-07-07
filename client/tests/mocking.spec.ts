import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // log only for song requests
  page.on('request', (request) => {
    if (request.url().startsWith('http://localhost:8081/songs')) {
      console.log('>>', request.method(), request.url());
    }
  });

  const jsonData = [
    {
      id: 1000,
      title: "My own random song",
      artist: "Me",
      genre: "Random",
      album: "Random album",
      albumImageUrl: "https://picsum.photos/268",
      youtubeId: "",
      lyrics: "",
      tab: ""
    }
  ];

  await page.route('http://localhost:8081/songs**', async route => {
    const response = await route.fetch();
    await route.fulfill({ response, contentType: 'application/json', json: jsonData });
  });

  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
});