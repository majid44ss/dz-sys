const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "User Info",
    type: 'USER',
    descriprion: "Get another users info",
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const user = await client.users.fetch(interaction.targetId);
    let custom;

      
      const embed = new MessageEmbed()
            .setAuthor(`${user.tag}`, user.displayAvatarURL())
            .setColor('#FF0000')
            .setFooter(`User Info`, interaction.client.user.avatarURL({ dynamic: true }))
            .setThumbnail(user.displayAvatarURL())
            .setTimestamp()
            .addField('__User:__ ', `<@${user.id}>`, true)
            .addField('__User ID:__ ', `${user.id}`, true)
            .addField('__Joined at:__ ',`${moment(user.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
            .addField('__Created On:__', user.createdAt.toLocaleString(), true)
            .addField('__Activity:__', `${custom}`)

        interaction.followUp({ embeds: [ embed ] });
    },
}