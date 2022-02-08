const { Client, Collection } = require('discord.js');
const path = require('path');
const {readdir,statSync} = require('fs');
const config = require('./config.json');

module.exports = class Bot extends Client {
    constructor() {
        super({intents: 32767});

        this.commands = new Collection();
        this.aliases = new Collection();

        this.config = config;

        void this.start();
    }

    start(){
        void this.loadEvents();
        void this.loadCommands();
        void this.login(config.token);
    }

    async loadEvents(filePath = path.join(__dirname, './events'), folder){

        readdir(filePath,(err,files)=>{
            console.log("Liste des events:")
            if (err) return console.log(err);
            if (!files) return  console.log("The directory 'events' doesn't exist");

            for (let i = 0; i < files.length; i++){
                console.log("\t- " + files[i]);
                if (statSync(path.join(filePath,files[i])).isDirectory()){
                    this.loadEvents(path.join(filePath, files[i]),files[i]);
                } else {
                    const event = require(path.join(filePath, files[i]));
                    this.on(event.name,(...args) => event.run(this,...args));
                }
            }
        });
    }

    async loadCommands(filePath = path.join(__dirname, './commands'), folder){

        readdir(filePath,(err,files)=>{
            if (err) return console.log(err);
            if (!files) return  console.log("The directory 'commands' doesn't exist");
            console.log("Liste des events:")
            for (let i = 0; i < files.length; i++){
                console.log("\t- " + files[i]);
                if (statSync(path.join(filePath,files[i])).isDirectory()){
                    this.loadCommands(path.join(filePath, files[i]), files[i]);
                } else {
                    let commandPath = path.join(filePath,files[i]);
                    const command = require(commandPath);
                    this.commands.set(command.name, command);
                    for (let j = 0; j < command.aliases.length; j++) {
                        this.aliases.set(command.aliases[j],command.name);
                    }
                }
            }
        });
    }
}