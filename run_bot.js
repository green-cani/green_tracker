// MAIN CODE FOR THE BOT
// this module contains the generic instructions that
// the bot should perform when prompted with some string
// in telegram. (For example, what should the bot do when
// a user writes /start)
// Also, it contains the generic instructions
// about how the bot should perform a callback when one
// button of its menus is pressed.

// import bot
var bot = require('./create_bot').bot;

// import main menu by importing its actions list
//var main_menu_actions_list = require('./menus/main_menu').menu_actions_list;
// RACCOGLI TUTTE LE AZIONI
var createMenu = require('./functions/createMenu').createMenu;

// when /info is typed
bot.onText(/^\/start$/, function(msg, match){
  bot.sendMessage(msg.chat.id,"Welcome! This is GreenTrackerBot, a Telegram bot you can use to track your commuting habits (car? feet? bike - which we love?). At the same time, your habits will be collected and used to figure out how people move. Ah, don't forget: with more sustainable choices you can earn more green-points! What are you waiting for?");
  createMenu(msg, ['action_register_user'], "In order to use GreenTrackerBot, you must register, allowing us to use your username and id to identify you. We promise not to share your identity with anyone, and we will use it just for this bot.");
});

// when a user types /start, do something...
bot.onText(/^\/daily$/, function (msg, match){
  createMenu(msg,['action_hab_bike','action_hab_car','action_hab_feet','action_hab_train'],"How will you get to school/work today?");
});

/*
 * how should the bot handle the callbacks?
 *
 * The structure of the next block is:
 * bot.on('callback_query', do_a_lot_of_stuff)
 * Each block of type if(action === 'some_name') ...
 * describes the behavior of the bot in response to
 * the activation of the callback named 'some_name'
 */
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  var text;

  // create list with all possible actions
  var actionList = [];
  var actionsFolder = './actions';
  var fs = require('fs');
  fs.readdirSync(actionsFolder).forEach(
    function (item, index){
      if( item.slice(-3) === ".js"){
        actionList.push(require('./actions/' + item.slice(0,-3)).action);
      }
    }
  )

  // callback for all possible actions
  var this_action;
  for(i in actionList){
    this_action = actionList[i];
    this_button = this_action.button;
    if(action === this_button[0].callback_data){
      this_action.action(callbackQuery);
      text = this_action.text;
      console.log("used action: " + text);
    }
  }
});

function wakeup_analyzer()
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://green-tracker-analyzer.herokuapp.com/", true);
  xhr.send();
}
