module.exports.run = async (client, msg, args) => {

    if(msg.guild.ownerID !== msg.author.id) return msg.reply('Ask the owner to whitelist.')

    let user = msg.mentions.users.first() 
    if (!user) return msg.reply('Please mention a user to trust.')

    if(client.antinuke.get(msg.guild.id, "trusted").includes(user.id)) {
       client.antinuke.delete(msg.guild.id, `trusted.${client.antinuke.get(msg.guild.id, "trusted").findIndex(obj => obj === user.id)}`) 
        return msg.reply('That user had already been trusted so I deleted them from using commands.') 
    }

    msg.reply('Whitelisted User/Trusted user.')
    client.antinuke.push(msg.guild.id, user.id, "trusted")

}