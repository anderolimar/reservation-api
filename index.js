const app = require('./app')
const Setup = require('./app/setup')
const server = require('./server')
const docs = require('./swagger')
const DB_CONFIG_ENVIRONMENT = process.env.DB_CONFIG_ENVIRONMENT || 'development'
const dbConfig = require('./knexfile.js')[DB_CONFIG_ENVIRONMENT]

app.setup(new Setup({ dbConfig }))

server.init(app, docs)

server.start()
