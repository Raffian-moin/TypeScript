// Exhaustive check is when we include a default option in switch case
// and assign the switch parameter to never type
// typeScript make ensures that we included all the possible values of switch parameter in the case
// Else it will throw error
// So exhaustive check if good where we ensure that we handled all the switch case


// In the below function fruit parameter's values are "Orange" and "Mango"
// We in the switch case we handled both the values
// So default code would never execute
// Thus we can't assign string(fruit parameter) in never type
// So no error
function getFruit(fruit: "Orange" | "Mango") {
    switch(fruit) {
        case "Orange":
            console.log("Orange");
            break
        case "Mango":
            console.log("Mango");
            break
        default:
            const _exhaustiveCheck: never = fruit;
            return _exhaustiveCheck;
    }
}

getFruit("Orange")

// In the below code we didn't handled the code for Mango
// So when parameter value is Mango it would go to default and try to
// assign string("Mango") to never type
// Thus will throw error
// So to solve the error we need to handle the "Mango" in switch case
function getFruit2(fruit: "Orange" | "Mango") {
    switch(fruit) {
        case "Orange":
            console.log("Orange");
            break
        default:
            const _exhaustiveCheck: never = fruit;
            return _exhaustiveCheck;
    }
}

getFruit2("Orange")

// NOTE: We can assign never type to any (string, number etc) type but can't assign any (string, number etc) type to never type