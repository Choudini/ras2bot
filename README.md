# ras2bot


//comment lancer le bot ?

1. Executer le fichier "install.exe" 

2. Attendre que la fenetre console se ferme.

3. Executer "start.exe" 

4. Et voilà 



..........

Lancer stop.exe pour éteindre le bot

Lancer help.exe si le bot ne fonctionne pas et suivre les instructions.


............


Quand le bot est lancé avec la fenetre node :



//éteindre le bot

pm2 stop 0

//allumer le bot

* pm2 start 0

//redemarrer le bot

* pm2 restart 0


//voir les messages d'erreur (100 derniers messages)

* pm2 log main 0 --lines 100

Si il y a un problème lance l'executeur help.


.........................


Commandes du bot :


//tournois

* !item : montre un item au hasard parmi les items roublard

* /refresh item : refresh le cooldown de tout le monde. (doit avoir les droits de mute (jsp pq))


//draft

* pick [classe]

* ban [classe]

* /refresh draft : refresh le cooldown du channel.


//map

* !map : donne une map goulta aléatoire
