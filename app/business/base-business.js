const ClientsValidations = require('./validations/clients-validations')

class BaseBusiness {
  /**
    * BaseBusiness
    * @param  {import('../logger')} logger
    */
  constructor (logger) {
    this.logger = logger
  }

  async validateClientAccess (clientRepository, params) {
    const client = await clientRepository.getClient({ id: params.clientId })
    ClientsValidations.validateClientAccess(client, params.apiKey)
  }
}

module.exports = BaseBusiness
