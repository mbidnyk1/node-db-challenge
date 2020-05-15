const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find(project_id) {
    return db('tasks as t').join('projects as p', 'p.id', 't.project_id')
    .where({ project_id})
    .select('t.id','p.name','p.description', 't.description', 't.notes')
}

function findById() {

}

async function add(data) {
    const [id] = await db('tasks').insert(data)
    return db('tasks').where({ id }).first()
}

function update() {

}

function remove() {

}
