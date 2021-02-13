const Discord = require('discord.js')

module.exports.run = async (client, msg , args) => {
    name : 'membercount',
    description; 'Shows amount of users in the server.',
    execute(message, args) 
        const MembersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.RichEmbed()
        .setTitle(`${message.guild.name}has ${MembersInServer} members in the server!`)

        message.channel.send(memberEmbed);
    }
