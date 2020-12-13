
const ClientsRepository = require('../../app/repositories/clients-repository')

const logger = {
    info: () => {},
    error: () => { }
}

class SetupMock {
  constructor (repository, dbClient) {
    this.dbClient = dbClient
    this.repository = repository
  }

  resources () {
    return {
      [`${this.repository.name}`]: new this.repository.type(this.dbClient, logger),
      logger
    }
  }
}

module.exports = SetupMock