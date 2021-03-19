"use strict";

function isNumber(value) {
    return (
        typeof value === "number"
            ? "That's a number"
            : "That's not a number"
    )
}

console.log(isNumber(10));
console.log(isNumber("Hey there"));
console.log(isNumber(true));