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


// when a user types /start, do something...
bot.onText(/^\/start$/, function (msg, match){
  createMenu(msg, ['action_register_user','action_query_trial', 'action_register_hab'], "START");
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

