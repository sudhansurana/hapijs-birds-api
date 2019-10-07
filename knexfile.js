module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mssql',
        connection: {

            server: 'fgdev1.database.windows.net',

            user: 'birdbase',
            password: 'password',

            database: 'fgdev1',
            charset: 'utf8',

        }

    }

};
