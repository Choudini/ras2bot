module.exports = {
    checkMap: function(message) {
        const Discord = require('discord.js');
        var bot = new Discord.Client();




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
        
}}
    
     
    
    