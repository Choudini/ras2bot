

const Discord = require('discord.js');

;

const test1 = new Set([21]);





//modules
const map = require('./draft/map.js');
const draft = require('./draft/draft.js');
const paris = require('./paris/paris.js');
const items = require('./items/items.js');

//config 
var config = require("./config.json")

var bot = new Discord.Client();

const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./draft/config.json')
const low = require ('lowdb')
const db = low(adapter);
//.............DB..............//

//.............DB..............//

bot.on('ready', () => {
console.log("Bot prêt !");
});


bot.login(config.token).catch(console.error);

//neverdelet
//neverdelet
require('events').EventEmitter.defaultMaxListeners = 100;
//neverdelet
//neverdelet

//choix de la map




bot.on('message', message => {
  let command = message.content;

  if ( map.checkMap(message) )
 
      return;

});

bot.on('message', message => {
  let command = message.content;

  if ( draft.checkDraft(message) )
  
      return;

});

bot.on('message', message => {
  let command = message.content;

  if ( paris.checkParis(message) ) 
 
      return;
});

bot.on('message', message => {
  let command = message.content;

  if ( items.checkItem(message) ) 
 
      return;

});


 