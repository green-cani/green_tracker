/*
 * Write IDs action
 */
var action = {
  requires: [],
  button: [{ text: 'query_trial', callback_data: 'query_trial' }],
  action: function (callbackQuery){ print_names(); },
  text: "eseguo azione write ids"
}
exports.action = action;
