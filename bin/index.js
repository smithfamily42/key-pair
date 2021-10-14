#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("> ", function(actionChoice) {
    rl.question("> ", function(keyChoice, valueChoice) {
        console.log(`${keyChoice} ${valueChoice}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\n BYE !");
    process.exit(0);
});