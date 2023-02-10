const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate")

module.exports = {
    name: "Translate",
    type: 'MESSAGE',
    translate: "Translate another word in english",
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

      const translated = await translate(msg.content, { to: 'en' });
      const embed = new MessageEmbed()
      .setFooter(`${interaction.user.tag}`)
      .setTimestamp()
      .addField("Text To Translate:", `\`\`\`${msg.content}\`\`\``)
      .addField("Translateted Text:", `\`\`\`${translated.text}\`\`\``)
      .setColor('#FF0000')

      interaction.followUp({ embeds: [embed] })
    },
};