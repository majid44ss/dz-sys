const { CommandInteraction, Client, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'Evaluate Content',
    defaultPermission: false,
    type: 'MESSAGE',
    description: 'Evaluate another user or content',
    defaultPermission: false,
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async(client, interaction) => {
        const clean = text => {
            if(typeof(text) === 'string') {
                return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
            }
            else {
                return text;
            }
        };
        try {
            const result = await interaction.channel.messages.fetch(interaction.targetId);
            let evaled = eval(result.content);
            if (typeof evaled != 'string') {
                evaled = require('util').inspect(evaled);
            }
            if((clean(evaled)).length > 3990) {
                await interaction.followUp({ content: `\`\`\`xl\n${clean(evaled)}\`\`\``, files: [new MessageAttachment(Buffer.from(clean(evaled))).setName('eval.txt')] });
            }
            else {
                await interaction.followUp({ content: `\`\`\`xl\n${clean(evaled)}\`\`\`` });
            }
        }
        catch (err) {
            await interaction.followUp({ content: `\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\`` });
        }
    }
};