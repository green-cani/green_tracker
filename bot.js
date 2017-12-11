var token = '502137753:AAHDcKtIgwSFJQTmMiqnf2846avclZIqSA8';
var pg = require('pg');

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true } );

console.log('bot server started... CANI.');

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
      [{ text: 'Insert value', callback_data: 'dummy' }],
      [{ text: 'Some button text 2', callback_data: '2' }],
      [{ text: 'Some button text 3', callback_data: '3' }],
      [{ text: 'Write ids', callback_data: 'write_ids' }],
      [{ text: 'END', callback_data: 'end' }]
    ]
  })
};

bot.onText(/^\/start$/, function (msg, match){
  bot.sendMessage(msg.chat.id, 'START!').then(function () {
    console.log('start');
    bot.sendMessage(msg.chat.id, "Select option", option); 
  });
});

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  console.log(callbackQuery);
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
  }
  if (action === 'write_ids') {
    text = 'chat_id' + msg.chat.id + "\nmessage_id" + msg.message_id;
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "Select option", option); 
  }
});


function register_user (user_id,username){
  pg.connect(process.env.DATABASE_URL, function(err,client,done) {
    var query_text = 'insert into users values('+user_id+','+username');' ;
      client.query(query_text, function(err,result) {
        done();
        if(err){
          console.error(err); response.send("Error " + err); 
        }
        else{
          response.render('pages/db',{results: result.rows} ); 
        }
      });
  });
}
