# ISOLATION

Cypress enables you to stub your network responses without having to run a dedicated mock server.
By removing (external) dependencies you can create specific test situations that are not depending on external systems and run your test in isolation.

In this exercise you will learn how to setup a Cypress mock server and use routing to fake network responses. 

## 4. Exercise: Replace basic response data
For this exercise you will still be using the [TabTracker](https://github.com/codyseibert/tab-tracker/) that was also used during the other exercises. **Make sure to only run the client and NOT the server for this exercise**. 
 
When you start the TabTracker you will see an empty application. When you open your browsers development tools, you will see that the application is trying to retrieve a list of Songs. Since your server isn't running it returns an empty response on the GET request. We want to return at least one song to fill the Songs list. 

1. Create a new spec file and set the baseURL to your TabTracker application.
2. Start a new server instance using [cy.server()](https://docs.cypress.io/api/commands/server.html)
3. Use [cy.route()](https://docs.cypress.io/api/commands/route.html) to route the songs GET request to a fixture file, replacing the empty respons with mocked data. You can use the JSON below as an example.
```json
[
  {
    "id": 8,
    "title": "Ghamat Ainy",
    "artist": "Rashed Almajid",
    "genre": "Khaliji",
    "album": "Ghamat Ainy",
    "albumImageUrl": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/d5/4a/aa/d54aaac4-f2d5-c2a8-7076-3d2b88b31202/939412.jpg/626x0w.jpg",
    "youtubeId": "https://www.youtube.com/watch?v=vEnea7rP_bQ",
    "lyrics": "2",
    "tab": "1",
    "createdAt": "2018-10-30T08:44:53.759Z",
    "updatedAt": "2018-10-30T08:44:53.759Z"
  }
]
```
4. Assert that the title and artist are returned correctly.

## Exercise: Standard responses
The server takes multiple arguments. With these arguments you can control the basic response of the mock server. This default behavior is overwritten with information the server receives from `cy.route()`.

Adding to the test that you've created in the previous step:
1. Modify the mock server in such a way that the song information is only displayed after 10 seconds. What happens to your assertion?

## Exercise: Wait on your response
With Cypress you do not have to wait on a response. It will automatically wait for your selector to appear in the DOM. However in our previous step we've exceeded the default time-out value of Cypress (4000ms). We do not want to increase this as this would slow down our tests and hide performance issues. However in this case we want to make sure that the page still loads after our 10 second delay. We can solve this by waiting explicitly for our `cy.route()` action. 

1. Modify your test in such a way that your assertion does not time-out.

### Need help?
* Use the network tab in the developer tools of your browser to help you find the calls that your client application is trying to make.
* Check out the [cy.route documentation](https://docs.cypress.io/api/commands/route.html#) for the correct syntax
