const prime = require("./function-prime-numbers")

function prime_numbers(min) {
  return function (max) {
    return prime.primeNumbers(min, max)
  }
}

console.log(prime_numbers(1)(10));

// same as:
/*
let prime_number_max = prime_numbers(1);
console.log(prime_number_max(10));
 */