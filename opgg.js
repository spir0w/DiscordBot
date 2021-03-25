const opggScraper = require('opgg-scraper');
const Discord = require('discord.js');

module.exports = {
    name: 'opgg',
    aliases: ['gg'],
    description: "Looks up League of Legends stats",
    async execute(message, args, cmd, client, Discord){

        opggScraper.getStats('7AM Spirow', 'euw', false)

        const opgginfo = new Discord.MessageEmbed()
        .setTitle('Check out this players stats')
        .setDescription(Stats)
        .setFooter ('Happy to be of service!')
        
        message.channel.send(opgginfo)
    }

}