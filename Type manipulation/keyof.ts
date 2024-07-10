// ==========================================================================
// keyof operator returns the union of (literal types | string | number) for
// object type
// ==========================================================================

type Person = {
    name: string
    age: number
}

type keysOfPerson = keyof Person

let keys: keysOfPerson
// keys's type are name | age
keys = "name"
keys = "age"

// It will be error because address doesn't exist in keys's type
// keys = "address"

// ========================================================================
// If index signature is string then string | number is allowed
// Because JavaScript converts number type keys to string number type key
// is acceptable
// ========================================================================
type Student = {
    [index: string]: string
}

type keysOfStudent = keyof Student

let keys2: keysOfStudent

keys2 = "name"
keys2 = 1

// It will be error because keys2 can be only string | number
// boolean is not allowed
// keys2 = true

// ========================================================================
// If index signature is number then only number type key is acceptable
// ========================================================================
type Teacher = {
    [index: number]: string
}

type keysOfTeacher = keyof Teacher

let keys3: keysOfTeacher

keys3 = 1

// It will be error because keys2 can be only  number
// string is not allowed
// keys3 = "string"