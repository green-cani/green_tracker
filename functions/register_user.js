const pg = require('pg');

function F (user_id,username){
  pg.connect(process.env.DATABASE_URL, function(err,client,done) {
    var query_text = 'insert into users values('+user_id+',\''+username+'\');' ;
    console.log('register:query text ' + query_text );
    console.log('register:client ' + client );
    client.query(query_text, function(err,result) {
      done();
      if(err){
        console.error(err);
      }
      else{
        console.log('register: ok');
      }
    });
  });
}

module.exports = { F };
