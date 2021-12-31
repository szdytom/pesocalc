module.exports = function() {

function CallFuncMark(n, a) {
    this.func_name = n;
    this.arg_count = a;
}
CallFuncMark.prototype.type = "call-function";
this.CallFuncMark = CallFuncMark;

function VariableMark(name) {
    this.name = name;
}
VariableMark.prototype.type = "variable";
this.VariableMark = VariableMark;

function BinOperatorMark(s) {
    this.symbol = s;
}
BinOperatorMark.prototype.type = "bin-operator";
this.BinOperatorMark = BinOperatorMark;

function AssignmentMark(target) {
    this.target_name = target;
}
AssignmentMark.prototype.type = "assignment";
this.AssignmentMark = AssignmentMark;

function FuncValue(a, c) {
    this.arg_name = a;
    this.content = c;
}
FuncValue.prototype.type = "function-value";
this.FuncValue = FuncValue;

};