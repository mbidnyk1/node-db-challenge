exports.seed = async function(knex) {
    await knex('tasks').insert([
        { description: 'Go to the top floor.', project_id: 1}
    ])
};
