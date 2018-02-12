var action = {
  requires: [],
  button: [{ text: 'Query trial', callback_data: 'query_trial' }],
  callback: 'query_trial',
  action: function (callbackQuery){ print_names();  },
  text: "eseguo azione register_user"
}
exports.action = action;
