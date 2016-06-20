### Answer Security questions with (unit) Tests

- (unit) Test must be used to answer security questions:
  - for example how do you know if a particular endpoint or API is not vulnerable to XSS  (you need proof)
  - how does the angular code handle the data that is received from the server
    - what happens if the server is the once attacking the client AngularJS app
    - we need to know which server side provided data is not safely handled by the client-side code (ideally the answer is none, since the AngularJS app is able to safely handle all of it)
