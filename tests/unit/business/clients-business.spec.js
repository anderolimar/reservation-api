const should = require('should')
const ClientsBusiness = require('../../../app/business/clients-business')
const { ClientsParams } = require('../../../app/controllers/params/admin-params')
const ClientsReponse = require('../../../app/models/responses/clients-response')

const loggerMock = {
    error: (_err) => {}
}

describe('ClientBusiness.clients', () => {
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