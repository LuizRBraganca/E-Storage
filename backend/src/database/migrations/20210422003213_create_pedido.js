exports.up = function(knex) {
  return knex.schema.createTable('pedido', function (table) {
    table.string('id').primary();

    table.string('idCliente').notNullable();
    table.foreign('idCliente').references('id').inTable('cliente');

    table.string('horarioMarcado').notNullable();
    table.string('status').notNullable();
    table.string('pagamento').notNullable();
    table.float('total').notNullable();
    table.float('troco').defaultTo('0,00');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedido');
};