const errorHandler = require('./error-handler')
const controllers = require('../controllers')
const resourcesMiddleware = require('./middlewares/resources')

class Routes {
  static loadRoutes (router, resources) {
    // Middleware
    router.use(resourcesMiddleware(resources))

    // Product Routes
    router.put('/clients/:clientId/products/:id', controllers.product.updateProduct)
    router.post('/clients/:clientId/products', controllers.product.createProduct)

    // Reservation Routes
    router.get('/clients/:clientId/reservations/:id', controllers.reservation.getReservation)
    router.put('/clients/:clientId/reservations/:id', controllers.reservation.updateReservation)
    router.get('/clients/:clientId/reservations', controllers.reservation.reservations)
    router.post('/clients/:clientId/reservations', controllers.reservation.createReservation)

    // Admin Routes
    router.get('/admin/clients', controllers.admin.clients)
    router.post('/admin/clients', controllers.admin.createClient)

    // Home Route
    router.get('/', controllers.home)

    // Handlers
    router.use(errorHandler.notFoundHandler)
    router.use(errorHandler.internalErrorHandler)
  }
}

module.exports = Routes
