const { MessageAttachment, ContextMenuInteraction } = require('discord.js')
module.exports = {
  name: 'wide',
  type: "USER",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

   run: async (client, interaction) => {
 const user = await client.users.fetch(interaction.targetId);
 const avatar = user.displayAvatarURL({ dynamic: false, format: "png" })
 const img = `https://api.popcat.xyz/wide?image=${avatar}`;
 const image = new MessageAttachment(img, `wide_${user.username}.png`)
 interaction.followUp({ files: [image]})
  }
}