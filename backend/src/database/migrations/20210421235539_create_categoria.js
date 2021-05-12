exports.up = function(knex) {
  return knex.schema.createTable('categoria', function (table) {
    table.string('nome').primary();
    table.string('filename').notNullable();
    table.string('path').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categoria');
};
