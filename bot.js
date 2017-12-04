var token = '502137753:AAHDcKtIgwSFJQTmMiqnf2846avclZIqSA8'

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
