const BaseBusiness = require('./base-business')
const ClientsValidations = require('./validations/clients-validations')

const handler = {
  /**
  * @param  {AuthClientBusiness} target
  * @param  {string} prop
  */
  get: (target, prop) => {
    if (typeof target[prop] === 'function' &&
      (prop.toLowerCase().indexOf('withauth') > -1)) {
      const func = async function (params) {
        await target.validateClientAccess(params)
        return target[prop](params)
      }
      func.bind(target)
      return func
    }
    return target[prop]
  }
}

class AuthClientBusiness extends BaseBusiness {
  /**
  * @constructor
  * Validates client access in methods with suffix "WithAuth"
  * - The method must take only one object as a parameter
  * - The method parameter must have the client's "clientId" and "apiKey" values
  * - The method must be async
  * @param  {import('../logger')} logger
  * @param  {import('../repositories/clients-repository')} clientRepository
  */
  constructor (logger, clientRepository) {
    super(logger)
    this.clientRepository = clientRepository
    return new Proxy(this, handler)
  }

  /**
  * @method validateClientAccess
  * @param  {object} params
  * @param  {number} params.clientId
  */
  async validateClientAccess (params) {
    if (this.clientRepository) {
      ClientsValidations.validateAuthClient(params)
      const client = await this.clientRepository.getClient({ id: params.clientId })
      ClientsValidations.validateClientAccess(client, params.apiKey)
      return
    }
    throw Error('BaseBusiness.clientRepository is null')
  }
}

module.exports = AuthClientBusiness
