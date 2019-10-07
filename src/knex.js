export default require( 'knex' )( {

    client: 'mssql',
    connection: {

        host: 'fg-db.database.windows.net',

        user: 'dbuser',
        password: 'philips@123',

        database: 'birdbase',
        charset: 'utf8',

    }

} );
