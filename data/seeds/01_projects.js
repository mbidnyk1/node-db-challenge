exports.seed = async function(knex) {
    await knex('projects').insert([
        { name: 'Build Sears Tower', description: 'Antennas change color.'}
    ])
};
