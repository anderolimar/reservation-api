const PaginationParams = require('./pagination-params')

class ClientsParams extends PaginationParams {
  constructor ({ name, offset, limit } = {}) {
    super({ offset, limit })
    this.name = name || null
  }
}

module.exports = {
  ClientsParams
}
