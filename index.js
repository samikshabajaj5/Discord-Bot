require('dotenv').config();
console.log('Token:', process.env.DISCORD_TOKEN);  // Add this line to check the token
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({
        content: "Hi, I AM BOT"
    });
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        interaction.reply('pong');
    }
});

client.login(process.env.DISCORD_TOKEN);
