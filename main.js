const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const client = new Discord.Client();

const prefix = '!';
client.commands = new Discord.Collection();
client.queues = new Map();

const commandFiles = fs
    .readdirSync(path.join(__dirname, "/commands"))
    .filter(file => file.endsWith('.js'));


for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('O Bot está online!')
});

client.on('message', message => {
    //Se não começar com um ! e se for o BOT a enviar, então restringi-se o BOT de responder
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/); //Permite que hajam dois argumentos, por exemplo: !check wiki
    const command = args.shift().toLowerCase();
    client.commands.get(command).execute(message, args, client)

});

  
client.login(process.env.token);
