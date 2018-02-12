const pg = require('pg');

function print_names (){
    const { Client } = require('pg');

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    });

    client.connect();

    client.query('SELECT * FROM users;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    });
}

module.exports = { print_names };
