const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "getAvatar",
    type: 'USER',
    description: 'Get another users avatar using context menu',
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const user = await client.users.fetch(interaction.targetId);
      
      const embed = new MessageEmbed()
        .setAuthor(user.tag)
        .setColor("#FF0000")
        .setFooter("Express Codex | Dryder Mataroa")
        .setImage(user.displayAvatarURL({ dynamic: true }));

      interaction.followUp({ 
        content: `${user.tag}'s Avatar`, 
        embeds: [embed] });
    },
};