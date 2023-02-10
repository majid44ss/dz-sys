const { formatDate } = require('../../functions');
const { MessageEmbed } = require('discord.js')
const moment = require('moment')
module.exports = {
  name: 'youngest',
  description: 'Diplays the youngest account in the server',
  emoji: '🙍',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    let mem = message.guild.members.cache.filter(m => !m.user.bot).sort( (a,b) => b.user.createdAt - a.user.createdAt).first()

    const embed = new MessageEmbed()
    .setTitle(`Youngest member in ${message.guild.name}`)
    .setColor("#FF0000")
    .setDescription(`**${mem.user.tag}** is the youngest member in **${message.guild.name}**\n**Account Creation Date:** ${formatDate(mem.user.createdAt)}\n**Join Date:** ${moment(mem.user.joinedAt).format("MM-DD-YYYY [at] HH:mm")}`)

    message.channel.send({ embeds: [embed] })
  }
}