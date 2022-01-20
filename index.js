const {Client, Intents,MessageEmbed} = require('discord.js');
const token = require("./token.json").token;
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async() => {
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on('messageCreate', async (message) => {
    let prefix = "$";
    if (message.content.startsWith(prefix)){
        switch (message.content){
            case prefix+"start":

                //let channel = message.guild.channels.cache.get(message.channelId);
                let channel = message.channel;

                const exampleEmbed = new MessageEmbed()
                    .setColor('#787878')
                    .setTitle("LET'S GO POUR UNE FERETTE")
                    .setURL('https://discord.js.org/')
                    .setAuthor({ name: 'FeretteBOT', url: 'https://github.com/rengnareb77/feretteBOT' })
                    .setDescription(
                        '1) Cliquez chacun sur un des boutons\n' +
                        '2) Appuyez sur le logo valider\n' +
                        '3) Le bot vous enverra chacun un mp, répondez lui avec un thème pour la ferette à venir\n' +
                        '4) Lorsque chacun des joueurs aura répondu au BOT, le BOT choisira aléatoirement un thème parmi les 5\n' +
                        '5) Have fun ;)')
                    .setTimestamp();

                let mess = await channel.send({embeds:[exampleEmbed]})
                await Promise.all([
                    mess.react("❌"),
                    mess.react("1️⃣"),
                    mess.react("2️⃣"),
                    mess.react("3️⃣"),
                    mess.react("4️⃣"),
                    mess.react("5️⃣"),
                    mess.react("✅")
                ])

                break;
            default:
                //await message.channels.send("err")
                break;
        }
    }
});

client.login(token);