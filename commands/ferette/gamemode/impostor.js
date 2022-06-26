module.exports = {
    run: async(channel,users)=>{
        let rand = getRandom(1,10);
        let max = users.length -1;
        if (rand === 1){
            console.log("Salade ! Tout le monde est imposteur");
            for (let i = 0; i <= max; i ++){
                users[i].send("Tu es imposteur, ta mission sera de troller tes coéquipier sans qu'ils le remarquent.")
            }
        } else {
            rand = getRandom(0,max);
            console.log(users[rand].user.username + " est imposteur");
            for (let i = 0; i <= max; i ++){
                if (i === rand){
                    users[i].send("Tu es imposteur, ta mission sera de troller tes coéquipier sans qu'ils le remarquent.")
                } else {
                    users[i].send("Tu n'es pas imposteur.")
                }
            }
        }
        channel.send("L'imposteur a été désigné, saurez vous le retrouver ?")
    },

}
/**
 * A function that return a random integer value between 2 values
 * @param min the minimum value
 * @param max the maximum value
 * @return a random number between min and max
 */
function getRandom(min,max){
    return (Math.floor(Math.random() * (max - min + 1)) + min) ;
}