const BaseValidations = require('./base-validations')

class ProductsValidations {
  static validateNewProduct (params) {
    const requieredProps = ['title']
    BaseValidations.validateMissingValues(requieredProps, params)
  }
}

module.exports = ProductsValidations
