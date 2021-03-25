const { Client, Message, MessageEmbed } = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
    name: "translate",
  async execute (message,args, cmd, client, Discord) {
      const query = args.join(" ");
      if(!query) return message.reply('Please specify a text to translate');

      const translated = await translate(query, { to: 'en' });
      message.channel.send(translated.text);
  }
}