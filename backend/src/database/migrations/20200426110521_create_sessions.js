
exports.up = function(knex) {
    return knex.schema.createTable('sessions', function(table){
        table.increments();
        table.json('sess');
        table.timestamps();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('sessions');
};
