
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description');
        table.string('category').notNullable();
        table.decimal('price').notNullable();

      })
};

exports.down = function(knex) {
  return knex.dropTable('products');
};
