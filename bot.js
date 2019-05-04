const Discord = require('discord.js');// Script = Mixwell
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const developers = ["415142691282616330"]
const adminprefix = "^";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult, {type:'PLAYING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
   if (message.content.startsWith(prefix + 'wat')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
  } else 
  if (message.content.startsWith(adminprefix + 'sl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/M3roof");
      message.channel.send(`**Status You ${argresult} **`)
}
});

client.login(process.env.BOT_TOKEN);// By Mixwell
