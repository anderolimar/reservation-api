const PaginationParams = require('./pagination-params')

class ClientsParams extends PaginationParams {
  constructor ({ name, active, offset, limit } = {}) {
    super({ offset, limit })
    this.name = name || null
    this.active = active || null
  }
}

module.exports = {
  ClientsParams
}
