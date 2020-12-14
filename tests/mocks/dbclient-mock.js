const DbClient = require('../../app/repositories/db-client')
const dbClient = new DbClient({ client: 'postgresql' })

module.exports = (dbResultFunc) => {
  return {
    queryBuilder: dbClient.queryBuilder,
    transaction: async () => ({}),
    execute: async (query, transaction = null) => dbResultFunc(query, transaction)
  }
}
