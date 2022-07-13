// calculate square root of a number
function square_root(num) {
    return num * num;
}

// calculate circle area
function circle_area(radius) {
    let radius2 = square_root(radius);
    return 3.14 * radius2;
}

console.log(square_root(4));

console.log(circle_area(7));