class Product {
  constructor (args) {
    this.id = args.id
    this.title = args.title
    this.clientId = args.clientId
    this.active = args.active
    this.description = args.description
    this.reference = args.reference
  }
}

module.exports = Product
