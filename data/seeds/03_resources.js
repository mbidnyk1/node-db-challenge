exports.seed = async function(knex) {
    await knex('resources').insert([
        { name: 'Architects', description:'Chicagos best engineers'}
    ])
};
