### Tests - API

These are the apis used by the tests (i.e. this is an Test API). The idea is to wrap way the app is accessed from the tests, so that they (the tests) don't need to worry about how to execute the request (i.e. they just handle the answer)

At the moment there are 2 ways to access the application

 - **Http** - Using direct http requests (the bare-to-the-metal approach). This approach is good for speed.  Works really well for API calls and pages that don't need 'angular state' (for example testing page components)
 - **JsDom** - Using node's [jsdom]({add link}) which creates a simulated DOM that is actually able to invoke Angular's digest. This has the advantage that we have all the power of Node's apis when analyzing the Angular objects. Good for tests that need to have an Angular Digest working

- **Browser** - Using Chrome (i.e. [Electron]({add link})), where the full site is accessed and invoked. This has the advantage that we are testing the real app with all dependencies enabled. Good for looking down the user experience and confirming that latest changes (or refactoring) has not modified the user experience
