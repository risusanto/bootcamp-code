"use strict";

// check if number is prime
function isPrime(number){
    if (number <= 1)
        return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// return array of prime numbers beetween min and max
function primeNumbers(min, max){
    let primeNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

// let number = process.env.NUMBER
// console.log(`${number} is prime: ${isPrime(number)}, so are all numbers between 2 and 10: `, primeNumbers(2, 10));

module.exports = {
    isPrime: isPrime,
    primeNumbers: primeNumbers
}