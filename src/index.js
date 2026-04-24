const fs = require("fs");
const { runButt } = require("./runner");

const file = process.argv[2];

if (!file) {
  console.log("💀 Provide a .butt file");
  process.exit(1);
}

const code = fs.readFileSync(file, "utf-8");

console.log(" Running Butt Program...\n");
runButt(code);