class Reservation {
  constructor (args) {
    this.id = args.id
    this.product = {
      id: args.productId || undefined,
      title: args.productTitle || undefined,
      description: args.productDescription || undefined,
      reference: args.productReference || undefined
    }
    this.owner = args.owner
    this.status = args.status
    this.registerDate = args.registerDate
    this.finishDate = args.finishDate
  }
}

module.exports = Reservation
