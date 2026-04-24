#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const arg = process.argv[3];

const INSTALL_DIR = path.join(process.cwd(), "butt_modules");

if (!fs.existsSync(INSTALL_DIR)) {
  fs.mkdirSync(INSTALL_DIR);
}

// 🍑 INSTALL COMMAND
if (command === "install") {
  if (!arg) {
    console.log("💀 Usage: butt install <package>");
    process.exit(1);
  }

  const pkgPath = path.join(process.cwd(), "packages", arg);

  if (!fs.existsSync(pkgPath)) {
    console.log(`💀 Package '${arg}' not found in local registry`);
    process.exit(1);
  }

  const dest = path.join(INSTALL_DIR, arg);

  fs.cpSync(pkgPath, dest, { recursive: true });

  console.log(`🍑 Installed butt package: ${arg}`);
  process.exit(0);
}