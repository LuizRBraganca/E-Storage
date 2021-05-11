exports.up = function(knex) {
  return knex.schema.createTable('estoque', function (table) {
    table.increments();
    table.string('nome').notNullable();
    table.integer('quantidade').notNullable();

    table.string('idCliente').notNullable();
    table.foreign('idCliente').references('id').inTable('cliente');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('estoque');
};