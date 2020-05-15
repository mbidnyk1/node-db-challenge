const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('resources').select()
}

function findById() {

}

async function add(data) {
    const [id] = await db('resources').insert(data)
    return db('resources').where({ id }).first()
}

function update() {

}

function remove() {

}