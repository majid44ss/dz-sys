const { Message, Client , MessageEmbed } = require("discord.js");
const Color = "RANDOM";

module.exports = {
  name: "jail",
  aliases: ["j"],
  category: "Image",
  description: "Shows image of jail",
  usage: "jail <user>",
  emoji: "📷",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new MessageEmbed()
    .setColor(Color)
    .setTitle("Jail")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    message.channel.send({ embeds: [embed]})
  }
}