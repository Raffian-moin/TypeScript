// Javascript Function can have properties
// When we define a function with it's property in TypeScript it is called call signature

// Here is a object with a method(function) and it's property
type MyFuncObj = {
    (name: string): void;
    age: number;
}

function greetFunc(fn: MyFuncObj) {
    fn("Moin");
    console.log(fn.age);
}

// Define a function
function myFunction(param: string) {
    console.log(`my name is ${param}`);
}

// Add a property to the function
myFunction.age = 18

// greetFunc expects a parameter of type MyFuncObj
// We pass a function with age property that resembles MyFuncObj
// Notice that MyFuncObj is a callable object and in Javascript functions are object
// So we are OK to go
greetFunc(myFunction)