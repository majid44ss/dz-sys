const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'reroll',
    description: 'reroll a Giveaway!',
    userPermissions: ["ADMINISTRATOR"],
    options: [
        {
          name: "message_id",
          type: "STRING",
          description: "duration of the giveaway",
          required: true,
        },
      ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run : async(client, interaction, args) => {
        const messageId = interaction.options.getString('message_id');
        client.giveawaysManager.reroll(messageId).then(() => {
            interaction.channel.send('Success! Giveaway rerolled!');
        }).catch((err) => {
            interaction.channel.send(`An error has occurred, please check and try again.\n\`${err}\``);
        });
    }
    }