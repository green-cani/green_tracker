/*
 * Register Habits action
 */

var register_habit = require("../functions/register_habit").register_habit;


var action = {
    requires : [],
    button : [{ text: 'Register Habit', callback_data: 'register_hab'}],
    action: function(callbackQuery){ register_habit(callbackQuery.from.id,'dummy'); },
    text: 'eseguo azione register habit'
}
exports.action = action;
