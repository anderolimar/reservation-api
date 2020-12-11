const Routes = require('./routes')

class App {
  init (router) {
    Routes.loadRoutes(router, this.resources)
  }

  setup (setup) {
    this.resources = setup.resources()
  }
}

module.exports = new App()
