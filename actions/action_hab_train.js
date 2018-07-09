/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Train', callback_data: 'habit_train'}],
    action: function(callbackQuery){ 
      cbQ = callbackQuery;
      console.log(cbQ);
      register_habit(cbQ.from.id,cbQ.message.chat.id,"train"); 
    },
    text: 'eseguo azione habit train'
}
exports.action = action;
