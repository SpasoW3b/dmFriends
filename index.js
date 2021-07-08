const Discord = require('discord.js.old'),
    client = new Discord.Client(),
    config = require('./config.js');


client.on('ready', () => {

    let count = 1;
    client.user.friends.forEach(member => {
        member.send(config.message).catch(err => {
            console.error(`${err.message}`);

        }).then(() => {
            count++
            console.log(` message envoyer a ${member.username} \n Nombre total envoyer: [${count++}]`)
        });
    })
})

client.login(config.token)