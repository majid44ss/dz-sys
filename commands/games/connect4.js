const { Client, Message, MessageEmbed } = require('discord.js');
const { Connect4 } = require('discord-gamecord')

module.exports = {
  name: 'connect4',
  description: 'Connect 4',
  aliases: [],

  run: async (client, message) => {

    if (!message.mentions.users.first()) return message.channel.send('**You need to mention a member to play!**')

    new Connect4({
      message: message,
      opponent: message.mentions.users.first(),
      embed: {
        title: `${message.guild.name} Connect 4`,
        color: '#FF0000',
      },
      emojis: {
        player1: '🔵',
        player2: '🔴'
      },
      turnMessage: '{emoji} **-** Its your turn, {player}',
      winMessage: '{emoji} | **{winner}** won the game!',
      gameEndMessage: 'The game went unfinished :(',
      drawMessage: 'It was a draw!',
      askMessage: `Hey {opponent}, {challenger} challenged you for a game of Connect 4!`,
      cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
      timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
    }).startGame(); 
  }
}