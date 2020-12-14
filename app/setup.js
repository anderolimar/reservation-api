const logger = require('./logger')
const DbClient = require('./repositories/db-client')
const ClientsRepository = require('./repositories/clients-repository')
const ProductsRepository = require('./repositories/products-repository')

class Setup {
  constructor ({ dbConfig }) {
    this.dbClient = new DbClient(dbConfig)
  }

  resources () {
    return {
      clientsRepository: new ClientsRepository(this.dbClient, logger),
      productsRepository: new ProductsRepository(this.dbClient, logger),
      logger
    }
  }
}

module.exports = Setup
