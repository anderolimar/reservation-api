const AuthParams = require('./auth-params')

class NewProductParams extends AuthParams {
  constructor ({ clientId, title, description, active, reference, apiKey } = {}) {
    super({ clientId, apiKey })
    this.title = title || null
    this.description = description || null
    this.active = active || null
    this.reference = reference || null
  }
}

module.exports = {
  NewProductParams
}
