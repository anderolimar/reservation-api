class Client {
  constructor (args = {}) {
    this.id = args.id
    this.name = args.name
    this.active = args.active
    this.apiKey = args.apiKey
  }
}

module.exports = Client
