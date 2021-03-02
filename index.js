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
		var facts = ["Command isn't ready yet."];
		var fact = Math.floor(Math.random() * facts.length);
		message.channel.send(facts[fact]);
            break;
	case 'funny1':
		var facts = ["https://cdn.discordapp.com/attachments/712165479594065953/712170877600661564/0Ai5_mVGCzw5Tp_G.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712170899519832105/0CAB867C-CA4B-4220-8161-275921FC8842_1.mov", "https://cdn.discordapp.com/attachments/712165479594065953/712170918021169242/0EfwTyTcCsCWzzU3.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712170931488817155/1u2iZaUtsphjBOXy.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712170950707118181/2e53a0a6dd0b0d653330464c7236f27e.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712170969858310204/3ca78bed429673346d997f73e0b77b89.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712170992537174026/4_5904667299909994018.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171053656309840/7rb2nwBMpUmx08cw.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171127618666536/28f2da7738e9ce185d5d0cc912ecf2e7.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171145813819463/49a3aba42d779dfea1ea11dabbccf149f59a3d5588c0593b4ddeb15d42f57206_1.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171161857032232/81iagxXJ2cNad4jL.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171197072146452/83egn1807xq01.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171215959359538/84a23b29fb2ab79e3e63152f3db9e8841.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171244073517087/140cd0e5452cdd41c76c6ba5d5c8e1a4.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171261291135056/360_noscope_nigga.mov", "https://cdn.discordapp.com/attachments/712165479594065953/712171295835684934/911.police_20200403_200401_0.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171332758143006/2020_03_18_18_02_19_lXPLXHRZ26XBTu69.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171350155853844/38664d3f9db12ee02837f604bee7c8e4.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171376697409536/40101f3fd62dce171eedfe753fb2f063.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171394305097788/76879551_2343415659118704_1146952642560730771_n.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171446335438852/77801020_2761303770598421_3265798653314565305_n_1.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171503571042304/78685506_673679229827858_3169337054039562252_n.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171524043571230/81265177_172781673836725_2106502194964246572_n.mp4", "https://cdn.discordapp.com/attachments/712165479594065953/712171541835546644/83120206_170346950732705_6957957527119817328_n.mp4"];
		var fact = Math.floor(Math.random() * facts.length);
		message.channel.send(facts[fact]);
            break;
	case 'funny2':
	    var facts = ["https://cdn.discordapp.com/attachments/783483447191928873/783484025796558858/negahomer.mov", "https://cdn.discordapp.com/attachments/783483447191928873/785627814288031804/b8y98by9y9bby9.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627855681355826/52fa77dbf743687fbacf6881e1a3aeaa05647af1ed6aeb551e7447dc19444042_1.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627877139021824/s22ss232s2ss2.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627889689165834/765d654d5432w.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627902255300628/5ff475676f54675f.mov", "https://cdn.discordapp.com/attachments/783483447191928873/785627912958640148/thesenuts.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/785627930025787412/3oy5jyoj35yj5i.webm", "https://cdn.discordapp.com/attachments/783483447191928873/785627979833016390/llolololohuhyg766g.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605042462425099/gerogsefloyd.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605066751246376/htwy5huryE35y.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605079329439754/3y5y5y3y45y45y5yy.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605099979046922/autism.mov", "https://cdn.discordapp.com/attachments/783483447191928873/788605120304775178/heh5ehe5gh5eh5y.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605132836438046/45454545466oi6t8o.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/788605148905472020/5yy5y55y5yy55yjlyhehtyij6e7io677467567657676779thjr.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652300993101904/hot_sex.mov", "https://cdn.discordapp.com/attachments/783483447191928873/790652328351891487/rthrethtdykrgsdfsdbfngbfk.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652355888152576/lemkfflejwjfeoijiejwlyk.mov", "https://cdn.discordapp.com/attachments/783483447191928873/790652369289084928/Arab_10.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652385432436736/ddkkrjkrkbrebkrabkar5k.mov", "https://cdn.discordapp.com/attachments/783483447191928873/790652399022112768/seshyehsshefnsefnsehjnes.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652417183055872/6yt4rqauj8q4608j90q468u9.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652431955394560/68685uj45rjjfjjfjtlykuk.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/790652462033666048/4y5ue6u4y6.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250274395422730/gnenkemrmer.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250287699361802/fS5A1ts-rvREEgRA-1.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250300399714304/ammaondfogorgeofs.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250310390022144/SAZYd1JiKNdhgHWj.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250321383948338/wesetjwiejtrwjoieiewdgidirisidifsin.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250334902190100/132203724_217244579888662_4823642336002280792_n.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250344146567189/486598156184813131wrwthwlitheitheitsepnnaenae.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250394599194664/epepicicwsagf.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/793250403936370708/pepepeptpeptpegriffifniinfnisdfindfbafatgatltlandfmman.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/795462163800129544/jkljlkgwrjiojoiwgrjiopjiopgerjiopjoipgerjoipoijgreger.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/795462176022200320/34673rgfe4t3wrfgrt.mov", "https://cdn.discordapp.com/attachments/783483447191928873/795462191222226944/w4y4tghedrt4g_3545h.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/795462206036377630/1983002617361391855_n.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/797230589534273567/video0-6hhKxjp.mov", "https://cdn.discordapp.com/attachments/783483447191928873/797230612548681758/color_blue.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/797230625861533696/4y4gg4ge4tsfg.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/797230643075481610/abbede7e49dcb8879ad86deccf4f381c.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/797230655737036800/qwg4re5tr6ergfgh.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/797230671303147540/WhatsApp_Video_2021-01-05_at_18.04.47.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/797230730333126656/h5esy5ey5e6rus865.mov", "https://cdn.discordapp.com/attachments/783483447191928873/797230757210488912/eh5y454uy5745.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/798780166380847124/autismcool.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/798780185557860362/mfanfnafnllntlkdnenougnwoerntg.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/798780197310693416/35ge6jh6uta4et4aew.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/798780207065727007/asscrutsticinit.mov", "https://cdn.discordapp.com/attachments/783483447191928873/798780222530912256/y4y4jkjkl43jkl43.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/804801442446966814/g8yg86776g8f54d6d456llljkkk.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/804801483019255818/786gg678g678567f65r7r654r54ee444.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/804801526760734780/viuifuviuffiyuidydydydydydy.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/804801574328860742/okkopokp00u89u8989uy7878y66555443211.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266780514025512/rh98w4th98w4th89wt4.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266804722630656/u46u4664u46u46ui4674i6.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266864747315270/shususuhsosiomsmpefpsmfospgfsussusuususususu.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266896503177216/bbttmbbbttpmsosmsns.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266902719004712/cndaycnyadyncadnycad.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266910108844042/black_fart_matter.mov", "https://cdn.discordapp.com/attachments/783483447191928873/809266919353483284/3swe4drf5tgyhu.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266932255293481/908okijuyhtbg.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266948919263242/6hbgegr.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266961061642300/5678e4ngb843ngt84h.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266971115257936/wdedwedewdwedewdewdwewdewedwedewededweweddewed.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266980648648724/boaobatbotaboatobat.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809266991885844501/qshahqsahqsahqsahqsahqsha.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/809267052614254642/snmamnsanmasmnasnmasnmas.mov", "https://cdn.discordapp.com/attachments/783483447191928873/810937106712100885/henlelnelnelnen.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937118649483334/amromoriamoriamoirmiormiorglaglaglalgxayyxa.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937141013250098/ciicicghichichichjgisataeteaate.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937150627512340/whocandodis.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937176807571487/129900063_1134205167042028_6853533416888107158_n.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937194373709884/sttantnnnarnrnwnanrnwnrsnnrsngnennegnugen.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937256901869598/cichinihcnichninieseeses.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937275525496862/cteucuetcteucutecuet.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937302560800768/sololsslooslolsolsolsoloosolsolsollos.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937339521007656/nonoonomrmomoreomr.mov", "https://cdn.discordapp.com/attachments/783483447191928873/810937354868490281/frnenrerevefefffeefsfesfesseffesfesseffsedrddrsefesffefefdfdrdrfdrfrd.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937366784507934/teef.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937390881046588/bagnangngangmagmammogn.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/810937406302978088/zinggniznigznizgnigznigznizgnzi.mov", "https://cdn.discordapp.com/attachments/783483447191928873/815981261188497469/fsihsfhihsifhfishfis.mov", "https://cdn.discordapp.com/attachments/783483447191928873/815981289136062494/hwoohwhowohwowhowhowoh.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981298405474364/cimhcimchmichimchmihmmelelllllalalaljajjaccajlacljasosnosn.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981325726908446/sddsaadsdsadsddsaads.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981344257605682/asnenenaernnflnafllaflnfnlslnrnlelanrnl.mov", "https://cdn.discordapp.com/attachments/783483447191928873/815981388368576553/ebebaebebabeabaerdddrdr.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981463405199370/noreonremoneroerer.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981518991917066/rborobobrrninirnirrbirbi.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981549245825054/wocowocwocwocwocwocwocw.mp4", "https://cdn.discordapp.com/attachments/783483447191928873/815981576734507018/afrafarracaiccacaicaiafraiari.mp4"];
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
                "\n/randomchimpevent (or /rce), /poop, /creeper, /cheeseburger, /doodoofardy, /funny, /funny1, /funny2, /unfunny" +
                "\n**Helpful Commands**:" +
                "\n/commands, /funnyhelp, /help, /website"
            )
            break;
        case 'help':
            message.channel.sendMessage(
                "**INFO**: The DEBDE bot was made my Gold_74." +
                "\n**COMMANDS**: For a full list of commands, type **/commands**." +
                "\n**VERSION**: 1.1.2"
            )
	    break;
	    case 'funnyhelp':
		    message.channel.sendMessage(
                "**/funny** finds a random video from the entirety of Gold_74's *Funny Folder* and sends it into the chat." +
                "\n**/funny1** finds a random video from season 1 of Gold74's *Funny Folder* and sends it into the chat." +
		"\n**/funny2** finds a random video from season 2 of Gold74's *Funny Folder* and sends it into the chat." +
                "\n**/unfunny** searches for and finds an image from Google Images and sends it into the chat. Usually it is unfunny."
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
