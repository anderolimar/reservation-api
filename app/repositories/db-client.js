class DbClient {
    constructor(config) {
        this.client = require('knex')(config)
    }

    get queryBuilder() {
        return this.client
    }

    async transaction() {
        return this.client.transaction()
    }

    async execute(query, transaction = null) {
        if(transaction) return query.transacting(transaction)
        return query
    }
}

module.exports = DbClient