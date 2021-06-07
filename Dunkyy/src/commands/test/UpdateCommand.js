const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class CommandCommand extends BaseCommand {
  constructor() {
    super('Update', 'none', []);
  }
 
	async run(client, message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Update')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('Singing channel?')
        .addFields(
            {name:'Singing channel', value: 'Here you can sing a song with other people in chat, you can do it perfectly on line, or just mix the lines, if the owner is there you have chance that his going to make a video.'},
        )
        .setImage('https://i.imgur.com/y6u2Apf.jpeg')
        .setFooter('{-} Dunkyy');
 
        message.channel.send(newEmbed);
        message.delete()
    }
}