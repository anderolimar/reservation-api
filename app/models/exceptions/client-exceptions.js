const ApiException = require('./api-exception')

class ClientNotFoundException extends ApiException {
    constructor() {
        super(404, 'CLIENT_NOT_FOUND', 'Client not found.')
    }
}

module.exports = ClientNotFoundException