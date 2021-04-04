"use strict";

let first, second, third;

let array = [1,2,3,4,5,6,7];

[first, second, ...third] = array;

console.log(first)
console.log(second)
console.log(third)