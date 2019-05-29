
exports.up = function(knex, Promise) {
  return knex.schema.createTable("todo", (table) => {
      table.increaments();
  })
};

exports.down = function(knex, Promise) {
  
};
