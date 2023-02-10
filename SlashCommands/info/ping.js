const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns bots ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args, message) => {
        let circles = {
            green: "<a:greenfire:865919100991045653>",
            yellow: "<a:yellowflame:865994340442832906> ",
            red: "<a:warning:865919101300768779> "
        }
        const pingEmbed = new MessageEmbed()
            .setColor("#FF0000")
            .addField("Bots Ping :",
                `${client.ws.ping <= 200 ? circles.green : client.ws.ping <= 400 ? circles.yellow : circles.red} ${client.ws.ping}ms`
            )
        interaction.followUp({ embeds: [pingEmbed] });
    },
};