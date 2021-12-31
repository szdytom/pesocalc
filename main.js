const lexi = require("./lexi/main.js");
const run = require("./run/main.js");

let env = new run.Environment();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function run_line(expr) {
    let at = lexi.parse(expr);
    return run.run_expr(env, at);
}

function loop() {
    readline.question(`peso> `, expr => {
        console.log(run_line(expr));
        loop();
    });
}

loop();