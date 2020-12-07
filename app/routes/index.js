const errorHandler = require("./error-handler");

class Routes {
    static loadRoutes(router){
        router.get('/admin', (req,res) => res.json({ message: "Restricted Area !!!" }));
        router.get('/', (req,res) => res.json({ message: "Working success !!!" }));
        router.use(errorHandler.notFoundHandler);
        router.use(errorHandler.internalErrorHandler);
    }
}

module.exports = Routes;