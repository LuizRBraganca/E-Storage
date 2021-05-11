exports.up = function(knex) {
  return knex.schema.createTable('cliente', function (table) {
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
    table.string('rua').notNullable();
    table.integer('numeroRua').notNullable();
    table.string('complemento').notNullable();
    table.string('telefone').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cliente');
};