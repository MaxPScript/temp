const log = console.log;
const path = require("path");

const joined = path.join("./", "path.js");
const base = path.basename(joined);
const abs = path.resolve(__dirname, "path.js");

log(joined);
log(base);
log(joined === base);
log(abs);
