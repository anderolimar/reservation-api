const AuthClientBusiness = require('./auth-client-business')
const ReservationsValidations = require('./validations/reservations-validations')

class ReservationBusiness extends AuthClientBusiness {
  /**
     * Creates an instance of ReservationBusiness.
     *
    * @constructor
    * @param  {import('../repositories/reservations-repository')} repository
    * @param  {import('../repositories/clients-repository')} clientRepository
    * @param  {import('../logger')} logger
    */
  constructor (repository, clientRepository, logger) {
    super(logger, clientRepository)
    this.repository = repository
  }

  /**
  * @method newReservationWithAuth
  * Returns new Reservation
  * @param  {import('../controllers/params/reservation-params').NewReservationParams} params
  * @returns {import('../models/database/reservation')}
  */
  async newReservationWithAuth (params) {
    try {
      ReservationsValidations.validateNewReservation(params)

      const id = await this.repository.insertReservation(params)
      return this.repository.getReservation({ id })
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }

  /**
  * @method newReservationWithAuth
  * Returns new Reservation
  * @param  {import('../controllers/params/reservation-params').ReservationParams} params
  * @returns {import('../models/database/reservation')}
  */
  async newReservationWithAuth (params) {
    try {
      ReservationsValidations.validateNewReservation(params)

      const id = await this.repository.insertReservation(params)
      return this.repository.getReservation({ id })
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }  
}

module.exports = ReservationBusiness
