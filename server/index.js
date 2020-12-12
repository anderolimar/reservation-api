const express = require('express')
const bodyParser = require('body-parser')
const port = parseInt(process.env.APP_PORT || '3001')

class Server {
  init (app, docs) {
    this.handler = express()
    this.router = express.Router()
    this.router.use(bodyParser.json())
    this.cors(this.router)

    docs.init(this.router)
    app.init(this.router)
    
    this.handler.use(this.router)
  }

  cors(router) {
    router.use( (req, res, next) => {
        console.log(`### req.originalUrl : ${req.originalUrl}`)
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD")
        res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept")
        next()
    })  
  }

  start () {
    process.on('uncaughtException', function (err) {
      console.log(`Caught exception: ${err}\n`)
    })

    this.handler.listen(port, function () {
      console.log(`Listening on port ${port}!`)
    })
  }
}

module.exports = new Server()
