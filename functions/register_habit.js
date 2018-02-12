const pg = require('pg');

function register_habit (user_id,action){
  pg.connect(process.env.DATABASE_URL, function(err,client,done){
    var query_text = 'insert into habits values('+user_id+',\'now\',\''+action+'\');';
    console.log('action:query text ' + query_text );
    console.log('action:client ' + client );
    client.query(query_text, function(err,result){
      done();
      if(err){
        console.error(err); //response.send("Error " + err); ///////////////////////////// response
      }
      else{
        console.log('action: ok');//response.render('pages/db',{results: result.rows} ); ///////////////////////////// response
      }
    });
  });
}

module.exports = { register_habit };
