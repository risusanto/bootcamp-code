// recap 1
let arr = [4, 3, 5, 2, 1];

let num = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num) {
        num = arr[i];
    }
}

console.log(num);