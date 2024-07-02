// Array is another kind of generic object in TypeScript
// It's syntax is like generics
type arrayType<T> = Array<T>

let numberArray: arrayType<number> = [1, 2, 3]
let booleanArray: arrayType<boolean> = [true, false, true]

numberArray.push(4)

console.log(numberArray);

// TypeScript has ReadonlyArray array where we can't modify the array once it is assigned
type readOnlyArray<T> = ReadonlyArray<T>
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3]

// Can't add an element
readOnlyArray.push(4)
// Can't modify the existing element
readOnlyArray[1] = 2