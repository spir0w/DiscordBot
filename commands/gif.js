const fetch = require("node-fetch");

module.exports = {
    name: "gif",
    aliases: ["jif"],
    permissions: [],
    description: "Sends a gif",
    async execute(message, args, cmd, client, discord) {
        let keywords = "programming";
        if (args.length > 0) {
          keywords = args.join(" ");
        }
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
        message.channel.send("GIF from Tenor: " + keywords);
      }
    }