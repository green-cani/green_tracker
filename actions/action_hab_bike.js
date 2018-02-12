/*
 * Habit Bike
 */
var register_action = require("../functions/register_action");

var action = {
    requires : [],
    button : [{ text: 'Bike', callback_data: 'habit_bike'}],
    callback : 'habit_bike',
    action: function(callbackQuery){ console.log("register action"); register_action(); },
    text: 'eseguo azione habit bike'
}
exports.action = action;
