/*
 * Register Habits action
 */
var action = {
    requires : [],
    button : [{ text: 'Register Habit', callback_data: 'register_hab'}],
    callback : 'register_hab',
    action: function(callbackQuery){ register_habit(); },
    text: 'eseguo azione register habit'
}
exports.action = action;
