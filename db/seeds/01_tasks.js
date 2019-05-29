
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        { title: 'migration', is_done: false},
        { title: 'seeds', is_done: true},
        { title: 'postgre', is_done: false}
      ]);
    });
};
