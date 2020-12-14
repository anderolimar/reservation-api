const request = require('supertest')
const ClientsRepository = require('../../../app/repositories/clients-repository')
const mock = require('../../mocks')

describe('GET /admin/clients', function () {
  it('should return clients response.', async function () {
    const repositories = [{ name: 'clientsRepository', Type: ClientsRepository }]

    const expectedResult = {
      total: 2,
      clients: [
        { id: 1, name: 'Test 1', active: true, apiKey: 'UOIFDUIUFSOI' },
        { id: 2, name: 'Test 2', active: true, apiKey: 'HJHHDAHSADHJ' }
      ]
    }

    const dbResultFunc = async (_query, _trans) => {
      return [
        { id: 1, name: 'Test 1', active: true, apiKey: 'UOIFDUIUFSOI', total: 2 },
        { id: 2, name: 'Test 2', active: true, apiKey: 'HJHHDAHSADHJ' }
      ]
    }

    const server = mock.getServerMock(repositories, dbResultFunc)

    await request(server.handler)
      .get('/admin/clients')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        should(response.body).have.property('total')
        should(response.body).have.property('clients')
        should(response.body).be.deepEqual(expectedResult)
      })
      .catch(err => {
        console.error(err)
        should.fail(err, 'NOT ERROR')
      })
  })
})
