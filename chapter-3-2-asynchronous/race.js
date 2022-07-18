function kuadratSync(x) {
    setTimeout(() => x * x, 1000)
}

console.log(kuadratSync(2))

// callback

function callback_lagi(x, callback) {
    callback(x)
}

function kuadratAsync(x, callback, callback2) {
    setTimeout(() => callback(x, callback2), 1000)
}
kuadratAsync(2, callback_lagi, console.log)