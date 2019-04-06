let talkedRecently666 = new Set([666]);
module.exports = {
    checkItem: function(message) {
        const Discord = require('discord.js');


        if (message.content === "!item") {
            if (talkedRecently666.has(message.author.id)) {
                message.channel.send("Vous avez déjà choisi un item !")
                .then(message => {
                  message.delete(10000)
                  })
            if (message.author.bot) return;
            
              message.delete(600)
             
                 } else{
          
              
        
            message.channel.send("Choix de l'item en cour.")
        .then(message => {
   
            message.delete(2000);
        })
          number = 5; 
          imageNumber = Math.floor (Math.random() *(number -1 + 1)) + 1; 
          message.reply (`Voici votre item !` ,{files: ["items/roub/" + imageNumber + ".jpg"]})


          talkedRecently666.add(message.author.id);
          setTimeout(() => {
         
            talkedRecently666.delete(message.author.id);
          }, 20*60000);}
        }



        if (message.content === "/refresh item") {
            if (message.member.hasPermission("MUTE_MEMBERS")){
            console.log("stop")
            message.delete(100)
  
            talkedRecently666.clear();

        } else {

            message.channel.send("Nop.")
        }}
    }}