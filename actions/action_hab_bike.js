/*
 * Habit Bike
 */
var action = {
    requires : [],
    button : [{ text: 'Bike', callback_data: 'habit_bike'}],
    callback : 'habit_bike',
    action: function(callbackQuery){ /*register_habit();*/ },
    text: 'eseguo azione habit bike'
}
exports.action = action;
