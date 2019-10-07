module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mssql',
        connection: {

            server: 'fg-db.database.windows.net',

            user: 'dbuser',
            password: 'philips@123',

            database: 'birdbase',
            charset: 'utf8',

        }

    }

};
