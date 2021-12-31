function sin(x) {
	return Math.sin(x);
}

function cos(x) {
	return Math.cos(x);
}

function tan(x) {
	return Math.tan(x);
}

function arccos(x) {
	return Math.acos(x);
}

function arcsin(x) {
	return Math.asin(x);
}

function arctan(x) {
	return Math.atan(x);
}

module.exports = function(l) {
	l.sin = sin;
	l.cos = cos;
	l.tan = tan;
	l.asin = arcsin;
	l.arcsin = arcsin;
	l.atan = arctan;
	l.arctan = arctan;
	l.acos = arccos;
	l.arccos = arccos;
};
