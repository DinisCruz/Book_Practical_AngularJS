### No limitations on test stack

- it is ok (and natural) to lock down the dev stack of an app (since the cost of upgrade can be high, with no significant benefit)
- it is NOT ok to to limit the technologies and techniques that can be used for testing. Of course that the technologies used have to be solid, maintainable and scaleable; but one shouldn't be locked by the tech stack of the main app
 - tests will not run on production
 - ok to have all sorts of technologies (specially if they can execute inside docker)
- for example using .NET to test an Java app, Node to test an .NET app, Python to run QA tests via Selenium
