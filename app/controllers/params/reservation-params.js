const AuthParams = require('./auth-params')

class NewReservationParams extends AuthParams {
  constructor ({ clientId, apiKey, productId, productReference, owner, status, finishDate } = {}) {
    super({ clientId, apiKey })
    this.productId = productId || null
    this.productReference = productReference || null
    this.owner = owner || null
    this.status = status || null
    this.finishDate = finishDate || null
  }
}

class ReservationParams extends AuthParams {
  constructor ({ clientId, apiKey, id } = {}) {
    super({ clientId, apiKey })
    this.id = id || null
  }
}

module.exports = {
  NewReservationParams,
  ReservationParams
}
