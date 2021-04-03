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
                + `Translate + Language + Text: Translates any language! :united_nations:\n\n`
                + `Joke: Gives you a funny joke! :rofl:\n\n`
                + `8ball + text: Use the magic 8 ball for your tough questions! :8ball:\n\n`
                + `:confetti_ball: NEW FEATURES! :confetti_ball:\n\n`
                + `image + text: Sends an image from Google Images with your search query :frame_photo:\n\n`
                + `gif + text: Sends a GIF from Tenor with your search query :gift:\n\n`)
            .setThumbnail('https://i.imgur.com/fCDXdX5.gif')
            .setFooter ('Spirow Bot V1.1.5 - More features coming soon!')
    message.channel.send (helpEmbed);
        }

};