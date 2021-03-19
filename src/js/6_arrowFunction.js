"use script";

// single statement in arrow function will be automatically returned
// we dont need curly braces when we have only one statement

const multiple = (a,b) =>  a * b;
setTimeout(() => console.log(multiple(5, 10)), 1000);