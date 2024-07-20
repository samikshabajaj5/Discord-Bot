require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message)=>{
    // console.log(message);
    if(message.author.bot) return;
    message.reply({
        content: "Hi I AM BOT"
    });
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply('pong');
});
client.login("MTI2NDEyMzczOTkwNjUxMDg0OA.GkLAC5.J9m0W07TBQ73Pykwfw2jLPsjHAdQnvyBnauEc4");