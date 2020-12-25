const { RequiredValueException } = require('../../models/exceptions/validation-exception')

class BaseValidations {
  static validateMissingValues(requieredProps, params) {
    let missing = requieredProps.reduce((miss, prop) => {
      if (!params[prop]) miss.push(prop)
      return miss
    }, [])

    if (missing.length) throw new RequiredValueException(missing.join(','))    
  }
}

module.exports = BaseValidations
