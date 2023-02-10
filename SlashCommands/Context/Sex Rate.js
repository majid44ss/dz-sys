const { Client, ContextMenuInteraction  } = require("discord.js");

const r = require('random');
module.exports = {
  name: 'Sexy Rate',
  type: "USER",
  description: "Whats your rate",
  userPermissions: ["ADMINISTRATOR"],
      /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
  run: async(client, i) => {
    const user = await client.users.fetch(interaction.targetId);
    const rate = r.randint(0, 100)
    const level = getLevel(rate)
    const embed = new MessageEmbed().setTitle(`Sexy rate`).setDescription(`${user.user.tag}'s smexy rate: **${rate}%**\n${level}`).setFooter(`Requested by ${i.user.tag}`).setTimestamp()
  }
}
function getLevel(points) {
  if (points <= 20) return 'I bet girls run away when you walk to them'
  if (points > 20 && points <= 50) return 'Hmm. I guess only some girls run away from you'
  if (points > 50 && points <= 75 ) return 'Wow! You have potentials!'
  if (points > 75) return 'Man I wish I were like you, You\'re very smexy'
}