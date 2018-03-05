function createMenu(module_names, menu_msg){

  
  // List of actual actions from actions names list
  // requires the actions knowing the names and pushes into module_list
  var module_list = [];
  for(i in module_names){
    module_list.push(require('./actions/' + module_names[i]));
  }
  

  // extract actions list (each action is an object
  // corresponding to a button with its own functionality)
  var menu_actions_list = [];
  for(i in module_list){
    menu_actions_list.push(module_list[i].action);
  }

  // Markup as wanted by bot.sendMessage()
  var option = function(buttons_list){
    return { reply_markup: JSON.stringify({ inline_keyboard: buttons_list }) };
  };

  // List of buttons from actions list
  var buttons_list = [];
  for(a in menu_actions_list){
    buttons_list.push((menu_actions_list[a]).button);
  }

  // Prints menu 
  bot.sendMessage(msg.chat.id, menu_msg, option(buttons_list));
  /* From now on, when a user will click on a button,
   * the relative callback will be called.
   *  
   * Callbacks are handled with bot.on('callback_query',...
   */




}

exports.createMenu = createMenu;
