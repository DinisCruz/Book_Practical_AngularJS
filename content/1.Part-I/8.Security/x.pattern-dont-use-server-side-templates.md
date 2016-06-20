### Pattern - Don't use server-side templates

_Don't mix server side and client side templates ... Most HTML encoders and frameworks leave {{}} alone_
[^webtonull-1]

- there should be a clean 'air-gapped' separation between client side code (Angular based) and service side code (NodeJS REST based)
- all data transfers between client and server is done via AJAX calls (using AngularJS services)
- all content loaded from server is static (AngularJS templateUrl, javascript, css, images)
- there should be no server-side templates,  dynamic generated content or (even worse) dynamic creation of javascript blocks (with data injected into it using string concats/transclusion)
   - this actually existed in the first versions of the Maturity Models project, where there were a number of html pages that were dynamically generated from jade templates (see images below)
   - part of the move to angular was to avoid the inevitable complexity and security issues of handling user data (in this case the BSIMM mappings)

![image](https://cloud.githubusercontent.com/assets/656739/16211333/cb40565a-3738-11e6-9762-7081856b9d5b.png)

![image](https://cloud.githubusercontent.com/assets/656739/16211343/d94fa688-3738-11e6-97bb-b5636d490c29.png)

![image](https://cloud.githubusercontent.com/assets/656739/16211350/e82535ba-3738-11e6-9011-4509a49e9b6c.png)

- this separation of concerns dramatically simplifies the testing of both client and server code
- One of the security issues that this move prevents is the ```{{ }}``` injection that can occur in AngularJS code generated on the server side
  - the injection blind-spot is caused by the fact that the chars ```{ } | ( ) [ ] = , .``` are not usually escaped, but are very useful when writing Javascript exploits (see [jsfuck](http://www.jsfuck.com/) for an example of how crazy Javacript can be).
  - add reference to research on this topic that exists on the [AngularJs-security.md](AngularJs-security.md) page


[^webtonull-1]: Erlend Oftedal, @webtonull, https://twitter.com/webtonull/status/745007874385055744
