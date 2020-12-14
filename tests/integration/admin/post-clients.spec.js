const request = require('supertest')
const ClientsRepository = require('../../../app/repositories/clients-repository')
const mock = require('../../mocks')

describe('POST /admin/clients', function () {
  it('should return success.', async function () {
    const repositories = [{ name: 'clientsRepository', type: ClientsRepository }]

    const expectedResult = { id: 1, name: 'Fulano', active: false, apiKey: 'HDSHDJSH' }

    const dbResultFunc = async (query, _trans) => {
      const queryStr = query.toString()
      if (queryStr.indexOf('insert') >= 0) {
        return [1]
      }
      return expectedResult
    }

    const server = mock.getServerMock(repositories, dbResultFunc)

    await request(server.handler)
      .post('/admin/clients')
      .send({ name: 'test', active: true })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        should(response.body).be.deepEqual(expectedResult)
      })
      .catch(err => {
        console.error(err)
        should.fail(err, 'NOT ERROR')
      })
  })
})
