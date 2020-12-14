const BaseBusiness = require('./base-business')
const ClientsResponse = require('../models/responses/clients-response')
const ClientsValidations = require('./validations/clients-validations')
const ApiKeyGen = require('../utils/api-key-gen')

class ClientsBusiness extends BaseBusiness {
  /**
     * Creates an instance of ClientsBusiness.
     *
    * @constructor
    * @param  {import('../repositories/clients-repository')} repository
    * @param  {import('../logger')} logger
    */
  constructor (repository, logger) {
    super(logger)
    this.repository = repository
  }

  /**
    * @method clients
    * Returns clients list
    * @param  {import('../controllers/params/admin-params').ClientsParams} params
    * @returns {ClientsResponse}
    */
  async clients (params) {
    try {
      const total = await this.repository.getTotalClients(params)
      const clients = await this.repository.getClients(params)
      return new ClientsResponse(clients, total)
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }

  /**
    * @method newClient
    * Returns new Client
    * @param  {import('../controllers/params/admin-params').NewClientParams} params
    * @returns {import('../models/database/client')}
    */
  async newClient (params) {
    try {
      ClientsValidations.validateNewClient(params)
      const createParams = { ...params, apiKey: ApiKeyGen.generate() }
      const id = await this.repository.insertClient(createParams)
      return this.repository.getClient({ id })
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }
}

module.exports = ClientsBusiness
