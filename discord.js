const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // You can change the prefix

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', (message) => {
  // Ignore messages from other bots and non-command messages
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  // Extract the command and arguments from the message
  const [command, ...args] = message.content.slice(prefix.length).split(' ');

  // Check the command and respond accordingly
  if (command === 'hello') {
    message.channel.send('Hello, I am your chatbot!');
  } else if (command === 'ping') {
    message.channel.send('Pong!');
  }
  // Add more commands as needed

  // You can add more commands here
});

// Log in to Discord with your bot token
client.login('YOUR_BOT_TOKEN');
