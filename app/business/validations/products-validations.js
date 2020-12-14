const { RequiredValueException } = require('../../models/exceptions/validation-exception')

class ProductsValidations {
  static validateNewProduct (param) {
    const requieredProps = ['clientId', 'name', 'apiKey']
    const missing = requieredProps.reduce((miss, prop) => {
      if (!param[prop]) miss.push(prop)
      return miss
    }, [])

    if (missing.length) throw new RequiredValueException(missing.join(','))
  }
}

module.exports = ProductsValidations
