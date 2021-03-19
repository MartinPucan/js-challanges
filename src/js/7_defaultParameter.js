"use strict";

function multiplyBy(a, multi) {
    multi = multi ?? 2;
    console.log(a * multi)
}


multiplyBy(2, 0);
multiplyBy(2, undefined);
multiplyBy(2, 10);