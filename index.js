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
	    var facts = ["https://cdn.discordapp.com/attachments/783483447191928873/783484025796558858/negahomer.mov", "https://cdn.discordapp.com/attachments/783483447191928873/785627814288031804/b8y98by9y9bby9.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627855681355826/52fa77dbf743687fbacf6881e1a3aeaa05647af1ed6aeb551e7447dc19444042_1.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627877139021824/s22ss232s2ss2.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627889689165834/765d654d5432w.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627902255300628/5ff475676f54675f.mov", "https://cdn.discordapp.com/attachments/783483447191928873/785627912958640148/thesenuts.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627930025787412/3oy5jyoj35yj5i.webm", "https://cdn.discordapp.com/attachments/783483447191928873/785627979833016390/llolololohuhyg766g.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605042462425099/gerogsefloyd.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605066751246376/htwy5huryE35y.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605079329439754/3y5y5y3y45y45y5yy.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605099979046922/autism.mov", "https://cdn.discordapp.com/attachments/783483447191928873/788605120304775178/heh5ehe5gh5eh5y.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605132836438046/45454545466oi6t8o.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605148905472020/5yy5y55y5yy55yjlyhehtyij6e7io677467567657676779thjr.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652300993101904/hot_sex.mov", "https://cdn.discordapp.com/attachments/783483447191928873/790652328351891487/rthrethtdykrgsdfsdbfngbfk.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652355888152576/lemkfflejwjfeoijiejwlyk.mov", "https://cdn.discordapp.com/attachments/783483447191928873/790652369289084928/Arab_10.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652385432436736/ddkkrjkrkbrebkrabkar5k.mov", "https://cdn.discordapp.com/attachments/783483447191928873/790652399022112768/seshyehsshefnsefnsehjnes.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652417183055872/6yt4rqauj8q4608j90q468u9.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652431955394560/68685uj45rjjfjjfjtlykuk.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652462033666048/4y5ue6u4y6.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250274395422730/gnenkemrmer.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250287699361802/fS5A1ts-rvREEgRA-1.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250300399714304/ammaondfogorgeofs.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250310390022144/SAZYd1JiKNdhgHWj.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250321383948338/wesetjwiejtrwjoieiewdgidirisidifsin.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250334902190100/132203724_217244579888662_4823642336002280792_n.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250344146567189/486598156184813131wrwthwlitheitheitsepnnaenae.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250394599194664/epepicicwsagf.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250403936370708/pepepeptpeptpegriffifniinfnisdfindfbafatgatltlandfmman.mp4"];
	    var fact = Math.floor(Math.random() * facts.length);
	    message.channel.send(facts[fact]);
            break;
	case 'unfunny':
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
	    const attachment3 = new Attachment('https://imagez.tmz.com/image/43/1by1/2010/03/26/432ed2d8a6775ff0a4017da53abdf798_xl.jpg')
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
                "\n/randomchimpevent (or /rce), /poop, /creeper, /cheeseburger, /doodoofardy, /funny, /unfunny" +
                "\n**Helpful Commands**:" +
                "\n/help, /website, /verify, /commands" +
		"\n**/verify** is only for the **DEBDE discord server**."
            )
            break;
        case 'help':
            message.channel.sendMessage(
                "**INFO**: The DEBDE bot was made my Gold_74." +
                "\n**COMMANDS**: For a full list of commands, type **/commands**." +
                "\n**VERSION**: 1.1.0"
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
