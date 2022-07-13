"use strict";

// bubble sort
function buble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// quick sort
function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
        left.push(arr[i]);
        } else {
        right.push(arr[i]);
        }
    }
    return quick_sort(left).concat(pivot, quick_sort(right));
}

// get max number in array
function max_number(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// get min number in array
function min_number(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// generate sequence of number divisible by n between min and max
function divisible_by_n(min, max, n) {
    let divisible_array = [];
    for (let i = min; i <= max; i++) {
        if (i % n === 0) {
            divisible_array.push(i);
        }
    }
    return divisible_array;
}

// console.log(buble_sort([1, 3, 2, 5, 4]));
// console.log(quick_sort([1, 3, 2, 5, 4]));

// // max number
// console.log(max_number([1, 3, 2, 5, 4]));
// // min number
// console.log(min_number([1, 3, 2, 5, 4]));

module.exports = {
    buble_sort,
    quick_sort,
    max_number,
    min_number
}