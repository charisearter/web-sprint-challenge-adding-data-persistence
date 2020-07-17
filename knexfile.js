// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      //make sure to change to database name and location
      filename: './data/projects.db3', 
    },
    migrations: { 
      //migrations directory will make on its own if not there
      directory: './data/migrations'
    },
    seeds: { 
      //seed directory will make on its own if not there
      directory: './data/seeds'
    },
    // add the following needed for foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }, 
};