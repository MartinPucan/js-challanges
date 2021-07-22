"use strict";

function sum(...args) {
    let total;
    total = args.reduce((acc, elem) => acc + elem);
    console.log(total);
}

sum(1, 3);
sum(10, 20, 5);
sum(2, 5, 80, 1, 10, 12);