/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Car', callback_data: 'habit_car'}],
    action: function(callbackQuery){ 
      console.log(callbackQuery);
      register_habit(callbackQuery.from.id,"car"); 
    },
    text: 'eseguo azione habit car'
}
exports.action = action;
