class BaseRepository {
  /**
    * BaseRepository class
    * @param  {import('./db-client')} dbClient
    * @param  {import('../logger')} logger
    */
  constructor (dbClient, logger) {
    this.dbClient = dbClient
    this.logger = logger
  }

  get queryBuilder () {
    return this.dbClient.queryBuilder
  }
}

module.exports = BaseRepository
