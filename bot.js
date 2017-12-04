var token = '502137753:AAHDcKtIgwSFJQTmMiqnf2846avclZIqSA8';

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
      [{ text: 'Some button text 1', callback_data: '1' }],
      [{ text: 'Some button text 2', callback_data: '2' }],
      [{ text: 'Some button text 3', callback_data: '3' }],
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
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  var text;
  if (action === 'end') {
    text = 'Ended';
    bot.editMessageText(text, opts);
    bot.sendMessage(msg.chat.id, "ENDEDEDEDEDEDEDEDEDED"); 
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
});



