// CODE FOR RUNNING THE BOT
// USAGE: require() this file, for example with:
// var bot_module = require('./create_bot.js')
// Then access the bot through MODULE_NAME.bot, like:
// bot_module.bot

// bot token
var token = '502137753:AAHDcKtIgwSFJQTmMiqnf2846avclZIqSA8';
// module for creating bots
var Bot = require('node-telegram-bot-api')
// bot object. Use this to access the bot and use bot's methods
// this one is exported.
var bot = new Bot(token, { polling: true } );

// export the bot so that it is accessible from outside as:
// MODULE_NAME.bot
exports.bot = bot;
