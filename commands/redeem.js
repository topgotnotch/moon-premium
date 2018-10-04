const Discord = require('discord.js');
const Enmap = require("enmap");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  client.settings = new Enmap({name: "donators"});
  message.reply("soon:tm:")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "redeem",
  category: "Premium",
  description: "Reedem a premium code you have gotten.",
  usage: "redeem <code>"
};
