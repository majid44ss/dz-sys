const { Message, Client , MessageEmbed } = require("discord.js");
const Color = "RANDOM";

module.exports = {
  name: "rip",
  aliases: ["died", ""],
  category: "Image",
  description: "Shows RIP create with user avatar",
  usage: "rip <user>",
  emoji: "📷",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new MessageEmbed()
    .setColor(Color)
    .setTitle("Rest In Peace")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/rip?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    message.channel.send({ embeds: [embed]})
  }
}