exports.up = function(knex) {
  return knex.schema.createTable('produto', function (table) {
    table.increments('id');
    table.string('nome').notNullable();
    table.string('marca').notNullable();
    table.float('peso').notNullable();
    table.string('medida').notNullable();
    table.float('preco').notNullable();
    table.string('detalhamento').notNullable();

    table.string('nomeSupermercado').notNullable();
    table.foreign('nomeSupermercado').references('nome').inTable('supermercado');

    table.string('nomeCategoria').notNullable();
    table.foreign('nomeCategoria').references('nome').inTable('categoria');
    //imagem
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produto');
};
