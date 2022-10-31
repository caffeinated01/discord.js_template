const fs = require('fs')
const { Client, GatewayIntentBits, Collection} = require('discord.js');
const bot = new Client({
  intents: [
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildBans,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
  	GatewayIntentBits.GuildWebhooks,
  	GatewayIntentBits.DirectMessageReactions,
  	GatewayIntentBits.DirectMessageTyping,
  	GatewayIntentBits.GuildEmojisAndStickers,
	GatewayIntentBits.GuildIntegrations,
  	GatewayIntentBits.GuildInvites,
  	GatewayIntentBits.GuildMembers,
  	GatewayIntentBits.GuildMessageReactions,
  	GatewayIntentBits.GuildMessageTyping,
  	GatewayIntentBits.GuildPresences,
  	GatewayIntentBits.GuildScheduledEvents,
  	GatewayIntentBits.GuildVoiceStates
  ]
});
bot.commands = new Collection();
function commander(){
console.log(`\x1b[32m%s`, "---------------------------------------------------------------------\n⭕ Commands ⭕\n---------------------------------------------------------------------")
fs.readdirSync('./commands').forEach(dirs => {
const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`\x1b[32m%s`, `Loading command ${file} from ${dirs} ✅!`);
        bot.commands.set(command.name.toLowerCase(), command);
    };
});
console.log(`\x1b[32m%s`, "---------------------------------------------------------------------")
}

function eventer() {
console.log(`\x1b[35m%s`, "---------------------------------------------------------------------\n⭕ Events ⭕\n---------------------------------------------------------------------")
fs.readdirSync('./events').forEach(dirs => {
const events = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
	for (const file of events) {
    	console.log(`\x1b[35m%s`,`Loading discord.js event ${file} ✅!`);
    	const event = require(`./events/${dirs}/${file}`);
    	bot.on(file.split(".")[0], event.bind(null, bot));
	};
})
console.log(`\x1b[35m%s`, "---------------------------------------------------------------------")
}

module.exports = {eventer: eventer, commander: commander, bot: bot}
