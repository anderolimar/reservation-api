const ApiException = require('./api-exception')

class DataBaseException extends ApiException {
  constructor (reference) {
    super(504, 'DATABASE_ERROR', `Database Error : ${reference}`)
  }
}

module.exports = DataBaseException
