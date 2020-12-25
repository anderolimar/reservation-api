const { RequiredValueException } = require('../../models/exceptions/validation-exception')

class ReservationsValidations {
  static validateNewReservation (param) {
    const requieredProps = ['owner', 'status', 'finishDate']
    const requieredOrProps = [['productId', 'productReference']]
    
    let missing = requieredProps.reduce((miss, prop) => {
      if (!param[prop]) miss.push(prop)
      return miss
    }, [])

    missing = requieredOrProps.reduce((miss, prop) => {
      if (!param[prop[0]] && !param[prop[1]]) miss.push(`${param[prop[0]]} or ${param[prop[1]]}`)
      return miss
    }, missing)

    if (missing.length) throw new RequiredValueException(missing.join(','))
  }

  static validateReservation (param) {
    const requieredProps = ['id']
    
    let missing = requieredProps.reduce((miss, prop) => {
      if (!param[prop]) miss.push(prop)
      return miss
    }, [])

    if (missing.length) throw new RequiredValueException(missing.join(','))
  }  
}

module.exports = ReservationsValidations
