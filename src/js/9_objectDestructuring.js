"use script";

const obj = {
    x: 5,
    y: 20,
    z: 3
}

function mult(object) {
    const {x, y, z} = object;
    console.log(object)
}


console.log(obj)
console.log(mult(obj))

// console.log(mult(obj));