exports.up = function(knex) {
  return knex.schema.createTable('supermercado', function (table) {
    table.string('nome').primary();
    table.string('senha').notNullable();
    table.string('rua').notNullable();
    table.integer('numeroRua').notNullable();
    table.string('telefone').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('supermercado');
};
