// Here we are saying that function will accept two parameters of array type and return a array type

function concatTwoArrays<Type> (param1: Type[], param2: Type[]): Type[] {
    return param1.concat(param2)
}


// It will show error because typescript infers the first argument as number[]
// and in the seconde argument it is string[]
// Because we are not saying that function type should be both number[] and string[]
// it is showing error
// concatTwoArrays([1, 2, 3], ["hello"])

// Here we explicitly saying that Type can be either number[] or string[]
// And the function return type resolves to (number | string)[]
concatTwoArrays<string | number>([1, 2, 3], ["hello"])