const Discord = require("discord.js");
const {
  Client,
  Message,
  MessageActionRow,
  MessageButton,
} = require('discord.js');

module.exports = {
    name: "rr",
    run: async (Client, message, arg) => {

  const embed = new Discord.MessageEmbed()
  .setTitle("Reaction Role")
  .setColor("#FF0000")
  .setDescription("Click on the button below to get self role ")
  .setFooter("Reaction Roles | Dryder Mataroa")


  const nv = new MessageActionRow().addComponents(
    new MessageButton()
    .setLabel("VIP ROLE")
    .setCustomId(`1`)
    .setStyle('PRIMARY')
    .setDisabled('false'),


    new MessageButton()
    .setLabel("SUPER VIP")
    .setCustomId(`2`)
    .setStyle('PRIMARY')
    .setDisabled('false')

  )


 message.channel.send({components: [nv], embeds:[embed]})

}}