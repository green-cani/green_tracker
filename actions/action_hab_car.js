/*
 * Habit Car
 */
var action = {
    requires : [],
    button : [{ text: 'Car', callback_data: 'habit_car'}],
    action: function(callbackQuery){ /*register_habit();*/ },
    text: 'eseguo azione habit car'
}
exports.action = action;
