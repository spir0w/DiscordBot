const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: "Displays users avatar",
     async execute (Client, message, args, client) {
         const user = message.mentions.users.first() || message.author;
         message.channel.send(
            new Discord.MessageEmbed()
            .setFooter(`${user.tag}'s avatar!`)
            .setColor("#e4101f")
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))

         )
         
             }
}