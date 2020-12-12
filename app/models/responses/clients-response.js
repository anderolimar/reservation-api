const ResponseList = require('./response-list')

class ClientsReponse extends ResponseList {
    constructor(clients, total) {
        super(total)
        this.clients = clients
    }
}

module.exports = ClientsReponse