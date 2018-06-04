const pg = require('pg');
const xmlhr = require('xmlhttprequest');

function Get(yourUrl){
  var Httpreq = new xmlhr.XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

function F (){
  // psql for javascript
  /*const { Client } = require('pg');

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
    });*/

  // using rest on django
  // wake up analyzer
  var xhr = new xmlhr.XMLHttpRequest();
  xhr.open('GET', "https://green-tracker-analyzer.herokuapp.com/", true);
  xhr.send();
  // get json
  var json_obj = JSON.parse(Get('https://51e71372.ngrok.io/usertable/user/1/'));
  console.log(json_obj.uid);

}

module.exports = { F };
