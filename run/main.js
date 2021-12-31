const builtin = require("../lib/main.js");
require("../lexi/types.js")();

function Environment() {
	this.globals = {};
	this.stack = [];
}

Environment.prototype.get_var = function(name) {
	if (this.stack.length != 0) {
		let st_top = this.stack[this.stack.length - 1];
		if (st_top[name]) {
			return st_top[name];
		}
	}

	if (this.globals[name]) {
		return this.globals[name];
	}

	return builtin[name];
};

function run_function(env, f, args) {
	if (f.type != "function-value") {
		console.log("Not running a function!");
		return null;
	}

	let cur = {};
	env.stack.push(cur);
	for (let i = 0; i < args.length; i += 1) {
		let arg_name = f.arg_name[i];
		cur[arg_name] = args[i];
	}

	let res = run_expr(env, f.content);
	env.stack.pop();
	return res;
}

function run_expr(env, expr) {
	let expr_stack = [];
	for (let i = 0; i < expr.length; i += 1) {
		let cur = expr[i];
		if (cur.type == "bin-operator") {
			let b = expr_stack.pop();
			let a = expr_stack.pop();
			const flist = {
				"+": (a, b) => a + b,
				"-": (a, b) => a - b,
				"*": (a, b) => a * b,
				"/": (a, b) => a / b,
			};
			expr_stack.push(flist[cur.symbol](a, b));
		} else if (cur.type == "variable") {
			expr_stack.push(env.get_var(cur.name));
		} else if (cur.type == "call-function") {
			let args = Array(cur.arg_count);
			for (let i = cur.arg_count - 1; i >= 0; i -= 1) {
				args[i] = expr_stack.pop();
			}

			expr_stack.push(run_function(env, env.get_var(cur.func_name), args));
		} else if (cur.type == "assignment") {
			env.globals[cur.target_name] = expr_stack.pop();
		} else {
			expr_stack.push(cur);
		}
	}

	if (expr_stack.length > 0) {
		return expr_stack.pop();
	}
	return null;
}

module.exports = {
	Environment: Environment,
	run_expr: run_expr,
};