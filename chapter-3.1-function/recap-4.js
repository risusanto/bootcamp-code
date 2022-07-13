let n = 5
let min = 0
let max = 20

let arr = [];
for (let i = min; i <= max; i++) {
    if (i % n === 0) {
        arr.push(i);
    }
}

console.log(arr);