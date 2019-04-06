module.exports = {
    checkParis: function(message) {
        const  Discord = require('discord.js');

        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('./paris/participants.json')
        const low = require ('lowdb')
        const db = low(adapter);

      const user = message.author.username;


        if (message.content.startsWith("!joueur 1")){
            console.log("alo ?")

            db.get('joueur1')
            .push(user)
            .write()}




            if (message.content.startsWith("!gagnant 1")){
                var aled = db.get('joueur1')
                .value()
message.reply(aled)
                db.get('gagnants')
        
            .push(aled)
            .write()}
            
            if (message.content.startsWith("!prize")){

         var  nbr =     db.get('gagnants')
                .filter({gagnants: true})
                .sortBy('views')
                .take(5)
                .value()
            message.reply(nbr)

            }


        if (message.content.startsWith("/ui")){
        var test =    db.get('user')
        .size()
        .value()

            message.reply(`${test}\n`)
            }


/* db.unset('user')
.write()
db.defaults({user :[]})
.write();*/

    }}