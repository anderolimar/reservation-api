const ApiException = require('./api-exception')

class ClientNotFoundException extends ApiException {
    constructor() {
        super(404, 'CLIENT_NOT_FOUND', 'Client not found.')
    }
}

class UnauthorizedException extends ApiException {
    constructor() {
        super(401, 'UNAUTHORIZED_ERROR', 'Unauthorized access')
    }
}

module.exports = {
    ClientNotFoundException,
    UnauthorizedException
}