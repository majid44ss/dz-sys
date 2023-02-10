const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "cleverate",
    description: "clever rate user",

    options: [
        {
            type: 'USER',
            description: 'The user',
            name: 'user',
            required: false,
        },
    ],

    run: async (client, interaction, args) => {

        const member = interaction.guild.members.cache.get(args[0]) || interaction.member;

        let rng = Math.floor(Math.random() * 101);

        const cleverembed = new MessageEmbed()

            .setTitle("CLEVER Rate 💡")

             .setDescription(`**__${member.user.username}#${member.user.discriminator}__** ===> ` + rng + "% Clever!!`**")

            .setColor("#FF0000")

            .setThumbnail('https://www.poetry4kids.com/wp-content/uploads/2008/05/im-clever-whenever.png')

            .setFooter(member.user.username, member.user.avatarURL())

            .setTimestamp()

        interaction.followUp({ embeds: [cleverembed] });
    }
}