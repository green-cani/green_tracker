// menu
// CONFIGURATION: You just need to modify the list 'module_names', by
// filling it with the names of the actions' modules
// that you want to use for your menu.
// USAGE: access the menu_actions_list from the extern with:
// require('./NAMEOFTHISMODULE').menu_actions_list
var module_names = ['action_register_user','action_query_trial', 'action_register_hab'];

// DO NOT MODIFY ANYTHING UNDER THIS
// import modules
var module_list = [];
for(i in module_names){
  module_list.push(require('../actions/' + module_names[i]));
}
// extract actions list (each action is an object
// corresponding to a button with its own functionality
var menu_actions_list = [];
for(i in module_list){
  menu_actions_list.push(module_list[i].action);
}
// export actions list, so that you can access the menu_actions_list
// from the extern with: require('./NAMEOFTHISMODULE').menu_actions_list
exports.menu_actions_list = menu_actions_list;
