
exports.up = function(knex) {
    return knex.schema.createTable('Atendimento ', function (table) {
        table.increments('id').primary();
        table.string('coordenador').notNullable();
        table.string('assunto').notNullable();
        table.string('descricao').notNullable();
        table.string('data',).notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Atendimento ');
    };
