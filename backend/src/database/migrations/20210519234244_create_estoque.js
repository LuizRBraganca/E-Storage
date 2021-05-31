exports.up = function(knex) {
  return knex.schema.createTable('estoque', function (table) {
    table.increments('id');
    
    table.string('idCliente').notNullable();
    table.foreign('idCliente').references('id').inTable('cliente');

    table.string('nome').notNullable();
    table.string('marca').notNullable();
    table.string('data_de_validade').notNullable();
    table.integer('quantidade').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('estoque');
};