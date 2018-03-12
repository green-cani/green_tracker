/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Bike', callback_data: 'habit_bike'}],
    action: function(callbackQuery){ 
      console.log(callbackQuery);
      register_habit(callbackQuery.from.id,"bike"); 
    },
    text: 'eseguo azione habit bike'
}
exports.action = action;
