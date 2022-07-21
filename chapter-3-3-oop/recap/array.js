let myData = [
    {
        "first_name": "Ari",
        "umur": 22
    },
    {
        "first_name": "Anung",
        "umur": 25
    }
]

for(let i = 0; i < myData.length;i++){
    console.log(myData[i].first_name)
}

// get average umur
let sum = 0
for (let i = 0; i < myData.length; i++) {
    sum = sum + myData[i].umur
}

console.log(sum/myData.length)