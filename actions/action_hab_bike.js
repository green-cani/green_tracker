/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Bike', callback_data: 'habit_bike'}],
    action: function(callbackQuery){ 
      cbQ = callbackQuery;
      console.log(cbQ);
      register_habit(cbQ.from.id,cbQ.message.chat.id,"bike"); 
    },
    text: 'eseguo azione habit bike'
}
exports.action = action;
