const db = require('../data/db.config')
const request = require('supertest')
const server = require('./server.js')
const OfficeModel = require('./offices/offices-model')

beforeEach(async () => {
    await db('offices').truncate()
})

describe('server.js', () => {
    describe('index route', () => {

        it('should return an OK status code(200)', async () => {
            const expectedCode = 200;
            const response = await request(server).get('/')
            expect(response.status).toEqual(expectedCode)
        })
        
        it('should return a JSON object', async () => {
            const expectedBody = { api: 'up' }
            const response = await request(server).get('/')
            expect(response.body).toEqual(expectedBody)
        })

        it('should return a JSON type', async () => {
            const response = await request(server).get('/')
            expect(response.type).toEqual('application/json')
        })
    })
})

describe('offices model', () => {
    describe('insert()', () => {
        it('should insert the provided office into the office db', async () => {
            await OfficeModel.insert({ name: "Joey's Dental", address: '1234 joey st' })
            await OfficeModel.insert({ name: "Amber's Dental", address: '1234 amber st' })
            const offices = await db('offices')
            expect(offices).toHaveLength(2)
        })
    })
})