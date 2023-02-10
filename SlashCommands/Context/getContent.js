const { Client, ContextMenuInteraction  } = require("discord.js");

module.exports = {
    name: "getContent",
    type: 'MESSAGE',
    description: 'Get another users content',
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
         content: `${interaction.user.tag}: ${msg.content}`,
      });
    },
};
