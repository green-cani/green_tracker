// CODE FOR RUNNING THE BOT
// USAGE: require() this file, for example with:
// var bot_module = require('./create_bot.js')
// Then access the bot through MODULE_NAME.bot, like:
// bot_module.bot

function bot(){
  if(this.bot === undefined){
    // bot token
    var token = process.env.TOKEN;
    console.log(token);
    // module for creating bots
    var Bot = require('node-telegram-bot-api');
    // bot object. Use this to access the bot and use bot's methods
    // this one is exported.
    this.bot = new Bot(token, { polling: true } );
  }
  return this.bot;
}



// export the bot so that it is accessible from outside as:
// MODULE_NAME.bot
exports.bot = bot();
