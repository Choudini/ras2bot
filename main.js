

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
db.defaults({channel :[]})
.write();
db.defaults({user :[]})
.write();

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
  if (message.content === "!map") {
    
    if (message.author.bot) return;
    
      message.delete(600)
     
  
      

    message.channel.send("Choix de la carte en cour.")
    .then(message => {
   
      message.delete(6000);
  })
    number = 17; 
    imageNumber = Math.floor (Math.random() *(number -1 + 1)) + 1; 
    message.channel.send (`Voici la map sur laquelle vous allez jouer !` ,{files: ["./map/" + imageNumber + ".jpg"]})}
  

  
    if (message.content === "!map+") {
    
      if (message.author.bot) return;
      
        message.delete(600)
       
    
        
  
      message.channel.send("Choix de la carte en cour.")
      .then(message => {
     
        message.delete(6000);
    })
      numberplus = 22; 
      imageNumberplus = Math.floor (Math.random() *(numberplus -1 + 1)) + 1; 
      message.channel.send (`Voici la map sur laquelle vous allez jouer !` ,{files: ["./map+/" + imageNumberplus + ".jpg"]})
  
  
  }
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


 