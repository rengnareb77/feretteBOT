const { Client, Intents} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { run } =  require('./ferette/gameMode.js');

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
                let user = interaction.options._hoistedOptions;
                let users = []
                for (let i = 0; i < user.length; i ++){
                    users.push(interaction.options.getMember(user[i].name));
                }

                await run(client,interaction,users)
            }catch (error) {
                console.log(error)
            }

        },
};