"use strict";

let a = [1, 2];
let b = [4, 5];
let c = [8, 9, 10];
let d = 11;

let array = [0, ...a, 3, ...b, 6, 7, ...c, d];
console.log(array)

let newArray = a.concat([0], [3], b, [6,7], c, [d]);
console.log(newArray)
