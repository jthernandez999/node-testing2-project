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
            expect(data).toEqual([
                    {
                    id: 1,
                    name: "Western Dental",
                    address: "1234 west st"
                    },
                    {
                    id: 2,
                    name: "Eastern Dental",
                    address: "1234 east st"
                    },
                    {
                    id: 3,
                    name: "Southern Dental",
                    address: "1234 south st"
                    },
                    {
                    id: 4,
                    name: "Northern Dental",
                    address: "1234 north st"
                    }
            ])
        })
    })
    describe('getById()', () => {
        test('returns the correct office', async () => {
            const data = await Office.getById('1')
            expect(data).toMatchObject({ id:1, name: 'Western Dental', address: '1234 west st'})
        })
    })
})