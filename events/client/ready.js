module.exports = async (bot) => {
    const { activity } = require("../../config.json")
    const os = require("os-utils")
    os.cpuUsage(function(v){
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    let memory = `Approximate memory usage: ${Math.round(used * 100) / 100} MB`
    let Desc = `CPU Usage : ${Math.round(v * 100) / 100}%\n${memory}`
    console.log('\x1b[33m%s', "---------------------------------------------------------------------")
    console.log('\x1b[33m%s', "🌐 Status and uptime! 🌐")
    console.log('\x1b[33m%s', "---------------------------------------------------------------------")
    console.log(`\x1b[33m%s`,`Logged in as ${bot.user.username}. Ready on ${bot.guilds.cache.size} servers, for a total of ${bot.users.cache.size} users ✅!`);
    console.log(`\x1b[33m%s`,`Seeing runtime✅!`)
    console.log(`\x1b[33m%s`, Desc)
    console.log('\x1b[33m%s', "---------------------------------------------------------------------")
    })
    setInterval(function(){ 
       bot.user.setActivity(activity);
}, 3000);
};
