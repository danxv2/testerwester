const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${client.user.username} is online`)
// client.user.setActivity('Prefix is: xl', { type: "WATCHING"}).catch(console.error)

let statuses = [
    `${client.guild.size}!`,
    "xlhelp"
    `over ${bot.users.size}!`,
]

setInterval(function() {
    let status = statuses[Math.floor(Math.random()* statuses.length)];
    client.user.setActivity(status, {type: "WATCHING"});
}, 5000)


}




