const prime = require("./function-prime-numbers");
const sorting = require("./function-sorting");

function function_with_callback(min, max, callback) {
    arr = prime.primeNumbers(min, max);
    callback(arr);
}

function_with_callback(2, 10, function(arr){
    console.log("arrays: ", arr);
    console.log("max number: ", sorting.max_number(arr));
    console.log("min number: ", sorting.min_number(arr));
})