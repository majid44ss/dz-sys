const rrModel = require('../../models/reactionRoles')
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')


module.exports = {
  name: "panel",
  description: "reaction role panel",
  userPermissions: ['MANAGE_ROLES'],

  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    const guildData = await rrModel.findOne({ 
      guildId: interaction.guildId
    });

    if (!guildData?.roles)
    return interaction.followUp(
      "There is no roles inside of this server!"
    );

    const options = guildData.roles.map(x => {
      const role = interaction.guild.roles.cache.get(x.roleId);

      return {
        label: role.name,
        value: role.id,
        description: x.roleDescription || 'NO description',
        emoji: x.roleEmoji
      };
    });
              //YOU CAN EDIT THIS EMBED IF YOU WANT
    const panelEmbed = new MessageEmbed()
      .setTitle('__**Reaction Roles**__')
      .setThumbnail("https://i.imgur.com/ZFH5OtF.png")
      .setColor('#FF0000')
      .setDescription('**اختر الرتب الموجودة اسفل****\nهذي اارتب مجانية ')
      .setImage("https://i.imgur.com/P0DYMLm.gif")
    const components = [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
           .setCustomId('reaction-roles') //<== DO NOT REMOVE THIS
           .setMaxValues(1)
           .addOptions(options)
      )
    ];

    interaction.followUp({ embeds: [ panelEmbed], components })

  }
};