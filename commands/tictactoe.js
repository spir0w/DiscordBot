const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe',
    aliases: ['ttc', 'bke'],
    description: 'play Tictactoe',

    async execute(message, args, cmd, client, discord) {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member to play against!')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}