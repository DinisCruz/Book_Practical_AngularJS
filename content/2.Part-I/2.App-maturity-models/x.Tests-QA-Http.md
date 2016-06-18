### Tests - QA - Http


#### Http_API.coffee

This is the API that allows access via direct http requests, and has the following methods: GET, $GET, GET_Json, server_Url

```coffee
cheerio    = require 'cheerio'
Travis_API = require './Travis-API'

class Http_API

  constructor: ->
    @.travis_API = new Travis_API()

  GET: (path, callback)=>
    full_Url = @.travis_API.server_Url() + path
    full_Url.GET callback

  $GET: (path, callback)=>
    @.GET path, (data)=>
      callback cheerio.load data

  GET_Json: (path, callback)=>
    full_Url = @.travis_API.server_Url() + path
    full_Url.json_GET callback

  server_Url: ()=>
    @.travis_API.server_Url()

module.exports = Http_API
```
