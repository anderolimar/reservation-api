class Product {
    constructor(args) {
        this.id = args.id
        this.name = args.name
        this.clientId = args.clientId
        this.active = args.active
        this.description = args.description
        this.reference = args.reference
    }
}

module.exports = Product