const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "nuke",
    description: "Deletes the current channel entire messages",
    userPermissions: ["ADMINISTRATOR"],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
 run: async (client, interaction, args) => {
   if (!interaction.guild) return interaction.followUp({ content: "My commands work only in a server!" })
   if (!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({content: 'You do not have permissions to use that! Required perms:\`ADMINISTRATOR\`'})
    interaction.channel.clone().then(channel => {
    channel.setPosition(interaction.channel.position)
    channel.send('Owner has nuked this channel!')
  })
  interaction.channel.delete()
  .catch (e => {
    return interaction.followUp({content: 'Something went wrong! If you think this is a bug, make sure to report it to our devs by joining the support server!'})
  })
 }
}