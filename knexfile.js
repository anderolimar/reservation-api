// Update with your config settings.

module.exports = {
  development:  {
    client: 'postgresql',
    connection: {
      database: 'app',
      user:     'app',
      password: '12345'
    },
    pool: {
      min: 1,
      max: 5
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
