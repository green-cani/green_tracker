/*
 * Write IDs action
 */
var action = {
  requires: [],
  button: [{ text: 'Write IDs', callback_data: 'query_trial' }],
  callback: 'query_trial',
  action: function (callbackQuery){ print_names();  },
  text: "eseguo azione write ids"
}
exports.action = action;
