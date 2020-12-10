const app = require('./app')
const Setup = require('./app/setup')
const server = require('./server')
const dbConfig = require('../knexfile.js')

app.setup(new Setup({ dbConfig }))

server.init(app)

server.start()
