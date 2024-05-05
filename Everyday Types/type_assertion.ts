// Type Assertion
// Let's say we have a variable with union type
// and we want to use that variable in different places
// but we want to use specific type for that variable in a place
// then we use type assertion
// Keyword: as

type MyID = string | number

let myid: MyID = 'xyz' as string

console.log(myid);