function createMenu(module_names){
    var module_list = [];
    for(i in module_names){
      module_list.push(require('./actions/' + module_names[i]));
    }
    // extract actions list (each action is an object
    // corresponding to a button with its own functionality
    var menu_actions_list = [];
    for(i in module_list){
      menu_actions_list.push(module_list[i].action);
    }
    // return actions list, so that you can access the menu_actions_list
    // from the extern with: require('./NAMEOFTHISMODULE').menu_actions_list
    return menu_actions_list;
}

exports.createMenu = createMenu;
