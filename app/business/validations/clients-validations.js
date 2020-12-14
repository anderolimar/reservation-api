const { RequiredValueException } = require('../../models/exceptions/validation-exception')
const { 
    ClientNotFoundException, UnauthorizedException 
} = require('../../models/exceptions/client-exceptions')

class ClientsValidations {
    static validateNewClient(param) {
        if(!param.name) throw new RequiredValueException('name')
    }

    static validateExistingClient(client) {
        if(!client || !client.id) throw new ClientNotFoundException()
    }

    static validateClientAccess(client, apiKey) {
        this.validateExistingClient(client)
        if(!client.apiKey === apiKey) throw new UnauthorizedException()
    }
}

module.exports = ClientsValidations