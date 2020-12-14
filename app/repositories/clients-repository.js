const BaseRepository = require('./base-repository')
const Client = require('../models/database/client')
const DataBaseException = require('../models/exceptions/database-exception')

const ClientsTable = 'CLIENTS'
const ClientsIdColumn = 'ID'
const ClientsNameColumn = 'NAME'
const ClientsActiveColumn = 'ACTIVE'
const ClientsApiKeyColumn = 'API_KEY'

class ClientsRepository extends BaseRepository {
  /**
    * @method getTotalClients
    * @param {object} args
    * @param {string} args.name
    * @param {boolean} args.active
    * @returns { total }
    */
  async getTotalClients ({ name, active } = {}) {
    try {
      const query = this.queryBuilder
        .count(`${ClientsIdColumn} as total`)
        .from(ClientsTable)

      if (name) query.where(ClientsNameColumn, 'LIKE', `%${name}%`)
      if (active) query.where(ClientsActiveColumn, active)

      const result = await this.dbClient.execute(query) || []
      const { total } = result[0]
      return total
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('getTotalClients')
    }
  }

  /**
    * @method getClients
    * @param {object} args
    * @param {string} args.name
    * @param {boolean} args.active
    * @param {int} args.limit
    * @param {int} args.offset
    * @returns {[Client]}
    */
  async getClients ({ name, active, limit = 10, offset = 0 } = {}) {
    try {
      const query = this.queryBuilder
        .select([
                `${ClientsIdColumn} as id`,
                `${ClientsNameColumn} as name`,
                `${ClientsActiveColumn} as active`,
                `${ClientsApiKeyColumn} as apiKey`
        ])
        .from(ClientsTable)

      if (name) query.where(ClientsNameColumn, 'LIKE', `%${name}%`)
      if (active) query.where(ClientsActiveColumn, active)

      query.limit(limit)
        .offset(offset)

      const clientsResult = await this.dbClient.execute(query)
      return clientsResult.map(cli => new Client(cli))
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('getClients')
    }
  }

  /**
    * @method getClient
    * @param {object} args
    * @param {string} args.id
    */
  async getClient ({ id }) {
    try {
      const query = this.queryBuilder
        .first([
                `${ClientsIdColumn} as id`,
                `${ClientsNameColumn} as name`,
                `${ClientsActiveColumn} as active`,
                `${ClientsApiKeyColumn} as apiKey`
        ])
        .from(ClientsTable)
        .where(ClientsIdColumn, id)

      const result = await this.dbClient.execute(query)
      return new Client(result)
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('getClient')
    }
  }

  /**
    * @method insertClient
    * @param {object} args
    * @param {string} args.name
    * @param {boolean} args.active
    * @param {string} args.apiKey
    * @param {int}
    */
  async insertClient ({ name, active, apiKey } = {}) {
    try {
      const query = this.queryBuilder
        .insert({
          [`${ClientsNameColumn}`]: name,
          [`${ClientsActiveColumn}`]: active,
          [`${ClientsApiKeyColumn}`]: apiKey
        })
        .into(ClientsTable)
        .returning(ClientsIdColumn)

      const result = await this.dbClient.execute(query)
      return result[0]
    } catch (err) {
      this.logger.error(err)
      throw new DataBaseException('insertClient')
    }
  }
}

module.exports = ClientsRepository
