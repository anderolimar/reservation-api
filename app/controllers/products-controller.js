const { NewProductParams } = require('./params/product-params')
const ProductsBusiness = require('../business/products-business')
const NotImplementedException = require('../models/exceptions/not-implemented-exception')

class ProductsController {
  /**
    * @method createProduct
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async createProduct (req, res, next) {
    try {
      const { productsRepository, clientsRepository, logger } = req.resources
      const productsBusiness = new ProductsBusiness(productsRepository, clientsRepository, logger)
      const params = new NewProductParams({ ...req.body, ...req.params, apiKey: req.headers['api-key'] })
      const result = await productsBusiness.newProduct(params)

      res.json(result)
    } catch (error) {
      next(error)
    }
  }

  /**
    * @method updateProduct
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async updateProduct (req, res, next) {
    try {
      throw new NotImplementedException()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new ProductsController()
