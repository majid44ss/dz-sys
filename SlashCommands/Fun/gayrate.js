const { Client, CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'gayrate', 
     description: 'Gayrate',
         options: [
             {
                 name: "user",
                 description: "User",
                 type: "USER",
                 required: true
             },
         ],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, interaction, args) => {
        const human = interaction.options.getUser("user")
        const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

        if(human == interaction.author) {
            const Embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('***Your Gayrate***')
            .setDescription(`You are **${rate}%** Gay `)
            .setFooter(`${human.user.username}`)
            interaction.followUp({ embeds: [Embed] })
        } else {
            const Embed2 = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`***${human.username}'s Gayrate***`)
            .setDescription(`${human} is **${rate}%** Gay `)
             .setFooter(`${human.tag}`)
            interaction.followUp({ embeds: [Embed2]})
        }

    }
}