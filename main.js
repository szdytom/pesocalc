const lexi = require('./lexi/main.js')

const test = "A(x)=2 * (3 + 4) + 0xa5 + x4/ 2 - add(2,3,4)";

console.log(JSON.stringify(lexi.parse(test)));