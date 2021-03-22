const { Channel } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ['commands'],
    permissions: [],
    description: "Sends an embedded message with the different available commands",
    execute(message,args, cmd, client, Discord){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#8b0000')
            .setTitle(':gear: Check out my awesome commands! :gear:')
            .setDescription('All commands start with the ";" prefix!\n\n'
                + `Ping: pong!\n\n`
                + `Hug + @username: Give someone a well deserved hug!\n\n`
                + `Play + "Songname": Start some tunes in your voice channel!\n\n`
                + `Tictactoe + @username: Play a game of Tictactoe against someone!\n\n`
                + `Weather + Area: Check the weather anywhere in the world!`)
            .setThumbnail('https://i.imgur.com/fCDXdX5.gif')
            .setFooter ('Spirow Bot V1.1.3 - More features coming soon!')
    message.channel.send (helpEmbed);
        }

};