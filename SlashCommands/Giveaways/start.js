const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'start',
    description: 'Start a Giveaway!',
    userPermissions: ["ADMINISTRATOR"],
    options: [
        {
          name: "duration",
          type: "STRING",
          description: "duration of the giveaway",
          required: true,
        },
        
        {
            name: "winners",
            type: "INTEGER",
            description: "winners of the giveaway",
            required: true,
        },
        {
            name: "prize",
            type: "STRING",
            description: "prize of the giveaway",
            required: true,
        },
      ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run : async(client, interaction, args) => {
        const duration = interaction.options.getString('duration');
        const winnerCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');

        client.giveawaysManager.start(interaction.channel, {
            duration: ms(duration),
            winnerCount,
            prize,
        }).then((gData) => {
            console.log(gData); // {...} (messageId, end date and more)
        })
    }
}