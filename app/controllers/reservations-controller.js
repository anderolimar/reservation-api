const NotImplementedException = require('../models/exceptions/not-implemented-exception')

class ReservationsController {
    /**
    * @method reservations
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */    
    async reservations (req, res) {
        throw new NotImplementedException()
    }    

   /**
    * @method reservation
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */    
    async getReservation (req, res) {
        throw new NotImplementedException()
    } 

    /**
    * @method createReservation
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */    
    async createReservation (req, res) {
        throw new NotImplementedException()
    }   
    
    /**
    * @method createReservation
    * @param  {import('express').Request} req
    * @param  {import('express').Response} res
    */    
    async updateReservation (req, res) {
        throw new NotImplementedException()
    }     

}

module.exports = new ReservationsController()
