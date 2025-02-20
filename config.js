const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/74NG4nf.jpeg",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    ALIVE_MSG: process.env.ALIVE_MSG || "Hey there, I'm alive",
    OWNER_NAME: process.env.OWNER_NAME || "eleven00¹",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2348084644182",
    MODE: process.env.MODE || "public",
    PREFIX: process.env.PREFIX || ".",
    SESSION_ID: process.env.SESSION_ID || "U5JQRKyB#A8S7kY546gzSV18r9MKN07Zzz-7DtgE698zhJUYE8lE",
};
