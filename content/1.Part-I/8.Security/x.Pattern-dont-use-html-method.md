### Pattern - Don't use .html() method

- The .html() is really evil and problematic
- it should not be used since it implies that DOM objects are being created in an insecure way
- when data needs to be put inside an element .text() needs to be used.
- attributes have to be set using attribute's setters
