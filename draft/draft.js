

let talkedRecently1 = new Set([1]);
let talkedRecently2 = new Set([2]);
let talkedRecently3 = new Set([3]);
let talkedRecently4 = new Set([4]);
let talkedRecently6 = new Set([5]);
let talkedRecently5 = new Set([6]);
let talkedRecently7 = new Set([7]);
let talkedRecently8 = new Set([8]);
let talkedRecently9 = new Set([10]);
let talkedRecently10 = new Set([11]);
let talkedRecently11 = new Set([12]);
let talkedRecently12 = new Set([13]);
let talkedRecently13 = new Set([14]);
let talkedRecently14 = new Set([15]);
let talkedRecently15 = new Set([16]);
let talkedRecently16 = new Set([17]);
let talkedRecently17 = new Set([18]);
let talkedRecently18 = new Set([9])
module.exports = {
    checkDraft: function(message) {
        const  Discord = require('discord.js');
        var bot = new Discord.Client();
        
   
        
       const FileSync = require('lowdb/adapters/FileSync')
       const adapter = new FileSync('./draft/config.json')
       const low = require ('lowdb')
       const db = low(adapter);
       
       const aled = message.channel.id;

      


const fs = require('fs')
const jsonData = JSON.parse(fs.readFileSync('./draft/config.json', 'utf-8'))

   if (message.content.startsWith("/config draft -add")){
    if (message.member.hasPermission("ADMINISTRATOR")){
    message.delete()

if (jsonData.channel.indexOf(aled) !== -1 ){
     message.reply("Le salon est déjà configuré pour la draft.") 
     .then(message => {
      message.delete(10000)
      })
     } 
     else {
     
       


 message.reply("Salon correctement configuré pour la draft.")
 .then(message => {
  message.delete(10000)
  })
 db.get('channel')

 .push(aled)
 .write()
 }
     }else {
      message.reply("Vous ne possedez pas les droits admin.")
      .then(message => {
        message.delete(10000)
        })
     }
    
    }



     if (message.content.startsWith("/config draft -del")){
      if (message.member.hasPermission("ADMINISTRATOR")){
        message.delete()

        if (jsonData.channel.indexOf(aled) === -1 ){
          message.reply("Aucunes configuration présente sur ce salon.") 
          .then(message => {
            message.delete(10000)
            })

          }else{
      const channel = message.channel.id;
      db.get("channel")
      
      .pull(channel )
      .write()

      message.reply("Configuration du salon pour la draft supprimé.")
      .then(message => {
        message.delete(10000)
        })
     }}else {
      message.reply("Vous ne possedez pas les droits admin.")
      .then(message => {
        message.delete(10000)
        })

     }
    
    }

   



     if (jsonData.channel.indexOf(aled) !== -1){
            message.content = message.content.toLowerCase() ;
          
          
          
                if (message.content === "pick" + " hupper" || message.content === "pick" + " hupper")
               {{
                if (talkedRecently16.has(message.channel.id)) {
                  message.channel.send("Cette classe a déjà était pick ou ban.")
                  .then(message => {
                    message.delete(10000)
                    })
                  message.delete(10) 
            } else {
              message.delete(100) 
              let membre = message.author.username      
              let embed = new Discord.RichEmbed()
      
      
      
      
              .setAuthor(`${membre}, a pick Huppermage !`) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
              .setColor('#40A461') // Will set color of embed
              .setImage('https://i.imgur.com/DPJsP0a.png')
              
              
              // We also can add field with verification level of guild
              
              .setTimestamp()
      
              message.channel.send(embed);
             
            
              talkedRecently16.add(message.channel.id);
              setTimeout(() => {
             
                talkedRecently16.delete(message.channel.id);
              }, 20*60000);
             
             }
            }}
           
           
                 if (message.content ===  "pick" + " éca" || message.content === "pick" + " eca" || message.content === "pick" + " écaflip" ||message.content === "pick" + " ecaflip")
                 {
                   {
                    if (talkedRecently10.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
      
      
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
           
           
           
           
                   .setAuthor(`${membre} a pick Ecaflip !`) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
                   .setColor('#40A461') // Will set color of embed
                   .setImage('https://i.imgur.com/zjf4UCo.jpg')
                   
                   
                   // We also can add field with verification level of guild
                   
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently10.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently10.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
           
                 // féca
                 if (message.content ===  "pick" + " féca" ||  message.content === "pick" + " feca" )
                 {
                   {
                    if (talkedRecently18.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                     
                   message.delete(100) 
                  
      
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
           
           
           
           
                   .setAuthor(`${membre} a pick Féca !`) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
                   .setColor('#40A461') // Will set color of embed
                   .setImage('https://i.imgur.com/YS2MXwv.jpg')
                   
                   
                   // We also can add field with verification level of guild
                   
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently18.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently18.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
           
                 // osamodas
                 if (message.content ===  "pick" + " osa" || message.content === "pick" + " osamodas"){
                   {
                    if (talkedRecently1.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
      
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Osamodas !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/cyVuUgp.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
      
      
                   talkedRecently1.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently1.delete(message.channel.id);
                   }, 20*60000);
                 }
                 }}
           
                 if (message.content ===  "pick" + " zobal"|| message.content ===  "pick" + " zob"){
                   {
                    if (talkedRecently15.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Zobal !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/a2iu5q6.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
      
                   talkedRecently15.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently15.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " énu"|| message.content ===  "pick" + " enu" || message.content ===  "pick" + " nunu" || message.content ===  "pick" + " enutrof"){
                   {
                    if (talkedRecently4.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
      
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Enutrof !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/GQhJTzS.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently4.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently4.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " cra" || message.content ===  "pick" + " crâ"){
                   {
                    if (talkedRecently5.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
                   
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Crâ !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/3NbRUKk.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently5.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently5.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " sadi" || message.content ===  "pick" + " sadida"){
                   {
                    if (talkedRecently9.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Sadida !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/XNL1HHz.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently9.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently9.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " roub"||message.content ===  "pick" + " roublard"){
                   {
                    if (talkedRecently13.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
      
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Roublard !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/KouDvlZ.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently13.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently13.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " xel" || message.content ===  "pick" + " xelor"){
                   {
                    if (talkedRecently2.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
      
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Xelor !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/UyefjKw.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently2.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently2.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " eni"|| message.content ===  "pick" + " eniripsa"||message.content ===  "pick" + " nini"){
                   {
                    if (talkedRecently7.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Eniripsa !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/bjDd90Q.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently7.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently7.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " iop"){
                   {
                    if (talkedRecently3.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
                     
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Iop !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/6V3whAi.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently3.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently3.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " sram"){
                   {
                    if (talkedRecently6.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Sram !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/chgfNqd.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently6.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently6.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " steam"||message.content ===  "pick" + " steamer"){
                   {
                    if (talkedRecently11.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Steamer !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/fADy92Q.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently11.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently11.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " sacri"|| message.content ===  "pick" + " sacrieur"){
                   {
                    if (talkedRecently8.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Sacrieur !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/vr1TkoR.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently8.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently8.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
           
                 if (message.content ===  "pick" + " ouginak"|| message.content ===  "pick" + " ougi" ){
                   {
                    if (talkedRecently12.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Ouginak !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/PfNzsHq.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently12.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently12.delete(message.channel.id);
            }, 20*60000);
          
          }
                 }}
           
                 if (message.content ===  "pick" + " elio"|| message.content ===  "pick" + " eliotrope"){
                   {
                    if (talkedRecently17.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                   
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Eliotrope !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/qKImNDP.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently17.add(message.channel.id);
                   setTimeout(() => {
                 
                     talkedRecently17.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
                 
                 if (message.content ===  "pick" + " panda" ||message.content ===  "pick" + " pandawa" ){
                   {
                    if (talkedRecently14.has(message.channel.id)) {
                      message.channel.send("Cette classe a déjà était pick ou ban.")
                      .then(message => {
                        message.delete(10000)
                        })
                      message.delete(100) 
                } else {
                   message.delete(100) 
                  
                   let membre = message.author.username      
                   let embed = new Discord.RichEmbed()
      
                   .setAuthor(`${membre} a pick Pandawa !`)
                   .setColor('#40A461') 
                   .setImage('https://i.imgur.com/40Lk1yO.jpg')
                   .setTimestamp()
           
                   message.channel.send(embed);
                   talkedRecently14.add(message.channel.id);
                   setTimeout(() => {
                 
                    talkedRecently14.delete(message.channel.id);
                   }, 20*60000);
                 
                 }
                 }}
          
          
           
        
          
            if (message.content === "ban" + " osa" || message.content === "ban" + " osamodas")
            {{
              if (talkedRecently1.has(message.channel.id)) {
                message.channel.send("Cette classe a déjà était pick ou ban.")
                .then(message => {
                  message.delete(10000)
                  })
                message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Osamodas !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/yxa2mAR.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently1.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently1.delete(message.channel.id);
            }, 20*60000);
          }
           
          
          }}
           
          
          if (message.content === "ban" + " xel" || message.content === "ban" + " xelor") 
          {{ 
            if (talkedRecently2.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
           
      
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Xelor !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/kUmbMb0.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently2.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently2.delete(message.channel.id);
            }, 20*60000);
          
          }
           
          }}
          
          if (message.content === "ban" + " iop")
          {{
            if (talkedRecently3.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Iop !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/VMZ2nJ9.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently3.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently3.delete(message.channel.id);
            }, 20*60000);
          
          }
          }}
          
          if (message.content === "ban" + " énu" || message.content === "ban" + " nunu" || message.content === "ban" + " enu" || message.content === "ban" + " enutrof")
            {{
              if (talkedRecently4.has(message.channel.id)) {
                message.channel.send("Cette classe a déjà était pick ou ban.")
                .then(message => {
                  message.delete(10000)
                  })
                message.delete(100) 
            } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Enutrof !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/GvKcHYQ.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently4.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently4.delete(message.channel.id);
            }, 20*60000);
          
          }
          }}
          
          
          
          
          if (message.content === "ban" + " cra" ||message.content ===  "ban" + " crâ")
          {{
            if (talkedRecently5.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
              message.delete(100) // 
              
              let membre = message.author.username      
              let embed = new Discord.RichEmbed()
        
              .setAuthor(`${membre} a ban Crâ !`)
              .setColor('#C62F2F') 
              .setImage('https://i.imgur.com/YRS8KCv.jpg')
              .setTimestamp()
        
              message.channel.send(embed);
              talkedRecently5.add(message.channel.id);
              setTimeout(() => {
            
                talkedRecently5.delete(message.channel.id);
              }, 20*60000);
            
            }
            }}
          
          
          if (message.content === "ban" + " sram")
          {{  
            if (talkedRecently6.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
                message.delete(100) // 
                
              let membre = message.author.username      
              let embed = new Discord.RichEmbed()
        
              .setAuthor(`${membre} a ban Sram !`)
              .setColor('#C62F2F') 
              .setImage('https://i.imgur.com/ojO01j7.jpg')
              .setTimestamp()
        
              message.channel.send(embed);
                talkedRecently6.add(message.channel.id);
                setTimeout(() => {
              
                  talkedRecently6.delete(message.channel.id);
                }, 20*60000);
              
              }
              }}
          
          
          if (message.content === "ban" + " eni" || message.content === "ban" + " éni" || message.content === "ban" + " nini" || message.content === "ban" + " eniripsa")
          {{  
            if (talkedRecently7.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
                  message.delete(100) // 
                  
                      
              let membre = message.author.username      
              let embed = new Discord.RichEmbed()
        
              .setAuthor(`${membre} a ban Eniripsa !`)
              .setColor('#C62F2F') 
              .setImage('https://i.imgur.com/hclX8mj.jpg')
              .setTimestamp()
        
              message.channel.send(embed);
                  talkedRecently7.add(message.channel.id);
                  setTimeout(() => {
                
                    talkedRecently7.delete(message.channel.id);
                  }, 20*60000);
                
                }
                }}
          
          
          if (message.content === "ban" + " féca" || message.content === "ban" + " feca")
          {{
            if (talkedRecently18.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Féca !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/XMyCOwC.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently18.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently18.delete(message.channel.id);
            }, 20*60000);
          
          }
          }}
          
          
          
          
          if (message.content === "ban" + " sacrieur" || message.content === "ban" + " sacri")
          {{
            if (talkedRecently8.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
           
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Sacrieur !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/IFtxd3a.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently8.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently8.delete(message.channel.id);
            }, 20*60000);
          
          }
          }}
          
          
          
          
          if (message.content === "ban" + " sadida" || message.content === "ban" + " sadi")
          {{
            if (talkedRecently9.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Sadida !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/Kw52aqU.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently9.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently9.delete(message.channel.id);
            }, 20*60000);
          
          }
           
          }}
          
          
          
          if (message.content === "ban" + " écaflip" || message.content === "ban" + " eca" || message.content === "ban" + " éca")
          {{
            if (talkedRecently10.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
           
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Ecaflip !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/blq69bY.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently10.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently10.delete(message.channel.id);
            }, 20*60000);
          
          }
          }}
          
          
          
          
          if (message.content === "ban" + " steamer" || message.content === "ban" + " steam")
          {{
            if (talkedRecently11.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Steamer !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/UE2J2rx.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently11.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently11.delete(message.channel.id);
            }, 20*60000);
          
          }
          
          }}
          
          
          
          if (message.content === "ban" + " ougi" || message.content === "ban" + " ouginak")
          {{
            if (talkedRecently12.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
           
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Ouginak !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/iHU3jt9.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently12.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently12.delete(message.channel.id);
            }, 20*60000);
          
          }
          
          }}
          
          
          
          if (message.content === "ban" + " roublard" || message.content === "ban" + " roub")
          {{
            if (talkedRecently13.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Roublard !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/YkI88AQ.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently13.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently13.delete(message.channel.id);
            }, 20*60000);
          
          }
           
          }}
              
         
          
          if (message.content === "ban" + " pandawa" || message.content === "ban" + " panda")
          {{
            if (talkedRecently14.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Pandawa !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/s9OuQrf.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently14.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently14.delete(message.channel.id);
            }, 20*60000);
          
          }
           
          }}
             
          
          
          if (message.content === "ban" + " zobal" || message.content === "ban" + " zob")
          {{
            if (talkedRecently15.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
      
            .setAuthor(`${membre} a ban Zobal !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/an65LIb.jpg')
            .setTimestamp()
      
            message.channel.send(embed);
            talkedRecently15.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently15.delete(message.channel.id);
            }, 20*60000);
          
          }
          
          }}
          
          
          
          
          if (message.content === "ban" + " huppermage" || message.content === "ban" + " hupper")
          
          {{
            if (talkedRecently16.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
           message.delete(100) // 
          
           let membre = message.author.username      
           let embed = new Discord.RichEmbed()
      
           .setAuthor(`${membre} a ban Huppermage !`)
           .setColor('#C62F2F') 
           .setImage('https://i.imgur.com/V5aYuih.jpg')
           .setTimestamp()
      
           message.channel.send(embed);
           talkedRecently16.add(message.channel.id);
           setTimeout(() => {
          
             talkedRecently16.delete(message.channel.id);
           }, 20*60000);
          
          }
          }}
            
          
          
          
          if (message.content === "ban" + " eliotrope" || message.content === "ban" + " elio")
          {{
            if (talkedRecently17.has(message.channel.id)) {
              message.channel.send("Cette classe a déjà était pick ou ban.")
              .then(message => {
                message.delete(10000)
                })
              message.delete(100) 
          } else {
            
            message.delete(100) // 
            
            let membre = message.author.username      
            let embed = new Discord.RichEmbed()
       
            .setAuthor(`${membre} a ban Eliotrope !`)
            .setColor('#C62F2F') 
            .setImage('https://i.imgur.com/uRWiD3W.jpg')
            .setTimestamp()
       
            message.channel.send(embed);
            talkedRecently17.add(message.channel.id);
            setTimeout(() => {
          
              talkedRecently17.delete(message.channel.id);
            }, 20*60000);
          
          } 
        
        }}}


        if (message.content === "!refresh draft") {

          console.log("stop")
          message.delete(100)

          talkedRecently1.delete(message.channel.id);
          talkedRecently2.delete(message.channel.id);

          talkedRecently3.delete(message.channel.id);

          talkedRecently4.delete(message.channel.id);

          talkedRecently5.delete(message.channel.id);

          talkedRecently6.delete(message.channel.id);

          talkedRecently7.delete(message.channel.id);

          talkedRecently8.delete(message.channel.id);

          talkedRecently9.delete(message.channel.id);

          talkedRecently10.delete(message.channel.id);

          talkedRecently11.delete(message.channel.id);

          talkedRecently12.delete(message.channel.id);
          talkedRecently13.delete(message.channel.id);
          talkedRecently14.delete(message.channel.id);
          talkedRecently15.delete(message.channel.id);
          talkedRecently16.delete(message.channel.id);
          talkedRecently17.delete(message.channel.id);
          talkedRecently18.delete(message.channel.id);
          message.channel.send("Réinitialisation de la draft effectué.")

          .then(message => {
            message.delete(10000)
            })
      }
    }}