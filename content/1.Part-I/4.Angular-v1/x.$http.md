### $http

- used to make network/ajax requests
- works differently in tests (requests will not be made)
  - this is a great thing, and will push us into a great development environment

**get**

```coffee
file_List: (callback)=>
  url = "/api/v1/file/list"
  @.$http.get url
         .success callback
```

**post**

```coffee
file_Save: (target,data, callback)=>
  url = "/api/v1/file/save/#{target}?pretty"
  @.$http.post(url, data)
         .success (data)->
            callback data
```     
