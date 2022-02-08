module.exports = {
    run: async (client, message)=>{
        await message.guild.members.fetch();
        if(!message.author || !message.member || !message.guild || !message.guild.id) console.error("invalid message");

        const [command, ...args] = message.content.slice(client.config.prefix.length).split(" ");
        const cmd = client.commands.get(command || client.aliases.get(command));
        if (!cmd) return;
        cmd.run(client,message, args);
    },
    name:'messageCreate'
}