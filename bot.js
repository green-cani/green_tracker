var token = '502137753:AAHDcKtIgwSFJQTmMiqnf2846avclZIqSA8';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true } );

var pg = require('pg');

menu_main_list = ['register_user','query_trial'];

var action_register_user = {
  requires: [],
  button: [{ text: '! First time? !', callback_data: 'register_user' }],
  callback: 'register_user',
  action: function (callbackQuery){ register_user(callbackQuery.from.id,callbackQuery.from.username); },
  text: "eseguo azione register_user"
}

var action_query_trial = {
  requires: [],
  button: [{ text: 'Query trial', callback_data: 'query_trial' }],
  callback: 'query_trial',
  action: function (callbackQuery){ print_names();  },
  text: "eseguo azione register_user"
}



var option = {
  ik_arr = [];
  for(a in menu_main_list){
    ik_arr.push(a.button);
  }
  reply_markup: JSON.stringify({ inline_keyboard: ik_arr })
};

bot.onText(/^\/start$/, function (msg, match){
  bot.sendMessage(msg.chat.id, 'START!').then(function () {
    bot.sendMessage(msg.chat.id, "Select option", option);
  });
});

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  var text;
  if (action === 'end') {
    text = 'Ended';
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "END");
  }
    if (action === 'register_user') {
    register_user(callbackQuery.from.id,callbackQuery.from.username);
    text = 'Now registering your name :)';
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "Select option", option);
  }
  if (action === 'dummy'){
    register_action(callbackQuery.from.id,'dummy');
    text = 'Sto registrando...';
    bot.editMessageText(text,opts);
    bot.sendMessage(msg.chat.id,"Select option",option);
  }
  if (action === 'joke'){
    register_action(callbackQuery.from.id,'joke');
    text = 'Sto registrando...';
    bot.editMessageText(text,opts);
    bot.sendMessage(msg.chat.id,"Select option",option);
  }
  if (action === 'query_trial') {
    bot.sendMessage(msg.chat.id, "query_trial");
    print_names();
  }
});

function register_user (user_id,username){
  pg.connect(process.env.DATABASE_URL, function(err,client,done) {
    var query_text = 'insert into users values('+user_id+',\''+username+'\');' ;
    console.log('register:query text ' + query_text );
    console.log('register:client ' + client );
    client.query(query_text, function(err,result) {
      done();
      if(err){
        console.error(err); //response.send("Error " + err); ////////////////////////////// response
      }
      else{
        console.log('register: ok');//response.render('pages/db',{results: result.rows} ); ///////////////////////////// response
      }
    });
  });
}

function register_action (user_id,action){
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

function print_names(){
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
