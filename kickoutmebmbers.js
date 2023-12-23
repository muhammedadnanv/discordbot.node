// ... (Previous code)

client.on('message', (message) => {
  // ... (Previous code)

  // Command: !serverinfo
  if (command === 'serverinfo') {
    const serverInfoEmbed = new Discord.MessageEmbed()
      .setTitle('Server Information')
      .addField('Server Name', message.guild.name)
      .addField('Total Members', message.guild.memberCount)
      .addField('Created On', message.guild.createdAt.toDateString())
      .setColor('#3498db'); // You can change the color

    message.channel.send(serverInfoEmbed);
  }

  // Command: !kick
  if (command === 'kick') {
    // Check if the user has permission to kick members
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.reply("You don't have permission to use this command!");
    }

    // Check if a user is mentioned
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Please mention a user to kick.');
    }

    // Kick the mentioned user
    member.kick()
      .then(() => message.channel.send(`${member.user.tag} was kicked.`))
      .catch((error) => message.reply(`Couldn't kick the user. Error: ${error}`));
  }
});

// ... (Previous code)
