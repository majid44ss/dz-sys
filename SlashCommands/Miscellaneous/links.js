const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'links',
    description: 'check the bots links',
    
    run: async (client, interaction, args) => {
        
        const links = new MessageEmbed()
    .setTitle('Bot Owner Links')
    .setDescription('Thank you for checking my links! here is all of my support links! make sure you joined our support server if you want to something')
    .addField('Support Server', '[Click Me](https://discord.gg/FTAwKg9CCP)')
    .addField('PRO MAJID Channel',  '[Channel](https://www.youtube.com/channel/UCtM7RgPqmZa1k_pmSFcxtjg)')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor('#FF0000')
    .setFooter('🔗 Developed By | PRO MAJID');
        
         interaction.followUp({ embeds: [links] });
    }
}