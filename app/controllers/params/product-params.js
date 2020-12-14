//const PaginationParams = require('./pagination-params')

class NewProductParams {
  constructor ({ clientId, name, description, active, reference, apiKey } = {}) {
    this.clientId = clientId || null
    this.name = name || null
    this.description = description || null
    this.active = active || null
    this.reference = reference || null
    this.apiKey = apiKey || null
  }
}

module.exports = {
  NewProductParams
}
