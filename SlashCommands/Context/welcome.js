const { Client, ContextMenuInteraction  } = require("discord.js");

module.exports = {
    name: "Welcome",
    type: 'MESSAGE',
    description: 'Interact on another user comment to welcome them',
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const msg = await interaction.channel.messages.fetch(
        interaction.targetId
      );

      interaction.followUp({
         content: `${interaction.user}: Welcome To The Server`,
      });
    },
};