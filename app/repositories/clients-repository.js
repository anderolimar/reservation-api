const BaseRepository = require('./base-repository')
const Client = require('../models/database/client')

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
    async getTotalClients({ name, active }) {
        try {
            const query = this.queryBuilder
            .count(`${ClientsIdColumn} as total`)
            .from(ClientsTable)

            if(name) query.where(ClientsNameColumn, 'LIKE', `%${name}%`)
            if(active) query.where(ClientsActiveColumn, active)

            const result = await this.dbClient.execute(query) || []
            const { total } = result[0]
            return total
        }
        catch(err) {
            this.logger.error(err)
            throw err
        }
    }

    /**
    * @method getClients
    * @param {object} args
    * @param {string} args.name
    * @param {boolean} args.active
    * @param {int} args.limit
    * @param {int} args.offset
    */    
    async getClients({ name, active, limit, offset }) {
        try {
            const query = this.queryBuilder
            .select([
                `${ClientsIdColumn} as id`,
                `${ClientsNameColumn} as name`,
                `${ClientsActiveColumn} as active`,
                `${ClientsApiKeyColumn} as apiKey`
            ])
            .from(ClientsTable)

            if(name) query.where(ClientsNameColumn, 'LIKE', `%${name}%`)
            if(active) query.where(ClientsActiveColumn, active)

            query.limit(limit)
            .offset(offset)

            const clientsResult = await this.dbClient.execute(query)
            return clientsResult.map(cli => new Client(cli))
        }
        catch(err) {
            this.logger.error(err)
            throw err            
        }
    }
}

module.exports = ClientsRepository