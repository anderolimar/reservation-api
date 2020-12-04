const errorHandler = require("./error-handler");

class Routes {
    static loadRoutes(router){
        router.get('/', (req,res) => res.json({ message: "Working success !!!" }));
        router.use(errorHandler.notFoundHandler);
        router.use(errorHandler.internalErrorHandler);
    }
}

module.exports = Routes;