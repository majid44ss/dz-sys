const discord = require("discord.js")

module.exports = {
  name: "btstatus",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  userPermissions: ["ADMINISTRATOR"],
  ownerOnly: true,
  run: async (client, message, args) => {
    
  
     if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 client.user.setActivity(args.join(" ")); 
 message.channel.send("Updated the bot status")

    
  }
}