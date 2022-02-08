module.exports = {
    run: async (client)=>{
        return console.log(`${client.user.tag} is ready !`);
    },
    name: 'ready'
}