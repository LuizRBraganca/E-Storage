exports.up = function(knex) {
  return knex.schema.createTable('pedidoProduto', function (table) {
    table.string('id').primary();

    table.string('idPedido').notNullable();
    table.foreign('idPedido').references('id').inTable('pedido');

    table.string('idProduto').notNullable();
    table.foreign('idProduto').references('id').inTable('produto');

    table.integer('quantidade').notNullable();
    table.float('preco').notNullable();
    table.float('totalParcial').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidoProduto');
};