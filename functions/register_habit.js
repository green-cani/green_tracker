const pg = require('pg');
const xmlhr = require('xmlhttprequest');

function F (user_id,chat_id,habit){

  var xmlhttp = new xmlhr.XMLHttpRequest();   // new HttpRequest instance 
  url_to_post = "http://10.100.15.102:8000/usertable/habit/"
  xmlhttp.open("POST", url_to_post, false);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  tosend = JSON.stringify({ usr_id: user_id, choice:  habit_code(habit)});
  console.log(tosend);
  xmlhttp.send(tosend);
  var rsp = JSON.parse(xmlhttp.responseText);
  console.log(habit,"----", habit_code(habit));
  var st = xmlhttp.status;
  console.log(st);
  var bot = require('../create_bot').bot;
  if(st===201){
    bot.sendMessage(chat_id,"Got it!");
    bot.sendMessage(chat_id,"You are using: "+habit);
  } else if(st===400) {
    bot.sendMessage(chat_id,"You are already registered!");
  }
  else {
    bot.sendMessage(chat_id,"Your request was unsuccessful... try again later!");
  }


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

function habit_code(habit){
  if(habit==='feet')
    return 'P';
  if(habit==='bike')
    return 'B';
  if(habit==='train')
    return 'L';
  if(habit==='car')   
    return 'M';
}



module.exports = { F };
