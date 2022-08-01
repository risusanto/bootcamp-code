const xor_c = require("xor-crypt")

function xor(str) {
    let cipher = xor_c(str)
    return cipher
}

module.exports = xor