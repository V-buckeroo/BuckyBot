const {Client, Attachment} = require('discord.js');

const Discord = require('discord.js');

const bot = new Client();

const PREFIX = "$";

const onCooldown = new Set();

const botName = 'BuckyBot';

var version = '1.0.0';

var gdate = Date.now() - 25200000;

// var date = new Date();

//when the bot goes online this will log that the bot is online and set the bot activity
bot.on('ready', () =>{
    console.log('bot is online');
    bot.user.setActivity('loomy | $help', { type: 'WATCHING'}).catch(console.error);
})

//3,600,000 milliseconds in an hour
bot.on('message', message =>{
    const msg = message.content.toLowerCase();

    if(msg === 'date mili'){
        message.channel.send(gdate);
        message.channel.send(Date());
    }
})

//gmt 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13(-11), 14(-10), 15(-9), 16(-8), 17(-7), 18(-6), 19(-5), 20(-4), 21(-3), 22(-2), 23(-1)

bot.on('message', message =>{

    if(message.author.id === '608396284507848847'){
        return;
    } else {
        const msg = message.content.toLowerCase();

        let dargs = Date().split(" ");
    
        //reactions
        if(msg.includes('bruh')){
            message.react("582217297880547338");
        }
        if(msg.includes('breh')){
            message.react("609476110190772372");
        }
        // if(message.author.id === "265203581206921218"){
        //     message.react('608440700119547924');
        // }
        // if(message.author.id === "542463751543193602"){
        //     message.react('🤡')
        // }
        const attachmentFace = new Attachment('./face.jpg')
    
        if(message.author.id === '561417486088798219'){
            if(msg === 'ok dum bot do ur thing'){
                message.channel.send(attachmentFace).then(d_msg => { d_msg.delete(1000);});
            }
        }
    
        //message responses
        if(msg === 'hi'){
            message.channel.send(message.author + ' is the best!');
        }
        if(msg === 'date'){
            message.channel.send('Today is ' + dargs[0] + ', ' + dargs[1] + ' ' + dargs[2] + ', ' + dargs[3]);
        }
        if(message.author.id === '542463751543193602'){
            if(msg.includes('6\'1')){
                message.channel.send('https://gfycat.com/fortunateuntidyhyena');
            }
            if(msg.includes('1869')){
                return;
            }else{
                if(msg.includes('186')){
                    message.channel.send('https://gfycat.com/fortunateuntidyhyena');
                }
            }
        }
        if(message.author.id === '561417486088798219'){
            if(msg.includes('the bot is always watching')){
                message.channel.send(':eye: :lips: :eye:');
            }
        }
        // 194536386618064896
        if(message.author.id === "194536386618064896"){
            if((msg === "hi")||(msg === "greetings")||(msg === "hello")||(msg === 'salutations')){
                console.log('kil me');
            }else{
                if((msg.startsWith('hi'))||(msg.startsWith('greetings'))||(msg.startsWith('hello'))||(msg.startsWith('salutations')))
                    message.channel.send('loomy no');
            }
        }
        // 561417486088798219
        // test (end product supposed to dm me when someone says my name)
        if(msg.includes('buck')||msg.includes('josh')||msg.includes('gosh')||msg.includes('v ')){
            message.guild.member('561417486088798219').send('someone mentioned you in ' + message.guild.name + ': https://discordapp.com/channels/' + 
            message.guild.id + '/' + message.channel.id + '/' + message.id);
        }
    }
})
  
