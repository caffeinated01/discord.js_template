const env = require('dotenv').config()
const { botid, permval } = require("./config.json")
const start = require("./bot.js")
console.log("Initiating functions!")
start.commander()
start.eventer()
start.bot.login(process.env.token);
console.log(`https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=${permval}`)
process.traceDeprecation = true;
