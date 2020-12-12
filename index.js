const {Client, Attachment} = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

const cheerio = require('cheerio');

const request = require('request');

const PREFIX = '/';

const Officer = '621836926256807966';

bot.on('ready', () =>{
    console.log('Bot Online');
    bot.user.setActivity('/help', { type: 'LISTENING'})
})

bot.on('guildMemberAdd', member =>{
	
	const channel = member.guild.channels.find(channel => channel.name === "new-members");
	if(!channel) return;

	channel.send(`Welcome ${member} to the DEBDE Discord server! To get full access to the server, go to #verification and type **/verify**!`)
});

bot.on('message', message=>{

    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
	case 'funny':
	    message.channel.startTyping();
            image(message);
	    message.channel.stopTyping();
            break;
        case 'cheeseburger':
            const attachment = new Attachment('https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg')
            message.channel.send(message.author, attachment);
            break;
        case 'localfile':
            const attachment2 = new Attachment('./test.png');
            message.channel.send(message.author, attachment2)
            break;
	case 'doodoofardy':
	    const attachment = new Attachment('https://imagez.tmz.com/image/43/1by1/2010/03/26/432ed2d8a6775ff0a4017da53abdf798_xl.jpg')
	    message.channel.send(message.author, attachment3)
	    break;
        case 'randomchimpevent':
            var chance = Math.floor(Math.random() * 2437)
	    if(chance == 0) {
	    message.channel.send("@everyone RANDOM CHIMP EVENT! :monkey_face: :monkey_face: :monkey_face:")
	    } else {
  	    message.channel.send("No random chimp event")
	    }
	    break;
	case 'rce':
            var chance = Math.floor(Math.random() * 2437)
	    if(chance == 0) {
	    message.channel.send("@everyone RANDOM CHIMP EVENT! :monkey_face: :monkey_face: :monkey_face:")
	    } else {
  	    message.channel.send("No random chimp event")
	    }
	    break;
	case 'randomchimpeventodds':
	    message.channel.sendMessage("The odds for the Random Chimp Event is: **1** in **2437**");
            break;
	case 'rceodds':
	    message.channel.sendMessage("The odds for the Random Chimp Event is: **1** in **2437**");
            break;
        case 'poop':
            message.channel.sendMessage('funny');
            break;
        case 'creeper':
            message.channel.sendMessage('shut up');
            break;
        case 'damndaniel':
            message.channel.sendMessage('back at it again with the white vans');
            break;
        //"verify" is only for the DEBDE discord server
        case 'verify':
            message.member.addRole(Officer);
            message.delete(100);
	    message.author.send('Thank you for becoming a DEBDE officer. Make sure to review the rules of the server by doing /rules in the "#bot-commands" text channel.');
            break;
	case 'VERIFY':
            message.member.addRole(Officer);
            message.delete(100);
	    message.author.send('Thank you for becoming a DEBDE officer. Make sure to review the rules of the server by doing /rules in the "#bot-commands" text channel.');
            break;
        case 'website':
            message.author.send('The website is currently down. :cry:');
            break;
        case 'rules':
            message.author.send(
                "These rules apply to the **DEBDE** and **Gold_74** Discord servers" +
                "\n-Keep the chat semi-appropriate (no NSFW)." +
                "\n-Please don't spam @everyone (or admins), unless it is important." +
                "\n-Do not scream, spam, or generally annoy anyone in text/voice chats."
            )
            break;
        case 'commands':
            message.channel.sendMessage(
                "**Funny Commands**:" +
                "\n/randomchimpevent (or /rce), /poop, /creeper, /cheeseburger, /funny" +
                "\n**Helpful Commands**:" +
                "\n/help, /website, /verify, /commands" +
		"\n**/verify** is only for the **DEBDE discord server**."
            )
            break;
        case 'help':
            message.channel.sendMessage(
                "**INFO**: The DEBDE bot was made my Gold_74." +
                "\n**COMMANDS**: For a full list of commands, type **/commands**." +
                "\n**VERSION**: 1.0.8"
            )
    }
})

function image(message){

        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "okbuddyretard",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };


        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
     
     
            $ = cheerio.load(responseBody);
     
     
            var links = $(".image a.link");
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
           
            console.log(urls);
     
            if (!urls.length) {
               
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });

    }

bot.login(process.env.token);
