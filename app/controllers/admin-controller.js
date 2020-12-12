const { ClientsParams } = require('./params/admin-params')
const ClientsBusiness = require('../business/clients-business')

class AdminController {
    /**
    * @method clients
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */    
    async clients (req, res) {
        const { clientsRepository, logger } = req.resources
        const clientsBusiness = new ClientsBusiness(clientsRepository, logger)
        const params = new ClientsParams(req.query)
        const result = await clientsBusiness.clients(params)

        res.json(result)
    }
}

module.exports = new AdminController()
