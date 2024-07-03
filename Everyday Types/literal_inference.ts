// When we are using literal type anywhere typescript expect to the value of that exact value
// here obj has a property name and it's value is Moin and it is string and it's value can be
// changed in the code. so the name property value is not always "Moin"
let obj = {name: "Moin"}

// below line of code solved the error
// let obj = {name: "Moin" as "Moin"}

// It is not possible to change the value of obj.name
// It will give error
// obj.name = "Raffian"

// Here we used literal type which is Moin. We need to pass the argument as Moin
function getName(name: "Moin") {
    console.log(name);
}

// We are passing obj.name = "Moin" and it could be change above lines of code anytime
// function expects the param value to be "Moin" and we are passing "Moin"
// But we are getting error because of anytime changing of obj.name
// We need to declare obj.name as "Moin" literal
getName(obj.name)