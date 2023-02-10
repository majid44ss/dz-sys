const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'edit',
    description: 'edit a Giveaway!',
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
        client.giveawaysManager.edit(messageId, {
            addTime: 5000,
            newWinnerCount: 3,
            newPrize: 'New Prize!'
        }).then(() => {
            interaction.channel.send('Success! Giveaway updated!');
        }).catch((err) => {
            interaction.channel.send(`An error has occurred, please check and try again.\n\`${err}\``);
        });

    }
    }