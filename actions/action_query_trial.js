/*
 * Write IDs action
 */
var action = {
  requires: [],
  button: [{ text: 'Write IDs', callback_data: 'print_names' }],
  action: function (callbackQuery){ print_names(); },
  text: "eseguo azione write ids"
}
exports.action = action;
