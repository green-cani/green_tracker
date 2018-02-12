/*
 * Habit Train
 */
var action = {
    requires : [],
    button : [{ text: 'Train', callback_data: 'habit_train'}],
    action: function(callbackQuery){ /*register_habit();*/ },
    text: 'eseguo azione habit train'
}
exports.action = action;
