"use strict";

const getUniqueElement = array => {
    const uniqueElem = [...new Set(array)];

    return Array.from(uniqueElem);
}

const results = [
    "2:1", "2:1", "1:1", "0:1", "7:1"
];

console.log(typeof results); // array with all items
console.log(typeof getUniqueElement(results)); // array with unique items
console.log(Array.isArray(getUniqueElement(results))); // array with unique items
