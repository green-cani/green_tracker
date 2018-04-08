// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: process.env.DATABASE_URL || {
      database: 'greentrackerdb',
      user:     'gab',
      password: 'greentrackerpw'
    },
     
};
