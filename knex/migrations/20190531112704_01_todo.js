
exports.up = function(knex, Promise) {
    return knex.schema.createTable("todo", (table) => {
        table.increments("id");
        table.string("title");
        table.boolean("is_done");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("todo")
  };
  