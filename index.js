const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Use upcity.yhcodes.ml')
})

app.listen(3000)
const { Client, Intents, Collection } = require("discord.js");
const mongodb = require("mongodb")
const fs = require("fs");

const client = new Client({
    intents: 32767,
});

client.on('ready', () => {  console.log(`❘✅ ❘ Join Discord: https://discord.gg/8TeCUJ3Hcs
❘✅ ❘ Join Discord: https://discord.gg/8TeCUJ3Hcs\n❘✅ ❘ Logged in as ${client.user.tag}!`);
client.user.setActivity(`DZ Support & Community`, {type:"WATCHING"});

});
const { GiveawaysManager } = require('discord-giveaways');

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#FF0000',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;


module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);


client.login(process.env.yhtoken);

