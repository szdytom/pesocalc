const lexi = require("./lexi/main.js");
const run = require("./run/main.js");

const tests = ["f(x)=x*x+x", "A=f(5)/2", "A-1"];
let env = new run.Environment();

for (let test of tests) {
	console.log(run.run_expr(env, lexi.parse(test)));
}