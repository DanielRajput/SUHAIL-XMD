const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="kingb2kofficial@gmail.com"
global.location="New Delhi,INDIA."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/DanielRajput/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Bkp0IXmbNhF2h4jZbH5I34";
global.website=process.env.GURL || "https://chat.whatsapp.com/Bkp0IXmbNhF2h4jZbH5I34" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/wNsPGxL" || "https://ibb.co/wNsPGxL" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© KINGBOTS" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919654970780";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919654970780";"919654934474"




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://ibb.co/wNsPGxL" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_01_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVROellrOTFiUUJDZXNCajdhVG15ZVBHNytZeklqb0g0NExqSWlyano3VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRDR2d3BlSVFRcDZfcUY1TndHYkFrQVwiLFxuICBcInBob25lSWRcIjogXCJjZTBiZmUwOC0wN2VkLTRkMzEtOGM5Ni0xOWU4Y2JlNmE1NDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMjMxLFxuICAgICAgMTYxLFxuICAgICAgMTU2LFxuICAgICAgMTc1LFxuICAgICAgMyxcbiAgICAgIDEzNyxcbiAgICAgIDE3OCxcbiAgICAgIDIyNCxcbiAgICAgIDE4NSxcbiAgICAgIDY2LFxuICAgICAgMTgyLFxuICAgICAgMTU3LFxuICAgICAgNzAsXG4gICAgICA0MCxcbiAgICAgIDE4NixcbiAgICAgIDE5NSxcbiAgICAgIDI1MixcbiAgICAgIDI0NCxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyMzEsXG4gICAgICAxODUsXG4gICAgICAzOSxcbiAgICAgIDE4NixcbiAgICAgIDIwOCxcbiAgICAgIDEzLFxuICAgICAgMTg2LFxuICAgICAgOTUsXG4gICAgICAyNDUsXG4gICAgICA1NyxcbiAgICAgIDI0NCxcbiAgICAgIDY2LFxuICAgICAgMTg3LFxuICAgICAgMTg5LFxuICAgICAgMjUxLFxuICAgICAgMTQ0LFxuICAgICAgNDAsXG4gICAgICAxNjksXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUE0QTlLTllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTY1NDkzNDQ3NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MzQ1NjQxNjExMzk5OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWIyK01ZRkVQZUk4N2tHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYY0tVNmVlUkVQdjRieTlSV1MrVTdqakdxbGRwTkRMR2NXczNRS1JscjBjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJWczJwcDBMSWVQMXltUWxvUG9RNEVRQmpUU2FvZndkOWpSSVJ4R3pUamtEOGEwendIQzNuUTFRa0NicmV6THZQckkrdTFwYzFkbWN1UkN4anFUdUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJ0c2FpSDdwaGwvWlBoTDFOQTE2ajYvT3JlNnc2R1ZhUGlZMGJ5ZnFwWFFXOTZzMEdHK2ViQzBkVmh0SVFuOUY5a0FTOEVEMWpZNVhMUGJIZUVxa2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTY1NDkzNDQ3NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwMzU3MDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "KING B2K BOTS" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "KING B2K ✓",
  botname : process.env.BOT_NAME  || "KING B2K ✓",
  ownername:process.env.OWNER_NAME|| "KING B2K ✓",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
