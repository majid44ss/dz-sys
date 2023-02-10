const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'membercount',
    aliases: ['mc'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const guild = message;
        const embed = new MessageEmbed()
        .setColor("#FF0000")
        .setAuthor(`Member Count of ${message.guild}`, message.guild.iconURL({ dynamic: true }))
        .setTitle("Members")
        .setDescription (`Total: ${message.guild.members.cache.size}\n Members: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setImage("https://i.imgur.com/vdvrhED.gif")
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
       
            message.channel.send({ embeds: [embed]})
  }
}