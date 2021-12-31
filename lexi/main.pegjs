{
require("./types.js")();
require("./utilities.js")();
}

start
  = qfunc_assign
  / assignment
  / additive

qfunc_assign
  = target:identifier "(x)" _"="_ expr:additive { return [new FuncValue(["x"], expr), new AssignmentMark(target)]; }

assignment
  = target:identifier _"="_ value:additive { return value.concat([new AssignmentMark(target)]); }

additive
  = left:multiplicative _"+"_ right:additive { return left.concat(right).concat([new BinOperatorMark("+")]); }
  / left:multiplicative _"-"_ right:additive { return left.concat(right).concat([new BinOperatorMark("-")]); }
  / multiplicative

multiplicative
  = left:primary _"*"_ right:multiplicative { return left.concat(right).concat([new BinOperatorMark("*")]); }
  / left:primary _"/"_ right:multiplicative { return left.concat(right).concat([new BinOperatorMark("/")]);  }
  / primary

call_function
  = name:identifier "(" arg:arg_list? ")" { return arg.flat().concat([new CallFuncMark(name, arg.length)]); }

arg_list
  = arg1:(primary ",")* arg2:primary { return arg1.map(v => v[0] /* remove "," */).concat(arg2) }

primary
  = integer
  / call_function
  / name:identifier { return [new VariableMark(name)]; }
  / _"("_ additive:additive _")"_ { return additive; }

identifier
  = name:([a-zA-Z_][a-zA-Z_0-9]*) { return [name.flat().join("")]; }

integer
  = sign:"-"? "0x" digits:[0-9a-f]+ { return [lexNumber(sign, digits.join(""), 16)]; }
  / sign:"-"? digits:[0-9]+ { return [lexNumber(sign, digits.join(""), 10)]; } 

_
  = [\r\n\t ]*