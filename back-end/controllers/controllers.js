const fs = require("fs");
const path = require("path");

const expt = {};

const cur = path.basename(__filename);
let curFound = false;

fs.readdirSync(__dirname).forEach(file => {
    if(!curFound && file === cur) curFound = true;
    else if(file.endsWith(".js")) expt[file.split(".")[0]] = require(`./${file}`);  
});

module.exports = expt;