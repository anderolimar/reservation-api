class PaginationParams {
  constructor ({ limit, offset } = {}) {
    this.limit = limit || 10
    this.offset = offset || 0
  }
}

module.exports = PaginationParams
