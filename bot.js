var ServerID = "494284550789136384"; //اي دي السيرفر
var ChannelID = "494948905700556800";// اي دي الروم
const prefix = '%'
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Alphacodes','\n','ProBot credits miner is ready!'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 


    });
}

var timer = setTimeout(timerFunc, 1000);



client.login('NDgyMDE0NTY5Mzg1MDMzNzI4.Do6HwA.OSN3N4EMb9pJYKqasv6MtYHqf1o');
