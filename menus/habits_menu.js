// actions for the menu
var module_names = ['action_hab_train', 'action_hab_bike', 'action_hab_feet', 'action_hab_car'];


// copy pasted from main_menu.js //////////////////////////////////////////
var module_list = [];

var module_list = [];
for(i in module_names){
  module_list.push(require('../actions/' + module_names[i]));
}

var menu_actions_list = [];
for(i in module_list){
  menu_actions_list.push(module_list[i].action);
}

exports.menu_action_list = menu_action_list
//////////////////////////////////////////////////////////////////////////
