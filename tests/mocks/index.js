const app = require('../../app')
const ServerMock = require('./serve-mock')
const SetupMock = require('./setup-mock')
const dbClientMock = require('./dbclient-mock')

module.exports = {
    getServerMock: (repository, dbResultFunc) => {
        const dbClient = dbClientMock(dbResultFunc)
        const setup = new SetupMock(repository, dbClient)
        const server = new ServerMock()

        app.setup(setup)
        server.init(app)

        return server
    }
}