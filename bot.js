const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Nzg1MDcwNTU1NTE3NjgxNzA1.X8yf7g.YELN3gFmAejqjQWHR3K4ozcJNNs);//BOT_TOKEN is the Client Secret