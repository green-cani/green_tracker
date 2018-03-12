const pg = require('pg');

function F (user_id,habit){
  pg.connect(process.env.DATABASE_URL, function(err,client,done){
    var query_text = 'insert into habits values('+user_id+',\'now\',\''+habit+'\');';
    console.log('habit:query text ' + query_text );
    console.log('habit:client ' + client );
    client.query(query_text, function(err,result){
      done();
      if(err){
        console.error(err); 
      }
      else{
        console.log('habit: ok');
      }
    });
  });
}

module.exports = { F };
