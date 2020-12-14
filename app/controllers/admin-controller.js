const { ClientsParams, NewClientParams } = require('./params/admin-params')
const ClientsBusiness = require('../business/clients-business')

class AdminController {
  /**
    * @method clients
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async clients (req, res, next) {
    try {
      const { clientsRepository, logger } = req.resources
      const clientsBusiness = new ClientsBusiness(clientsRepository, logger)
      const params = new ClientsParams(req.query)
      const result = await clientsBusiness.clients(params)

      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  /**
    * @method createClient
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async createClient (req, res, next) {
    try {
      const { clientsRepository, logger } = req.resources
      const clientsBusiness = new ClientsBusiness(clientsRepository, logger)
      const params = new NewClientParams(req.body)
      const result = await clientsBusiness.newClient(params)

      res.json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AdminController()
