const pg = require('pg');
const xmlhr = require('xmlhttprequest');

function F (user_id,username,chat_id){

  var xmlhttp = new xmlhr.XMLHttpRequest();   // new HttpRequest instance 
  url_to_post = "http://10.100.15.102:8000/usertable/user/"
  xmlhttp.open("POST", url_to_post, false);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({ uid: user_id, name: username }));
  console.log(xmlhttp.responseText);
  var rsp = JSON.parse(xmlhttp.responseText);
  console.log(rsp);
  var st = xmlhttp.status;
  console.log(st);
  var bot = require('../create_bot').bot;
  if(st===201){
    bot.sendMessage(chat_id,"Your registration was successful! Now you can use GreenTrackerBot.");
    bot.sendMessage(chat_id,"User: "+rsp.name);
  } else if(st===400) {
    bot.sendMessage(chat_id,"You are already registered!");
  }
  else {
    bot.sendMessage(chat_id,"Your registration was unsuccessful... try again later!");
  }

  /*  pg.connect(process.env.DATABASE_URL, function(err,client,done) {
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
        var bot = require('./create_bot').bot;
        bot.sendMessage(chat_id,"Your registration was successful! Now you can use GreenTrackerBot.");
        bot.sendMessage(chat_id,"User: "+username);

      }
    });
  });
  */
}

module.exports = { F };
