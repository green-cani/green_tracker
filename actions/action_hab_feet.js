/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Feet', callback_data: 'habit_feet'}],
    action: function(callbackQuery){ 
      console.log(callbackQuery);
      register_habit(callbackQuery.from.id,"feet"); 
    },
    text: 'eseguo azione habit feet'
}
exports.action = action;
