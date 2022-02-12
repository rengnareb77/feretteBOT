const { MessageActionRow, MessageSelectMenu, Emoji} = require("discord.js");
const imposteur = require('./gamemode/impostor');
module.exports = {
    run: async(client, interaction,users)=>{
        let channel = interaction.channel;

        let emoji1 = new Emoji(client,{name:"🕵🏼‍♂️"})
        let emoji2 = new Emoji(client,{name:"🕵🏼‍♂️"})
        let menu = new MessageActionRow().addComponents(new MessageSelectMenu()
            .setCustomId("menu")
            .setMaxValues(1)
            .setMinValues(0)
            .setPlaceholder("Veuillez choisir le type de parti !")
            .addOptions([
                {emoji:{name:"🕵🏼‍♂️"},description: "Un thème sera choisi aléatoirement parmi les 5 propositions",label:"Mode suggestion",value: "suggestion"},
                {emoji: {name: "🕵🏼‍♂️"},description: "Un imposteur sera désigné et devra int incognito",label:"Mode imposteur",value:"imposteur"}
            ])

        );

        let mess = await channel.send({content:"Choisissons d'abord le type de partie:",components:[menu]})

        let collector = mess.createMessageComponentCollector();

        collector.on("collect", async menu=>{
            await mess.delete();
            await menu.deferUpdate();
            if (menu.values[0] === "imposteur"){
                imposteur.run(channel,users);
            } else if (menu.values[0] === "suggestion"){
                channel.send("Cette fonctionnalité n'est pas encore implémentée.")
            }
        })

    },
}
