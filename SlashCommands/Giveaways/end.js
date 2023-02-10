const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'end',
    description: 'end a Giveaway!',
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
client.giveawaysManager.end(messageId).then(() => {
    interaction.channel.send('Success! Giveaway ended!');
}).catch((err) => {
    interaction.channel.send(`An error has occurred, please check and try again.\n\`${err}\``);
});
    }
}