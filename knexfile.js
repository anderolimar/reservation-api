module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: (process.env.DB_HOST || 'localhost'),
      database: 'app',
      user: 'app',
      password: '12345'
    },
    pool: {
      min: 1,
      max: 5
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
