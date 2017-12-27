var token = '502137753:AAHDcKtIgwSFJQTmMiqnf2846avclZIqSA8';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true } );

var pg = require('pg');
// event listener
bot.onText(/^\/say_hello (.+)$/, function(msg, match){
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});

bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});

var option = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '! First time? !', callback_data: 'register_user' }],
      [{ text: 'dummy', callback_data: 'dummy' }],
      [{ text: 'joke', callback_data: 'joke' }],
      [{ text: 'Write ids', callback_data: 'query_trial' }],
      [{ text: 'END', callback_data: 'end' }]
    ]
  })
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
  if (action === '1') {
    text = 'You hit button 1';
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "Select option", option);
  }
  if (action === '2') {
    text = 'You hit button 2';
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "Select option", option);
  }
  if (action === '3') {
    text = 'You hit button 3';
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "Select option", option);
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
  if (action === 'write_ids') {
    text = 'chat_id' + callbackQuery.from.id + "\nmessage_id" + callbackQuery.from.username;
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "Select option", option);
  }
  if (action === 'query_trial'){
    print_names();
  }
});

/*
   problema: registrazione stesso dato due volte.
   inserire eccezione stesso utente

*/


/*************************************

  COLPA DI GABRIELE // mannaggia

  response non va bene: vedere guida

 *************************************/

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
  app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
      client.query('SELECT * FROM users', function(err, result) {
        done();
        if (err)
        { console.error(err); }
        else
        { console.log(results); }//response.render('pages/db', {results: result.rows} ); }
      });
    });
  });
}
