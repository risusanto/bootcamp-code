function is_password_valid(password) {
    return password.length >= 8 && !password.includes(' ');
}

console.log(is_password_valid("test16273"));