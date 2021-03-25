module.exports = {
    name: "hug",
    aliases: [],
    permissions: [],
    description: "Hugs someone!",
    execute(message, args, cmd, client, discord) {
      if (!args[0]) return message.channel.send("Who are you hugging? 😓");
  
      const target = message.mentions.users.first();
  
      const embed = new discord.MessageEmbed()
        .setColor("#c634eb")
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setImage("https://media.giphy.com/media/42YlR8u9gV5Cw/giphy.gif")
        .setDescription(`**Gives** you a hug! ${target}`);
  
      message.channel.send(embed);
    },
  };