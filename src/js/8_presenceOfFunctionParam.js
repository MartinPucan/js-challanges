"use script";

function missingArg() {
    throw new Error("missing arg in square function");
}

function square(a) {
    return(
        typeof a === "number"
        ? console.log(a*a)
        : missingArg()
    )
}

square(10)
square(NaN)
