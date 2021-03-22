module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    async execute(client, message, args, Discord) {
        const channel = '805534220281839616'
        const TeamyellowRole = message.guild.roles.cache.find(role => role.name === "Yellow Team")
        const TeamblueRole = message.guild.roles.cache.find(role => role.name === "Blue Team")

        const TeamyellowEmoji = '🍋';
        const TeamblueEmoji = '🧢';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${TeamyellowEmoji} for team Yellow\n`
                + `${TeamblueEmoji} for team Blue`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(TeamyellowEmoji);
        messageEmbed.react(TeamblueEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === TeamyellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TeamyellowRole);
                }
                if (reaction.emoji.name === TeamblueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TeamblueRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === TeamyellowEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TeamyellowRole);
                }
                if (reaction.emoji.name === TeamblueEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TeamblueRole);
                }
            } else {
                return;
            }
        });
    }
 
}   