const ApiException = require('./api-exception')

class RequiredValueException extends ApiException {
  constructor (property) {
    super(400, 'REQUIRED_VALUE_ERROR', `Required value(s) : ${property}`)
  }
}

module.exports = {
  RequiredValueException
}
