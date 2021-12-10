const db = require('../../data/db.config')

module.exports = {
    insert, 
    update,
    remove,
    getAll,
    getById,
}

function getAll() {
    return db('offices')
}

function getById(id) {
    return db('offices').where('id', id).first()
}

function insert(office) {
    return db('offices').insert(office)
    .then(([id]) => {
        return getById(id)
    })
}

async function update(id, changes) {
    return null
}

function remove(id) {
    return null 
}