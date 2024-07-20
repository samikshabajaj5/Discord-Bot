const { REST, Routes } = require('discord.js');
const commands = [
    {
        name:'ping',
        description: 'Replies with Pong!',
    },
];
const rest = new REST({ version: '10' }).setToken('MTI2NDEyMzczOTkwNjUxMDg0OA.GkLAC5.J9m0W07TBQ73Pykwfw2jLPsjHAdQnvyBnauEc4');

   
    (async () => {
       try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1264123739906510848'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
    })();