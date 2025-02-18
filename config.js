const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "your session id",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/74NG4nf.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "Hey there, I'm alive",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "your number",
    MODE: process.env.MODE || "private",
    PREFIX: process.env.PREFIX || ".",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
};
