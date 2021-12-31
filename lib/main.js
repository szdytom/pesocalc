var builtin = {};

require("./trigonometric.js")(builtin);
require("./constants.js")(builtin);

module.exports = builtin;