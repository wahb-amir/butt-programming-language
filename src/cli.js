#!/usr/bin/env node

const fs = require("fs");
const { runButt } = require("./runner");

const file = process.argv[2];

if (!file) {
  console.log("💀 Usage: butt <file.butt>");
  process.exit(1);
}

console.log("Buttnetworks engine running :", file);

const code = fs.readFileSync(file, "utf-8");

runButt(code);