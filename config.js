const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHAHID-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkF1dTA2dVp3YWxnWWZOSGova1dsK3J6K2xTMi8wUnNjUVFzcmVFSTdtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXF6RjFoRHcydmJTZlBQdEtLT1VDNk15M2lLTDVZKzlQZmpWUUxsODdCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnS25lWUdYQUxFSG10SjZTS2RsRjY5dVdOMzRDVWU5M0dqYngrdkVQbm5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMHIzZ1lHa2M3dnVsVktSZ0owcklCbFNJUm9HejlpZGZGK3ByOVR4OG5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOVzMxNHhoN1pWM2FwQ24xZ3dqWFBLZ1NsOHF2VlV4Qkd6Znk2clI2RUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGRVNFOGtsSGxTamNQeWNMVTNWd1pja3F2NjRBQWVmL0FrMkVQYTFYQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUI2S2Zla3RmWmEyaS9DdnQvTm81ZmRqdE1EQlZhV1FZbzQrS3NCV1Yzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnAyclNTc29LVmJKeUNtY1ZEZWp4QVV5elh5VTFyVVhYblF1TVVLM2lCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVvUmVVN1BIOWJUd2FrOGFVL29RUVdaZU9lTkpJVFdrVXRVVDcwaFZlWXlDUFJDV211eWJTQTBTbmhieVZ6TTY2TS91WDRxRWNWLy9BNHJEZUIvbUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJldzRCTDVLdVY3cVU2M2RIZXp1Z0M1RkxpSGQvbDR0a2pHVnUwRjdyaEEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyMzcwNjI5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QTUzMzQ3MzUyRTc0OEFGNEM5OEJFMkE0MDgxRTc1MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NjkwMzg3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MjM3MDYyOTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjg4REREMTY3NjQ2NjQwNjU0NDExRUY3Mjc1REM1QUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjY5MDM4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOEo0RDk1N0YiLCJtZSI6eyJpZCI6IjkyMzQyMzcwNjI5MTozOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwNTYxNzg4NTExODY3ODozOUBsaWQiLCJuYW1lIjoi44CG4a2E8J2Qksmm8J2bgs2lyabJqsyCyZcg8J2QismqzaPGns2r1oHij5zwn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNblRrTEFHRU0zdjA4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0VEQ4UlNQMlR0ZTE3d09hTW5yb2pncmluNUpDaUZqL2Z5YzBYVXBJNFZvPSIsImFjY291bnRTaWduYXR1cmUiOiJXUy9VRk9UYUJMSEdsOGp1bGhib0l4d0pyT0xVd0ZFTkkxelhISHRoTzBIV0szMGljWUtZTG1ERmU2SzZNM0pZSFJFc1RuV044SG0rbnhHSEhyNmpCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYkRZQXFRY0dES2lBV2JmRFNFZ1ZWNk9NVXN1N0h2QmtKYVZHMldNc1p2Q3lwN0ZuS0RsUzYrVjNrOG9TN0daOE5ubG1ycEVwdG0wdFZWUGFuUENLRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MjM3MDYyOTE6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlV3L0VVajlrN1h0ZThEbWpKNjZJNEs0cCtTUW9oWS8zOG5ORjFLU09GYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NjkwMzg0LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxMaCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SHAHID KING-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/sxa61f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHAHID KING-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHAHID KING-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923423706291",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SHAHID KING*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sʜᴀʜɪᴅ ᴋɪɴɢ-ᴍᴅ 👑 ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sxa61f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> name to suna hoga Shahid king  🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923423706291",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
