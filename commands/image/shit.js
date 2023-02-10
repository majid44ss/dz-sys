const { Message, Client , MessageEmbed } = require("discord.js");
const Color = "RANDOM";

module.exports = {
  name: "affect",
  category: "Image",
  description: "get affected, REALLY AFFECTED",
  usage: "jail <user>",
  emoji: "📷",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI
    (`https://kaskus.cf/api/v1/imagegen/affect?avatar=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    message.channel.send({ embeds: [embed]})
  }
}
