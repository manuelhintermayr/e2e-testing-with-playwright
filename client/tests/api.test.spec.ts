import { test, expect, Page } from '@playwright/test';
import { createSong, cleanUp, searchSong, checkTextInSongResults } from './functions';


test('songs returning contain', async ({ request }) => {
    // bug found
    const issues = await request.get(`http://localhost:8081/songs`);
    console.log(await issues.json());
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        'id': 1,
        'title': 'Nevermind',
        'artist': 'Nirvana',
        'genre': 'Alternative Rock',
        'album': 'Nevermind',
        'albumImageUrl': 'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg',
        'youtubeId': 'm-ofL_3EZyE',
        'lyrics': '',
        'tab': '',
        'createdAt': '2018-02-13T12:56:24.432Z',
      }));
  });