const pg = require('pg');
var bot = require('../create_bot').bot;

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
        bot.sendMessage(msg.chat.id,"You are moving with: "+habit+reaction_to_habit(habit));
        bot.sendMessage(msg.chat.id,"You have earned "+points_to_habit(habit)+"points");
      }
    });
  });
}

function reaction_to_habit(habit){
  if(habit==='feet' || habit==='bike' || habit==='train')
    return 'you are sustainable! :)';
  if(habit==='car')   
    return 'you are not sustainable :( try to do better!';
}

function points_to_habit(habit){
  if(habit==='feet' || habit==='bike')
    return 5;
  if(habit==='train')
    return 3;
  if(habit==='car')   
    return -1;
}

module.exports = { F };
