const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

/* const token = `NjkwMTI0MDIxMTMxNzcxOTQ3.XnNr0Q.GMN9IP5EhkAvKxjkk0kpbCIWdy4`
 */
const PREFIX = '-';


bot.on('ready', () => {
    console.log('Bot is online!');
})

bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        
        case 'ping':
            msg.reply('pong!');
            msg.channel.send('pong!');
            break;

        case 'uza':
            if(!args[1]) return msg.reply('Ne diyon kardeş')
            msg.channel.bulkDelete(args[1],true)
            break;

        case 'liste':
            msg.channel.send(`Bunlar var abi
            1. Ayak
            2. Berber 
            3. Cengiz 
            4. Derine
            5. Gohard
            6. Hokkabaz
            7. ignite
            8. Jungle
            9. Kawhi
            10. Mark
            11. Nasılsın
            12. Nuts
            13. Onlygame
            14. Ragıp
            15. Shit
            16. Tarafından
            17. Tesisat
            `);
            break;

        case 'play':

            if(!args[1]) return msg.reply('Ne diyon kardeş')

            if(!msg.member.voice.channel) return msg.reply('Gel buraya da çalalım')

            if(msg.member.voice.channel) {
                msg.member.voice.channel.join().then(connection => {
                    const dispatcher = connection.play(`./audio/${args[1].toLowerCase()}.mp3`);
                    dispatcher.on("end", end => {
                    voiceChannel.leave();
                    });
                    }).catch(err => console.log(err));
            }
            break;
}
})

bot.login(token);