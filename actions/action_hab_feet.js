/*
 * Habit Feet
 */
var action = {
    requires : [],
    button : [{ text: 'Feet', callback_data: 'habit_feet'}],
    callback : 'habit_feet',
    action: function(callbackQuery){ /*register_habit();*/ },
    text: 'eseguo azione habit feet'
}
exports.action = action;
