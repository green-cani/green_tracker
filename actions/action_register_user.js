/*
 * Regster user action
 */
var action = {
  requires: [],
  button: [{ text: '! First time? !', callback_data: 'register_user' }],
  callback: 'register_user',
  action: function (callbackQuery){ register_user(callbackQuery.from.id,callbackQuery.from.username); },
  text: "eseguo azione register_user"
}
exports.action = action;
