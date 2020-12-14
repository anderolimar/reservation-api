const ApiException = require('./api-exception')

class UnauthorizedException extends ApiException {
    constructor() {
        super(401, 'UNAUTHORIZED_ERROR', 'Unauthorized access')
    }
}

module.exports = {
    UnauthorizedException
}