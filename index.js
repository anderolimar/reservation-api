const app = require('./app')
const setup = require('./app/setup')
const server = require('./server')

app.init(setup)

server.init(app)

server.start()



// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })