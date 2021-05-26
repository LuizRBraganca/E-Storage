exports.up = function(knex) {
  return knex.schema.createTable('pedidoProduto', function (table) {
    table.string('id').primary();

    table.string('idPedido');
    table.foreign('idPedido').references('id').inTable('pedido');
    
    table.string('idCliente');
    table.foreign('idCliente').references('id').inTable('cliente');

    table.string('nomeProduto').notNullable();
    table.foreign('nomeProduto').references('nome').inTable('produto');

    table.float('preco').notNullable();
    table.foreign('preco').references('preco').inTable('produto');
    
    table.integer('quantidade').notNullable();
    table.float('totalParcial').notNullable();
    table.integer('compra').notNullable().defaultTo(0);  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidoProduto');
};