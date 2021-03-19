"use script";

function multiple(a, b) {
    return a * b;
}

setTimeout(function () {
    console.log(multiple(5, 10));
}, 1000);