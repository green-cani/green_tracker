/*
 * Write IDs action
 */

var query_trial = require("../functions/query_trial").F;

var action = {
  requires: [],
  button: [{ text: 'query_trial', callback_data: 'query_trial' }],
  action: function (callbackQuery){ query_trial(); },
  text: "eseguo azione write ids"
}
exports.action = action;
