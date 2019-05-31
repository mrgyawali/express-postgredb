// Update with your config settings.

module.exports = {
    development : {
      client: 'pg',
      connection: {
          user : 'adityagyawali',
          database : 'todo_db'
        },
        migrations: {
          directory: __dirname + '/knex/migrations',
        },
        seeds: {
          directory: __dirname + '/knex/seeds'
        }
    },

  production: {
    client: 'postgresql',
    connection: {
      database: '',
      user:     '',
      password: ''
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }

};
