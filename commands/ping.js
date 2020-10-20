const Discord = require("discord.js");
const ms = require('ms');
const bot = new Discord.Client({
    disableEveryone: true
});

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send("i am loading gayness")
    const latency = msg.createdTimestamp - message.createdTimestamp;
    return msg.edit(`sex latency: ${latency} 
Api sex: ${Math.round(bot.ws.ping)}`)
};

module.exports.config = {
    name: "ping",
    aliases: ["latency"],
    description: ''
}