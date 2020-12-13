const express = require('express')
const bodyParser = require('body-parser')

class ServerMock {

  init (app) {
    this.handler = express()
    this.router = express.Router()
    this.router.use(bodyParser.json())

    app.init(this.router)
    
    this.handler.use(this.router)
  }
}

module.exports = ServerMock