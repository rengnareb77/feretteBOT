const {MessageEmbed} = require("discord.js");
module.exports = {
    run: async(client, message)=>{
        //let channel = message.guild.channels.cache.get(message.channelId);
        let channel = message.channel;

        const exampleEmbed = new MessageEmbed()
            .setColor('#787878')
            .setTitle("LET'S GO POUR UNE FERETTE")
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
    },
    name:'start',
    aliases:['s'],
    description: "The command to launch a ferette."
}
