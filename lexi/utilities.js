module.exports = function() {

function lexNumber(sign, a, x) {
	let flag = 1;
    if (sign == "-") {
    	flag = -1;
    }
    return flag * parseInt(a, x);
}
this.lexNumber = lexNumber;

};