## Case-study: Adding a new API and View

This is the story of an new feature that was added without browser being opened once:

![image](https://cloud.githubusercontent.com/assets/656739/16160013/bd0f5f54-34bd-11e6-8012-5b90b8f41fda.png)

Although the brief looks simple (add a way to list projects and expose it on an api and view) there were a lot of moving parts.

In total there were 7x code and 9x test files created/modified:

- **Maturity-Models**
  - src/backend/Data-Project.coffee
  - src/controllers/Api-Project.coffee
  - src/server/Server.coffee  
  - test/controllers/Api-Project.test.coffee
  - test/server/Server.test.coffee
  - test/supertest/Api-Project.super.test.coffee

- **Maturity-Models-UI**

  - src/angular/Routes.coffee
  - src/controllers/Projects-Controller.coffee
  - src/services/MM_Graph_API.coffee
  - views/pages/projects.page.pug
  - test/angular/Routes.test.coffee
  - test/controllers/Projects-Controller.test.coffee
  - test/services/MM_Graph_API.test.coffee
  - test/views/projects.page.test.coffee  

- **Maturity-Models-UI**  

  - test/http/views/projects.page.http.coffee
  - test/jsdom/views/projects.page.jsdom.coffee  







2) Adding a new controller: **API-Project**

```coffee
Api_Project = require '../../src/controllers/Api-Project'

describe 'controllers | Api-Project', ->
  #app      = null
  api_Project = null

  before ->
    using new Api_Project(), ->
      api_Project = @

  it 'constructor', ->
    using api_Project, ->
      @.constructor.name.assert_Is 'Api_Project'      
      @.data_Project.constructor.name.assert_Is 'Data_Project'
      @.router.assert_Is_Function()

  it 'add_Routes', ()->
    using new Api_Project(), ->
      @.add_Routes()
      @.router.stack.assert_Size_Is 1

  it 'list', ()->
    res =
      json: (data)->
        data.assert_Contains ['demo', 'appsec']

    using new Api_Project(), ->
      @.list(null, res)
```

```coffee
Data_Project  = require '../backend/Data-Project'
express       = require 'express'

class Api_Project
  constructor: (options)->
    @.options      = options || {}
    @.router       = express.Router()
    @.data_Project = new Data_Project()


  add_Routes: ()=>
    @.router.get '/project/list'     , @.list
    @

  list: (req,res)=>
    res.json @.data_Project.projects_Keys()

module.exports = Api_Project
```
