const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class CommandCommand extends BaseCommand {
  constructor() {
    super('Rules', 'none', []);
  }
 
	async run(client, message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('This is a test embed')
        .addFields(
            {name:'Rule 1', value: 'Dont ping @everyone'},
            {name:'Rule 2', value: 'Dont ask to me mod / staff'},
            {name:'Rule 3', value: 'Be nice to other players!'}
        )
        .setImage('https://cdn.wallpapersafari.com/81/70/5B8fJq.jpg')
        .setFooter('{-} Dunkyy');
 
        message.channel.send(newEmbed);
        message.delete()
    }
}