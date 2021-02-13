const { DiscordAPIError } = require("discord.js")

module.exports.run = async (client, msg, args) => {



    msg.channel.send(`

    These are **POXY** Commands
    **trustsystem** - Turns on/off system.
    **backup** - Backs up the server incase of someone wizzed it.
    **restore** - Restores perms, roles ect.
    **trust** - Whitelists a person they can create roles/channels ect.
    **help** - Sends help commands.
    **adminrestore** - Restore perms.
    **removeperms** - Remove perms of all high rank so they can't ban ect.
    **invite** - Send invite link of bot.
    **instarestore** - Restores full server fast and easy.
    **DM DANX FOR MORE HELP**
    `)
    
    
}
