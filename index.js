const app = require('./app')
const setup = require('./app/setup')
const server = require('./server')

app.init(setup)

server.init(app)

server.start()