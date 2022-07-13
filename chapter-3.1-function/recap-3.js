let status = true;
let number = 2;


if (number <= 1)
    status = false;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        status = false;
    }
}

console.log(status);