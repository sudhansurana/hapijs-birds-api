export default require( 'knex' )( {

    client: 'mssql',
    connection: {

        host: 'fg-db.database.windows.net',

        user: 'dbuser',
        password: 'philips@123',

        database: 'birdbase',
        charset: 'utf8',
        port: '1433'
    },
    options: {
      encrypt: true // Use this if you're on Windows Azure
    }

} );
