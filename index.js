const Discord = require('discord.js');
const client = new Discord.Client({intents:[]});
const token = require("./token.json").token

client.on('ready',()=>{
    console.log('Bot lancée !')
});

client.login(token);