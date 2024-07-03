// as const to a string, number make them literal types
// as const to array and obj make their elements readonly
let string_literal_type = "Moin" as const

let array_literal_type = [1, 2, 3, 4] as const

let obj_literal_type = {
    age: 18
} as const

// Error
// Can only assign string_literal_type="Moin"
// string_literal_type = "Raffian"

// Error
// array is readonly, so can't add a new element
// array_literal_type.push(2)

// Error
// object is readonly, so can't add a new element
// obj_literal_type.isAdmin = true

// Error
// Can't modify the existing property value
// obj_literal_type.age = 28


let arr = [1, 2, 3, 4];
let foo = {
  name: "foo",
  contents: arr,
} as const;

// Error
// Can't add assign the property contents as a whole because array is readonly
// foo.contents = [1, 2, 3, 4]

// Works
// But we can modify property values's internal value
// Here we can add another element to arr because it's not readonly
foo.contents.push(5);

// But if it was asserted to const the above line would throw error
// let arr = [1, 2, 3, 4] as const