"use strict";

var a, b, c, d;

a = [1, 2];

b = [4, 5];
c = [8, 9, 10];
d = 11;


let array = [0, ...a, 3, ...b, 6, 7, ...c, d];

console.log(array)
