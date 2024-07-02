// What is tuple? tuple is an array whose element types are known at each position
type Array1 = [string, boolean, string?]

let array: Array1 = ["Moin", true]

// but if we add a new value to tuple it's value is not known from the tuple definition
// We can't look in the tuple and say that newly added element's type is this/that
array.push(true)

console.log(array);

// readonly array: now-writable
type Array2 = readonly [string, number]

let array2: Array2 = ["Moin", 18]

// Can't add element in readonly tuple
array2.push(true)

// array definition with const is equivalent to tuple type
let array3 = [1, 2, 3] as const

// // Can't add element
array3.push(4)