const Routes = require('./routes');

class App {
  start(router){
    Routes.loadRoutes(router)
  }

  init(setup){
    this.resources = setup.start()
  }
}

module.exports = new App()