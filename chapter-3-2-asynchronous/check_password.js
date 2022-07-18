function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        if (password === "123456") {
            resolve("password correct")
        }
        reject("wrong password")
    })
}


async function checkPassword(password) {
    try {
        let data = await isPasswordCorrect(password)
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

async function kuadrat(x) {
    /*
    * return new Promise(resolve => {
    * resolve(x*x)
    * })
    * */

    return x * x
}

// checkPassword("123455")

console.log(kuadrat(4))

kuadrat(2).then(res => {
    console.log(res)
}).catch(res => {
    console.log(res)
})

module.exports = {
    isPasswordCorrect
}