const Discord = require('discord.js');
const Enmap = require("enmap");
const donor = require('../donators.json');
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const embed = new Discord.RichEmbed()
  .setTitle('Donators')
  .setDescription(`${donor.tiger}`)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "donators",
  category: "Premium",
  description: "Lists the last cache of my donator list.",
  usage: "donators"
};
