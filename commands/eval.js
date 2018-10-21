const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
  if (message.author.id === "477657921384087552")
  return message.reply('**You Lack The Permission Level Of `Bot Owner`**');
  const code = args.join(' ');
  try {
    const evaled = eval(code);
    //if (typeof evaled !== 'string')
    //evaled = require('util').inspect(evaled, {depth:1});
    const clean = await client.clean(client, evaled);
    const embed1 = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor('#00FF00')
      .setTitle('__JAVASCRIPT EVALUATION__')
      .setDescription(`\`\`\`js\n${clean}\n\`\`\``)
      .setTimestamp()
      .setFooter(`${client.user.username} | Requested by ${message.author.username}#${message.author.discriminator}`);
    message.channel.send(embed1);
  } catch (err) {
    console.log(err);
    const embed2 = new Discord.RichEmbed();
    embed2.setAuthor(client.user.username, client.user.avatarURL);
    embed2.setColor('#FF0000');
    embed2.setTitle('__JAVASCRIPT EVALUATION__');
    embed2.setDescription(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
    embed2.setTimestamp();
    embed2.setFooter(`${client.user.username} | Requested by ${message.author.username}#${message.author.discriminator}`);
    message.channel.send(embed2);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 'Bot Owner'
};

exports.help = {
  name: 'eval',
  category: 'System',
  description: 'Evaluates arbitrary JavaScript.',
  usage: 'eval [...code]'
};
