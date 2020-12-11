const should = require('should')
const { ClientsParams } = require('../../../../app/controllers/params/admin-params')

describe('ClientsParams', () => {
  it('Shoud create ClientsParams with default values', () => {
    const params = new ClientsParams()
    should(params).have.property('name')
    should(params).have.property('limit')
    should(params).have.property('offset')
    should(params.name).be.null()
    should(params.limit).be.equal(10)
    should(params.offset).be.equal(0)
  })

  it('Shoud create ClientsParams with name value', () => {
    const params = new ClientsParams({ name: 'Fulano de Tal' })
    should(params).have.property('name')
    should(params).have.property('limit')
    should(params).have.property('offset')
    should(params.name).be.equal('Fulano de Tal')
    should(params.limit).be.equal(10)
    should(params.offset).be.equal(0)
  })

  it('Shoud create ClientsParams with name and limit values', () => {
    const params = new ClientsParams({ name: 'Fulano de Tal', limit: 20 })
    should(params).have.property('name')
    should(params).have.property('limit')
    should(params).have.property('offset')
    should(params.name).be.equal('Fulano de Tal')
    should(params.limit).be.equal(20)
    should(params.offset).be.equal(0)
  })

  it('Shoud create ClientsParams with name and offset values', () => {
    const params = new ClientsParams({ name: 'Fulano de Tal', offset: 2 })
    should(params).have.property('name')
    should(params).have.property('limit')
    should(params).have.property('offset')
    should(params.name).be.equal('Fulano de Tal')
    should(params.limit).be.equal(10)
    should(params.offset).be.equal(2)
  })

  it('Shoud create ClientsParams with values', () => {
    const params = new ClientsParams({ name: 'Fulano de Tal', limit: 20, offset: 2 })
    should(params).have.property('name')
    should(params).have.property('limit')
    should(params).have.property('offset')
    should(params.name).be.equal('Fulano de Tal')
    should(params.limit).be.equal(20)
    should(params.offset).be.equal(2)
  })
})
