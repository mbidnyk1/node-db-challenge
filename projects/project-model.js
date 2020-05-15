const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('projects').select()
}

function findById(id) {
    return db('projects as p')
    .join('tasks as t','p.id', 't.project_id')
    .join('projects_resources as pr','p.id', 'pr.project_id')
    .join('resources as r', 'r.id','pr.resource_id')
    .where( { id })
    .select('*')
}

async function add(data) {
    const [id] = await db('projects').insert(data)
    return db('projects').where({ id }).first()
}

function update() {

}

function remove() {

}
