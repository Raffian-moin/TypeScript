// Function type expression defines a function with it's parameter type, body and return type

// Function type expression
type myFunc = (arg: number) => void


function testFunction(fn: myFunc) {
    // Call the function with parameter
    fn(1);
}

// Defining a function that obeys the rules of myFunc
function myFunction(params:number): void {
    console.log(`${1} is the parameter value`);
}

// testFunction expects a function that is myFunc
// We pass myFunction and it obeys the myFunc rule
// So we are OK to go
testFunction(myFunction)