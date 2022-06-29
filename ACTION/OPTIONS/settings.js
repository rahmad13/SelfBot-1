global.nomerOwner ="6283197563509"
global.nomerOwner2 = "6283197563509"
global.nomerOwner3 = "+62 831-9756-3509"
global.ownerName = "Rhmd メ"
global.botName = "SelfBot"
global.sessionName ="session" 
global.runWith = "Panel"
global.setmenu ="location"
global.docType = "docx"
global.Qoted = "mek"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.publik = true
global.Console = false
global.copyright = "© Dream" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Rhmd メ"
global.packName = "wa.me/6283197563509"
global.authorName = "Rhmd メ"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = false
global.autovn = false
global.chatBot = false
global.autorespon = false
global.gamewaktu = 60
global.waktu = 60000,
global.monayawal = 1000,
global.limitAwal = 15,
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}





const fs = require("fs");
const { color } = require("../STORAGE/ACC/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






