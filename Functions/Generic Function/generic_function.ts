// Generic function: A function where the parameter types correspond to each other
// or parameter and return type correspond to each other

// We said parameter is array of type T and return type is T
// If the array is number type and array is empty then function will return undefined !!
// But it should have return the parameter type or throw error
// This code is valid

// Why this  a generic function ?
// Here function parameter and output types are same
// function getFirstElementOfArray<T>(params:T[]): T {
//     return params[0]
// }

// This code is more explicit
function getFirstElementOfArray<T>(params:T[]): T | undefined {
    return params[0]
}

let firstName = getFirstElementOfArray<string>(["Raffian", "Moin"])
console.log(firstName);

// Notice that we said the type of the parameter is number
// If any element of the array was any-type other than number
// typescript would throw error
// But here we said that parameter is number type and we array is empty
// So our function will return undefined
let fistNumber = getFirstElementOfArray<number>([])

console.log(fistNumber);
