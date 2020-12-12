const BaseBusiness = require('./base-business')
const ClientsResponse = require('../models/responses/clients-response')
const { Client } = require('knex')

class ClientsBusiness extends BaseBusiness {
    /**
     * Creates an instance of ClientsBusiness.
     *
    * @constructor
    * @param  {import('../repositories/clients-repository')} repository
    * @param  {import('../logger')} logger
    */
    constructor(repository, logger) {
        super(logger)
        this.repository = repository
    }

    /**
    * @method clients
    * Returns clients list 
    * @param  {import('../controllers/params/admin-params')} params
    * @returns {ClientsResponse}
    */
    async clients(params) {
        try {
            const total = await this.repository.getTotalClients(params)
            const clients = await this.repository.getClients(params)
            return new ClientsResponse(clients, total)
        }
        catch(err) {
            this.logger.error(err)
            throw err
        }
    }
}

module.exports = ClientsBusiness