"use strict";

function getUniqueElement(array) {
    return [...new Set(array)];
}

const results = [
    "2:1", "2:1", "1:1", "0:1", "7:1"
];

console.log(results); // array with all items
console.log(getUniqueElement(results)); // array with unique items
