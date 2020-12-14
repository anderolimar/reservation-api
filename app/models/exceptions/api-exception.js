class ApiException extends Error {
  constructor (status, code, message) {
    super(message)
    this.status = status
    this.content = { code, message }
  }
}

module.exports = ApiException
