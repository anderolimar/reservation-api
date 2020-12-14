const NotImplementedException = require('../models/exceptions/not-implemented-exception')

class ReservationsController {
  /**
    * @method reservations
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async reservations (req, res, next) {
    try {
      throw new NotImplementedException()
    } catch (error) {
      next(error)
    }
  }

  /**
    * @method reservation
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async getReservation (req, res, next) {
    try {
      throw new NotImplementedException()
    } catch (error) {
      next(error)
    }
  }

  /**
    * @method createReservation
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async createReservation (req, res, next) {
    try {
      throw new NotImplementedException()
    } catch (error) {
      next(error)
    }
  }

  /**
    * @method createReservation
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */
  async updateReservation (req, res, next) {
    try {
      throw new NotImplementedException()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new ReservationsController()
