function my_function(x) {
    return x + 1;
}

// generate odd numbers between min and max
function odd_numbers(min, max) {
    let odd_array = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0) {
            odd_array.push(i);
        }
    }
    return odd_array;
}

console.log(odd_numbers(1, 10));