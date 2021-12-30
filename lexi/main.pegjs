{

require("./types.js");

}

start
  = qfunc_assign
  / assignment
  / additive

qfunc_assign
  = target:identifier "(x)" _"="_ expr:additive { return new AssignmentNode(target, new FuncValueNode(["x"], expr)); }

assignment
  = target:identifier _"="_ value:additive { return new AssignmentNode(target, value); }

additive
  = left:multiplicative _"+"_ right:additive { return new ArithmeticsNode("+", [left, right]) }
  / left:multiplicative _"-"_ right:additive { return new ArithmeticsNode("-", [left, right]) }
  / multiplicative

multiplicative
  = left:primary _"*"_ right:multiplicative { return new ArithmeticsNode("*", [left, right]) }
  / left:primary _"/"_ right:multiplicative { return new ArithmeticsNode("/", [left, right]) }
  / primary

call_function
  = name:identifier "(" arg:arg_list? ")" { return new CallFuncNode(name, arg); }

arg_list
  = arg1:(primary ",")*arg2:primary { return arg1.map(v => v[0] /* remove "," */).concat(arg2) }

primary
  = integer
  / call_function
  / name:identifier { return new VariableNode(name); }
  / _"("_ additive:additive _")"_ { return additive; }

identifier
  = name:([a-zA-Z_][a-zA-Z_0-9]*) { return name.flat().join(""); }

integer
  = "0x" digits:[0-9a-f]+ { return parseInt(digits.join(""), 16); }
  / digits:[0-9]+ { return parseInt(digits.join(""), 10); } 
_
  = [\r\n\t ]*