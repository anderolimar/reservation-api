class NewProductParams {
  constructor ({ clientId, title, description, active, reference, apiKey } = {}) {
    this.clientId = clientId || null
    this.title = title || null
    this.description = description || null
    this.active = active || null
    this.reference = reference || null
    this.apiKey = apiKey || null
  }
}

module.exports = {
  NewProductParams
}
