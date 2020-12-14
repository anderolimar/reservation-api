const request = require('supertest')
const ClientsRepository = require('../../../app/repositories/clients-repository')
const ProductsRepository = require('../../../app/repositories/products-repository')
const mock = require('../../mocks')

describe('POST /clients/:id/products', function () {
  it('should return success.', async function () {
    const repositories = [
      { name: 'productsRepository', type: ProductsRepository },
      { name: 'clientsRepository', type: ClientsRepository }
    ]
    const client = { id: 1, apiKey: 'HDSHDJSH' }

    const expectedResult = { id: 1, name: 'Product 1', active: true, description: 'Some Product', reference: 'PRD01' }

    const dbResultFunc = async (query, _trans) => {
      const queryStr = query.toString()
      if (queryStr.indexOf('"CLIENTS"') >= 0) {
        return client
      }
      if (queryStr.indexOf('insert') >= 0) {
        return [1]
      }
      return expectedResult
    }

    const server = mock.getServerMock(repositories, dbResultFunc)

    await request(server.handler)
      .post(`/clients/${client.id}/products`)
      .set('Accept', 'application/json')
      .set('api-key', client.apiKey)
      .send({ name: 'test', active: true })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        console.log()
        should(response.body).be.deepEqual(expectedResult)
      })
      .catch(err => {
        console.error(err)
        should.fail(err, 'NOT ERROR')
      })
  })
})
