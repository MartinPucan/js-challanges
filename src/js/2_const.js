"use strict";

let arr = [1, 2];

/* can do this because array is a reference type */
arr.push(3);

console.log(arr);

/* TypeError - cannot reassign const variable */
arr = [1,2,3,4];

console.log(arr)