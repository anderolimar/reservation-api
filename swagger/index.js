const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = { 
    init: function (router)  {
        router.use('/docs', swaggerUi.serve);
        router.get('/docs', swaggerUi.setup(swaggerDocument))
    }
}