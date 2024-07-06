// Typescript generic function parameter accepts any time
// But if we want to limit the type of parameter that is called constraint
function functionThatReturnsOnlyStringOrArray<T extends string[] | string>(params:T): T {
    return params
}

// It will return string
console.log(functionThatReturnsOnlyStringOrArray<string>("Moin"));
// It will return string array
console.log(functionThatReturnsOnlyStringOrArray<string[]>(["Moin"]));
