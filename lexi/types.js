(function() {

function ArithmeticsNode(o, a) {
    this.operator = o;
    this.operated = a;
}
ArithmeticsNode.prototype.type = "arithmetics";
this.ArithmeticsNode = ArithmeticsNode;

function VariableNode(name) {
    this.name = name;
}
VariableNode.prototype.type = "variable";
this.VariableNode = VariableNode;

function CallFuncNode(n, a) {
    this.name = n;
    this.arg = a;
}
CallFuncNode.prototype.type = "call-function";
this.CallFuncNode = CallFuncNode;

function AssignmentNode(target, source) {
    this.target = target;
    this.value = source;
}
AssignmentNode.prototype.type = "assignment";
this.AssignmentNode = AssignmentNode;

function FuncValueNode(a, c) {
    this.arg_name = a;
    this.content = c;
}
FuncValueNode.prototype.type = "function-value";
this.FuncValueNode = FuncValueNode;

})();