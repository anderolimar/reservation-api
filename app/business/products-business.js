const AuthClientBusiness = require('./auth-client-business')
const ProductsValidations = require('./validations/products-validations')

class ProductsBusiness extends AuthClientBusiness {
  /**
     * Creates an instance of ProductsBusiness.
     *
    * @constructor
    * @param  {import('../repositories/products-repository')} repository
    * @param  {import('../repositories/clients-repository')} clientRepository
    * @param  {import('../logger')} logger
    */
  constructor (repository, clientRepository, logger) {
    super(logger, clientRepository)
    this.repository = repository
  }

  /**
    * @method newProduct
    * Returns new Product
    * @param  {import('../controllers/params/product-params').NewProductParams} params
    * @returns {import('../models/database/product')}
    */
  async newProductWithAuth (params) {
    try {
      ProductsValidations.validateNewProduct(params)

      const id = await this.repository.insertProduct(params)
      return this.repository.getProduct({ id })
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }
}

module.exports = ProductsBusiness
