
const ClientsRepository = require('../../app/repositories/clients-repository')

const logger = {
    info: () => {},
    error: (err) => { console.error(err); }
}

class SetupMock {
  constructor (repositories, dbClient) {
    this.dbClient = dbClient
    this.repositories = repositories || []
  }

  resources () {
    const resourcesObj = { logger }
    this.repositories.forEach(repository => {
      resourcesObj[`${repository.name}`] = new repository.type(this.dbClient, logger)
    });
    return resourcesObj
  }
}

module.exports = SetupMock