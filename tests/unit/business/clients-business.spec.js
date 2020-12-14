const should = require('should')
const ClientsBusiness = require('../../../app/business/clients-business')
const { ClientsParams, NewClientParams } = require('../../../app/controllers/params/admin-params')
const ClientsReponse = require('../../../app/models/responses/clients-response')
const SuccessReponse = require('../../../app/models/responses/success-response')
const { RequiredValueException } = require('../../../app/models/exceptions/validation-exception')
const Client = require('../../../app/models/database/client')

const loggerMock = {
    error: (_err) => {}
}

describe('ClientBusiness', () => {
    describe('clients', () => {
        it('Shoud call ClientBusiness.clients e return success', async () => {
            const expectedTotal = 2
            const expectedClients = [{
                    id: 1,
                    name: 'Test1',
                    active: true,
                    apiKey: 'WQYUYEUWYEUI'
                },
                {
                    id: 2,
                    name: 'Test2',
                    active: false,
                    apiKey: 'OEOPWÌRIOOEP'
                }
            ]
            
            const clientsRepoMock = {
                getTotalClients: async(params) => { 
                    if(params.name === 'Test') return expectedTotal
                    return 0
                },
                getClients: async(params) => { 
                    if(params.name === 'Test') return expectedClients 
                    return []
                }
            }

            const clientBusiness = new ClientsBusiness(clientsRepoMock, loggerMock)
            const params = new ClientsParams({ name: 'Test' })
            
            const result = await clientBusiness.clients(params)

            should(result).not.null()
            should(result instanceof ClientsReponse).be.true()
            should(result.total).be.equal(expectedTotal)
            should(result.clients).not.null()
            should(result.clients.length).be.equal(2)

            should(result.clients[0]).be.deepEqual(expectedClients[0])
            should(result.clients[1]).be.deepEqual(expectedClients[1])
        })
    })

    describe('newClient', () => {
        it('Shoud call ClientBusiness.newClient e return success', async () => {
            const expectedResult = new Client({ id: 1, name: 'test', active: false, apiKey: 'DJAKLJ' })
            const clientsRepoMock = {
                insertClient: async(_params) => 1,
                getClient: async(_params) => expectedResult
            }

            const clientBusiness = new ClientsBusiness(clientsRepoMock, loggerMock)
            const params = new NewClientParams({ name: 'Test', active: true })
            
            const result = await clientBusiness.newClient(params)

            should(result).not.null()
            should(result instanceof Client).be.true()
            should(result).be.deepEqual(expectedResult)
        })

        it('Shoud call ClientBusiness.newClient e return error', async () => {
            const expectedError = new RequiredValueException('name')

            const clientsRepoMock = { }

            const clientBusiness = new ClientsBusiness(clientsRepoMock, loggerMock)
            const params = new NewClientParams({})
            
            try {
                const result = await clientBusiness.newClient(params)
                should.fail(result, expectedError, 'Should throw error')
            }
            catch(err) {
                should(err instanceof RequiredValueException).be.true()
                should(err).be.deepEqual(expectedError)
            }
        })        
    })    
})