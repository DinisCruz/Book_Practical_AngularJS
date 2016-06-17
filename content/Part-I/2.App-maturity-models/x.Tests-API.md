### Tests - API

These are the apis used by the tests (i.e. this is an Test API). The idea is to wrap way the app is accessed from the tests, so that they (the tests) don't need to worry about how to execute the request (i.e. they just handle the answer)

At the moment there are 3 ways to access the application

 - **Http** - Using direct http requests (the bare-to-the-metal approach). This approach is good for speed.  Works really well for API calls and pages that don't need 'angular state' (for example testing page components)
 - **Browser** - Using Chrome (i.e. [Electron]({add link})), where the full site is accessed and invoked. This has the advantage that we are testing the real app with all dependencies enabled. Good for looking down the user experience and confirming that latest changes (or refactoring) has not modified the user experience
 - **JsDom** - Using node's [jsdom]({add link}) which creates a simulated DOM that is actually able to invoke Angular's digest. This has the advantage that we have all the power of Node's apis when analyzing the Angular objects. Good for tests that need to have an Angular Digest working


#### Http
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

#### Browser

#### JsDom_API

This is the API that allows access via JsDom, and has the following methods: $app, $http, $scope, open, server_Url, wait_No_Http_Requests

```coffee
Travis_API  = require './Travis-API'
jsdom       = require('jsdom')

class JsDom_API

  constructor: ->
    @.travis_API = new Travis_API()
    @.$          = null
    @.document   = null
    @.window     = null
    @.http       = null
    @.on_Created = null
    @.on_Load    = null

  $app: ()=>
    element = @.window.document.querySelector('.ng-scope')
    @.window.angular.element(element)

  $http: ()=>
    @.$app().injector().get('$http')

  $scope: ()=>
    @.$app().scope()

  open: (path, callback)=>
    if typeof(path) is 'function'
      callback = path
      path     = ''
    if not path.starts_With('/')
      path = '/' + path

    url = @.server_Url() + path
    config =
      url: url
      features :
        FetchExternalResources  : ["script"]
        ProcessExternalResources: ["script"]
        SkipExternalResources   : true
      created: ()=> @.on_Created?()
      onload : ()=> @.on_Load?()
      done   : (err, window)=>
        throw err if err
        @.window = window
        @.$      = window.$
        callback @.$, @.window

    jsdom.env config

  server_Url: ->
    @.travis_API.server_Url()

  wait_No_Http_Requests: (next)=>
    if @.$http().pendingRequests.length > 0
      5.wait =>
        @.wait_No_Http_Requests(next)
    else
      next()

module.exports = JsDom_API
```
