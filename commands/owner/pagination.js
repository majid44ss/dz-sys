const { Message, Client, MessageEmbed } = require("discord.js");
const { pagination } = require('reconlx');

module.exports = {
    name: "pages",
    description: "This command shows pages",
    emoji: "📝",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
      const embed1 = new MessageEmbed()
      .setAuthor(message.guild.name)
      .setTitle("Servers & Bot Information")
      .setThumbnail("https://i.imgur.com/ZFH5OtF.png")
      .setColor("#FF0000")
      .setDescription("**WELCOME**\n Turn to the next pasge for more info. \n **Thank You.** ")
      .setFooter("Express Codex Server")
      .setTimestamp()
      const embed2 = new MessageEmbed()
      .setAuthor(message.guild.name)
      .setTitle("Servers Count")
      .setColor("#FF0000")
      .setDescription(`Your Bot is in ${client.guilds.cache.size} servers`)
      .setFooter("Express Codex Server")
      .setTimestamp()
      const embed3 = new MessageEmbed()
      .setAuthor(message.guild.name)
      .setTitle("Total Members In The Support Server")
      .setColor("#FF0000")
      .setDescription(`There are a total of ${client.users.cache.size} members \n in the ${message.guild.name}.`)
      .setFooter("Express Codex Server")
      .setTimestamp()
      const embed4 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()
      const embed5 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()
      const embed6 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()
      const embed7 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()
      const embed8 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()
      const embed9 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()
      const embed10 = new MessageEmbed()
      .setTitle("ADD YOUR TITLE HERE")
      .setColor("#FF0000")
      .setDescription("ADD YOUR TEXT HERE")
      .setFooter("ADD YOUR TEXT HERE")
      .setTimestamp()

      const embeds = [
        embed1, 
        embed2, 
        embed3, 
        embed4, 
        embed5, 
        embed6, 
        embed7, 
        embed8, 
        embed9, 
        embed10,
      ];

      pagination({
        embeds: embeds,
        channel: message.channel,
        author: message.author,
      });
    },
};