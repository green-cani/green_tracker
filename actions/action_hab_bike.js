/*
 * Habit Bike
 */

var action = {
    requires : [],
    button : [{ text: 'Bike', callback_data: 'habit_bike'}],
    action: function(callbackQuery){ console.log("register bike"); register_action("bike"); },
    text: 'eseguo azione habit bike'
}
exports.action = action;
