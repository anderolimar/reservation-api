const should = require('should')
const PaginationParams = require('../../../../app/controllers/params/pagination-params')

describe('PaginationParams', () => {
  it('Shoud create PaginationParams with default values', () => {
    const pagination = new PaginationParams()
    should(pagination).have.property('limit')
    should(pagination).have.property('offset')
    should(pagination.limit).be.equal(10)
    should(pagination.offset).be.equal(0)
  })

  it('Shoud create PaginationParams with limit default values', () => {
    const pagination = new PaginationParams({ offset: 1 })
    should(pagination).have.property('limit')
    should(pagination).have.property('offset')
    should(pagination.limit).be.equal(10)
    should(pagination.offset).be.equal(1)
  })

  it('Shoud create PaginationParams with offset default values', () => {
    const pagination = new PaginationParams({ limit: 20 })
    should(pagination).have.property('limit')
    should(pagination).have.property('offset')
    should(pagination.limit).be.equal(20)
    should(pagination.offset).be.equal(0)
  })

  it('Shoud create PaginationParams with param values', () => {
    const pagination = new PaginationParams({ limit: 20, offset: 2 })
    should(pagination).have.property('limit')
    should(pagination).have.property('offset')
    should(pagination.limit).be.equal(20)
    should(pagination.offset).be.equal(2)
  })
})
