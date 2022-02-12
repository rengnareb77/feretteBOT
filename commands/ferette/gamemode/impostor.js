module.exports = {
    run: async(channel,users)=>{
        let max = users.length -1;
        let min = 0; 

        let n = (Math.floor(Math.random() * (max - min + 1)) + min) ;
        console.log(users[n].user.username + " est imposteur");
        for (let i = 0; i <= max; i ++){
            if (i === n){
                users[i].send("Tu es imposteur, ta mission sera de troller tes coéquipier sans qu'ils le remarquent.")
            } else {
                users[i].send("Tu n'es pas imposteur.")
            }
        }
        channel.send("L'imposteur a été désigné, saurez vous le retrouver ?")


    },
}
