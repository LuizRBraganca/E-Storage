exports.up = function(knex) {
  return knex.schema.createTable('pedido', function (table) {
    table.string('id').primary();
    table.string('horarioMarcado').notNullable();
    table.string('status').notNullable();
    table.string('pagamento').notNullable();
    table.float('total').notNullable();
    table.float('troco').defaultTo('0,00');

    table.string('idCliente').notNullable();
    table.foreign('idCliente').references('id').inTable('cliente');
    
    table.string('nomeCliente').notNullable();
    table.foreign('nomeCliente').references('nome').inTable('cliente');

    table.string('ruaCliente').notNullable();
    table.foreign('ruaCliente').references('rua').inTable('cliente');

    table.integer('numeroRuaCliente').notNullable();
    table.foreign('numeroRuaCliente').references('numeroRua').inTable('cliente');

    table.string('complementoCliente').notNullable();
    table.foreign('complementoCliente').references('complemento').inTable('cliente');

    table.string('telefoneCliente').notNullable();
    table.foreign('telefoneCliente').references('telefone').inTable('cliente');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedido');
};