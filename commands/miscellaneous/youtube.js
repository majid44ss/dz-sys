const { Client, Message, MessageEmbed } = require("discord.js")
const ytsearch = require("yt-search")
module.exports = {
    name: "youtube",
    description: "Search for a video on youtube!",
    emoji: "🧰",
    category: "Miscellaneous",
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args.length) {
            return message.reply({content: `Please supply a search query!`})
        }

        message.reply({content: `Searching for query`}).then(async (msg) => { // i did this cuz it can sometimes be slow
            let search = await ytsearch(args.join(" "))
            let video = search.videos[0]
            if(!video) {
                return msg.edit({content: `No videos found!`})
            }

            const { views, title, timestamp, thumbnail, url, duration, author, ago,  image} = video
            const embed = new MessageEmbed()
            .setThumbnail(thumbnail)
            .setImage(image)
            .addFields(
                {name: "Title", value: title},
                {name: "URL", value: `[Here](${url})`, inline: true},
                {name: "Author", value: `[${author.name}](${author.url})`, inline: true},
                {name: "Created", value: `${ago}`, inline: true},
                {name: "Length", value: `${timestamp}`, inline: true}, 
                {name: "Views", value: `${views}`, inline: true}
            )
            .setColor("#FF0000")
            .setFooter(`Express Codex • Requested by ${message.author.tag}`, client.user.displayAvatarURL())

            msg.edit({content: ` Query found!` ,embeds: [embed]})
        })

    }
}