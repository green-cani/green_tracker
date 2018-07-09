/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Feet', callback_data: 'habit_feet'}],
    action: function(callbackQuery){ 
      cbQ = callbackQuery;
      console.log(cbQ);
      register_habit(cbQ.from.id,cbQ.message.chat.id,"feet"); 
    },
    text: 'eseguo azione habit feet'
}
exports.action = action;
