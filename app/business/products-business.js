const BaseBusiness = require('./base-business')
const ProductsValidations = require('./validations/products-validations')
const ClientsValidations = require('./validations/clients-validations')

class ProductsBusiness extends BaseBusiness {
    /**
     * Creates an instance of ProductsBusiness.
     *
    * @constructor
    * @param  {import('../repositories/products-repository')} repository
    * @param  {import('../repositories/clients-repository')} clientRepository
    * @param  {import('../logger')} logger
    */
    constructor(repository, clientRepository, logger) {
        super(logger)
        this.repository = repository
        this.clientRepository = clientRepository
    }

    /**
    * @method newProduct
    * Returns new Product 
    * @param  {import('../controllers/params/product-params').NewProductParams} params
    * @returns {import('../models/database/product')}
    */
    async newProduct(params) {
        try {
            ProductsValidations.validateNewProduct(params)
            const client = await this.clientRepository.getClient({ id: params.clientId })
            ClientsValidations.validateClientAccess(client, params.apiKey)

            const id = await this.repository.insertProduct(params)
            return this.repository.getProduct({ id })
        }
        catch(err) {
            this.logger.error(err)
            throw err
        }
    }    
}

module.exports = ProductsBusiness