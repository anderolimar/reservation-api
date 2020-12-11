const errorHandler = require('./error-handler')
const controllers = require('../controllers')
const resourcesMiddleware = require('./middlewares/resources')

class Routes {
  static loadRoutes (router, resources) {
    // Middleware
    router.use(resourcesMiddleware(resources))

    // Routes
    router.get('/admin', (req, res) => res.json({ message: 'Restricted Area !!!' }))
    router.get('/', controllers.home)

    // Handlers
    router.use(errorHandler.notFoundHandler)
    router.use(errorHandler.internalErrorHandler)
  }
}

module.exports = Routes