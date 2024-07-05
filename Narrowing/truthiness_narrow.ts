// if (someValue) in javascript is a truthiness check

// it will check if someValue is truthy then if condition block will be executed
// else it is falsy then it will not be executed

// JavaScript falsy values are:
// null
// undefined
// ""
// 0
// NaN
// 0n (the bigint version of zero)

// So we can narrow down types by truthiness check

function truthinessCheck(param: string | number[] | null) {
    // it will exclude empty("") string and null because empty string and null is falsy
    if (param) {
        if (param === "string") {
            console.log("It is a string and string is not empty");
        } else {
            // it will surely be array
            console.log(param.length);
        }
    }
}

// pass string
truthinessCheck("string");

// pass array
truthinessCheck([]);