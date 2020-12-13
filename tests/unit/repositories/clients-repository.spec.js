const should = require('should')
const dbClientMock = require('../../mocks/dbclient-mock')
const ClientsRepository = require('../../../app/repositories/clients-repository')
const Client = require('../../../app/models/database/client')


const loggerMock = {
    error: (_err) => {}
}

describe('ClientsRepository', () => {
    describe('ClientsRepository.getTotalClients', () => {
        it('Shoud call ClientBusiness.getTotalClients with "name" filter', async () => {
            const expectedQuery = 'select count("ID") as "total" from "CLIENTS" where "NAME" like \'%test%\''

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return [{ total: 5 }]
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getTotalClients({ name: 'test' })
            should(result).be.equal(5)
        })

        it('Shoud call ClientBusiness.getTotalClients with "active" filter', async () => {
            const expectedQuery = 'select count("ID") as "total" from "CLIENTS" where "ACTIVE" = true'

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return [{ total: 5 }]
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getTotalClients({ active: true })
            should(result).be.equal(5)
        })        

        it('Shoud call ClientBusiness.getTotalClients with "name" and "active" filter', async () => {
            const expectedQuery = 'select count("ID") as "total" from "CLIENTS" where "NAME" like \'%test%\' and "ACTIVE" = true'

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return [{ total: 5 }]
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getTotalClients({ name: 'test', active: true })
            should(result).be.equal(5)
        })        

    })

    describe('ClientsRepository.getClients', () => {
        it('Shoud call ClientBusiness.getClients without filter', async () => {
            const expectedQuery = 'select "ID" as "id", "NAME" as "name", "ACTIVE" as "active", "API_KEY" as "apiKey" from "CLIENTS" limit 10'

            const dbResult = [{ id: 5, name: 'test', active: true, apiKey: 'RSATYRTRSAY' }]
            const expectedResult = [new Client(dbResult[0])]

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return dbResult
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getClients()
            should(result).be.deepEqual(expectedResult)
        })

        it('Shoud call ClientBusiness.getClients with "name" filter', async () => {
            const expectedQuery = 'select "ID" as "id", "NAME" as "name", "ACTIVE" as "active", "API_KEY" as "apiKey" from "CLIENTS" where "NAME" like \'%test%\' limit 10'

            const dbResult = [{ id: 5, name: 'test', active: true, apiKey: 'RSATYRTRSAY' }]
            const expectedResult = [new Client(dbResult[0])]

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return dbResult
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getClients({ name: 'test' })
            should(result).be.deepEqual(expectedResult)
        })

        it('Shoud call ClientBusiness.getClients with "active" filter', async () => {
            const expectedQuery = 'select "ID" as "id", "NAME" as "name", "ACTIVE" as "active", "API_KEY" as "apiKey" from "CLIENTS" where "ACTIVE" = true limit 10'

            const dbResult = [{ id: 5, name: 'test', active: true, apiKey: 'RSATYRTRSAY' }]
            const expectedResult = [new Client(dbResult[0])]

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return dbResult
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getClients({ active: true })
            should(result).be.deepEqual(expectedResult)
        })        

        it('Shoud call ClientBusiness.getClients with "name" and "active" filter', async () => {
            const expectedQuery = 'select "ID" as "id", "NAME" as "name", "ACTIVE" as "active", "API_KEY" as "apiKey" from "CLIENTS" where "NAME" like \'%test%\' and "ACTIVE" = true limit 10'

            const dbResult = [{ id: 5, name: 'test', active: true, apiKey: 'RSATYRTRSAY' }]
            const expectedResult = [new Client(dbResult[0])]

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return dbResult
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getClients({ name: 'test', active: true })
            should(result).be.deepEqual(expectedResult)
        })        

        it('Shoud call ClientBusiness.getClients with "limit" and "offset"', async () => {
            const expectedQuery = 'select "ID" as "id", "NAME" as "name", "ACTIVE" as "active", "API_KEY" as "apiKey" from "CLIENTS" where "NAME" like \'%test%\' and "ACTIVE" = true limit 25 offset 50'

            const dbResult = [{ id: 5, name: 'test', active: true, apiKey: 'RSATYRTRSAY' }]
            const expectedResult = [new Client(dbResult[0])]

            const execFunc = async (query, _trans) => {
                const querySql = query.toString()
                should(querySql).be.equal(expectedQuery)
                return dbResult
            }

            const dbClient = dbClientMock(execFunc)

            const clientsRepository = new ClientsRepository(dbClient, loggerMock)
            const result = await clientsRepository.getClients({ name: 'test', active: true, limit: 25, offset: 50 })
            should(result).be.deepEqual(expectedResult)
        })        

    })    
})
