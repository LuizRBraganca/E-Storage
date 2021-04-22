exports.up = function(knex) {
  return knex.schema.createTable('categoria', function (table) {
    table.string('nome').primary();
    //imagem
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categoria');
};
