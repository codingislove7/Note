const chalk = require("chalk");
const getNotes = require("./notes.js");
const msg = getNotes();
const greenMsg = chalk.green.bold.inverse(msg);
console.log(greenMsg);
