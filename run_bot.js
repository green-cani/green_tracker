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
var createMenu = require('./createMenu').createMenu;
var main_menu_actions_list = createMenu(['action_register_user','action_query_trial', 'action_register_hab']);

// this functions formats the actions_list for a menu into
// a format that Telegram' API sendMessage() understands
var option = function(buttons_list){
  return { reply_markup: JSON.stringify({ inline_keyboard: buttons_list }) };
};

// when a user types /start, do something...
bot.onText(/^\/start$/, function (msg, match){
  //loads buttons data from menu list
  var buttons_list = [];
  for(a in main_menu_actions_list){
    buttons_list.push((main_menu_actions_list[a]).button);
  }

  // ...Print initialization text, then ...
  // note how the instructions given to the bot are just chained methods,
  // with syntax: first_instruction.then(second_instruction)
  bot.sendMessage(msg.chat.id, 'START!').then(function () {
    // ... prompt the menu with buttons (the json 'menu')
    bot.sendMessage(msg.chat.id, "Select option", option(buttons_list));
    /* from now on, when a user will click on a button,
       the relative callback will be called. See below for
       how the callbacks are handled */
  });
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
      actionList.push(require('./actions/' + item.slice(0,-3)).action);
    }
  )

  // callback for all possible actions
  var this_action;
  for(i in actionList){
    this_action = main_menu_actions_list[i];
    this_button = this_action.button;
    if(action === this_button[0].callback_data){
      this_action.action(callbackQuery);
      text = this_action.text;
      console.log("used action: " + text);
    }
  }
});

/*
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

function register_habit(){
  console.log("register habit");
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
*/
