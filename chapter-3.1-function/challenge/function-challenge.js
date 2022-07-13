// perform quick sort of an array
function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quick_sort(left), pivot, ...quick_sort(right)];
}

// fibonacci sequence
function fibonacci(n) {
if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// generate fibonacci sequence beetwen min and max
function fibonacci_sequence(min, max) {
    let fibonacci_array = [];
    for (let i = min; i <= max; i++) {
        fibonacci_array.push(fibonacci(i));
    }
    return fibonacci_array;
}


// sum of natural numbers recursivelly
function sum_of_natural_numbers(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum_of_natural_numbers(n - 1);
}

console.log(quick_sort([3, 6, 8, 2, 1, 9, 5, 7, 4]));

console.log(fibonacci(10));

console.log(sum_of_natural_numbers(4));