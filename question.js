require mybot;
var bot = mybot.bot;
var pg = require('pg');

// creates menu for choosing means of transport
var choose_transport = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'AUTO', callback_data: 'opt_auto' }],
      [{ text: 'TPL/TRENO', callback_data: 'opt_tpl' }],
      [{ text: 'PIEDI', callback_data: 'opt_piedi' }],
      [{ text: 'BICI', callback_data: 'opt_bici' }]
    ]
  })
};

function question_menu(msg, match){
  bot.sendMessage(msg.chat.id, "Come ti muovi oggi?", choose_transport);
}

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  var text;

  for(a in blabla){ // a is the file with button object
    if (action === a.button.action_name){
      text = a.button.text;
      bot.editMessage 
    }
  }


  if (action === 'opt_auto') {
    text = 'Il tuo impatto ambientale sarà alto oggi :(';
    bot.editMessageText(text, opts);
    register_action(callbackQuery.from.id,'joke');
  }
  if (action === 'opt_tpl') {
    text = 'Grazie per la tua scelta \"green\"!';
    bot.editMessageText(text, opts);
    register_action(callbackQuery.from.id,'joke');
  }
  if (action === 'opt_piedi') {
    text = 'Buona camminata, l\'ambiente ti ringrazia!';
    bot.editMessageText(text, opts);
    register_action(callbackQuery.from.id,'joke');
  }
  if (action === 'opt_bici') {
    text = 'Sport e aria più pulita: sei un campione!';
    bot.editMessageText(text, opts);
    register_action(callbackQuery.from.id,'joke');
  }
});

function register_action (user_id,action){
  pg.connect(process.env.DATABASE_URL, function(err,client,done){
    var query_text = 'insert into habits values('+user_id+',\'now\',\''+action+'\');';
    console.log('action:query text ' + query_text );
    console.log('action:client ' + client );
    client.query(query_text, function(err,result){
      done();
      if(err){
        console.error(err); //response.send("Error " + err); ///////////////////////////// response
      }
      else{
        console.log('action: ok');//response.render('pages/db',{results: result.rows} ); ///////////////////////////// response
      }
    });
  });
}
