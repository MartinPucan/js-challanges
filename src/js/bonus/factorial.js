"use strict";

function factorial(number) {
    console.log(number);

    return number === 0 ? 1 : factorial(number - 1) * number;
}

console.log(factorial(3));