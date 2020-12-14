const ApiException = require('./api-exception')

class NotImplementedException extends ApiException {
    constructor(property) {
        super(501, 'NOT_IMPLEMENTED', 'Not Implemented')
    }
}

module.exports = NotImplementedException