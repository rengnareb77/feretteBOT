const { Client, Intents} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { run } =  require('./ferette/gamemode.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ferette')
		.setDescription('Lancer une partie de ferette')
		.addUserOption(option => option
            .setName('joueur1')
            .setDescription('Le joueur 1')
            .setRequired(true))
        .addUserOption(option => option
            .setName('joueur2')
            .setDescription('Le joueur 2')
            .setRequired(true))
        .addUserOption(option => option
            .setName('joueur3')
            .setDescription('Le joueur 3')
            .setRequired(false))
        .addUserOption(option => option
            .setName('joueur4')
            .setDescription('Le joueur 4')
            .setRequired(false))
        .addUserOption(option => option
            .setName('joueur5')
            .setDescription('Le joueur 5')
            .setRequired(false)),

        async execute(client,interaction) {
            try{
                await interaction.deferReply({ephemeral: true});
                let userSelected = interaction.options._hoistedOptions;
                let names = []
                for (user of userSelected){
                    names.push(interaction.options.getMember(user.name));
                }

                await run(client,interaction,names)
            }catch (error) {
                console.log(error)
            }

        },
};