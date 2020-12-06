// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    version: '12',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Y@smercy23',
      database : 'projeto'
    },
    migrations:{
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
