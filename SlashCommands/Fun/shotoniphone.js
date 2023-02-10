const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
   const axios = require('axios');
module.exports = {
    name: "shotoniphone",
    description: "Shot On Iphone meme",

    
    run: async (client, interaction, args) => {
    

        const url = 'https://shot-on-iphone.studio/api/video';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.followUp(`An error occured!`)
        }


        await interaction.followUp({content : `[Shot on iphone meme](${data.url})`})
    }
}