const should = require('should')
const proxyquire = require('proxyquire')

describe('AdminController.clients', () => {
    it('Shoud call AdminController.clients e return success', async () => {
        const expectedResult = {
            clients: [{
                name: 'Test'
            }]
        }

        const AdminController = proxyquire('../../../app/controllers/admin-controller', {
            '../business/clients-business': function() {
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

        let res = {
            json: function (result) {
                console.log('result', result)
                this.result = result
            }
        }

        await AdminController.clients(req, res)

        should(res.result).deepEqual(expectedResult)
    })  
})