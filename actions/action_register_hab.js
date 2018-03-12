/*
 * Register Habits action
 */

var createMenu = require('../functions/createMenu').createMenu;

var action = {
    requires : [],
    button : [{ text: 'Register Habit', callback_data: 'register_hab'}],
    action: function(callbackQuery){ 
      var msgId = callbackQuery.message;
      createMenu(msgId,['action_hab_bike','action_hab_car','action_hab_feet','action_hab_train'],"Scegli l'azione");
    },
    text: 'eseguo azione register habit'
}
exports.action = action;
