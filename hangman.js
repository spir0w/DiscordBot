const { hangman } = require('reconlx')
const discord = require("discord.js");

module.exports = {
    name: 'hangman',
    description: 'play hangman',

    async execute(message, args, cmd, client, discord) {
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })
        hang.start();
        message.delete(1000);
    }
}