/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Car', callback_data: 'habit_car'}],
    action: function(callbackQuery){ 
      cbQ = callbackQuery;
      console.log(cbQ);
      register_habit(cbQ.from.id,cbQ.message.chat.id,"car"); 
    },
    text: 'eseguo azione habit car'
}
exports.action = action;
