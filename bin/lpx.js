#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const child_process = require("child_process");

// remove arguments related to lpx call
const args = process.argv.slice(2);

// identify script to run
const script = args[0];

if (!script) {
    console.error("usage: lpx command");
    process.exit(1);// exit with error
}

// get node module bin path
const binPath = "node_modules" + path.sep + ".bin";

// find the .bin folder that contains the script to run
let workingDir = __dirname;
let found = false;
while (!found) {
    if (fs.existsSync(path.resolve(workingDir, binPath, script))) {
        found = true;
        break;
    }
    const parentDir = path.resolve(workingDir, "..");
    if (parentDir === workingDir) {
        // root folder reached
        break;
    }
    workingDir = parentDir;
}

if (!found) {
    console.error(script + " was not found in " + binPath + " in current working directory and its ancestors");
    process.exit(2);// exit with error
}

// append bin path and command from process arguments
const cmd = path.resolve(workingDir, binPath) + path.sep + args.join(" ");

// execute command
child_process.execSync(cmd, { stdio: "inherit" });
