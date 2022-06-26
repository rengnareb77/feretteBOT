//const { } = require("discord.js");
module.exports = {
	run: async(channel,users)=>{
		/*let listSuggestion = await getAllSuggestion(users);
		console.log("Tout les message ont été récupéré")
		let min = 0;
		let max = users.length -1;
		let n = Math.floor(Math.random() * (max - min + 1)) + min
		let suggestion = listSuggestion[n];
		console.log("Suggestion choisie : " + suggestion)
		channel.send("Le thème sera donc:" + suggestion);*/
		let listMessage = []

		for (user of users){
			let msg = await getSuggestion(user)
			listMessage.push(msg)
		}

		let rand = getRandom(0,listMessage.length-1);

		channel.send({content:`Le thème sera donc: "${listMessage[rand]}"`})
	},
}


async function getSuggestion(user){

	return new Promise(async (resolve,reject)=>{
		let dm =  await user.createDM();
		let message = await dm.send("Quel est ta suggestions pour la partie ?")
		const filter = m=> m.content.includes('')
		const collector = dm.createMessageCollector({
			filter,
			max:1,
			time:30000,
			errors:['time']
		})
		collector.on('end', collected => resolve(collected.at(0).content));
	})
}

function getRandom(min,max){
    return (Math.floor(Math.random() * (max - min + 1)) + min) ;
}