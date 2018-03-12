/*
 * Habit Bike
 */

var register_habit = require("../functions/register_habit").F;

var action = {
    requires : [],
    button : [{ text: 'Train', callback_data: 'habit_train'}],
    action: function(callbackQuery){ 
      console.log(callbackQuery);
      register_habit(callbackQuery.from.id,"train"); 
    },
    text: 'eseguo azione habit train'
}
exports.action = action;
