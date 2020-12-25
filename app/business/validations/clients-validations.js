const BaseValidations = require('./base-validations')
const { RequiredValueException } = require('../../models/exceptions/validation-exception')
const {
  ClientNotFoundException, UnauthorizedException
} = require('../../models/exceptions/client-exceptions')

class ClientsValidations {
  static validateNewClient (params) {
    const requieredProps = ['name']
    BaseValidations.validateMissingValues(requieredProps, params)
  }
  
  static validateAuthClient (params) {
    const requieredProps = ['clientId', 'apiKey']
    BaseValidations.validateMissingValues(requieredProps, params)
  }

  static validateExistingClient (client) {
    if (!client || !client.id) throw new ClientNotFoundException()
  }

  static validateClientAccess (client, apiKey) {
    this.validateExistingClient(client)
    if (client.apiKey !== apiKey) throw new UnauthorizedException()
  }
}

module.exports = ClientsValidations
