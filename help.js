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
                + `Hug + @username: Give someone a well deserved hug! :hugging:\n\n`
                + `Play + "Songname": Start some tunes in your voice channel! :notes:\n\n`
                + `Tictactoe + @username: Play a game of Tictactoe against someone! :o: :x:\n\n`
                + `Weather + Area: Check the weather anywhere in the world! :white_sun_cloud:\n\n`
                + `Translate + Text: Translates any language to English! :flag_gb:\n\n`
                + `Joke: Gives you a funny joke! :rofl:\n\n`
                + `8ball + text: Use the magic 8 ball for your tough questions! :8ball:\n\n`)
            .setThumbnail('https://i.imgur.com/fCDXdX5.gif')
            .setFooter ('Spirow Bot V1.1.4 - More features coming soon!')
    message.channel.send (helpEmbed);
        }

};