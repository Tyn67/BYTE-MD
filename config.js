
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "9160376551";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUkrMEthbTN6OWZwNmFKK0tCL2JhYzVYRm9WdG1XT2NnSkMwZ1l5M0htTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1JsQzBZbTlLWkJBRGJDUERhSFRvb0d0Q2t6dWcwVys3VmVrTUpTV1FtST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SVMzcEpBZUFQMGdFd0xzdkVRaDhHV2RNb3BaVm9XZHQrdmRZdS9VZG5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5LzhOT2N5YXFtUWV4Yld1b1ptL0ZQRzN1clNhOHZRV2NOeWtkeFdZQUhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPaVFnQW5yTkZMZHhlamZhV2NqNU5zdkVKVzRpZUF6S3c0TWg1Vmw5Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktlZ3ZVVWduVXlOOThldDh6VVNJQjhFYWpOM0VBTStlSjh4RHFINVcxVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU0vcDR1QS9MSEhZNmtNbmphTjJOVzNCYmFlZndtYWxadWNJdHFTbi9ubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2pucWJFMkFTY2I4THZCUUh5S2sxcnJVVWg0SnByeC9WdGZHa25HcjJHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV0Q24xN1ZEWHN6MURiY0F4Sm0wV2Y3MVJycWt6VU42VHZpSm1iYkFUaHBoazhwQnBkUVdiRkJMZjZqb01vcnRpeHM4VmpzMVcvdGI3VUE0eW9nQURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJBdUxjSEh5cDUyV1h5UGp6aHprMmVLWjVJbDlOb3pYT0t3cjBxV2UzK2xJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjg2MjI5OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUJEQUNCMTk1M0ZEMkY5NTNCRTA5NjkwQUIwN0JDQUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDk5MjgzOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWlp5a2dCYXNSQVdkNTBuZHhOYWZTZyIsInBob25lSWQiOiIxMWVlZDk3Ni0yOTQyLTRiMDEtYjc2OC1hYmU0YWExNzg2NWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGVCeTNVeUp2QzRUcUZOdzMzb0YvSHkwZ05JPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDMTVuVGFRMnpRTS9xZHZIc3hTWFY0REw4Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0Nlk2RDREViIsIm1lIjp7ImlkIjoiMjM0ODEyODYyMjk5NjoxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUeWVubmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xaHZsSVF0NGpSdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImE5ZTVaeHpKVUQ1cUxCak1YQ0hXaW1lbE14M2Z5MFJzZ2dYL3o1U0IzUUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlBVHBlNlRvYWZocVZXYzhpT0cvaTh2a0tKTHpMbG5jM0xteHhtVksyQU5EUjkyZTdmSTRlVW01dC9jZUEveFlzRjBFdnl5NEU4ZTlxZlNyWEJ1eEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlcDVKQ29VQVBhblo3L29NZFFRUm9sTitsRjYzN3VYNmZCTVhZVTJOUExDSnhUb2sremlRNnBtL2lkTnRERHJJRWpObGhkWTB0eGJPYjBUazVqTldDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjg2MjI5OTY6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3ZYdVdjY3lWQSthaXdZekZ3aDFvcG5wVE1kMzh0RWJJSUYvOCtVZ2QwQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk5MjgzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGN2MifQ==" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
