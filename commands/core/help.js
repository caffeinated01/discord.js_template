const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: 'help',
    aliases: [],
    category: 'core',
    utilisation: `help`,
    desc: "Fetches list of commands!",
async execute(bot, messageCreate, args) {
    const embed = new EmbedBuilder();
    embed.setColor('BLACK');
    const commands = bot.commands.filter(x => x.showHelp !== false);
    embed.setDescription(commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(', '));
    embed.setTimestamp();
    messageCreate.channel.send({ embeds: [embed] });
}}
