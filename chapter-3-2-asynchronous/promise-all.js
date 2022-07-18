const pw_manager = require("./check_password")

function isEmailCorrect(password) {
    return new Promise((resolve, reject) => {
        if (password === "ri@gmail.com") {
            resolve("password email")
        }
        reject("wrong email")
    })
}

function printAll(x) {
    console.log(x)
}

printAll("test")

Promise.all([
    pw_manager.isPasswordCorrect("123456"),
    isEmailCorrect("ri@gmail.com")
    ]
).then(printAll)