const should = require('should')
const proxyquire = require('proxyquire')
const { RequiredValueException } = require('../../../app/models/exceptions/validation-exception')

describe('AdminController', () => {
  describe('clients', () => {
    it('Shoud call AdminController.clients e return success', async () => {
      const expectedResult = {
        clients: [{
          name: 'Test'
        }]
      }

      const AdminController = proxyquire('../../../app/controllers/admin-controller', {
        '../business/clients-business': function () {
          return {
            clients: async (params) => ({
              clients: [{
                name: params.name
              }]
            })
          }
        }
      })

      const req = {
        resources: {
          clientsRepository: {}
        },
        query: {
          name: expectedResult.clients[0].name
        }
      }

      const res = {
        json: function (result) {
          this.result = result
        }
      }

      await AdminController.clients(req, res)

      should(res.result).deepEqual(expectedResult)
    })
  })

  describe('createClient', () => {
    it('Shoud call AdminController.createClient e return success', async () => {
      const expectedResult = { id: 1, name: 'Test result' }

      const AdminController = proxyquire('../../../app/controllers/admin-controller', {
        '../business/clients-business': function () {
          return {
            newClient: async (_params) => expectedResult
          }
        }
      })

      const req = {
        resources: {
          clientsRepository: {}
        },
        body: { name: 'test', active: true }
      }

      const res = {
        json: function (result) {
          this.result = result
        }
      }

      await AdminController.createClient(req, res)

      should(res.result).deepEqual(expectedResult)
    })

    it('Shoud call AdminController.createClient e return error', async () => {
      const expectedResult = new RequiredValueException('name')

      const AdminController = proxyquire('../../../app/controllers/admin-controller', {
        '../business/clients-business': function () {
          return {
            newClient: async (_params) => { throw expectedResult }
          }
        }
      })

      const req = {
        resources: {
          clientsRepository: {},
          logger: { error: () => {} }
        },
        body: { }
      }

      const res = {
        json: function (result) {
          this.result = result
        }
      }

      try {
        await AdminController.createClient(req, res)
        should.fail('', expectedResult, 'Should throw error')
      } catch (err) {
        should(err).equal(expectedResult)
      }
    })
  })
})
