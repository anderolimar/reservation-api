class AuthParams {
  constructor ({ clientId, apiKey } = {}) {
    this.clientId = clientId || null
    this.apiKey = apiKey || null
  }
}

module.exports = AuthParams
