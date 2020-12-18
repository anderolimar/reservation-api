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
  * AuthClientBusiness
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
    console.log('##############', this)
    if (this.clientRepository) {
      const client = await this.clientRepository.getClient({ id: params.clientId })
      ClientsValidations.validateClientAccess(client, params.apiKey)
      return
    }
    throw Error('BaseBusiness.clientRepositoryis null')
  }
}

module.exports = AuthClientBusiness
