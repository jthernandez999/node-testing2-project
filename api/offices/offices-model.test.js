const Office = require('./offices-model')
const db = require('../../data/db.config')
const { offices } = require('../../data/seeds/001-offices')

test('is testing environment', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})

describe('Office model', () => {
    describe('getAll', () => {
        let data
        beforeEach(async () => {
            data = await Office.getAll()
        })
        test('resolves all offices in the db', async () => {
            expect(data.length).toBe(4)
            expect(data).toHaveLength(4)
        })
        test('resolved to the correct shapes', async () => {
            expect(data).toMatchObject(offices)
        })
    })
})