//user commands (anyone can use these)
bot.on('message', message=>{

    const msg = message.content.toLowerCase();
    
    let args = msg.substring(PREFIX.length).split(" ");

    if(message.content.startsWith(PREFIX)){
        switch(args[0]){
            case 'ping':
                message.channel.send('pong')
                break;
            case 'creator':
                message.channel.send('https://www.reddit.com/user/V-buckeroo')
                break;
            case 'info':
                if(args[1] === 'version'){
                    message.channel.send('Version ' + version);
                }else{
                    const embedHelp = new Discord.RichEmbed()
                    .setTitle('Find Various info about the bot')
                    .addField(PREFIX + 'info version', 'Tells you the version that the bot is currently in')
                    .setColor(0x86e4ff)
                    .setFooter('Suggest new commands!')
                    message.channel.send(embedHelp);
                }
                break;
            case 'embed':
                const embed = new Discord.RichEmbed()
                .setTitle('User info')
                .addField('Username', message.author.username)
                .addField('Version', version)
                .addField('Current Server', message.guild.name)
                .setColor(0x86e4ff)
                .setThumbnail(message.author.avatarURL)
                .setFooter('Follow u/V-buckeroo on reddit!')
                message.channel.send(embed);
                break;
            case 'gay':
                const attachment = new Attachment('https://cdn.discordapp.com/attachments/602366450224857100/608140718963163136/37a1189.jpg')
                message.channel.send(message.author, attachment);
                break;
            case 'bucky':
                const attachment2 = new Attachment('./bruhhz.png');
                message.channel.send(attachment2)
                break;
            case 'txt':
                const attachment3 = new Attachment('./textdoc.txt')
                message.channel.send(attachment3);
                break;
            case 'poll':
                    setTimeout(function() {
                        message.react('⬆')
                    }, 1000)
                    setTimeout(function() {
                        message.react('⬇')
                    }, 2000)
                    setTimeout(function() {
                        message.react('🤷')
                    }, 3000)
                break;
            case 'help':
                    if(!args[1]){
                        const embedHelp = new Discord.RichEmbed()
                        .setTitle(botName + ' Commands')
                        .addField(PREFIX + 'ping', 'replies with "pong"')
                        .addField(PREFIX + 'creator', 'links you to the creator')
                        .addField(PREFIX + 'info','find various info about the bot')
                        .addField(PREFIX + 'embed', 'shows you random-ass info and ur pfp for some reason')
                        .addField(PREFIX + 'help 2', 'shows you the second help page')
                        .setColor(0x86e4ff)
                        .setFooter('page 1 of 3')
                        message.channel.send(embedHelp);
                    }else{
                        switch(args[1]){
                            case '2':
                                const embedHelp2 = new Discord.RichEmbed()
                                .setTitle(botName + ' commands')
                                .addField(PREFIX + 'bucky', 'sends a picture of the lord himself')
                                .addField(PREFIX + 'txt', 'sends a text document with some random code')
                                .addField(PREFIX + 'cooldown', 'a test command')
                                .addField(PREFIX + 'id', 'shows you your user id')
                                .addField(PREFIX + 'help 3', 'shows you the third help page')
                                .setColor(0x86e4ff)
                                .setFooter('page 2 of 3')
                                message.channel.send(embedHelp2)
                                break;
                            case '3':
                                const embedHelp3 = new Discord.RichEmbed()
                                .setTitle(botName + ' commands')
                                .addField(PREFIX + 'gay', 'sends you a cool image')
                                .addField(PREFIX + 'poll', 'creates a poll with upvote, downvote and "idk" options')
                                .addField(PREFIX + 'help admin', 'takes you to the help page for admin commands')
                                .addField(PREFIX + 'help', 'well uhh')
                                .setColor(0x86e4ff)
                                .setFooter('page 3 of 3')
                                message.channel.send(embedHelp3);
                                break;
                            case 'admin':
                                const embedAdminHelp = new Discord.RichEmbed()
                                .setTitle(botName + ' admin commands')
                                .addField(PREFIX + 'purge', 'deletes the number of messages specified')
                                .addField(PREFIX + 'kick', 'kicks the specified user')
                                .addField(PREFIX + 'ban', 'bans the specified user')
                                .setColor(0x86e4ff)
                                .setFooter('You must have a role called "Admin" to access these commands')
                                message.channel.send(embedAdminHelp)
                                break;
                        }
                    }return;
            case 'id':
                    if(!args[1]){
                        message.reply('your user id is ' + message.author.id)
                    }else{
                        if(!args[1].includes('@')){
                            message.channel.send('that is not a valid user')
                        }else{
                            message.channel.send(message.mentions.users.first() + '\'s user id is ' + message.mentions.users.first().id)
                        }
                    } 
            case 'cooldown':
                // test command for cooldowns
                if(onCooldown.has(message.author.id)){
                    message.reply('you cannot use this command more than once every 5 seconds');
                } else {
                    message.reply('you are not on cooldown');
    
                    onCooldown.add(message.author.id);
                    setTimeout(() => {
                     onCooldown.delete(message.author.id)
                    }, 5000);
                }
                break;
        }
    }else{
        return;
    }
})

//message.channel.send(message.mentions.users.first() + '\'s user id is ' + message.mentions.users.first().id)

//admin commands (require a role called "Admin") ADD MESSAGE IF USER HAS HIGER RANK THAN BOT
bot.on('message', message=>{

    const msg = message.content.toLowerCase();

    let args = msg.substring(PREFIX.length).split(" ");

    const user = message.mentions.users.first();

    if(!message.content.startsWith(PREFIX)) return;
        if(!message.member.roles.find(r => r.name === "Admin")) return;
            switch(args[0]){
                case 'purge':
                    if(!args[1]) return message.reply('please specify the amount of messages you would like to purge.')
                    message.channel.bulkDelete(args[1]);
                    break;
                case 'kick':
                    if(user){
                        const member = message.guild.member(user);

                        if(member){
                            member.kick('You have been kicked from ' + member.guild.name).then(() =>{
                                message.reply(`you successfully kicked ${user.tag}`);
                            }).catch(err =>{
                                message.reply('user was not successfully kicked')
                                console.log(err);
                            });
                        } else {
                            message.reply('user not found')
                        }
                    } else {
                        message.reply('please specify a user')
                    }
                    break;
                case 'ban':
                    if(user){
                        const member = message.guild.member(user);
        
                        if(member){
                           member.ban({reason: 'you have been banned from ' + member.guild.name}).then(() =>{
                               message.reply(`you successfully banned ${user.tag}`)
                           })
                        } else {
                            message.reply('user not found')
                        }
                    } else {
                        message.reply('please specify a user')
                    }
                    break;
        }
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name.includes("general"));
    if(!channel) return;

    channel.send(`Welcome to ${member.guild.name}, ${member}, please read the rules in the rules channel`);
})

bot.login(process.env.BOT_TOKEN);
