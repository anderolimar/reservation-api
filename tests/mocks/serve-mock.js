const express = require('express')
const bodyParser = require('body-parser')

class ServerMock {
  init (app) {
    this.handler = express()
    this.router = express.Router()
    this.router.use(bodyParser.json())
    this.cors(this.router)

    app.init(this.router)

    this.handler.use(this.router)
  }

  cors (router) {
    router.use((req, res, next) => {
      console.log(`###### req.originalUrl : ${req.originalUrl}`)
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD')
      res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept')
      next()
    })
  }
}

module.exports = ServerMock
