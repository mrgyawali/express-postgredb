
module.exports = {
  development : {
    client: 'pg',
    connection: {
        user : 'adityagyawali',
        database : 'todo_db'
      },
      migrations: {
        directory: __dirname + '/db/migrations',
      },
      seeds: {
        directory: __dirname + '/db/seeds',
      }
  }
}

