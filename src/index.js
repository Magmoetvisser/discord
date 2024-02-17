const { Client, Intents } = require('discord.js');
// Ensure that both 'Client' and 'Intents' are imported from 'discord.js'

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', async message => {
    if (message.content === '!modal') {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('modal_button')
                    .setLabel('Open Modal')
                    .setStyle('PRIMARY')
            );

        const sentMessage = await message.channel.send({ content: 'Click the button to open the modal:', components: [row] });

        const filter = i => i.customId === 'modal_button' && i.user.id === message.author.id;
        const collector = sentMessage.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async interaction => {
            try {
                await interaction.reply({ content: 'This is a modal!', ephemeral: true });
                sentMessage.edit({ content: 'Modal shown!', components: [] });
            } catch (error) {
                console.error('Error displaying modal:', error);
            }
        });

        collector.on('end', () => {
            sentMessage.edit({ content: 'Time is up!', components: [] }).catch(console.error);
        });
    }
});

client.login("MTIwODE2NDg0MTYyNjQwMjg4Ng.GcyiWD.yX9RR_1nILcOVU0AOUdi3osbsZ4dXHG6JqAbOs")



// const client = new Client({
//     intents: [
//         IntentsBitField.Flags.Guilds,
//         IntentsBitField.Flags.GuildMembers,
//         IntentsBitField.Flags.GuildMessages,
//         IntentsBitField.Flags.MessageContent,
//     ]
// })  





// client.on('ready', (c) => {
//     console.log(`✅ ${c.user.tag} Is Working!`)

// })



client.login("MTIwODE2NDg0MTYyNjQwMjg4Ng.GcyiWD.yX9RR_1nILcOVU0AOUdi3osbsZ4dXHG6JqAbOs")